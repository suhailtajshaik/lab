export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid #1e293b',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <a href="https://suhailtaj.cloud" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
        S<span style={{ color: '#c9a962' }}>.</span>
      </a>

      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        Built in the open. Powered by curiosity.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <a href="https://suhailtaj.cloud" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a962'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = '#94a3b8'}
        >Portfolio</a>
        <a href="https://github.com/suhail-taj" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a962'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = '#94a3b8'}
        >GitHub</a>
        <a href="https://linkedin.com/in/suhailtaj" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a962'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = '#94a3b8'}
        >LinkedIn</a>
      </div>

      <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
        © 2026 Suhail Taj Shaik
      </p>
    </footer>
  )
}
