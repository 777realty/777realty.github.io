'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [address, setAddress] = useState('');
    const [link, setLink] = useState('');
    const [embedUrl, setEmbedUrl] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // 1. On load, fetch the CURRENT live property data
    useEffect(() => {
        const fetchCurrent = async () => {
            try {
                const res = await fetch('/api/property');
                const data = await res.json();
                setAddress(data.address || '');
                setLink(data.link || '');
                setEmbedUrl(data.embedUrl || '');
            } catch (err) {
                console.error("Fetch failed", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCurrent();
    }, []);

    // 2. Handle the "Save" function
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatus({ message: '', type: '' });

        try {
            const res = await fetch('/api/property', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address, link, embedUrl, password })
            });

            const result = await res.json();

            if (res.ok) {
                setStatus({ message: 'Success! The property has been updated live.', type: 'success' });
                setPassword(''); // Clear password for security
            } else {
                setStatus({ message: result.error || 'Failed to save. Check your password!', type: 'error' });
            }
        } catch (err) {
            setStatus({ message: 'Connection error. Please try again.', type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
            <h2>Connecting to Database...</h2>
        </div>
    );

    return (
        <div style={{
            maxWidth: '600px',
            margin: '40px auto',
            padding: '30px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #eee'
        }}>
            <h1 style={{ marginBottom: '10px', fontSize: '28px', fontWeight: '800', textAlign: 'center' }}>Map Editor</h1>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px', textAlign: 'center' }}>
                Paste a new Google Maps Embed URL to update your featured property map.
            </p>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Google Maps Embed URL</label>
                    <input
                        type="text"
                        value={embedUrl}
                        onChange={(e) => setEmbedUrl(e.target.value)}
                        placeholder="https://www.google.com/maps/embed?..."
                        required
                        style={inputStyle}
                    />
                    <small style={{ color: '#888' }}>Copy the "src" value from the Google Maps Share/Embed iframe.</small>
                </div>

                <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '12px', border: '1px solid #ddd' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Admin Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter Admin Password..."
                        style={inputStyle}
                    />
                </div>

                {status.message && (
                    <div style={{
                        padding: '12px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        textAlign: 'center',
                        backgroundColor: status.type === 'success' ? '#e6fffa' : '#fff5f5',
                        color: status.type === 'success' ? '#2c7a7b' : '#c53030',
                        border: `1px solid ${status.type === 'success' ? '#81e6d9' : '#feb2b2'}`
                    }}>
                        {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={saving}
                    style={{
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        padding: '18px',
                        borderRadius: '10px',
                        border: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'opacity 0.2s',
                        opacity: saving ? 0.6 : 1
                    }}
                >
                    {saving ? 'Saving...' : '🚀 Update Live Map'}
                </button>
            </form>

            <p style={{ marginTop: '40px', textAlign: 'center' }}>
                <a href="/alma/littlelink.html" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>← Back to site</a>
            </p>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '2px solid #eee',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box' as 'border-box'
};
