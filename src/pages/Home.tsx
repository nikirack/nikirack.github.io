export default function Home() {
  return (
    <div>
      <h1 role="img" aria-label="Nikirack" className="ascii-art" style={{ 
        fontFamily: '"Courier New", Courier, monospace',
        color: 'var(--fg-h)',
        letterSpacing: 0,
        lineHeight: 1,
        userSelect: 'none', 
        margin: 0,
      }}>
          ░▒█▄░▒█░░▀░░█░▄░░▀░░█▀▀▄░█▀▀▄░█▀▄░█░▄<br />
          ░▒█▒█▒█░░█▀░█▀▄░░█▀░█▄▄▀░█▄▄█░█░░░█▀▄<br />
          ░▒█░░▀█░▀▀▀░▀░▀░▀▀▀░▀░▀▀░▀░░▀░▀▀▀░▀░▀<br />
      </h1>
      <p style={{ margin: '12px 0 8px', fontWeight: 500 }}>nikolai / nikirack</p>
      <p style={{ margin: '0 0 8px', color: 'var(--fg)' }}>18 y/o developer from norway.</p>
      <p style={{ margin: '0 0 12px', color: 'var(--fg-dim)' }}>
        use the sidebar to navigate. arrow keys / vim keys work too.
      </p>
      <p>
        <a href="https://github.com/nikirack" target="_blank" style={{ color: 'var(--accent)'}}>
          {'<github>'} 
        </a>
      </p>
    </div>
  )
}
