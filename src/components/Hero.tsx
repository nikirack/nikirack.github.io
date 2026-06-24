const s = {
  div: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  } as React.CSSProperties,

  h1: {
    fontSize: '3.5vw',
    color: '#000',
    textTransform: 'uppercase',
    userSelect: 'none',
    textAlign: 'center',
    wordBreak: 'break-word',
  } as React.CSSProperties,

  links: {
    marginTop: 48,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
    alignItems: 'center',
  } as React.CSSProperties,

  link: {
    color: '#000',
    textDecoration: 'none',
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.03em',
    transition: 'none',
  } as React.CSSProperties,
}

const links: { label: string; url: string }[] = [
  { label: '$ gh: nikirack', url: 'https://github.com/nikirack' },
]

function Hero() {
  return (
    <div style={s.div}>
      <h1 style={s.h1}>
          ░▒█▄░▒█░░▀░░█░▄░░▀░░█▀▀▄░█▀▀▄░█▀▄░█░▄<br />
          ░▒█▒█▒█░░█▀░█▀▄░░█▀░█▄▄▀░█▄▄█░█░░░█▀▄<br />
          ░▒█░░▀█░▀▀▀░▀░▀░▀▀▀░▀░▀▀░▀░░▀░▀▀▀░▀░▀<br />
      </h1>

      <div style={s.links}>
        {links.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={s.link}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Hero
