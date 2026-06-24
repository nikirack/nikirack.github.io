const email = atob(atob('Ym1scmIyeGhhVEE0UUhCeWIzUnZiaTV0WlE9PQ=='))

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

  link: {
    color: '#000',
    textDecoration: 'none',
    transition: 'none',
  } as React.CSSProperties,
}

export default function Contact() {
  return (
    <section id="contact" style={s.section}>
      <h2 style={s.header} aria-label="Contact">
        ░▄▀▀░▄▀▄░█▄░█░▀█▀▒▄▀▄░▄▀▀░▀█▀<br />
        ░▀▄▄░▀▄▀░█▒▀█░▒█▒░█▀█░▀▄▄░▒█▒
      </h2>

      <div>
        <p style={s.line}>
          <span style={{ opacity: 0.4 }}>$</span>{' '}
          <span style={{ opacity: 0.4 }}>mail:</span>{' '}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            window.location.href = 'mailto:' + email
          }} style={s.link}>
            [send mail] {'<nikolai08@proton.me>'}
          </a>
        </p>

        <p style={{ ...s.line, marginTop: 4 }}>
          <span style={{ opacity: 0.4 }}>$</span>{' '}
          <span style={{ opacity: 0.4 }}>pgp:</span>{' '}
          <a href="https://github.com/nikirack.gpg" target="_blank" style={s.link}>
            [key]
          </a>
        </p>
      </div>
    </section>
  )
}
