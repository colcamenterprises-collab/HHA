import { useEffect } from 'react';
import { ArrowRight, CalendarDays, Check, Clock3, Phone, ShieldCheck } from 'lucide-react';
import { images } from '../data/siteData';

const MAILERLITE_SCRIPT = 'https://assets.mailerlite.com/js/universal.js';

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

function MailerLiteForm() {
  useEffect(() => {
    const initialise = () => {
      const windowWithMailerLite = window as typeof window & {
        ml?: ((...args: unknown[]) => void) & { q?: unknown[][] };
      };

      windowWithMailerLite.ml = windowWithMailerLite.ml || function (...args: unknown[]) {
        const queue = windowWithMailerLite.ml?.q || [];
        queue.push(args);
        if (windowWithMailerLite.ml) windowWithMailerLite.ml.q = queue;
      };
      windowWithMailerLite.ml('account', '2543902');
    };

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${MAILERLITE_SCRIPT}"]`);
    if (existingScript) {
      initialise();
      return;
    }

    const script = document.createElement('script');
    script.src = MAILERLITE_SCRIPT;
    script.async = true;
    script.onload = initialise;
    document.head.appendChild(script);
  }, []);

  return <div className="ml-embedded strategy-mailerlite" data-form="lI2kgo" />;
}

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

        <aside className="strategy-form-card" id="lead-form" aria-label="Free strategy call booking form">
          <span>Free strategy call</span>
          <h2>Tell us where you are at.</h2>
          <p>Complete the short form. Your enquiry is captured first, then you will go directly to Lee's calendar to choose a convenient time.</p>
          <MailerLiteForm />
          <div className="strategy-form-assurance">
            <span><Clock3 size={14} /> Takes about 60 seconds</span>
            <span><CalendarDays size={14} /> Calendar opens next</span>
            <span><ShieldCheck size={14} /> No obligation</span>
          </div>
          <a className="strategy-phone-cta" href="tel:+61412131818">Prefer to talk now? Call HHA <Phone size={15} /></a>
          <p className="strategy-privacy">Submitting starts HHA's enquiry follow-up and redirects you to Calendly. Your details are handled in line with HHA's <a href="/privacy-policy">Privacy Policy</a>.</p>
        </aside>

        <div className="strategy-hero-image"><img src={images.hero} alt="Contemporary Australian home exterior" /></div>
      </section>

      <section className="strategy-introduction" aria-label="Your HHA strategy call">
        <div className="strategy-introduction-image"><img src={images.owner} alt="HHA buyer adviser" /></div>
        <div className="strategy-introduction-copy">
          <span className="strategy-kicker">A direct conversation</span>
          <h2>Strategy before<br /><em>property pressure.</em></h2>
          <p>Your call is a focused conversation about the property you want, the position you are in and the decisions ahead. You will leave with clearer priorities and a practical next step—whether or not you engage HHA.</p>
          <div className="strategy-availability">
            <CalendarDays size={21} />
            <div><strong>Choose your own appointment time</strong><span>After the form, Lee's live Calendly availability opens automatically.</span></div>
          </div>
        </div>
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
