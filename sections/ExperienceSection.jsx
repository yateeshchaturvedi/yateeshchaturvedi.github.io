export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Production DevOps and cloud engineering work</h2>
      </div>
      <div className="grid grid-2">
        {experiences.map((item) => (
          <article className="card tilt spotlight" key={item.role + item.company}>
            <p className="tag">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="meta-company">{item.company}</p>
            <ul>
              {item.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <p className="meta">{item.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}