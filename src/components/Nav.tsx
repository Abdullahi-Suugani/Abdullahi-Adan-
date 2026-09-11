import { useState } from 'react'
import { navSections } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="nav-inner">
        <div className="nav-mark">Abdullahi Aaden Abdi</div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
        <nav>
          <ul className={open ? 'open' : ''}>
            {navSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setOpen(false)}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
