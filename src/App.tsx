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
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Initialize from URL on first render
    const path = window.location.pathname
    return path.includes('mission-crew') ? 'mission-crew' : 'home'
  })

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      setCurrentPage(path.includes('mission-crew') ? 'mission-crew' : 'home')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Update URL when page changes
  useEffect(() => {
    if (currentPage === 'mission-crew') {
      window.history.pushState(null, '', '/mission-crew')
    } else {
      window.history.pushState(null, '', '/')
    }
  }, [currentPage])

  if (currentPage === 'mission-crew') {
    return <MissionCrewPage onBack={() => setCurrentPage('home')} />
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
