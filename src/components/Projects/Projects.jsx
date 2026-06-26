import Reveal from '../Reveal.jsx'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Chef Claude',
    year: '2026',
    description:
      'An AI-powered recipe generator built with React, integrating external APIs to turn user-provided ingredients into dynamic recipes. Covers hooks (useState, useEffect, useRef), conditional rendering, controlled components, async data handling, secure env-based API keys, and markdown rendering.',
    tags: ['React', 'API Integration', 'Hooks'],
    github: 'https://github.com/l0keshbabu/chef_claude',
  },
  {
    title: 'Smart Stress Monitoring System',
    year: '2025',
    description:
      'An IoT-based stress monitoring system using EMG and GSR sensors, logging real-time physiological data to Google Sheets. Isolation Forest and Autoencoders detect abnormal stress patterns, while XGBoost predicts stress-related disorders from the collected sensor data.',
    tags: ['IoT', 'Machine Learning', 'XGBoost'],
    github: 'https://github.com/l0keshbabu/smart-stress-monitoring-system',
  },
  {
    title: 'ToDo List Application',
    year: '2024',
    description:
      'A beginner-level task manager built with Java, JSP, JDBC, and MySQL — supporting registration, login, and full CRUD task management. Focused on server-side rendering, database connectivity, session management, and the DAO pattern.',
    tags: ['Java', 'JSP', 'MySQL'],
    github: 'https://github.com/l0keshbabu/todo-list-jsp',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">03 · Projects</p>
          <h2 className="section-title">Things I've built</h2>
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <Reveal delay={0.07 * i} key={project.title} className="project-card">
              <div className="project-card__head">
                <h3>{project.title}</h3>
                <span className="project-card__year">{project.year}</span>
              </div>

              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__footer">
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
