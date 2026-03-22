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

function getPageFromPath(): Page {
  const pathname = window.location.pathname
  console.log('Current pathname:', pathname)
  console.log('Includes mission-crew:', pathname.includes('mission-crew'))
  return pathname.includes('mission-crew') ? 'mission-crew' : 'home'
}

function App() {
  const { theme, toggleTheme } = useTheme()
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath())

  useEffect(() => {
    // Check on mount
    const initialPage = getPageFromPath()
    console.log('App mounted, initialPage:', initialPage)
    setCurrentPage(initialPage)
  }, [])

  useEffect(() => {
    // Listen for browser back/forward
    const handlePopState = () => {
      const page = getPageFromPath()
      console.log('popstate - new page:', page)
      setCurrentPage(page)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Update URL when page changes
  useEffect(() => {
    const newPath = currentPage === 'mission-crew' ? '/mission-crew' : '/'
    const currentPath = window.location.pathname
    if (currentPath !== newPath) {
      console.log('Updating pathname from', currentPath, 'to', newPath)
      window.history.pushState(null, '', newPath)
    }
  }, [currentPage])

  console.log('Rendering page:', currentPage)

  if (currentPage === 'mission-crew') {
    console.log('Showing MissionCrew page')
    return <MissionCrewPage onBack={() => setCurrentPage('home')} />
  }

  console.log('Showing Home page')
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
