import { ArrowRight, Check, Phone } from 'lucide-react';
import { images } from '../data/siteData';

const callBenefits = [
  'Clarify your property brief, budget and timing.',
  'Understand the current market and your buying position.',
  'Set practical search, due-diligence and negotiation next steps.',
];

const buyerTypes = [
  ['Family home buyers', 'Bring focus to a broad brief and make each inspection count.'],
  ['Property investors', 'Pressure-test value, rental appeal and long-term fit before committing.'],
  ['Relocation buyers', 'Create a clear remote or local search plan with fewer unknowns.'],
];

export function FreeStrategyCallPage() {
  return (
    <main className="strategy-page">
      <header className="strategy-page-nav">
        <a href="/" aria-label="Return to HHA Buyers Agent home"><img src="/hha-buyers-agent-logo-black.svg" alt="HHA Buyers Agent" /></a>
        <a href="tel:+61412131818" className="strategy-page-phone"><Phone size={15} /> +61 412 131 818</a>
      </header>

      <section className="strategy-hero">
        <div className="strategy-hero-copy">
          <span className="strategy-kicker">HHA Buyer Advisory</span>
          <h1>Buy with a clearer<br /><em>strategy first.</em></h1>
          <p>Book a free, no-obligation property strategy call with HHA. We will discuss what you are looking to buy, your current position and the smartest next step.</p>
          <ul className="strategy-benefit-list">
            {callBenefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}
          </ul>
          <a className="strategy-scroll-cta" href="#lead-form">Book my free strategy call <ArrowRight size={16} /></a>
        </div>
        <div className="strategy-hero-image"><img src={images.hero} alt="Contemporary Australian home exterior" /></div>

        <aside className="strategy-form-card" id="lead-form" aria-label="Free strategy call booking form">
          <span>Free strategy call</span>
          <h2>Tell us where you are at.</h2>
          <p>The HHA lead form will appear here once connected. The page, advert journey and every HHA conversion CTA are ready for that integration.</p>
          <div className="strategy-form-placeholder" aria-live="polite">
            <strong>Lead form integration pending</strong>
            <small>Embed your HHA lead-generation form in this panel.</small>
          </div>
          <a className="strategy-phone-cta" href="tel:+61412131818">Prefer to talk now? Call HHA <Phone size={15} /></a>
          <p className="strategy-privacy">Your details are used only to respond to your enquiry. No obligation, no pressure.</p>
        </aside>
      </section>

      <section className="strategy-what">
        <span className="strategy-kicker">The call</span>
        <h2>Useful advice, before<br /><em>the pressure starts.</em></h2>
        <div className="strategy-steps">
          <article><strong>01</strong><h3>Your brief</h3><p>What you want to buy, where you are looking, your budget and your timeline.</p></article>
          <article><strong>02</strong><h3>Your position</h3><p>Where you are in the buying process and the decisions that need more clarity.</p></article>
          <article><strong>03</strong><h3>Your next step</h3><p>A practical view of the support, research or strategy that will help you buy better.</p></article>
        </div>
      </section>

      <section className="strategy-buyers">
        <div><span className="strategy-kicker">Who it is for</span><h2>Built for serious<br /><em>property buyers.</em></h2></div>
        <div className="strategy-buyer-grid">
          {buyerTypes.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="strategy-final">
        <div><span>Start with strategy</span><h2>A better purchase starts<br /><em>before the offer.</em></h2></div>
        <a href="#lead-form">Book my free strategy call <ArrowRight size={16} /></a>
      </section>
    </main>
  );
}
