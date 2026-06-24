import Nav from './components/Nav'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main id="hero" style={{
        width: '100%',
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        position: 'relative',
      }}>
        <Hero />
      </main>
      <About />
      <div style={{ scrollSnapAlign: 'start' }}>
        <Projects />
      </div>
      <Contact />
    </>
  )
}
