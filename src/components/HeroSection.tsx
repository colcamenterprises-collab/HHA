import { images } from '../data/siteData';
import { Navbar } from './Navbar';

export function HeroSection() {
  return (
    <section className="hero-wrap">
      <Navbar />
      <div className="hero-shell">
        <div className="hero-intro">
          <span className="hero-eyebrow">Independent Buyer Advisory</span>
          <h1><span>Buy Better</span><em>With HHA</em></h1>
          <p>Premium buyer representation for people who want sharper decisions, stronger negotiation and a calmer path from search to settlement.</p>
        </div>
        <div className="hero-img card-img">
          <img src={images.hero} alt="Premium Australian home exterior" />
        </div>
      </div>
      <div className="pills"><span>BUYER ADVOCACY</span><span>OFF-MARKET SEARCH</span><span>NEGOTIATION</span></div>
    </section>
  );
}
