import { useState } from 'react';

export default function GlitchTitle({ children = 'Hello World' }) {
  const [hover, setHover] = useState(false);

  return (
    <h1
      className={`glitch-title ${hover ? 'glitch-active' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-text={children}
    >
      <span className="glitch-inner">{children}</span>
    </h1>
  );
}
