import Nav from './components/Nav'
import GlitchTitle from './components/GlitchTitle'
import TypingEffect from './components/TypingEffect'
import FloatingCode from './components/FloatingCode'
import TerminalBlock from './components/TerminalBlock'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <main className="landing">
        <FloatingCode />
        <div className="hero-row">
          <section className="hero">
            <p className="hero-badge">Member of Technical Staff · Salesforce</p>
            <GlitchTitle>Hi, I'm Avinash.</GlitchTitle>
            <p className="hero-sub">
              Member of Technical Staff at Salesforce. Building AI-powered, scalable systems—APIs, microservices, cloud-native.
            </p>
            <TypingEffect />
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">View work</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
              <a href="/AVINASH_SAMUDRALA_RESUME.pdf" className="btn btn-ghost" download>Download resume</a>
            </div>
          </section>
          <section className="terminal-section">
            <TerminalBlock />
          </section>
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
