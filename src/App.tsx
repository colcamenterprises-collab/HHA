const markers = [
  { label: 'Market Insight', className: 'marker marker-one' },
  { label: 'Buyer Strategy', className: 'marker marker-two' },
  { label: 'Negotiation Edge', className: 'marker marker-three' },
];

export function App() {
  return (
    <main className="page-shell">
      <div className="background-word word-left">Property</div>
      <div className="background-word word-right">Advisory.</div>
      <aside className="side-note side-note-left">Independent property advice for serious buyers.</aside>
      <aside className="side-note side-note-right">Premium buyer representation.</aside>
      <aside className="side-note side-note-footer">HHA / 2026</aside>

      <section className="hero-card" aria-label="HHA property advisory hero">
        <nav className="hero-nav" aria-label="Primary navigation">
          <a className="brand" href="#" aria-label="HHA home">HHA</a>
          <div className="nav-links">
            <a className="active" href="#">Home</a>
            <a href="#">Buying Strategy</a>
            <a href="#">Property Search</a>
            <a href="#">Advisory</a>
            <a href="#">Contact</a>
          </div>
          <div className="nav-actions" aria-label="Account actions">
            <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
            <button className="plus-button" aria-label="Start an enquiry"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></button>
          </div>
        </nav>

        <div className="scene-area">
          <div className="hero-copy">
            <h1>Strategic property buying, without the guesswork.</h1>
            <p>HHA helps buyers secure the right property with clarity, confidence and expert guidance from search to settlement.</p>
          </div>

          <div className="architecture" aria-hidden="true">
            <div className="sun-wash" />
            <div className="mountains" />
            <div className="house house-back" />
            <div className="house house-main" />
            <div className="house house-upper" />
            <div className="glass glass-left" />
            <div className="glass glass-right" />
            <div className="warm-window window-one" />
            <div className="warm-window window-two" />
            <div className="column" />
            <div className="terrace" />
            <div className="steps" />
            <div className="tree" />
          </div>

          {markers.map((marker) => (
            <div className={marker.className} key={marker.label}>
              <span className="marker-dot" />
              <span className="marker-label">{marker.label}</span>
            </div>
          ))}
          <div className="scene-fade" />
        </div>

        <div className="lower-preview">
          <h2>Shaping your next move <span className="inline-visual" aria-hidden="true" /> with precision.</h2>
          <p>We combine buyer advocacy, market intelligence and strategic negotiation to help clients purchase with confidence.</p>
          <div className="cta-row">
            <a className="primary-cta" href="#">Book a Consultation <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span></a>
            <a className="secondary-cta" href="#">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}
