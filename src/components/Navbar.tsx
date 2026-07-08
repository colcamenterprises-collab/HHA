import { ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#" aria-label="HHA home">HHA</a>
      <div className="navlinks">
        <a href="#opportunities">Properties</a>
        <a href="#services">Services</a>
        <a href="#process">About</a>
      </div>
      <a className="contact-btn" href="#strategy-call">Contact us <span><ArrowRight size={15} /></span></a>
    </nav>
  );
}
