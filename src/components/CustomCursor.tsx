import { useEffect, useRef } from 'react'

const SIZE = 28
const PAD = 6

const INTERACTIVE_SELECTOR = [
  'a', 'button', '[role="button"]', 'input',
  'select', 'textarea', 'label', '[data-cursor]',
].join(', ')

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<Element | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    function onMove(e: MouseEvent) {
      if (!cursor) return
      if (targetRef.current) {
        const r = targetRef.current.getBoundingClientRect()
        const inside =
          e.clientX >= r.left && e.clientX <= r.right &&
          e.clientY >= r.top && e.clientY <= r.bottom

        if (!inside) {
          targetRef.current = null
          cursor.style.width = SIZE + 'px'
          cursor.style.height = SIZE + 'px'
          cursor.style.left = (e.clientX - SIZE / 2) + 'px'
          cursor.style.top = (e.clientY - SIZE / 2) + 'px'
        }
        return
      }

      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (!el) return
      const interactive = el.closest<HTMLElement>(INTERACTIVE_SELECTOR)

      if (interactive) {
        targetRef.current = interactive
        const r = interactive.getBoundingClientRect()
        cursor.style.width = (r.width + PAD * 2) + 'px'
        cursor.style.height = (r.height + PAD * 2) + 'px'
        cursor.style.left = (r.left - PAD) + 'px'
        cursor.style.top = (r.top - PAD) + 'px'
      } else {
        cursor.style.left = (e.clientX - SIZE / 2) + 'px'
        cursor.style.top = (e.clientY - SIZE / 2) + 'px'
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 99999,
        width: SIZE,
        height: SIZE,
        backdropFilter: 'invert(1)',
        WebkitBackdropFilter: 'invert(1)',
        transition: [
          'width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'height 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          'top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ].join(', '),
        willChange: 'width, height, left, top',
        left: -1000,
        top: -1000,
      }}
    />
  )
}
