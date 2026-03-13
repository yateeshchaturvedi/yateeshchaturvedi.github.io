export default function EducationSection({ education }) {
  return (
    <section id="education" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">Education</p>
        <h2>Academic background</h2>
      </div>
      <div className="grid grid-2">
        {education.map((item) => (
          <article className="card tilt spotlight" key={item.institute}>
            <p className="tag">{item.period}</p>
            <h3>{item.institute}</h3>
            <p>{item.degree}</p>
            <p className="meta">{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}