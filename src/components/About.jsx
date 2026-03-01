const EXPERIENCE_START = new Date(2022, 6, 1); // July 1, 2022

function getExperienceYearsText() {
  const now = new Date();
  const months = (now.getFullYear() - EXPERIENCE_START.getFullYear()) * 12 + (now.getMonth() - EXPERIENCE_START.getMonth());
  const years = Math.floor(months / 12);
  return years >= 1 ? `${years}+ years` : '1 year';
}

export default function About() {
  const experienceYearsText = getExperienceYearsText();

  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <span className="section-label">/about</span>
        <h2 className="section-title">About me</h2>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              Member of Technical Staff at Salesforce with {experienceYearsText} of experience developing
              scalable, secure, and cloud-native software systems. I architect RESTful web services,
              implement microservices, and optimize cloud-based enterprise solutions—building
              systems that reduced failures by 40% and accelerated feature releases by 30%.
            </p>
            <p className="about-text">
              Skilled in Java, Python, and C++, with expertise in object-oriented design, RBAC,
              and distributed systems. Previously at Oracle; I deliver high-performance applications
              and enjoy mentoring engineers and driving best practices.
            </p>
            <div className="about-leadership">
              <h4 className="about-leadership-title">Leadership &amp; volunteering</h4>
              <p className="about-text">
                <strong>Technical Affairs Secretary</strong>, Students&apos; Affairs Council, NIT Calicut —
                advocated for 3000+ students, drove academic reforms and technical initiatives, and
                directed Tathva (national techfest) for 50,000+ attendees. <strong>Assistant Secretary</strong>, Club
                Mathematica — managed Infinitum (logical reasoning quiz) for 22,000+ school students,
                mentored 35+ juniors. Delivered hands-on seminars on Flutter and ReactJS for 150+ students;
                developed educational apps for Thinktac.
              </p>
            </div>
          </div>
          <div className="about-code">
            <pre><code>{`const avinash = {
  role: "Member of Technical Staff",
  company: "Salesforce",
  stack: ["Java", "Python", "React", "Spring Boot"],
  ship: true,
};`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
