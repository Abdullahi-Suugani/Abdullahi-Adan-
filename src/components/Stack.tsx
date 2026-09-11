import { stackColumns } from '../data'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <h2>Full stack engineer</h2>
          <span className="section-num mono">01 — Stack</span>
        </div>
      </div>
      <div className="wrap">
        <div className="stack-grid">
          {stackColumns.map((col) => (
            <div className="stack-col" key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
