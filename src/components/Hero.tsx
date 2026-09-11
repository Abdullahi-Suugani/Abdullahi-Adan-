export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow mono">Based in Mogadishu, Somalia</div>
          <h1>Building full‑stack software, from interface to infrastructure.</h1>
          <p className="hero-role">
            I'm a full stack engineer working across frontend, backend and infrastructure —
            currently focused on civic‑tech tools that help cities run better.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-solid">
              See my work
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>
        <div className="mark-frame">
          <svg
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Abstract mark of a sail formed from circuit lines"
          >
            <circle cx="160" cy="160" r="150" fill="none" stroke="#CDC3A6" strokeWidth={1} />
            <path d="M160 60 L160 260" stroke="#1C2B2E" strokeWidth={1.5} />
            <path d="M160 60 C 235 100, 235 190, 160 230 Z" fill="#B5502B" opacity={0.92} />
            <path
              d="M160 90 L195 110 M160 130 L210 148 M160 170 L200 190"
              stroke="#EDE7D6"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle cx="195" cy="110" r="4" fill="#EDE7D6" />
            <circle cx="210" cy="148" r="4" fill="#EDE7D6" />
            <circle cx="200" cy="190" r="4" fill="#EDE7D6" />
            <path d="M100 260 Q160 240 220 260" stroke="#2F6B82" strokeWidth={1.5} fill="none" />
            <circle cx="160" cy="260" r="3" fill="#2F6B82" />
          </svg>
        </div>
      </div>
    </section>
  )
}
