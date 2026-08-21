import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronRight, Clock3, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { images } from '../data/siteData';

const goals = ['Find a family home', 'Build an investment portfolio', 'Relocate to Brisbane', 'Buy my first property'];
const timeframes = ['Immediately', 'Within 3 months', '3–6 months', 'Just researching'];
const sampleTimes = ['9:30 am', '11:00 am', '2:30 pm', '4:00 pm'];

export function StrategyCallConceptPage() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [sampleTime, setSampleTime] = useState('');
  const [seconds, setSeconds] = useState(14 * 60 + 59);

  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((current) => current > 0 ? current - 1 : 14 * 60 + 59), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const clock = useMemo(() => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`, [seconds]);

  return (
    <main className="concept-page">
      <div className="concept-notice">
        <Sparkles size={15} />
        <strong>Customli concept preview</strong>
        <span>Sample content and interactions for demonstration only—no information is submitted.</span>
        <a href="/free-strategy-call">View live embed page <ArrowRight size={13} /></a>
      </div>

      <nav className="concept-nav">
        <a className="logo concept-logo" href="/" aria-label="HHA Buyers Agent home"><img src="/hha-buyers-agent-logo-black.svg" alt="HHA Buyers Agent" /></a>
        <div><span>Prefer to talk?</span><a href="tel:+61412131818"><Phone size={14} /> 0412 131 818</a></div>
      </nav>

      <section className="concept-hero">
        <div className="concept-copy">
          <span className="concept-eyebrow">Brisbane buyer advisory</span>
          <h1>Your next property deserves more than <em>a lucky search.</em></h1>
          <p>Build a clear acquisition plan with Lee Wilson—before listings, agents and emotion start controlling the decision.</p>

          <div className="concept-proof">
            <span><Check size={15} /> Buyer-side advice</span>
            <span><Check size={15} /> Brisbane market focus</span>
            <span><Check size={15} /> No-obligation strategy session</span>
          </div>

          <div className="concept-lee">
            <img src={images.owner} alt="Sample portrait placeholder for Lee Wilson" />
            <div><strong>Lee Wilson</strong><span>Managing Director · HHA Buyers Agent</span><small>Sample portrait—replace with Lee's approved photograph.</small></div>
          </div>
        </div>

        <div className="concept-builder" aria-label="Sample custom strategy call form">
          <header>
            <div><span>Build your strategy call</span><strong>Step {step} of 3</strong></div>
            <div className="concept-progress"><i style={{ width: `${step * 33.333}%` }} /></div>
          </header>

          {step === 1 && <div className="concept-step">
            <span className="concept-step-label">Your buying goal</span>
            <h2>What are you looking to achieve?</h2>
            <p>This changes the questions Lee prepares before your call.</p>
            <div className="concept-options">
              {goals.map((item) => <button className={goal === item ? 'selected' : ''} onClick={() => setGoal(item)} key={item}><span>{item}</span><ChevronRight size={16} /></button>)}
            </div>
            <button className="concept-next" disabled={!goal} onClick={() => setStep(2)}>Continue <ArrowRight size={16} /></button>
          </div>}

          {step === 2 && <div className="concept-step">
            <button className="concept-back" onClick={() => setStep(1)}><ArrowLeft size={14} /> Back</button>
            <span className="concept-step-label">Your timeframe</span>
            <h2>When would you like to buy?</h2>
            <p>A realistic timeframe helps shape the right search plan.</p>
            <div className="concept-options compact">
              {timeframes.map((item) => <button className={timeframe === item ? 'selected' : ''} onClick={() => setTimeframe(item)} key={item}><span>{item}</span><ChevronRight size={16} /></button>)}
            </div>
            <button className="concept-next" disabled={!timeframe} onClick={() => setStep(3)}>See sample availability <CalendarDays size={16} /></button>
          </div>}

          {step === 3 && <div className="concept-step">
            <button className="concept-back" onClick={() => setStep(2)}><ArrowLeft size={14} /> Back</button>
            <span className="concept-step-label">Sample calendar</span>
            <h2>Choose a conversation time.</h2>
            <div className="concept-date-card">
              <div><span>Next sample date</span><strong>Tuesday, 25 August</strong></div>
              <div className="concept-times">{sampleTimes.map((time) => <button className={sampleTime === time ? 'selected' : ''} onClick={() => setSampleTime(time)} key={time}>{time}</button>)}</div>
            </div>
            <button className="concept-next" disabled={!sampleTime} onClick={() => window.alert('Concept preview only — no booking was created.')}>Complete sample booking <ArrowRight size={16} /></button>
          </div>}

          <footer>
            <ShieldCheck size={15} /><span>Concept only · No data collected</span>
            <div><Clock3 size={14} /> Sample booking hold <strong>{clock}</strong></div>
          </footer>
        </div>
      </section>

      <section className="concept-value">
        <div><span>Built around the buyer</span><h2>One short journey.<br /><em>Better-qualified enquiries.</em></h2></div>
        <div className="concept-value-grid">
          <article><strong>01</strong><h3>Personalised intake</h3><p>Questions adapt around goal, timing and purchase position instead of presenting a generic form.</p></article>
          <article><strong>02</strong><h3>Immediate confidence</h3><p>Lee's expertise, the process and next steps are established before the visitor shares their details.</p></article>
          <article><strong>03</strong><h3>One booking journey</h3><p>Lead capture and appointment selection feel like one branded experience instead of two disconnected tools.</p></article>
        </div>
      </section>

      <section className="concept-location">
        <div><MapPin size={21} /><span>Brisbane property focus</span></div>
        <p>This concept can connect to a CRM, lead scoring, automated nurture, Calendly or a fully custom availability engine.</p>
      </section>
    </main>
  );
}
