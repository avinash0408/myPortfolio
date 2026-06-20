const EXPERIENCE_START = new Date(2021, 4, 1); // May 1, 2021

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
              Member of Technical Staff at Salesforce with {experienceYearsText} of experience designing
              scalable backend systems, distributed services, and cloud-native APIs. I focus on
              high-throughput platform engineering, reducing latency, and building reliable systems
              that support global enterprise workloads.
            </p>
            <p className="about-text">
              At Salesforce, I built components for High-Scale Flow and the e360 email rendering pipeline,
              reducing pipeline latency by 25% and supporting 50K+ concurrent renders daily.
              Earlier at Oracle, I led API and microservices modernization initiatives that reduced
              system failures by 40% and improved response times by 20%.
            </p>
            <div className="about-leadership">
              <h4 className="about-leadership-title">Leadership &amp; volunteering</h4>
              <p className="about-text">
                I enjoy mentoring engineers, improving development workflows, and contributing to
                high-ownership teams. Across roles, I have helped standardize engineering practices,
                coached 5+ engineers, and improved team delivery velocity by 15%.
              </p>
            </div>
          </div>
          <div className="about-code">
            <pre><code>{`const avinash = {
  role: "Member of Technical Staff",
  company: "Salesforce",
  stack: ["Java", "Spring Boot", "Python", "Kubernetes"],
  ship: true,
};`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
