import { agents, statusColors } from '../data/lab'

export default function AgentsTeam() {
  return (
    <section id="agents" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#e5e7eb', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}><span style={{ color: '#c9a962', fontWeight: 400 }}>02.</span> The Team<span style={{ height: '1px', background: '#1e293b', flex: 1, maxWidth: '300px' }} /></h2>
          <span style={{ height: '2px', width: '40px', background: '#c9a962', borderRadius: '1px' }} />
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Autonomous agents running 24/7 in the lab
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '1.5rem',
      }}>
        {agents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  )
}

function AgentCard({ agent }: { agent: typeof agents[number] }) {
  return (
    <div
      style={{
        background: 'rgba(30, 41, 59, 0.4)',
        border: '1px solid #1e293b',
        borderRadius: '12px',
        padding: '24px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#c9a962'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(201, 169, 98, 0.05)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#1e293b'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.75rem' }}>{agent.emoji}</span>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e5e7eb' }}>{agent.name}</span>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: statusColors[agent.status],
          display: 'inline-block',
          marginLeft: '0.25rem',
        }} />
        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{agent.statusLabel}</span>
      </div>

      {/* Role */}
      <div style={{ color: '#c9a962', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.75rem' }}>
        {agent.role}
      </div>

      {/* Description */}
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
        {agent.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {agent.tags.map(tag => (
          <span key={tag} style={{
            border: '1px solid #1e293b',
            background: 'transparent',
            color: '#94a3b8',
            fontSize: '0.75rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '4px',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
