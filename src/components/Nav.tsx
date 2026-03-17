import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'lab',      label: 'Lab',       href: '#',                          active: true  },
  { id: 'projects', label: 'Projects',  href: '#projects',                  active: false },
  { id: 'agents',   label: 'Agents',    href: '#agents',                    active: false },
  { id: 'portfolio',label: 'Portfolio', href: 'https://suhailtaj.cloud',    active: false, gold: true },
]

interface NavProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Nav({ theme, toggleTheme }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="https://suhailtaj.cloud" style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          textDecoration: 'none',
        }}>
          S<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: item.active || item.gold ? 'var(--accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                position: 'relative',
              }}
              className="nav-link"
            >
              {item.label}
              {item.active && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent)',
                  borderRadius: '1px',
                }} />
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              background: 'transparent',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 2rem',
        }} className="mobile-menu">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '1rem',
                color: item.active || item.gold ? 'var(--accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                borderTop: item.gold ? '1px solid var(--border)' : 'none',
                marginTop: item.gold ? '0.5rem' : '0',
                paddingTop: item.gold ? '1rem' : '0.75rem',
              }}
            >
              {item.label}
            </a>
          ))}
          {/* Mobile Theme Toggle */}
          <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.5rem', paddingTop: '1rem' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--accent) !important; }
      `}</style>
    </nav>
  )
}
