import { useState, useEffect } from 'react';

const COMMANDS = [
  { cmd: 'npm run dev', output: '> portfolio@0.0.0 dev\n  Vite v5 — ready in 42ms\n  Local: http://localhost:5173/' },
  { cmd: 'git status', output: 'On branch main\nnothing to commit, working tree clean' },
  { cmd: 'ls -la', output: 'src/  public/  package.json  vite.config.js' },
];

export default function TerminalBlock() {
  const [index, setIndex] = useState(0);
  const [displayCmd, setDisplayCmd] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const { cmd, output } = COMMANDS[index];
    let i = 0;
    const typeCmd = setInterval(() => {
      if (i <= cmd.length) {
        setDisplayCmd(cmd.slice(0, i));
        i++;
      } else {
        clearInterval(typeCmd);
        setShowOutput(true);
      }
    }, 60);
    return () => clearInterval(typeCmd);
  }, [index]);

  useEffect(() => {
    if (!showOutput) return;
    const t = setTimeout(() => {
      setShowOutput(false);
      setIndex((i) => (i + 1) % COMMANDS.length);
    }, 3200);
    return () => clearTimeout(t);
  }, [showOutput, index]);

  const currentOutput = COMMANDS[index]?.output ?? '';

  return (
    <div className="terminal-block">
      <div className="terminal-header">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">terminal — zsh</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">$ </span>
          <span className="terminal-cmd">{displayCmd}</span>
          <span className="terminal-cursor">▋</span>
        </div>
        {showOutput && (
          <pre className="terminal-output">{currentOutput}</pre>
        )}
      </div>
    </div>
  );
}
