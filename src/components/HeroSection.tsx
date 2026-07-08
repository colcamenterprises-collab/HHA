import { ArrowUpRight } from 'lucide-react';
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
          <span className="hero-eyebrow">Independent Buyer Advisory</span>
          <h1><span>Buy Better</span><em>With HHA</em></h1>
          <p>Premium buyer representation for people who want sharper decisions, stronger negotiation and a calmer path from search to settlement.</p>
          <a className="hero-cta" href="#strategy-call">Book a Strategy Call <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="pills"><span>BUYER ADVOCACY</span><span>OFF-MARKET SEARCH</span><span>NEGOTIATION</span></div>
    </section>
  );
}
