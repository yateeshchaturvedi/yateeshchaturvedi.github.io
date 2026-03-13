import ContactForm from "../components/ContactForm";

export default function ContactSection({ site }) {
  return (
    <section id="contact" className="section reveal">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let us build secure and scalable cloud systems.</h2>
        <p>Reach out for DevOps consulting, cloud architecture, CI/CD optimization, and platform engineering collaborations.</p>
        <div className="links">
          <a href={`mailto:${site.email}`} aria-label="Send email to Yateesh">Email</a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">LinkedIn</a>
          <a href={site.resumePath} target="_blank" rel="noreferrer" aria-label="Open resume">Resume</a>
        </div>
        <ContactForm endpoint={site.contactEndpoint} />
      </div>
    </section>
  );
}