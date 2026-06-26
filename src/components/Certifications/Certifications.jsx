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
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2024',
    description:
      'Core cloud concepts and Azure services — architecture, compute, networking, storage, and security fundamentals.',
    points: [
      'Azure Compute: Virtual Machines, App Services, and Containers',
      'Azure Storage: Blob, File, and Disk Storage',
      'Cloud Concepts: IaaS, PaaS, SaaS, shared responsibility model',
      'Security & Identity: Azure Active Directory basics',
    ],
    link: 'https://www.credly.com/badges/61321ca1-9609-4634-add5-b7a22f0e5e05/public_url',
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
