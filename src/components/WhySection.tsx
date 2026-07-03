import { BadgeCheck, Handshake, Home } from 'lucide-react';

export function WhySection() {
  return (
    <section className="why section-white">
      <h2>Why Choose<br /><em>HHA?</em></h2>
      <p>Getting property right is a journey. Our advisors are here to help you buy better and move with confidence.</p>
      <div className="why-row">
        <article><div className="icon"><Home size={28} /></div><h3>Buyer-first advice</h3><p>We act for you with clear research and objective property guidance.</p></article>
        <article><div className="icon"><Handshake size={28} /></div><h3>Competitive negotiation</h3><p>Strong tactics, no hidden bias and better transparency across offers.</p></article>
        <article><div className="icon"><BadgeCheck size={28} /></div><h3>Low-stress process</h3><p>We simplify every step from search to contract and moving day.</p></article>
      </div>
      <button className="outline">See all services</button>
    </section>
  );
}
