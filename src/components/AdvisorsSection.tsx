import { images } from '../data/siteData';

const steps = [
  ['01', 'Buyer brief', 'Provide us with your ideal property details and purchase goals.'],
  ['02', 'Search strategy', 'We use our network and off-market listings to uncover strong-fit opportunities.'],
  ['03', 'Due diligence', 'We review value, risk, contract timing and buyer confidence before you commit.'],
  ['04', 'Negotiate & settle', 'We negotiate the right terms and support the path through settlement.'],
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
          {steps.map((step) => (
            <article className="stat process-card" tabIndex={0} key={step[0]}>
              <div className="stat-front">
                <strong>{step[0]}</strong>
                <span>{step[1]}</span>
              </div>
              <div className="stat-back">
                <strong>{step[0]}</strong>
                <span>{step[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
