import { useEffect, useRef, useState } from 'react'
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

const RESUME_OPTIONS = [
  { label: 'Indian Resume', href: '/resume-indian.pdf' },
  { label: 'Global Resume', href: '/resume-global.pdf' },
  { label: 'EU Nordic Resume', href: '/resume-eu-nordic.pdf' },
  { label: 'EU Resume', href: '/resume-eu.pdf' },
];

function App() {
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false)
  const resumeMenuRef = useRef(null)

  useEffect(() => {
    if (!resumeMenuOpen) return undefined

    const handlePointerDown = (event) => {
      if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target)) {
        setResumeMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setResumeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [resumeMenuOpen])

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
              Senior Software Engineer with 4+ years building cloud-native backend systems, microservices, and high-scale APIs across Salesforce and Oracle.
            </p>
            <TypingEffect />
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">View work</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
              <div className="resume-menu" ref={resumeMenuRef}>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setResumeMenuOpen((open) => !open)}
                  aria-haspopup="menu"
                  aria-expanded={resumeMenuOpen}
                >
                  Download resume
                </button>
                {resumeMenuOpen && (
                  <div className="resume-menu-list" role="menu" aria-label="Resume versions">
                  {RESUME_OPTIONS.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.href}
                      className="resume-menu-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      onClick={() => setResumeMenuOpen(false)}
                    >
                      {resume.label}
                    </a>
                  ))}
                  </div>
                )}
              </div>
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
