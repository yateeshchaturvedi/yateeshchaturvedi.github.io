export default function SkillsSection({ hardSkills, softSkills, workflow }) {
  return (
    <section id="skills" className="section reveal">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Tooling, cloud, and delivery capabilities</h2>
      </div>
      <div className="service-grid">
        <article>
          <h3>Hard Skills</h3>
          <p>{hardSkills.join(" - ")}</p>
        </article>
        <article>
          <h3>Soft Skills</h3>
          <p>{softSkills.join(" - ")}</p>
        </article>
        <article>
          <h3>Workflow</h3>
          <ul className="flow-list">
            {workflow.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}