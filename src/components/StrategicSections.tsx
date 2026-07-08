import { ArrowUpRight, FileSearch, Scale, SearchCheck, ShieldCheck, TrendingUp, X } from 'lucide-react';

const intelligenceItems = [
  ['Market position', 'Compare recent sales, suburb momentum and buyer competition before committing to a price range.', TrendingUp],
  ['Property risk scan', 'Identify location, building, contract and resale issues that are easy to miss during inspection pressure.', ShieldCheck],
  ['Search discipline', 'Turn broad wish lists into a focused brief so every inspection has a reason and every offer has context.', SearchCheck],
  ['Negotiation edge', 'Prepare offer logic, auction limits and fallback moves before the selling agent controls the tempo.', Scale],
];

const diligenceItems = [
  ['01', 'Value evidence', 'Comparable sales, suburb movement and price logic before an offer is made.'],
  ['02', 'Location quality', 'Street appeal, access, future demand and risks that affect long-term resale.'],
  ['03', 'Property risk', 'Condition, renovation exposure, inspection priorities and hidden maintenance concerns.'],
  ['04', 'Purchase strategy', 'Offer position, auction ceiling, contract timing and settlement path.'],
];

const outcomeItems = [
  ['Family buyers', 'Clarified the real brief, reduced wasted inspections and built a shortlist around lifestyle, school access and long-term suitability.'],
  ['Investment buyers', 'Reviewed yield, vacancy risk, comparable sales and future resale appeal before recommending whether to proceed.'],
  ['Relocation buyers', 'Created a remote search process with suburb shortlists, inspection priorities and clear weekly decision points.'],
];

const faqs = [
  ['Is HHA a real estate agency?', 'HHA is positioned as buyer-side support. The goal is to help the buyer assess, search, negotiate and purchase with clearer strategy.'],
  ['When should a buyer speak to HHA?', 'The earlier the better. A clear brief and search strategy before inspections can save time and prevent emotional, rushed decisions.'],
  ['Can HHA help with off-market opportunities?', 'Yes. The site now positions private search and agent conversations as part of the buyer advocacy process.'],
  ['Does HHA work with investors and home buyers?', 'Yes. The service structure supports family homes, first-home buyers, investors, relocation buyers and premium property searches.'],
];

export function QuoteRevealSection() {
  return (
    <section className="quote-reveal" aria-label="HHA positioning statement">
      <p>
        Focused on <em>clarity</em>, built for better buying decisions. HHA helps buyers understand <em>value</em>, avoid costly mistakes, and move forward with confidence.
      </p>
    </section>
  );
}

export function MarketIntelligenceSection() {
  return (
    <section className="strategic-section intelligence-section" id="intelligence">
      <div className="section-kicker">HHA Intelligence</div>
      <div className="strategic-split">
        <div className="strategic-copy reveal-up">
          <h2>Better decisions before the offer.</h2>
          <p>Most buyers only see the listing. HHA helps clients understand value, pressure, risk and negotiation position before emotion takes over.</p>
        </div>
        <div className="intelligence-grid">
          {intelligenceItems.map(([title, copy, Icon], index) => {
            const IconComponent = Icon as typeof TrendingUp;
            return (
              <article className="motion-card intelligence-card" style={{ animationDelay: `${index * 90}ms` }} key={title as string}>
                <IconComponent size={24} />
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function DueDiligenceSection() {
  return (
    <section className="diligence-minimal" id="diligence">
      <div className="diligence-minimal-head reveal-up">
        <span>Buyer Due Diligence</span>
        <h2>What gets checked before commitment.</h2>
      </div>
      <div className="diligence-rows">
        {diligenceItems.map((item) => (
          <article className="diligence-row motion-card" key={item[0]}>
            <strong>{item[0]}</strong>
            <h3>{item[1]}</h3>
            <p>{item[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClientOutcomesSection() {
  return (
    <section className="strategic-section outcomes-section" id="outcomes">
      <div className="outcomes-head reveal-up">
        <div className="section-kicker">Client Outcomes</div>
        <h2>Realistic outcomes, not fake reviews.</h2>
        <p>Until the client provides verified testimonials, credibility is stronger when the site shows useful buyer scenarios instead of stock portraits and invented ratings.</p>
      </div>
      <div className="outcome-grid">
        {outcomeItems.map((item, index) => (
          <article className="motion-card outcome-card" style={{ animationDelay: `${index * 120}ms` }} key={item[0]}>
            <span>0{index + 1}</span>
            <h3>{item[0]}</h3>
            <p>{item[1]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="strategic-section faq-section">
      <div className="section-kicker">FAQ</div>
      <h2>Questions serious buyers ask first.</h2>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <details className="faq-item motion-card" key={faq[0]}>
            <summary><FileSearch size={18} />{faq[0]}</summary>
            <p>{faq[1]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="final-cta-minimal">
      <div className="final-cta-copy reveal-up">
        <span>Start with strategy</span>
        <h2>Buy with a sharper brief, stronger evidence, and less pressure.</h2>
      </div>
      <a className="premium-cta" href="#strategy-call">Book a Strategy Call <ArrowUpRight size={16} /></a>
    </section>
  );
}

export function StrategyCallModal() {
  return (
    <section className="strategy-modal" id="strategy-call" aria-label="Book a buyer strategy call">
      <a className="strategy-modal-backdrop" href="#" aria-label="Close strategy call form" />
      <div className="strategy-modal-card" role="dialog" aria-modal="true" aria-labelledby="strategy-modal-title">
        <a className="strategy-modal-close" href="#" aria-label="Close"><X size={18} /></a>
        <div className="strategy-modal-copy">
          <span>HHA Buyer Advisory</span>
          <h2 id="strategy-modal-title">Book a Buyer Strategy Call</h2>
          <p>Share what you are trying to buy, where you are looking and the level of support you need. HHA will come back with the next best step.</p>
        </div>
        <form action="mailto:hello@hhapropertyadvisory.com" method="post" encType="text/plain">
          <input name="firstName" placeholder="First Name" required />
          <input name="lastName" placeholder="Last Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone" />
          <textarea name="message" placeholder="What are you looking to buy?" required />
          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}
