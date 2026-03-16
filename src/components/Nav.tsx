import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'lab',      label: 'Lab',       href: '#',                          active: true  },
  { id: 'projects', label: 'Projects',  href: '#projects',                  active: false },
  { id: 'agents',   label: 'Agents',    href: '#agents',                    active: false },
  { id: 'portfolio',label: 'Portfolio', href: 'https://suhailtaj.cloud',    active: false, gold: true },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(12, 18, 34, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1e293b',
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

        {/* Logo — identical to portfolio */}
        <a href="https://suhailtaj.cloud" style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#fff',
          textDecoration: 'none',
        }}>
          S<span style={{ color: '#c9a962' }}>.</span>
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
                color: item.active || item.gold ? '#c9a962' : '#94a3b8',
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
                  background: '#c9a962',
                  borderRadius: '1px',
                }} />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
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
          background: '#0c1222',
          borderBottom: '1px solid #1e293b',
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
                color: item.active || item.gold ? '#c9a962' : '#94a3b8',
                textDecoration: 'none',
                borderTop: item.gold ? '1px solid #1e293b' : 'none',
                marginTop: item.gold ? '0.5rem' : '0',
                paddingTop: item.gold ? '1rem' : '0.75rem',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: #c9a962 !important; }
      `}</style>
    </nav>
  )
}
