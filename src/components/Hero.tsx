import profileImage from "../assient/sawirprofile1 (3).png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Abdullahi Adan Abdi Mohamed </h1>
          <p className="hero-role">Full Stack Engineer</p>
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
          <img src={profileImage} alt="Abdullahi Adan Abdi Mohamed" />
          <div className="hero-image-label">
            <strong>Full Stack Engineer</strong>
            <span>ABDULLAHI ADAN ABDI MOHAMED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
