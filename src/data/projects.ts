type button = { shorthand: string, url: string, shorturl: string }

export interface Project {
  name: string
  description: string
  year: string
  tags: string[]
  buttons: button[]
}


export const projects: Project[] = [
  {
    name: 'todo.tui',
    description: 'A terminal-based todo.txt manager with a TUI',
    year: '2026',
    tags: ['Typescript', 'Bun', 'OpenTUI'],
    buttons: [{ shorthand: 'gh', url: 'https://github.com/nikirack/todo.tui', shorturl: 'nikirack/todo.tui'}]
  },
]