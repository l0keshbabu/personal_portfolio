import Reveal from '../Reveal.jsx'
import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Languages & Databases',
    items: [
      { name: 'Python', icon: 'fa-brands fa-python' },
      { name: 'JavaScript', icon: 'fa-brands fa-js' },
      { name: 'MySQL', icon: 'fa-solid fa-database' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'React', icon: 'fa-brands fa-react' },
      { name: 'Angular', icon: 'fa-brands fa-angular' },
      { name: 'Django', icon: 'fa-solid fa-leaf' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'MS Office', icon: 'fa-solid fa-file-word' },
      { name: 'GitHub', icon: 'fa-brands fa-github' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">02 · Skills</p>
          <h2 className="section-title">Tech I reach for</h2>
        </Reveal>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal delay={0.06 * i} key={group.title} className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <div className="skills__items">
                {group.items.map(({ name, icon }) => (
                  <div className="skills__item" key={name}>
                    <i className={icon} aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
