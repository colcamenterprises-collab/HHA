import { images } from '../data/siteData';
import { Navbar } from './Navbar';

export function HeroSection() {
  return (
    <section className="hero-wrap">
      <Navbar />
      <div className="hero-img card-img">
        <img src={images.hero} alt="Premium Australian home exterior" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <h1><span>Buy Better</span><em>With HHA</em></h1>
          <p>Independent buyer representation for people who want the right property, the right strategy and a calmer path from search to settlement.</p>
        </div>
        <div className="mini-card card-img">
          <img src={images.interior} alt="Premium residential interior" />
          <div>
            <h3>Property decisions backed by strategy</h3>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
          </div>
        </div>
      </div>
      <div className="pills"><span>BUYER ADVOCACY</span><span>OFF-MARKET SEARCH</span><span>NEGOTIATION</span></div>
    </section>
  );
}
