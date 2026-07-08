import { BadgeCheck, Handshake, Home } from 'lucide-react';

export function WhySection() {
  return (
    <section className="why section-white">
      <h2>Why Choose<br /><em>HHA?</em></h2>
      <p>Most buyers are emotionally attached before the numbers make sense. HHA brings structure, market context and negotiation discipline into the decision.</p>
      <div className="why-row">
        <article><div className="icon"><Home size={28} /></div><h3>Buyer-only focus</h3><p>Advice is built around the buyer’s goals, timing, risk profile and budget — not the seller’s campaign.</p></article>
        <article><div className="icon"><Handshake size={28} /></div><h3>Negotiation discipline</h3><p>Clear offer strategy, auction preparation and calm decision-making when pressure rises.</p></article>
        <article><div className="icon"><BadgeCheck size={28} /></div><h3>Clarity before commitment</h3><p>Shortlists, due diligence and value assessment before you move forward.</p></article>
      </div>
      <button className="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start your brief</button>
    </section>
  );
}
