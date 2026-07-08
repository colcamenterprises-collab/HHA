import { ArrowUpRight, BadgeCheck, FileSearch, Scale, SearchCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const intelligenceItems = [
  ['Market position', 'Compare recent sales, suburb momentum and buyer competition before committing to a price range.', TrendingUp],
  ['Property risk scan', 'Identify location, building, contract and resale issues that are easy to miss during inspection pressure.', ShieldCheck],
  ['Search discipline', 'Turn broad wish lists into a focused brief so every inspection has a reason and every offer has context.', SearchCheck],
  ['Negotiation edge', 'Prepare offer logic, auction limits and fallback moves before the selling agent controls the tempo.', Scale],
];

const diligenceItems = [
  'Comparable sales evidence',
  'Street and location quality',
  'Renovation and maintenance risk',
  'Rental and resale appeal',
  'Contract and settlement timing',
  'Auction or offer strategy',
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
    <section className="strategic-section diligence-section">
      <div className="diligence-panel motion-card">
        <div>
          <div className="section-kicker">Buyer Due Diligence</div>
          <h2>What gets checked before you buy.</h2>
          <p>HHA should feel like a decision filter, not just another property website. This section explains the practical work behind the advice.</p>
        </div>
        <div className="diligence-list">
          {diligenceItems.map((item) => <span key={item}><BadgeCheck size={17} />{item}</span>)}
        </div>
      </div>
    </section>
  );
}

export function ClientOutcomesSection() {
  return (
    <section className="strategic-section outcomes-section" id="outcomes">
      <div className="outcomes-head reveal-up">
        <div className="section-kicker">Client Outcomes</div>
        <h2>Proof without fake review cards.</h2>
        <p>Until the client provides real testimonials, this section keeps credibility high by showing realistic buyer scenarios instead of stock portraits and invented ratings.</p>
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
    <section className="final-cta">
      <div className="final-cta-inner motion-card">
        <div>
          <span>Ready to buy with less guesswork?</span>
          <h2>Start with a sharper brief and a clearer acquisition strategy.</h2>
        </div>
        <a href="#contact">Book a Strategy Call <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
