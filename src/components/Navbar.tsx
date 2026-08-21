import { ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#" aria-label="HHA Buyers Agent home">
        <img src="/hha-buyers-agent-logo-black.svg" alt="HHA Buyers Agent" />
      </a>
      <div className="navlinks">
        <a href="#opportunities">Properties</a>
        <a href="#services">Services</a>
        <a href="#process">About</a>
      </div>
      <a className="contact-btn" href="/free-strategy-call">Book a free call <span><ArrowRight size={15} /></span></a>
    </nav>
  );
}
