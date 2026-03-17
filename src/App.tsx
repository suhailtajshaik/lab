import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutLab from './components/AboutLab'
import AgentsTeam from './components/AgentsTeam'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <AboutLab />
      <AgentsTeam />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
