import { motion, useReducedMotion } from 'framer-motion'
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

const copyContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
}

const copyItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  
  const container = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : copyContainer
  const item = shouldReduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : copyItem
  const portraitInitial = shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }
  const portraitTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
  const badgeInitial = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
  const badgeTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section className="hero" id="hero">
      <div className="section-inner hero__inner">
        <div className="hero__layout">
          <motion.div className="hero__copy" initial="hidden" animate="visible" variants={container}>
            <motion.p className="eyebrow" variants={item}>Hello, I'm</motion.p>

            <motion.h1 className="hero__name" variants={item}>
              Lokesh Babu
              <br />
              Katta
            </motion.h1>

            <motion.h2 className="hero__role" variants={item}>
              Aspiring Software Engineer &amp; Full Stack Developer
            </motion.h2>

            <motion.p className="hero__intro" variants={item}>
               I build clean, responsive web applications backed by solid problem-solving and
              systems thinking. I enjoy solving real-world problems through code and continuously
              improving my full-stack development skills. Currently sharpening my data structures &amp; 
              algorithms fundamentals, one problem at a time.
            </motion.p>

            <motion.div className="hero__actions" variants={item}>
              <a href="/Lokesh_Babu_Katta_Resume.pdf" className="btn btn--primary" target="_blank" rel="noopener noreferrer" download>
                <i className="fa-regular fa-file-lines"></i>
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div className="hero__socials" variants={item}>
              {SOCIALS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="hero__social">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__portrait-wrap"
            initial={portraitInitial}
            animate={{ opacity: 1, scale: 1 }}
            transition={portraitTransition}
          >
            <div className="hero__portrait-ring" />
            <img id="myimage" className="hero__portrait" src={profile} alt="Portrait of Lokesh Babu Katta" />
            <motion.span
              className="hero__badge"
              initial={badgeInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={badgeTransition}
            >
              <i className="fa-solid fa-bolt" aria-hidden="true" /> Open to work
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
