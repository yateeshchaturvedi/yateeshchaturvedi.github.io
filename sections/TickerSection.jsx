export default function TickerSection({ items }) {
  return (
    <section className="ticker" aria-label="Skills marquee">
      <div className="ticker-track">
        {items.map((item, idx) => <p key={`a-${idx}`}>{item}</p>)}
      </div>
      <div className="ticker-track" aria-hidden="true">
        {items.map((item, idx) => <p key={`b-${idx}`}>{item}</p>)}
      </div>
    </section>
  );
}