import { useState, useEffect } from 'react'

export default function Footer() {
  const [visitors, setVisitors] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://analytics.suhailtaj.cloud/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site: 'lab', referrer: document.referrer || null }),
    }).catch(() => {})

    fetch('https://analytics.suhailtaj.cloud/count/lab')
      .then(r => r.json())
      .then(d => setVisitors(d.count))
      .catch(() => {})
  }, [])

  return (
    <footer style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <a href="https://suhailtaj.cloud" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
        S<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        Built in the open. Powered by curiosity.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <a href="https://suhailtaj.cloud" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >Portfolio</a>
        <a href="https://github.com/suhail-taj" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >GitHub</a>
        <a href="https://linkedin.com/in/suhailtaj" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent)'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >LinkedIn</a>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
        © 2026 Suhail Taj Shaik
      </p>
      {visitors !== null && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.5rem' }}>
          👁 {visitors.toLocaleString()} {visitors === 1 ? 'visitor' : 'visitors'}
        </p>
      )}
    </footer>
  )
}
