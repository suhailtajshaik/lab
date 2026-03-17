export default function Footer() {
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

      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        © 2026 Suhail Taj Shaik
      </p>
    </footer>
  )
}
