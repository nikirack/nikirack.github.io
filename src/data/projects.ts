export interface Link {
  label: string
  url: string
}

export type DescBlock =
  | { type: 'text'; content: string; dim?: boolean }
  | { type: 'image'; src: string; alt?: string }

export interface Project {
  id: string
  name: string
  description: DescBlock[]
  year: number
  stack: string
  links?: Link[]
}

export const projects: Project[] = [
  {
    id: 'todo.tui',
    name: 'todo.tui',
    description: [
      { type: 'text', content: 'a terminal-based todo.txt manager with a TUI.' },
      { type: 'image', src: 'https://raw.githubusercontent.com/nikirack/todo.tui/refs/heads/main/assets/todo-example.png', alt: 'todo.tui screenshot' },
      { type: 'text', content: 'built with opentui and bun'},
      { type: 'text', content: "reads and writes standard todo.txt files, compatible with any other todo.txt tools that use the todo.txt format" },
    ],
    year: 2026,
    stack: 'bun, typescript, opentui',
    links: [
      { label: 'github', url: 'https://github.com/nikirack/todo.tui' },
      { label: 'todo.txt spec', url: 'https://github.com/todotxt/todo.txt' },
    ],
  },
  {
    id: 'wutils',
    name: 'wutils',
    description: [
      { type: 'text', content: 'a collection of unix-style CLI utilities for windows, made with rust.' },
      { type: 'text', content: 'base64 - encode/decode base64' },
      { type: 'text', content: 'sha256sum - compute sha256 hash of files or stdin' },
      { type: 'text', content: 'touch - create a file or update file timestamps' },
      { type: 'text', content: 'time - measure command execution time' },
      { type: 'text', content: 'which - locate a command in path' },
    ],
    year: 2026,
    stack: 'rust',
    links: [
      { label: 'github', url: 'https://github.com/nikirack/wutils' },
    ],
  },
]
