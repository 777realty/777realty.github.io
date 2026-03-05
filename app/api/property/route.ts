import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const DATA_FILE = path.join(process.cwd(), 'data', 'property.json');

// Default values to show if database is empty
const DEFAULT_PROPERTY = {
    address: "24466 West Malibu Road, Malibu, CA 90265",
    link: "https://777realty.homes/properties/24466-malibu-road",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8115594017366!2d-118.6657878!3d34.0321262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e8201087cf2899%3A0xc3f124c6e91f1a56!2zMjQ0NjYgVyBNYWxpYnUgUmQsIE1hbGlidSwgQ0EgOTAyNjUsIFVTQQ!5e0!3m2!1sen!2sus!4v1709664000321!5m2!1sen!2sus"
};

function readData() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const fileContents = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(fileContents);
        }
    } catch (e) {
        console.error('Failed to read data', e);
    }
    return DEFAULT_PROPERTY;
}

function writeData(data: any) {
    try {
        // Ensure data directory exists
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error('Failed to write data', e);
    }
}

/**
 * GET: Fetches the current featured property from local JSON file.
 */
export async function GET() {
    const data = readData();
    return NextResponse.json(data);
}

/**
 * POST: Updates the featured property data.
 */
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { address, link, embedUrl, password } = body;

        // VERY SIMPLE PASSWORD PROTECTION
        if (password !== "changeme") {
            return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
        }

        if (!address || !embedUrl) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const currentData = readData();

        const updatedData = {
            address,
            embedUrl,
            link: link || currentData.link || DEFAULT_PROPERTY.link
        };

        writeData(updatedData);

        return NextResponse.json({ success: true, data: updatedData });
    } catch (error: any) {
        console.error('Save Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
