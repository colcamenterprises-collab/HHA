import { ChevronDown } from 'lucide-react';
import { images } from '../data/siteData';
import { Navbar } from './Navbar';

const briefOptions = ['Family Home', 'Investment', 'Relocation'];

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
        <div className="search-panel" aria-label="Buyer strategy enquiry options">
          <h2>Start with the right buying brief</h2>
          <div className="search-row">
            {briefOptions.map((option) => <button key={option}>{option}<ChevronDown size={13} /></button>)}
            <button className="search-submit" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start</button>
          </div>
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
