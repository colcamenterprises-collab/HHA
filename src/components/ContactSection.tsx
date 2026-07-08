import { MapPin } from 'lucide-react';
import { images } from '../data/siteData';

export function ContactSection() {
  return (
    <section className="contact section-white" id="contact">
      <div>
        <h2>Book a Buyer Strategy Call</h2>
        <p>Tell HHA what you are trying to buy, where you are looking and what support you need. The team will come back with the next best step.</p>
        <form action="mailto:hello@hhapropertyadvisory.com" method="post" encType="text/plain">
          <input name="firstName" placeholder="First Name" required />
          <input name="lastName" placeholder="Last Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="Phone" />
          <textarea name="message" placeholder="What are you looking to buy?" required />
          <button type="submit">Send Enquiry</button>
        </form>
      </div>
      <div className="map" aria-label="HHA buyer advisory service map graphic">
        <span className="pin p1"><MapPin size={18} /></span><span className="pin p2"><MapPin size={18} /></span><span className="pin p3"><MapPin size={18} /></span><span className="pin p4"><MapPin size={18} /></span>
        <article><img src={images.property1} alt="Premium property" /><div><strong>HHA Buyer Advisory</strong><small>Independent buyer specialists</small><button onClick={() => window.location.href = 'mailto:hello@hhapropertyadvisory.com'}>Email HHA</button></div></article>
      </div>
    </section>
  );
}
