'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [verifying, setVerifying] = useState(false);

    const [address, setAddress] = useState('');
    const [embedUrl, setEmbedUrl] = useState('');
    const [status, setStatus] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    // 1. On load, fetch the CURRENT live property data
    useEffect(() => {
        const fetchCurrent = async () => {
            try {
                const res = await fetch('/api/property');
                const data = await res.json();

                if (res.ok) {
                    setAddress(data.address || '');
                    setEmbedUrl(data.embedUrl || '');
                } else if (data.error) {
                    setStatus({ message: data.error, type: 'error' });
                }
            } catch (err) {
                console.error("Fetch failed", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCurrent();
    }, []);

    // 2. Handle Login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setVerifying(true);
        setLoginError('');

        try {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: loginPassword })
            });

            if (res.ok) {
                setIsAuthenticated(true);
            } else {
                setLoginError('Incorrect password. Please try again.');
            }
        } catch (err) {
            setLoginError('Connection error.');
        } finally {
            setVerifying(false);
        }
    };

    // 3. Handle the "Save" function
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatus({ message: '', type: '' });

        try {
            const res = await fetch('/api/property', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address, embedUrl, password: loginPassword })
            });

            const result = await res.json();

            if (res.ok) {
                setStatus({ message: 'Success! The property has been updated live.', type: 'success' });
            } else {
                setStatus({ message: result.error || 'Failed to save. Check your password!', type: 'error' });
                if (res.status === 401) {
                    setIsAuthenticated(false); // kick them out if password changed or expired
                }
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

    if (!isAuthenticated) {
        return (
            <div style={{
                maxWidth: '400px',
                margin: '100px auto',
                padding: '40px 30px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid #eee',
                textAlign: 'center'
            }}>
                <h1 style={{ marginBottom: '10px', fontSize: '28px', fontWeight: '800' }}>Admin Login</h1>
                <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>
                    Please enter the administrator password.
                </p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                            placeholder="Password..."
                            style={inputStyle}
                        />
                    </div>

                    {loginError && (
                        <div style={{ color: '#c53030', fontSize: '14px' }}>
                            {loginError}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={verifying}
                        style={{
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            padding: '16px',
                            borderRadius: '10px',
                            border: 'none',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'opacity 0.2s',
                            opacity: verifying ? 0.6 : 1
                        }}
                    >
                        {verifying ? 'Verifying...' : 'Login'}
                    </button>
                </form>
                <p style={{ marginTop: '30px' }}>
                    <a href="/alma/littlelink.html" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>← Back to site</a>
                </p>
            </div>
        );
    }

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
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Property Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => {
                            const val = e.target.value;
                            setAddress(val);
                            // MAGIC AUTO-FILL: Generate map URL when typing address
                            setEmbedUrl(`https://maps.google.com/maps?q=${encodeURIComponent(val)}&output=embed`);
                        }}
                        placeholder="e.g. 123 Malibu Dr..."
                        required
                        style={inputStyle}
                    />
                    <small style={{ color: '#888' }}>The text address that appears on the card.</small>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Google Maps URL or Embed Src</label>
                    <input
                        type="text"
                        value={embedUrl}
                        onChange={(e) => {
                            const val = e.target.value;
                            setEmbedUrl(val);

                            // MAGIC REVERSE: Extract address from standard Google Maps URLs
                            if (val.includes('google.com/maps/place/')) {
                                try {
                                    const parts = val.split('/maps/place/')[1].split('/');
                                    const rawAddress = parts[0].replace(/\+/g, ' ');
                                    setAddress(decodeURIComponent(rawAddress));
                                } catch (e) { }
                            }
                        }}
                        placeholder="Paste a Google Maps link or iframe src..."
                        required
                        style={inputStyle}
                    />
                    <small style={{ color: '#888' }}>You can paste a standard map link here to auto-fill the address above!</small>
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
