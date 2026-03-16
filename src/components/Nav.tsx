import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: 'https://suhailtaj.cloud' },
  { label: 'Lab', href: '#', active: true },
  { label: 'Projects', href: '#projects' },
  { label: 'Agents', href: '#agents' },
  { label: 'Contact', href: 'https://suhailtaj.cloud#contact' },
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
        {/* Logo */}
        <a href="https://suhailtaj.cloud" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
          S<span style={{ color: '#c9a962' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: item.active ? '#c9a962' : '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: item.active ? 600 : 400,
                position: 'relative',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (!item.active) (e.target as HTMLElement).style.color = '#e5e7eb' }}
              onMouseLeave={e => { if (!item.active) (e.target as HTMLElement).style.color = '#94a3b8' }}
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

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#e5e7eb',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          background: '#0c1222',
          borderBottom: '1px solid #1e293b',
          padding: '1rem 2rem',
          display: 'none',
        }}>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: item.active ? '#c9a962' : '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: item.active ? 600 : 400,
                borderBottom: '1px solid #1e293b',
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
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
