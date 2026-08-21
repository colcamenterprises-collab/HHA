import { ArrowUpRight } from 'lucide-react';
import { images } from '../data/siteData';

const services = [
  ['Buyer Advocacy', 'End-to-end representation for buyers who want expert guidance from first brief to settlement.', images.service1],
  ['Property Search', 'A focused search process that filters noise and surfaces homes or investments that fit the brief.', null],
  ['Investment Review', 'Research-led assessment of value, growth drivers, rental appeal and long-term risk before purchase.', images.service2],
  ['Negotiation & Settlement', 'Offer, auction and contract support designed to protect your position and reduce stress.', images.service3],
];

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services-head">
        <h2>Strategic Services for<br /><em>Property Buyers</em></h2>
        <div className="chips">{['Family Homes', 'Investments', 'First Home', 'Relocation', 'Off-Market'].map((chip) => <span key={chip}>{chip}</span>)}</div>
      </div>
      <div className="service-grid">
        {services.map((service, index) => <article className={`service-card s${index}`} key={service[0] as string}>{service[2] && <div className="service-img card-img"><img src={service[2] as string} alt={service[0] as string} /></div>}<h3>{service[0]}</h3><p>{service[1]}</p><a className="service-link" href="/free-strategy-call">Enquire <ArrowUpRight size={12} /></a></article>)}
      </div>
    </section>
  );
}
