import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const NAV_BAR_HEIGHT = 56;

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = LINKS.map(({ href }) => document.querySelector(href));
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActive(LINKS[i].href);
          return;
        }
      }
      setActive('');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navContent = (
    <div className="nav-root" style={{ '--nav-height': `${NAV_BAR_HEIGHT}px` }}>
      {/* Fixed bar: always on top */}
      <header
        className={`nav-bar ${scrolled ? 'nav-bar-scrolled' : ''}`}
        style={{ height: NAV_BAR_HEIGHT }}
      >
        <a href="#" className="nav-logo" aria-label="Home">
          &lt;/&gt;
        </a>
        {/* Desktop: inline links */}
        <ul className="nav-links-desktop">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={active === href ? 'active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile: hamburger that becomes close (X) when menu open */}
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'nav-toggle-open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </header>

      {/* Mobile menu: full-screen overlay below the bar */}
      {menuOpen && (
        <div
          className="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="nav-overlay-backdrop" onClick={closeMenu} aria-hidden="true" />
          <div className="nav-overlay-content">
            <ul className="nav-links-mobile">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={active === href ? 'active' : ''} onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  return createPortal(navContent, document.body);
}
