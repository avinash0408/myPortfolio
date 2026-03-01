const JOBS = [
  {
    title: 'Member of Technical Staff',
    company: 'Salesforce',
    location: 'India',
    period: 'Jan 2026 – Present',
    bullets: [
      'Building scalable, secure software systems and services.',
      'Collaborating across teams to design and deliver high-impact solutions.',
    ],
  },
  {
    title: 'Senior Applications Engineer',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'Sep 2024 – Jan 2026',
    bullets: [
      'Architect and enhance RESTful APIs with ADF-BC; integrate Business Rules framework.',
      'Refactor monolith to microservices; troubleshoot API bottlenecks.',
      'Mentor engineers and drive best practices.',
    ],
  },
  {
    title: 'Applications Engineer',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'Jul 2022 – Aug 2024',
    bullets: [
      'Led HCM workflow transition to VBCS; developed scalable ADF-BC REST APIs.',
      'Applied microservices and SOA principles; collaborated with QA, DevOps, and frontend teams.',
      'Implemented logging and monitoring for production systems.',
    ],
  },
  {
    title: 'Student Intern',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'May 2021 – Jul 2021',
    bullets: [
      'Developed microservices for EZML using Spring Boot; designed APIs with Apiary.',
      'Participated in Agile sprints and cross-team delivery.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <span className="section-label">/experience</span>
        <h2 className="section-title">Work experience</h2>
        <div className="experience-list">
          {JOBS.map((job, i) => (
            <article key={i} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{job.title}</h3>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="experience-company">
                {job.company} · {job.location}
              </p>
              <ul className="experience-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
