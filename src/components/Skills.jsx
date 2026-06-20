const SKILLS = [
  'Java',
  'Python',
  'C++',
  'JavaScript',
  'Spring Boot',
  'ReactJS',
  'NodeJS',
  'Java ADF',
  'FastAPI',
  'REST APIs',
  'Microservices',
  'SOA',
  'RBAC',
  'Oracle Cloud (OCI)',
  'Kubernetes',
  'Git',
  'Docker',
  'CI/CD',
  'Oracle DB',
  'PL/SQL',
  'MySQL',
  'Redis',
  'MongoDB',
  'PostgreSQL',
  'RabbitMQ',
  'Distributed Systems',
  'Event-Driven Architecture',
  'Linux',
  'Shell Scripting',
  'Jira',
  'GitHub',
  'Agile / Scrum',
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <span className="section-label">/skills</span>
        <h2 className="section-title">What I use</h2>
        <ul className="skills-list">
          {SKILLS.map((skill, i) => (
            <li key={skill} className="skill-tag" style={{ animationDelay: `${i * 0.03}s` }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
