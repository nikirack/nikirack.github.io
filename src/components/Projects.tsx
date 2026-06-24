import { projects } from '../data/projects'

const s = {
  section: {
    padding: '120px 48px',
    maxWidth: 1000,
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

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 6,
  } as React.CSSProperties,

  card: {
    border: '2px solid #000',
    background: '#fff',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,

  name: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: 'clamp(20px, 2vw, 28px)',
    lineHeight: 1.1,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.02em',
    marginBottom: 10,
  } as React.CSSProperties,

  prompt: {
    marginRight: 6,
  } as React.CSSProperties,

  desc: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 13,
    lineHeight: 1.6,
    color: '#000',
    fontWeight: 400,
    marginBottom: 16,
  } as React.CSSProperties,

  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  } as React.CSSProperties,

  tags: {
    display: 'flex',
    gap: 6,
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    opacity: 0.35,
  } as React.CSSProperties,

  year: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    opacity: 0.35,
  } as React.CSSProperties,

  links: {
    display: 'flex',
    gap: 16,
    borderTop: '1px solid #000',
    paddingTop: 14,
    marginTop: 'auto',
  } as React.CSSProperties,

  link: {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: 11,
    fontWeight: 700,
    color: '#000',
    textDecoration: 'none',
    letterSpacing: '0.03em',
    transition: 'none',
  } as React.CSSProperties,
}

export default function Projects() {
  return (
    <section id="projects" style={s.section}>
      <h2 style={s.header} aria-label="Projects">
        ▒█▀▄▒█▀▄░▄▀▄░░▒█▒██▀░▄▀▀░▀█▀░▄▀▀<br />
        ░█▀▒░█▀▄░▀▄▀░▀▄█░█▄▄░▀▄▄░▒█▒▒▄██
      </h2>

      <div style={s.grid}>
        {projects.map((p) => (
          <div key={p.name} style={s.card}>
            <h3 style={s.name}>
              <span style={s.prompt}>{'>'}</span>
              {p.name}
            </h3>
            <p style={s.desc}>{p.description}</p>
            <div style={s.meta}>
              <div style={s.tags}>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span style={s.year}>{p.year}</span>
            </div>
            <div style={s.links}>
              {p.buttons.map((button) => (
                <a href={button.url} target="_blank" rel="noopener noreferrer" style={s.link}>
                  $ {button.shorthand}: {button.shorturl}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
