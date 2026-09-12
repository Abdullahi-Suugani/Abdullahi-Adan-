import { stackColumns } from "../data";

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="section-head">
          <h2> TECHNICAL STACK </h2>
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
  );
}
