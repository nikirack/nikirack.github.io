const s = {
  section: {
    padding: '120px 48px',
    maxWidth: 800,
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
  } as React.CSSProperties,

  header: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: 'clamp(28px, 3vw, 48px)',
    color: '#000',
    userSelect: 'none' as const,
    marginBottom: 56,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties,

  line: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 14,
    lineHeight: 2,
    color: '#000',
    fontWeight: 700,
  } as React.CSSProperties,

  indent: {
    paddingLeft: 28,
  } as React.CSSProperties,
}

const info = [
  { key: 'name', val: 'Nikolai' },
  { key: 'age', val: '18' },
  { key: 'country', val: 'Norway' },
]

export default function About() {
  return (
    <section id="about" style={s.section}>
      <h2 style={s.header} aria-label="About">
        ▒▄▀▄░██▄░▄▀▄░█▒█░▀█▀ <br />
        ░█▀█▒█▄█░▀▄▀░▀▄█░▒█▒
      </h2>

      <div>
        <p style={s.line}>
          <span style={{ opacity: 0.4 }}>$</span>{' '}
          <span style={{ opacity: 0.4 }}>whoami</span>
        </p>
        <p style={{ ...s.line, ...s.indent, marginBottom: 20 }}>
          nikirack
        </p>

        <p style={s.line}>
          <span style={{ opacity: 0.4 }}>$</span>{' '}
          <span style={{ opacity: 0.4 }}>cat about.txt</span>
        </p>
        {info.map(({ key, val }) => (
          <p key={key} style={{ ...s.line, ...s.indent }}>
            <span style={{ opacity: 0.4 }}>{key}:</span> {val}
          </p>
        ))}
      </div>
    </section>
  )
}
