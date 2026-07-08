const reasons = [
  ['01', 'Buyer-side position', 'Advice is structured around the buyer’s goals, timing, budget and risk profile — not the seller’s campaign.'],
  ['02', 'Evidence before emotion', 'Market value, comparable sales and property risk are reviewed before the buyer is pushed into a decision.'],
  ['03', 'Negotiation discipline', 'Offer strategy, auction limits and fallback options are set before pressure rises.'],
];

export function WhySection() {
  return (
    <section className="premium-why section-white">
      <div className="premium-why-head reveal-up">
        <span>Why HHA</span>
        <h2>Premium advice should feel calm, sharp and useful.</h2>
      </div>
      <div className="premium-why-grid">
        {reasons.map((reason) => (
          <article className="premium-why-card motion-card" key={reason[0]}>
            <span>{reason[0]}</span>
            <h3>{reason[1]}</h3>
            <p>{reason[2]}</p>
          </article>
        ))}
      </div>
      <a className="premium-why-link" href="#strategy-call">Start your brief</a>
    </section>
  );
}
