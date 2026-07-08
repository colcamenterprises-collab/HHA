export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#" aria-label="HHA home">HHA</a>
      <div className="navlinks">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#opportunities">Opportunities</a>
        <a href="#testimonials">Clients</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="contact-btn" href="#contact">Book a Strategy Call</a>
    </nav>
  );
}
