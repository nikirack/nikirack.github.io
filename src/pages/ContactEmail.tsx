import { useState } from 'react'

const encoded = 'bmlrb2xhaTA4QHByb3Rvbi5tZQ=='

function toObfuscated(email: string) {
  const [name, domain] = email.split('@')
  const parts = domain.split('.')
  return `${name} [at] ${parts.join(' (dot) ')}`
}

export default function ContactEmail() {
  const [copied, setCopied] = useState(false)

  const email = atob(encoded)

  const handleClick = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <p style={{ margin: '0 0 12px', fontWeight: 500 }}>Contact me using email</p>

      <p
        onClick={handleClick}
        style={{ cursor: 'pointer', color: 'var(--accent)', margin: '0 0 4px' }}
        title="click to copy"
      >
        {'<'}{toObfuscated(email)}{'>'}
      </p>

      <p style={{ margin: '0 0 4px', color: 'var(--fg-dim)' }}>
        {copied ? '✓ copied to clipboard' : 'click to copy'}
      </p>

      <p style={{ margin: '10px 0 2px', color: 'var(--fg)' }}>
        for encrypted conversations, use my pgp key
      </p>
      <p style={{ margin: 0 }}>
        <a href="https://github.com/nikirack.gpg" target="_blank" style={{ color: 'var(--accent)' }}>
          {'<'}pgp key{'>'}
        </a>
      </p>
    </div>
  )
}
