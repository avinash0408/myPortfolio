const PROJECTS = [
  {
    title: 'Cloud-Native URL Shortener',
    description: 'Built a high-throughput URL shortening service with Redis caching, rate limiting, and analytics; horizontally scalable to 10K+ req/sec with Docker Compose.',
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/avinash0408/urlshortener',
  },
  {
    title: 'Real-Time Chat Platform',
    description: 'Designed a scalable real-time messaging platform with WebSockets, JWT authentication, and message persistence, supporting 500+ concurrent connections per instance.',
    tech: ['Java', 'Spring Boot', 'WebSockets', 'React', 'MongoDB', 'Docker'],
    repo: 'https://github.com/avinash0408/chat',
  },
  {
    title: 'Distributed Task Scheduler',
    description: 'Implemented a fault-tolerant distributed scheduler with retry policies, dead-letter queues, and Prometheus/Grafana monitoring for cron and event-driven jobs.',
    tech: ['Python', 'FastAPI', 'Celery', 'RabbitMQ', 'Kubernetes', 'Prometheus'],
    repo: 'https://github.com/avinash0408/task-scheduler',
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
            <a
              key={project.title}
              className="project-card"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
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
                  <span className="project-link">Open Repository ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
