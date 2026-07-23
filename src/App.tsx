import { useState, useEffect, useCallback, type ReactNode } from 'react'
import Panel from './components/Panel'
import Home from './pages/Home'
import About from './pages/About'
import ProjectPage from './pages/ProjectPage'
import ContactEmail from './pages/ContactEmail'
import { projects } from './data/projects'
import './App.css'

interface Item {
  label: string
  render: () => ReactNode
}

interface Section {
  title: string
  compact: boolean
  items: Item[]
}

const sections: Section[] = [
  {
    title: 'Navigation',
    compact: true,
    items: [
      { label: 'home', render: () => <Home /> },
      { label: 'about', render: () => <About /> },
    ],
  },
  {
    title: 'Projects',
    compact: false,
    items: projects.map(p => ({
      label: p.id,
      render: () => <ProjectPage project={p} />,
    })),
  },
  {
    title: 'Contact',
    compact: false,
    items: [
      { label: 'email', render: () => <ContactEmail /> },
    ],
  },
]

function App() {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [itemIdx, setItemIdx] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const { title, items } = sections[sectionIdx]
  const current = items[itemIdx]

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const maxItem = sections[sectionIdx].items.length - 1
    const maxSection = sections.length - 1

    const keyMap: Record<string, () => void> = {
      ArrowDown: () => setItemIdx(i => Math.min(i + 1, maxItem)),
      ArrowUp: () => setItemIdx(i => Math.max(i - 1, 0)),
      ArrowRight: () => { setSectionIdx(i => Math.min(i + 1, maxSection)); setItemIdx(0) },
      ArrowLeft: () => { setSectionIdx(i => Math.max(i - 1, 0)); setItemIdx(0) },
      j: () => setItemIdx(i => Math.min(i + 1, maxItem)),
      k: () => setItemIdx(i => Math.max(i - 1, 0)),
      l: () => { setSectionIdx(i => Math.min(i + 1, maxSection)); setItemIdx(0) },
      h: () => { setSectionIdx(i => Math.max(i - 1, 0)); setItemIdx(0) },
    }

    keyMap[e.key]?.()
  }, [sectionIdx])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  const selectItem = (si: number, ii: number) => {
    setSectionIdx(si); setItemIdx(ii); setMenuOpen(false)
  }

  return (
    <div className="layout">
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle navigation">
        {menuOpen ? '✕' : '☰'}
      </button>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
      <div className={`col-left${menuOpen ? ' open' : ''}`}>
        {sections.map((s, si) => (
          <Panel
            key={si}
            title={s.title}
            items={s.items.map(i => i.label)}
            active={sectionIdx === si}
            activeIdx={sectionIdx === si ? itemIdx : -1}
            compact={s.compact}
            onSelect={(ii) => selectItem(si, ii)}
          />
        ))}
      </div>
      <div className="col-right">
        <div className="panel view">
          <div className="panel-title">{title} / {current.label}</div>
          <div className="view-content">{current.render()}</div>
        </div>
      </div>
    </div>
  )
}

export default App
