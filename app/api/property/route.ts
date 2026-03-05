import { createClient } from 'redis';
import { NextResponse } from 'next/server';

// Initialize standard Redis client for Docker/local hosting
const client = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.error('Redis Client Error', err));

let isConnected = false;
async function connectRedis() {
    if (!isConnected) {
        await client.connect();
        isConnected = true;
    }
}

const PROPERTY_KEY = 'featured_property';

// Default values to show if database is empty
const DEFAULT_PROPERTY = {
    address: "24466 West Malibu Road, Malibu, CA 90265",
    link: "https://777realty.homes/properties/24466-malibu-road",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8115594017366!2d-118.6657878!3d34.0321262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8201087cf2899%3A0xc3f124c6e91f1a56!2zMjQ0NjYgVyBNYWxpYnUgUmQsIE1hbGlidSwgQ0EgOTAyNjUsIFVTQQ!5e0!3m2!1sen!2sus!4v1709664000321!5m2!1sen!2sus"
};

/**
 * GET: Fetches the current featured property from Redis.
 */
export async function GET() {
    try {
        await connectRedis();

        const dataStr = await client.get(PROPERTY_KEY);
        const data = dataStr ? JSON.parse(dataStr) : null;
        return NextResponse.json(data || DEFAULT_PROPERTY);
    } catch (error: any) {
        console.error('Redis Error:', error);
        return NextResponse.json({
            error: error.message,
        }, { status: 500 });
    }
}

/**
 * POST: Updates the featured property data.
 */
export async function POST(req: Request) {
    try {
        await connectRedis();

        const body = await req.json();
        const { address, link, embedUrl, password } = body;

        // VERY SIMPLE PASSWORD PROTECTION
        if (password !== "changeme") {
            return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
        }

        if (!address || !embedUrl) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updatedData = {
            address,
            embedUrl,
            link: link || DEFAULT_PROPERTY.link
        };

        await client.set(PROPERTY_KEY, JSON.stringify(updatedData));

        return NextResponse.json({ success: true, data: updatedData });
    } catch (error: any) {
        console.error('Save Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
