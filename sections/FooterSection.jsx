export default function FooterSection({ site }) {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {site.name}</p>
      <p className="footer-links">
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#hero">Back to top</a>
      </p>
    </footer>
  );
}