export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head">
          <h2>Education</h2>
        </div>
        <div className="edu-wrap">
          <article className="edu-card university-card">
            <h3>Bachelor of Computer Science</h3>
            <div className="school">SIMAD University · 2024 – 2028</div>
            <div className="edu-details">
              <p>Currently in Year 3</p>
              <p>3.00 / 3.67</p>
            </div>
          </article>
          <article className="edu-card online-card">
            <h3>Coursera</h3>
            <div className="course-list">
              <div>Meta Front-End Developer</div>
              <div>Meta Back-End Developer</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
