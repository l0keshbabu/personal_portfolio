import Reveal from '../Reveal.jsx'
import './About.css'

const FACTS = [
  { label: 'Based in', value: 'Machilipatnam, India', icon: 'fa-solid fa-location-dot' },
  { label: 'Degree', value: 'B.Tech, Internet of Things', icon: 'fa-solid fa-graduation-cap' },
  { label: 'Minor', value: 'Computer Science', icon: 'fa-solid fa-laptop-code' },
  { label: 'Focus now', value: 'DSA & problem-solving', icon: 'fa-solid fa-diagram-project' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">01 · About</p>
          <h2 className="section-title">From sensors to interfaces</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.05} className="about__copy">
            <p>
              I'm an IoT graduate from Machilipatnam with a strong interest in building
              practical, user-centric technology. My curiosity about how systems work began
              in school, the first time I sat in front of a computer — and it never really
              stopped.
            </p>
            <p>
              My B.Tech in Internet of Things gave me hands-on experience with sensors,
              microcontrollers, and embedded systems, while a minor in Computer Science
              pulled me toward the web — starting with HTML and CSS, and growing into DBMS,
              SQL, and clean, responsive interfaces.
            </p>
            <p>
              Right now I'm strengthening my DSA fundamentals, improving my problem-solving
              one consistent rep at a time. Given the opportunity, I want to apply that mix
              of hardware intuition and software craft to build software and IoT solutions
              that hold up in the real world.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="about__facts">
            {FACTS.map(({ label, value, icon }) => (
              <div className="about__fact" key={label}>
                <i className={icon} aria-hidden="true" />
                <div>
                  <span className="about__fact-label">{label}</span>
                  <span className="about__fact-value">{value}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
