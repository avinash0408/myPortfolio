const SKILLS = [
  'Java',
  'Python',
  'C++',
  'JavaScript',
  'Spring Boot',
  'ReactJS',
  'NodeJS',
  'Java ADF',
  'RESTful APIs',
  'Microservices',
  'SOA',
  'RBAC',
  'Oracle Cloud (OCI)',
  'Git',
  'Docker',
  'CI/CD',
  'Oracle Database',
  'PL/SQL',
  'MySQL',
  'Linux',
  'Shell Scripting',
  'Jira',
  'GitHub',
  'Agile',
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
