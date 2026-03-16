export default function AboutLab() {
  const stats = [
    { value: '7', label: 'Active Agents' },
    { value: '3', label: 'Projects In Progress' },
    { value: '1', label: 'Model Training' },
  ]

  const focusItems = [
    { emoji: '🧙', text: 'Yoda — Self-evolving VL-JEPA agent, currently v0.4 with 161M parameters' },
    { emoji: '🎬', text: 'Hero Video Generator — Programmatic looping backgrounds with Remotion' },
    { emoji: '🧠', text: 'VL-JEPA — Training a vision-language model from research papers' },
  ]

  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left column */}
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#e5e7eb', marginBottom: '1.25rem' }}>
            What happens here
          </h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
            This lab is R&D — where autonomous agents are built, models are trained, and experiments run
            until they either ship or teach something. Every agent here runs in production. Every project
            has a purpose. Nothing is theoretical.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {stats.map(stat => (
              <div key={stat.label} style={{
                background: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid #1e293b',
                borderRadius: '8px',
                padding: '1.25rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#c9a962' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.5)',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.75rem',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#c9a962', marginBottom: '1.25rem' }}>
            Current Focus
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {focusItems.map(item => (
              <div key={item.emoji} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.25rem' }}>{item.emoji}</span>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
