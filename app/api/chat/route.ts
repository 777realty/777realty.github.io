import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: 'OpenRouter API Key not configured on Vercel' },
                { status: 500 }
            );
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://777realty.github.io/',
                'X-Title': '777 Realty AI',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'meta-llama/llama-3.2-3b-instruct:free', // Free model for testing
                messages: [
                    {
                        role: 'system',
                        content: 'You are Alma AI, a helpful real estate assistant for Alma D. Garcia at 777 Real Estate & Investments. You answer questions politely, concisely, and professionally. Always keep your replies under 3 sentences for the chat widget.'
                    },
                    ...messages
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Chat error:', error);
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
