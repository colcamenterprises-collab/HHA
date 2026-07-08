import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { properties } from '../data/siteData';

export function PropertyCarousel() {
  return (
    <section className="carousel section-white" id="opportunities">
      <div className="carousel-head">
        <h2>Where HHA<br /><em>Adds Value</em></h2>
        <div>
          <p>From private search to settlement, HHA helps buyers make sharper decisions and avoid costly guesswork.</p>
          <button aria-label="Previous opportunity"><ArrowLeft size={16} /></button><button aria-label="Next opportunity"><ArrowRight size={16} /></button>
        </div>
      </div>
      <div className="carousel-row">
        {properties.map((property) => <article className="prop-card" key={property[0]}><div className="prop-img card-img"><img src={property[2]} alt={property[0]} /><span><ArrowUpRight size={14} /></span></div><h3>{property[0]}</h3><p>{property[1]}</p></article>)}
      </div>
    </section>
  );
}
