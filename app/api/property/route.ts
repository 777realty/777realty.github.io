import { createClient } from '@vercel/kv';
import { NextResponse } from 'next/server';

// Initialize KV client manually to be flexible with Vercel prefixes (KV_, STORAGE_, etc.)
const kv = createClient({
    url: process.env.KV_REST_API_URL || process.env.STORAGE_REST_API_URL || process.env.REDIS_REST_API_URL || '',
    token: process.env.KV_REST_API_TOKEN || process.env.STORAGE_REST_API_TOKEN || process.env.REDIS_REST_API_TOKEN || '',
});

const PROPERTY_KEY = 'featured_property';

// Default values to show if database is empty
const DEFAULT_PROPERTY = {
    address: "24466 West Malibu Road, Malibu, CA 90265",
    link: "https://777realty.homes/properties/24466-malibu-road",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8115594017366!2d-118.6657878!3d34.0321262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8201087cf2899%3A0xc3f124c6e91f1a56!2zMjQ0NjYgVyBNYWxpYnUgUmQsIE1hbGlidSwgQ0EgOTAyNjUsIFVTQQ!5e0!3m2!1sen!2sus!4v1709664000321!5m2!1sen!2sus"
};

// Remove the automatic 'kv' import and use the manual one below
// import { kv } from '@vercel/kv'; 


/**
 * GET: Fetches the current featured property from Vercel KV.
 * Returns defaults if nothing is stored yet.
 */
export async function GET() {
    try {
        // Debug: Check if env vars exist
        const hasUrl = !!process.env.KV_REST_API_URL;
        const hasToken = !!process.env.KV_REST_API_TOKEN;

        if (!hasUrl || !hasToken) {
            // Find what keys ARE available to help the user
            const availableKeys = Object.keys(process.env).filter(k => k.includes('REST_API'));
            console.error('Missing KV Vars. Available:', availableKeys);

            // If they used a custom prefix like "STORAGE", we can try to find it
            const prefix = availableKeys[0]?.split('_REST_API')[0];
            if (prefix && prefix !== 'KV') {
                return NextResponse.json({
                    error: `Environment Variable Mismatch. Your database is using prefix "${prefix}_" but the code expects "KV_". Please go to Vercel Storage -> Connect -> and make sure "Custom Prefix" is EMPTY.`,
                    debug: availableKeys
                }, { status: 500 });
            }
        }

        const data = await kv.get(PROPERTY_KEY);
        return NextResponse.json(data || DEFAULT_PROPERTY);
    } catch (error: any) {
        console.error('KV Error:', error);
        return NextResponse.json({
            error: error.message,
            missing_vars: !process.env.KV_REST_API_URL
        }, { status: 500 });
    }
}

/**
 * POST: Updates the featured property data.
 * Requires a simple password check (hardcoded for now to keep it easy).
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { address, link, embedUrl, password } = body;

        // VERY SIMPLE PASSWORD PROTECTION
        // You can change "changeme" to whatever you like.
        if (password !== "changeme") {
            return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
        }

        if (!address || !embedUrl) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updatedData = {
            address,
            embedUrl,
            link: link || DEFAULT_PROPERTY.link // Keep existing or use default
        };
        await kv.set(PROPERTY_KEY, updatedData);

        return NextResponse.json({ success: true, data: updatedData });
    } catch (error: any) {
        console.error('Save Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
