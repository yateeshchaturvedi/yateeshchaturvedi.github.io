export default function Navbar({ name, items }) {
  return (
    <header className="topbar">
      <a href="#" className="brand">{name.toUpperCase()} / DEVOPS</a>
      <nav aria-label="Primary navigation">
        {items.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}
