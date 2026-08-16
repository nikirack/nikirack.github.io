import './Panel.css'

export default function Panel({ title, num ,items, active, compact, activeIdx, onSelect }: {
  title: string
  num: number
  items: string[]
  active?: boolean
  compact?: boolean
  activeIdx: number
  onSelect: (idx: number) => void
}) {
  return (
    <div className={`panel${active ? ' active-panel' : ''}${compact ? ' compact' : ''}`}>
      <div className="panel-title">{`[${num}] ${title}`}</div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`panel-item ${i === activeIdx ? 'active' : ''}`}
          onClick={() => onSelect(i)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
