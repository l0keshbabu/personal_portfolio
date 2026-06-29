import { motion } from 'framer-motion'
import './Hero.css'
import profile from "../../assets/profile.png"

const SOCIALS = [
  { href: 'https://github.com/l0keshbabu', icon: 'fa-brands fa-github', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/lokesh-babu-katta-121a63231/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
  },
  { href: 'https://www.instagram.com/_l0kesh____/', icon: 'fa-brands fa-instagram', label: 'Instagram' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="section-inner hero__inner">
        {/* <motion.div
          className="hero__terminal"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <span className="hero__terminal-dot" />
          <span className="hero__terminal-text">
            <span className="hero__prompt">~/lokesh</span> $ whoami
          </span>
        </motion.div> */}

        <div className="hero__layout">
          <motion.div
            className="hero__copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            <p className="eyebrow">Hello, I'm</p>
            <h1 className="hero__name">
              Lokesh Babu
              <br />
              Katta
            </h1>
            <h2 className="hero__role">Aspiring Software Engineer &amp; Full Stack Developer</h2>
            <p className="hero__intro">
              I build clean, responsive web applications backed by solid problem-solving and
              systems thinking. I enjoy solving real-world problems through code and continuously
              improving my full-stack development skills. Currently sharpening my data structures &amp; 
              algorithms fundamentals, one problem at a time.
            </p>

            <div className="hero__actions">
              <a
                href="/Lokesh_Babu_Katta_Resume.pdf"
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <i className="fa-regular fa-file-lines"></i>
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero__socials">
              {SOCIALS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="hero__social">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero__portrait-wrap"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__portrait-ring" />
            <img
              id="myimage"
              className="hero__portrait"
              src={profile}
              alt="Portrait of Lokesh Babu Katta"
            />
            <span className="hero__badge">
              <i className="fa-solid fa-bolt" aria-hidden="true" /> Open to work
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
