import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './Navbar.css'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
]

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  const underlineTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 380, damping: 32 }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
       

        <nav className="navbar__links navbar__links--desktop" aria-label="Section navigation">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
            >
              {label}
              {activeSection === id && (
                <motion.span
                  className="navbar__underline"
                  layoutId="navbar-underline"
                  transition={underlineTransition}
                />
              )}
            </a>
          ))}
        </nav>


        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`navbar__links navbar__links--mobile ${menuOpen ? 'navbar__links--mobile-open' : ''}`}
        aria-label="Mobile section navigation"
      >
        {LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={handleLinkClick}>
            {label}
          </a>
        ))}
        <a
          href="https://github.com/l0keshbabu"
          target="_blank"
          rel="noreferrer"
          onClick={handleLinkClick}
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}

export default Navbar
