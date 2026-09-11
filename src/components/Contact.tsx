import { contactLinks } from '../data'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-inner">
        <div>
          <h2>Let's build something.</h2>
          <p>
            Working on a civic project, a product idea, or just want to talk shop about
            full-stack engineering? I'm always happy to hear from other builders.
          </p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>
              <span className="main">{link.label}</span>
              <span className="sub mono">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
