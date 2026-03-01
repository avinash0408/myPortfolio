const PROJECTS = [
  {
    title: 'Viflix',
    description: 'A scalable streaming platform with Firebase authentication, modular React components, and dynamic content rendering. Cut page load time by 35%.',
    tech: ['ReactJS', 'Firebase', 'TypeScript', 'REST APIs'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Vi-Weather',
    description: 'Real-time weather forecast app using REST APIs. Responsive UI with seamless location-based data updates.',
    tech: ['ReactJS', 'REST APIs', 'TypeScript'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="section-inner">
        <span className="section-label">/work</span>
        <h2 className="section-title">Project highlights</h2>
        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-card-inner">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                  <a href={project.repo} className="project-link" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
