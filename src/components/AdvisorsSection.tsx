import { images } from '../data/siteData';

const steps = [
  ['01', 'Buyer brief', false],
  ['02', 'Search strategy', true],
  ['03', 'Due diligence', false],
  ['04', 'Negotiate & settle', false],
];

export function AdvisorsSection() {
  return (
    <section className="advisors section-white" id="process">
      <div className="section-head">
        <h2>Your Trusted<br /><em>Buyer Advocates</em></h2>
        <p>HHA represents the buyer, not the seller. We help clients understand the market, avoid poor-fit purchases and move decisively when the right opportunity appears.</p>
      </div>
      <div className="advisor-grid">
        <div className="advisor-img card-img"><img src={images.advisor} alt="Premium residential property exterior" /></div>
        <div className="stat-grid">
          {steps.map((step) => <article className={step[2] ? 'stat dark' : 'stat'} key={step[0] as string}><strong>{step[0]}</strong><span>{step[1]}</span></article>)}
        </div>
      </div>
    </section>
  );
}
