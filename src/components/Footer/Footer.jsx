import './Footer.css'

const SOCIALS = [
  { href: 'https://github.com/l0keshbabu', icon: 'fa-brands fa-github', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/lokesh-babu-katta-121a63231/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  { href: 'https://www.instagram.com/_l0kesh____/', icon: 'fa-brands fa-instagram', label: 'Instagram' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div>
          <p className="footer__brand">Lokesh Babu Katta</p>
          <p className="footer__tagline">Aspiring Software Engineer &amp; Full Stack Developer  </p>
        </div>

        <div className="footer__socials">
          {SOCIALS.map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <i className={icon} aria-hidden="true" />
            </a>
          ))}
        </div>

        <a href="#root" className="footer__top">
          Back to top <i className="fa-solid fa-arrow-up" aria-hidden="true" />
        </a>
      </div>

      <p className="footer__copy">© {year} Lokesh Babu Katta. Built with React.</p>
    </footer>
  )
}

export default Footer
