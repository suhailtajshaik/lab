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
  
  // Use hash-based routing
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const hash = window.location.hash
    console.log('Initial hash:', hash)
    return hash === '#mission-crew' ? 'mission-crew' : 'home'
  })

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash
      console.log('Hash changed:', hash)
      const page = hash === '#mission-crew' ? 'mission-crew' : 'home'
      setCurrentPage(page)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Handle navigation
  const navigate = (page: Page) => {
    console.log('Navigating to:', page)
    if (page === 'mission-crew') {
      window.location.hash = '#mission-crew'
      setCurrentPage('mission-crew')
    } else {
      window.location.hash = ''
      setCurrentPage('home')
    }
  }

  console.log('Rendering page:', currentPage)

  if (currentPage === 'mission-crew') {
    console.log('Showing MissionCrew')
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <button
          onClick={() => navigate('home')}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            padding: '0.5rem 1rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            zIndex: 100,
            fontWeight: '500',
          }}
        >
          ← Back to Lab
        </button>
        <MissionCrewPage onBack={() => navigate('home')} />
      </div>
    )
  }

  console.log('Showing Home')
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AboutLab />
      <AgentsTeam />
      <Projects onNavigate={(page) => navigate(page as Page)} />
      <Footer />
    </div>
  )
}

export default App
