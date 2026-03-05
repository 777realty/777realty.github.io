import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { password } = body;

        // VERIFY PASSWORD
        if (password !== "changeme") {
            return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
