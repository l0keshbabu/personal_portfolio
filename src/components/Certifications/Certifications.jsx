import Reveal from '../Reveal.jsx'
import './Certifications.css'

const CERTS = [
  {
    title: 'Python Full Stack Development Training',
    issuer: 'Quality Thoughts Institute',
    year: '2025',
    description:
      'A comprehensive program focused on building end-to-end web applications, covering backend, frontend, and practical full-stack workflows.',
    points: [
      'Backend development using Python and Django',
      'Frontend development with HTML, CSS, and JavaScript',
      'Database design and CRUD operations using MySQL',
      'Understanding full-stack architecture and application flow',
    ],
    link: 'https://official-certificate-link',
  },
  {
    title: 'Wipro TalentNext — Java Full Stack Development',
    issuer: 'Wipro TalentNext',
    year: '2024',
    description:
      'Foundational certification in full-stack development, focused on core Java, basic backend development, and frontend fundamentals.',
    points: [
      'Core Java concepts including OOP and exception handling',
      'Introduction to backend development using Java and JDBC',
      'Basics of HTML, CSS, and JavaScript for frontend development',
      'Application flow and database connectivity using MySQL',
    ],
    link: 'https://drive.google.com/file/d/1qy_LbLAPemi85nzFq307HQX9eXpG46IN/view?usp=drive_link',
  },
{
  title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
  issuer: 'Oracle University',
  year: '2025',
  description:
  'Foundational certification covering AI concepts, Generative AI, Large Language Models (LLMs), and Oracle Cloud AI services.',
  points: [
    'Fundamentals of Artificial Intelligence and Machine Learning',
    'Generative AI concepts, Large Language Models (LLMs), and Prompt Engineering',
    'Oracle Cloud Infrastructure (OCI) AI services and use cases',
    'Responsible AI principles and practical AI applications',
  ],
  link: 'https://drive.google.com/file/d/1thz6BOjQTZhenypA3CRQmtmYPGyMZYlY/view',
},
]

function Certifications() {
  return (
    <section id="certs" className="section certs">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">04 · Certifications</p>
          <h2 className="section-title">Credentials &amp; training</h2>
        </Reveal>

        <div className="certs__grid">
          {CERTS.map((cert, i) => (
            <Reveal delay={0.07 * i} key={cert.title}>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                aria-label={`View certificate: ${cert.title}`}
              >
                <div className="cert-card__head">
                  <div>
                    <h3>{cert.title}</h3>
                    <span className="cert-card__issuer">{cert.issuer}</span>
                  </div>
                  <span className="cert-card__year">{cert.year}</span>
                </div>

                <p className="cert-card__desc">{cert.description}</p>

                <ul className="cert-card__points">
                  {cert.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <span className="cert-card__cta">
                  View certificate <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
