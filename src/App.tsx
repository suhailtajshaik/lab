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
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize from URL on mount
  useEffect(() => {
    console.log('Initializing app, pathname:', window.location.pathname)
    const path = window.location.pathname
    if (path.includes('mission-crew')) {
      console.log('Setting to mission-crew')
      setCurrentPage('mission-crew')
    } else {
      console.log('Setting to home')
      setCurrentPage('home')
    }
    setIsInitialized(true)
  }, [])

  // Handle browser back/forward
  useEffect(() => {
    if (!isInitialized) return

    const handlePopState = () => {
      console.log('popstate event, pathname:', window.location.pathname)
      const path = window.location.pathname
      if (path.includes('mission-crew')) {
        setCurrentPage('mission-crew')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isInitialized])

  // Update URL when page changes
  useEffect(() => {
    if (!isInitialized) return

    if (currentPage === 'mission-crew') {
      console.log('Pushing to /mission-crew')
      window.history.pushState(null, '', '/mission-crew')
    } else {
      console.log('Pushing to /')
      window.history.pushState(null, '', '/')
    }
  }, [currentPage, isInitialized])

  if (!isInitialized) {
    return <div>Loading...</div>
  }

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
