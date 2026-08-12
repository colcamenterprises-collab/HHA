import { Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Website footer">
      <a className="footer-logo" href="#" aria-label="HHA Buyers Agent home">
        <img src="/hha-buyers-agent-logo-black.svg" alt="HHA Buyers Agent" />
      </a>
      <div className="footer-right">
        <p>Website information is general in nature and does not constitute financial, legal or property advice. Buyers should seek independent advice before making a purchase decision.</p>
        <div className="footer-legal-links"><a href="/privacy-policy">Privacy Policy</a><a href="/website-disclaimer">Website Disclaimer</a></div>
        <a className="footer-phone" href="tel:+61412131818"><Phone size={16} /> +61 412 131 818</a>
      </div>
    </footer>
  );
}
