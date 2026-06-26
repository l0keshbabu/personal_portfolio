import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* <a href="#root" className="navbar__brand" aria-label="Back to top">
          <span className="navbar__brand-mark">LBK</span>
          <span className="navbar__brand-text">Lokesh Babu Katta</span>
        </a> */}

        <nav className="navbar__links navbar__links--desktop" aria-label="Section navigation">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* <a
          className="navbar__cta navbar__cta--desktop"
          href="https://github.com/l0keshbabu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github" aria-hidden="true" />
          GitHub
        </a> */}

        <button
          className="navbar__toggle"
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
