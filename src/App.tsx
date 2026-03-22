import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutLab from './components/AboutLab'
import AgentsTeam from './components/AgentsTeam'
import Projects from './components/Projects'
import Footer from './components/Footer'
import MissionCrewPage from './pages/MissionCrew'

type Page = 'home' | 'mission-crew'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [currentPage, setCurrentPage] = useState<Page>('home')

  // Initialize page from URL
  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('/mission-crew')) {
      setCurrentPage('mission-crew')
    } else {
      setCurrentPage('home')
    }
  }, [])

  // Update URL when page changes
  useEffect(() => {
    if (currentPage === 'mission-crew') {
      window.history.pushState(null, '', '/mission-crew')
    } else {
      window.history.pushState(null, '', '/')
    }
  }, [currentPage])

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path.includes('/mission-crew')) {
        setCurrentPage('mission-crew')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (currentPage === 'mission-crew') {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            padding: '0.5rem 1rem',
            background: 'var(--accent)',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            zIndex: 100,
          }}
        >
          ← Back to Lab
        </button>
        <MissionCrewPage />
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AboutLab />
      <AgentsTeam />
      <Projects onNavigate={(page) => setCurrentPage(page as Page)} />
      <Footer />
    </div>
  )
}

export default App
