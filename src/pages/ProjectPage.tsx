import type { Project } from '../data/projects'

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <div>
      <p style={{ margin: '0 0 10px', fontWeight: 500 }}>{project.name}</p>

      {project.description.map((block, i) =>
        block.type === 'image' ? (
          <img
            key={i}
            src={block.src}
            alt={block.alt ?? ''}
            style={{ maxWidth: '100%', margin: '8px 0', display: 'block' }}
          />
        ) : (
          <p key={i} style={{ margin: '0 0 4px', color: block.dim ? 'var(--fg-dim)' : 'var(--fg)' }}>{block.content}</p>
        )
      )}
      <p style={{ margin: '10px 0 4px', color: 'var(--fg-dim)' }}>
        year: {project.year}
      </p>
      <p style={{ margin: '10px 0 4px', color: 'var(--fg-dim)' }}>
        stack: {project.stack}
      </p>

      {project.links && project.links.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 8, marginTop: 10 }}>
          {project.links.map((link, i) => (
            <p key={i} style={{ margin: '2px 0' }}>
              <a href={link.url} target="_blank" style={{ color: 'var(--accent)' }}>{'<'}{link.label}{'>'}</a>
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
