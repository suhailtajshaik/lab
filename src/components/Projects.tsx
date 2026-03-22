import { ExternalLink } from 'lucide-react'
import { projects } from '../data/lab'

const statusConfig = {
  live:    { label: 'LIVE',        bg: 'rgba(34, 197, 94, 0.12)',  color: '#22c55e', border: 'rgba(34, 197, 94, 0.3)'  },
  active:  { label: 'IN PROGRESS', bg: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' },
  planned: { label: 'PLANNED',     bg: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
}

function ProjectCard({ project, onNavigate }: { project: typeof projects[0], onNavigate?: (page: string) => void }) {
  const st = statusConfig[project.status]
  
  // Check if this is an internal route
  const isInternal = project.url?.startsWith('/')
  const CardTag = project.url && !isInternal ? 'a' : 'button'
  
  const cardProps = project.url && !isInternal 
    ? { href: project.url, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { type: 'button' as const }

  const handleClick = (e: React.MouseEvent) => {
    if (isInternal && project.url && onNavigate) {
      e.preventDefault()
      onNavigate(project.url)
    }
  }

  return (
    <CardTag
      key={project.name}
      {...cardProps}
      onClick={handleClick}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '24px',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        textDecoration: 'none',
        display: 'block',
        cursor: project.url ? 'pointer' : 'default',
        position: 'relative',
        color: 'inherit',
      }}
      className="project-card"
      onMouseEnter={e => {
        const icon = (e.currentTarget as HTMLElement).querySelector('.ext-icon') as HTMLElement
        if (icon && !isInternal) icon.style.color = 'var(--accent)'
      }}
      onMouseLeave={e => {
        const icon = (e.currentTarget as HTMLElement).querySelector('.ext-icon') as HTMLElement
        if (icon && !isInternal) icon.style.color = 'var(--text-secondary)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          padding: '0.25rem 0.625rem',
          borderRadius: '4px',
          background: st.bg,
          color: st.color,
          border: `1px solid ${st.border}`,
        }}>
          {st.label}
        </span>
        {project.url && !isInternal && (
          <ExternalLink size={16} className="ext-icon" style={{ color: 'var(--text-secondary)', flexShrink: 0, transition: 'color 0.2s' }} />
        )}
      </div>

      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
        {project.name}
      </h3>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            border: '1px solid var(--border)',
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '0.75rem',
            padding: '0.25rem 0.625rem',
            borderRadius: '4px',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </CardTag>
  )
}

export default function Projects({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const liveProjects = projects.filter(p => p.status === 'live')
  const inProgressProjects = projects.filter(p => p.status === 'active')

  return (
    <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>

      {/* Live Projects */}
      {liveProjects.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 400 }}>03.</span>
            Live Projects
            <span style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '300px' }} />
            <span style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              background: 'rgba(34,197,94,0.12)', color: '#22c55e',
              border: '1px solid rgba(34,197,94,0.3)',
              padding: '0.3rem 0.75rem', borderRadius: '4px',
            }}>
              {liveProjects.length} LIVE
            </span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {liveProjects.map(p => <ProjectCard key={p.name} project={p} onNavigate={onNavigate} />)}
          </div>
        </div>
      )}

      {/* In Progress */}
      {inProgressProjects.length > 0 && (
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 400 }}>—</span>
            In Progress
            <span style={{ height: '1px', background: 'var(--border)', flex: 1, maxWidth: '200px' }} />
            <span style={{
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
              background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.3rem 0.75rem', borderRadius: '4px',
            }}>
              {inProgressProjects.length} IN PROGRESS
            </span>
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {inProgressProjects.map(p => <ProjectCard key={p.name} project={p} onNavigate={onNavigate} />)}
          </div>
        </div>
      )}

    </section>
  )
}
