import { useState, useEffect } from 'react';

const LINES = [
  'const role = "Member of Technical Staff";',
  'company: "Salesforce" · stack: ["Java", "React", "Spring Boot"]',
  '// Scalable APIs · Microservices · Clean code',
];

const TYPING_SPEED = 70;
const PAUSE_AT_END = 1800;
const DELETE_SPEED = 35;
const PAUSE_BETWEEN_LINES = 400;

export default function TypingEffect() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const line = LINES[lineIndex];
    let timeout = TYPING_SPEED;
    if (!isDeleting && charIndex === line.length) timeout = PAUSE_AT_END;
    else if (isDeleting && charIndex > 0) timeout = DELETE_SPEED;
    else if (isDeleting && charIndex === 0) timeout = PAUSE_BETWEEN_LINES;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < line.length) {
          setDisplayText(line.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
          setDisplayText(line.slice(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setLineIndex((i) => (i + 1) % LINES.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, isDeleting]);

  return (
    <div className="typing-effect">
      <span className="typing-prompt">{'> '}</span>
      <span className="typing-text">{displayText}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}
