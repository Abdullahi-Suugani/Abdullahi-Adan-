import { educationStats } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <h2>Education</h2>
          <span className="section-num mono">04 — Education</span>
        </div>
        <div className="edu-wrap">
          <div className="edu-text">
            <h3>Bachelor of Computer Science</h3>
            <div className="school">SIMAD University · 2024 – 2028</div>
            <ul className="edu-list">
              <li>Currently in Year 3</li>
              <li>Maintaining a 3.67 / 4.00 GPA</li>
            </ul>
          </div>
          <div className="id-card">
            <div className="id-title">Bachelor of Computer Science</div>
            <div className="id-sub">SIMAD University · 2024 – 2028</div>
            <div className="id-stats">
              {educationStats.map((stat) => (
                <div key={stat.label}>
                  {stat.label}
                  <br />
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
