export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#" aria-label="HHA home">HHA</a>
      <div className="navlinks">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#intelligence">Intelligence</a>
        <a href="#diligence">Due Diligence</a>
        <a href="#opportunities">Opportunities</a>
      </div>
      <a className="contact-btn" href="#strategy-call">Book a Strategy Call</a>
    </nav>
  );
}
