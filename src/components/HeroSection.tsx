import { ArrowRight } from 'lucide-react';
import { images } from '../data/siteData';
import { Navbar } from './Navbar';

export function HeroSection() {
  return (
    <section className="hero-wrap">
      <Navbar />
      <div className="hero-shell">
        <div className="hero-img card-img">
          <img src={images.hero} alt="Premium Australian home exterior" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <span className="hero-eyebrow">Independent Buyer Advisory</span>
            <h1><span>Buy Better</span><em>With HHA</em></h1>
            <p>Premium buyer representation for people who want sharper decisions, stronger negotiation and a calmer path from search to settlement.</p>
            <a className="hero-cta" href="#strategy-call">Contact us <span><ArrowRight size={16} /></span></a>
          </div>
        </div>
        <div className="hero-cutaway" aria-label="HHA Managing Director contact">
          <img src={images.owner} alt="Lee Wilson" />
          <div>
            <strong>Lee Wilson</strong>
            <span>Managing Director</span>
          </div>
          <a href="#strategy-call">Contact</a>
        </div>
      </div>
      <div className="pills"><span>BUYER ADVOCACY</span><span>OFF-MARKET SEARCH</span><span>NEGOTIATION</span></div>
    </section>
  );
}
