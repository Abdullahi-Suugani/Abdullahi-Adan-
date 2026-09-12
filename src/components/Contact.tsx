import { contactLinks } from "../data";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <div>
          <h2>Let's build something.</h2>
          <p>
            I’m interested in building practical solutions, solving real-world
            problems, and turning ideas into useful products. I’m always open to
            new projects, collaborations, internships, and opportunities to
            learn and create.{" "}
          </p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              <span className="main">{link.label}</span>
              <span className="sub mono">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
