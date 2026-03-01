const LINKS = [
  { href: 'mailto:avinash.08jan2001@gmail.com', label: 'Email', icon: '→' },
  { href: 'https://www.linkedin.com/in/avinash-samudrala-4583511b3/', label: 'LinkedIn', icon: '↗' },
  { href: 'https://github.com/avinash0408', label: 'GitHub', icon: '↗' },
  { href: '#', label: 'Portfolio', icon: '↗' },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-inner">
        <span className="section-label">/contact</span>
        <h2 className="section-title">Get in touch</h2>
        <p className="contact-text">
          Open to new opportunities and collaborative projects. Say hi.
        </p>
        <p className="contact-phone">+91-6303520089</p>
        <div className="contact-links">
          {LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="contact-link"
              target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="contact-link-label">{label}</span>
              <span className="contact-link-icon">{icon}</span>
            </a>
          ))}
        </div>
        <p className="contact-mono">npm run say-hi</p>
      </div>
    </section>
  );
}
