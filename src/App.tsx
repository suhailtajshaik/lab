import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutLab from './components/AboutLab'
import AgentsTeam from './components/AgentsTeam'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: '#0c1222', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <Nav />
      <Hero />
      <AboutLab />
      <AgentsTeam />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
