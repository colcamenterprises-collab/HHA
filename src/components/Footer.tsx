import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a href="mailto:hello@hhapropertyadvisory.com">hello@hhapropertyadvisory.com <ArrowUpRight size={16} /></a>
        <div className="foot-cols">
          <div><b>Services</b><span>Buyer Advocacy</span><span>Property Search</span><span>Investment Review</span></div>
          <div><b>Process</b><span>Brief</span><span>Shortlist</span><span>Negotiation</span></div>
          <div><b>HHA</b><span>Independent Advice</span><span>Buyer First</span><span>Settlement Support</span></div>
        </div>
      </div>
      <div className="wordmark">HHA</div>
    </footer>
  );
}
