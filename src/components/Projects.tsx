import { projects } from '../data/lab'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#e5e7eb' }}>Active Projects</h2>
          <span style={{ height: '2px', width: '40px', background: '#c9a962', borderRadius: '1px' }} />
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map(project => (
          <div key={project.name} style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '24px',
            transition: 'border-color 0.2s',
          }}>
            {/* Status badge */}
            <span style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              padding: '0.25rem 0.625rem',
              borderRadius: '4px',
              marginBottom: '0.75rem',
              ...(project.status === 'active'
                ? { background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)' }
                : { background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }
              ),
            }}>
              {project.status === 'active' ? 'IN PROGRESS' : 'PLANNED'}
            </span>

            {/* Name */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e5e7eb', marginBottom: '0.5rem' }}>
              {project.name}
            </h3>

            {/* Description */}
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              {project.description}
            </p>

            {/* Stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  border: '1px solid #1e293b',
                  background: 'transparent',
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '4px',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
