export default function AboutSection({ site }) {
  return (
    <section id="about" className="section reveal">
      <div className="about-wrap">
        <div>
          <p className="eyebrow">About</p>
          <h2>Engineering with automation, security, and reliability first.</h2>
          <p>I build and operate cloud-native platforms with a focus on automation, resilient delivery, and secure-by-default infrastructure. I collaborate closely with teams to align operations with business outcomes.</p>
        </div>
        <div className="timeline">
          <div>
            <p className="year">Location</p>
            <p>{site.location}</p>
          </div>
          <div>
            <p className="year">Email</p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div>
            <p className="year">Availability</p>
            <p>Open to DevOps and Cloud Engineering opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}