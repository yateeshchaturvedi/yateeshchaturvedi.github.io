export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">Certifications</p>
        <h2>Industry certifications and training</h2>
      </div>
      <div className="grid grid-2">
        {certifications.map((cert) => (
          <article className="card" key={cert}>
            <p className="tag">Certification</p>
            <h3>{cert}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}