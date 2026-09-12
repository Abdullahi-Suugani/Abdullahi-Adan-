import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="tl-item" key={item.role}>
              <div className="tl-date">{item.date}</div>
              <div>
                <div className="tl-role">{item.role}</div>
                <div className="tl-org">{item.org}</div>
                <div className="tl-desc">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
