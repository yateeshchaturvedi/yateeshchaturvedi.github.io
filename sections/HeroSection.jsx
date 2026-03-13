import Image from "next/image";

export default function HeroSection({ site }) {
  return (
    <section className="hero reveal" id="hero">
      <p className="eyebrow">Portfolio - 2026 - India</p>
      <h1>Cloud platforms with <span className="accent-text">strong reliability</span> and fast delivery.</h1>
      <p className="subtext">I am Yateesh Chaturvedi, a DevOps Engineer with expertise in cloud infrastructure, automation, CI/CD pipelines, and resilient system design across Azure and AWS environments.</p>
      <div className="hero-cta">
        <a className="btn btn-primary magnetic" href="#experience">Explore Experience</a>
        <a className="btn btn-ghost" href="#contact">Connect</a>
      </div>
      <div className="hero-panel">
        <p className="hero-panel-title">Current Focus</p>
        <p>AKS migrations, Terraform-driven infrastructure, secure CI/CD automation, and observability-first operations.</p>
        <p className="hero-panel-links">
          <a href={site.resumePath} target="_blank" rel="noreferrer">Open Resume</a>
        </p>
        <Image className="hero-avatar" src="/profilepic.jpg" alt="Yateesh Chaturvedi profile" width={96} height={96} />
        <ul className="stats">
          <li><span>4+</span> years in DevOps</li>
          <li><span>80%</span> manual effort reduction via IaC</li>
          <li><span>23%</span> monitoring improvement impact</li>
        </ul>
      </div>
    </section>
  );
}
