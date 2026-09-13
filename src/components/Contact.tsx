import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-content">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="contact-label">CONTACT</span>
            <h2>Let’s build something meaningful.</h2>
            <p>
              I’m interested in building practical solutions, solving real-world problems, and turning ideas into useful software. I’m open to internships, collaborations, hackathons, and opportunities to learn and build.
            </p>
            <div className="contact-links">
              <a className="email-link" href="mailto:apdulaahiaadam@gmail.com">Email Me</a>
              <a href="https://github.com/Abdullahi-Suugani" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abdullahi-aden-abdi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required />
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={5} required />
            <button type="submit">Send Message</button>
            {submitted && <p className="contact-success" role="status">Message ready to send.</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
