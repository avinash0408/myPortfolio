const JOBS = [
  {
    title: 'Member of Technical Staff',
    company: 'Salesforce',
    location: 'Hyderabad, India',
    period: 'Jan 2026 – Present',
    bullets: [
      'Delivered Content Variants (in-app translation) enabling locale-driven content rendering via profile-based language selection across Salesforce Marketing channels, supporting 45+ locales for global customers.',
      'Built an in-browser HTML code editor enabling marketing customers to hand-author and fully customize landing pages and web forms with raw HTML; shipped syntax highlighting, in-editor code search, dynamic personalization tokens with inline editing, custom form embedding within landing pages, and pre-publish validation to catch errors before deployment.',
      'Developed Google reCAPTCHA (bot/spam protection) and Google Analytics integrations for customer-facing marketing websites, including REST APIs for installation and removal, backend services for configuration and lifecycle management, and a reusable rendering hook that automatically injects required scripts into published pages.',
    ],
  },
  {
    title: 'Senior Applications Engineer',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'Sep 2024 – Jan 2026',
    bullets: [
      'Architected and enhanced RESTful APIs for Oracle Cloud HCM, reducing response times by 20% while supporting 100K+ monthly transactions.',
      'Refactored monolithic services into microservices and SOA-aligned components, reducing failures by 40% and improving uptime to 99.9%.',
      'Integrated Business Rules framework for runtime validation customization and mentored 5+ engineers, improving team delivery velocity by 15%.',
    ],
  },
  {
    title: 'Applications Engineer',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'Jul 2022 – Aug 2024',
    bullets: [
      'Led migration of HCM workflows from legacy Java UI framework to Oracle VBCS low-code platform, reducing feature release time by 30%.',
      'Developed scalable REST APIs for Oracle GHR modules processing 100K+ transactions monthly across global clients.',
      'Implemented logging and monitoring mechanisms that reduced bug resolution time by 35%.',
    ],
  },
  {
    title: 'Student Intern',
    company: 'Oracle Corporation',
    location: 'Hyderabad, India',
    period: 'May 2021 – Jul 2021',
    bullets: [
      'Developed microservices for the EZML platform on OCI using Spring Boot, reducing manual ML setup effort by 60%.',
      'Designed APIs with Apiary and built reusable OOP modules across multiple OCI components.',
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
