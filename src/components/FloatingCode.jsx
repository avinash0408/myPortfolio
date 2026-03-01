import { useMemo } from 'react';

const SNIPPETS = [
  ['const', 'build', '=', '()', '=>', '{', '...', '};'],
  ['<Component', 'prop', '=', '{true}', '/>'],
  ['async', 'function', 'ship', '()', '{', '}', 'await'],
  ['import', '{', 'useState', '}', 'from', "'react'"],
  ['npm', 'run', 'dev'],
  ['git', 'commit', '-m', "'wip'"],
  ['function', 'solve', '(', 'x', ')', '{', 'return', 'x', '+', '1', ';}'],
  ['export', 'default', 'App', ';'],
  ['useEffect', '(', '(', ')', '=>', '{', '}', ',', '[', ']', ')'],
  ['console', '.', 'log', '(', "'hello'", ')'],
];

function CodeSnippet({ tokens, delay, duration, left }) {
  return (
    <div
      className="floating-snippet"
      style={{
        '--delay': `${delay}s`,
        '--duration': `${duration}s`,
        left: `${left}%`,
      }}
    >
      {tokens.map((token, i) => (
        <span key={i} className={`token token-${i % 4}`}>
          {token}
        </span>
      ))}
    </div>
  );
}

export default function FloatingCode() {
  const items = useMemo(
    () =>
      SNIPPETS.map((tokens, i) => ({
        tokens,
        delay: Math.random() * 8,
        duration: 18 + Math.random() * 12,
        left: Math.random() * 85,
      })),
    []
  );

  return (
    <div className="floating-code" aria-hidden="true">
      {items.map((item, i) => (
        <CodeSnippet key={i} {...item} />
      ))}
    </div>
  );
}
