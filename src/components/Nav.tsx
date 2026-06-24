const BAR_HEIGHT = 48

const linkBase: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'lowercase' as const,
  padding: '2px 0',
  transition: 'none',
}

const items: { label: string; section: string }[] = [
  { label: '~', section: 'hero' },
  { label: 'about', section: 'about' },
  { label: 'projects', section: 'projects' },
  { label: 'contact', section: 'contact' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: BAR_HEIGHT,
      background: '#000',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      userSelect: 'none',
    }}>
      <span style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 11,
        color: '#fff',
        letterSpacing: '0.03em',
      }}>
        nikirack@dev:~$
      </span>

      <div style={{
        display: 'flex',
        gap: 18,
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: 10,
          color: '#fff',
        }}>
          │
        </span>
        {items.map(({ label, section }) => (
          <a
            key={label}
            href={'#' + section}
            onClick={(e) => {
              e.preventDefault()
              if (section) scrollTo(section)
            }}
            style={linkBase}
          >
            [{label}]
          </a>
        ))}
      </div>
    </nav>
  )
}
