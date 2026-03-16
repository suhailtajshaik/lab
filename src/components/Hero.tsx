export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#0c1222',
      backgroundImage: `
        linear-gradient(rgba(201, 169, 98, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201, 169, 98, 0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 169, 98, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
        <span style={{
          display: 'inline-block',
          color: '#c9a962',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          border: '1px solid rgba(201, 169, 98, 0.3)',
          background: 'rgba(201, 169, 98, 0.1)',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          marginBottom: '1.5rem',
        }}>
          RESEARCH & EXPERIMENTS
        </span>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: '1.25rem',
        }}>
          The Lab
        </h1>

        <p style={{
          color: '#94a3b8',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
        }}>
          Where ideas get tested, agents get built, and the future gets prototyped.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#agents" style={{
            background: '#c9a962',
            color: '#0c1222',
            padding: '0.875rem 1.75rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'opacity 0.2s',
          }}>
            Meet The Team
          </a>
          <a href="https://suhailtaj.cloud" style={{
            border: '1px solid #c9a962',
            color: '#c9a962',
            padding: '0.875rem 1.75rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: 'transparent',
            transition: 'background 0.2s',
          }}>
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
