import { SiteFooter } from './SiteFooter';

const Placeholder = ({ children }: { children: string }) => <span className="legal-placeholder">[INSERT {children}]</span>;

function LegalHeader({ title, updated }: { title: string; updated: string }) {
  return <header className="legal-header"><a href="/" aria-label="HHA Buyers Agent home"><img src="/hha-buyers-agent-logo-black.svg" alt="HHA Buyers Agent" /></a><div><span>HHA Buyers Agent</span><h1>{title}</h1><p>Last updated: <Placeholder>{updated}</Placeholder></p></div></header>;
}

export function PrivacyPolicyPage() {
  return <main className="legal-page"><LegalHeader title="Privacy Policy" updated="DATE" /><article className="legal-content">
    <p className="legal-intro">This Privacy Policy explains how <Placeholder>LEGAL ENTITY NAME</Placeholder> trading as HHA Buyers Agent (we, us or our) collects, holds, uses and discloses personal information.</p>
    <section><h2>1. Who we are and how to contact us</h2><p>Legal entity: <Placeholder>LEGAL ENTITY NAME</Placeholder><br />ABN/ACN: <Placeholder>ABN OR ACN</Placeholder><br />Business address: <Placeholder>BUSINESS ADDRESS</Placeholder><br />Privacy and complaints contact: <Placeholder>PRIVACY CONTACT NAME, EMAIL ADDRESS AND TELEPHONE NUMBER</Placeholder></p></section>
    <section><h2>2. Personal information we collect</h2><p>We may collect your name, contact details, property preferences, target locations, budget range, buying timeframe, finance status, information you provide in an enquiry, and technical information about how you use our website.</p></section>
    <section><h2>3. How we collect information</h2><p>We collect information directly from you when you contact us, submit a form, book a call, or otherwise communicate with us. We may also collect limited technical information through cookies, pixels and similar technologies where you permit this.</p></section>
    <section><h2>4. Why we collect and use information</h2><p>We use personal information to respond to enquiries, provide requested services, arrange strategy calls, maintain client records, improve our website and services, comply with legal obligations, and—with your consent where required—measure advertising performance and show relevant advertising.</p></section>
    <section><h2>5. Marketing</h2><p>We may send direct marketing communications only as permitted by law. You may opt out at any time using the unsubscribe option in a message or by contacting us using the details above.</p></section>
    <section><h2>6. Cookies, analytics and advertising technologies</h2><p>Our website may use essential cookies to function. With your consent, we may use analytics and advertising technologies, including <Placeholder>LIST OF PROVIDERS, FOR EXAMPLE META PIXEL, GOOGLE ANALYTICS AND GOOGLE TAG MANAGER</Placeholder>, to understand website use, measure advertising and build or improve advertising audiences. These providers may receive online identifiers and browsing information. You can select “Essential only” in our consent notice to decline optional analytics and advertising technologies.</p></section>
    <section><h2>7. Disclosure of information</h2><p>We may disclose personal information to employees, contractors, advisers, technology and CRM providers, booking/form providers, marketing providers, and government or regulatory bodies where required or permitted by law. We do not sell personal information.</p></section>
    <section><h2>8. Overseas recipients</h2><p>Some service providers may store or process information outside Australia. Countries where recipients are likely to be located include <Placeholder>LIST COUNTRIES OR STATE “NOT CURRENTLY KNOWN” AFTER PROVIDER REVIEW</Placeholder>.</p></section>
    <section><h2>9. Security and retention</h2><p>We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure. We retain personal information only for as long as reasonably necessary for our business and legal purposes, then delete or de-identify it where practicable.</p></section>
    <section><h2>10. Access, correction and complaints</h2><p>You may ask to access or correct personal information we hold about you by contacting us. If you have a privacy complaint, contact <Placeholder>PRIVACY COMPLAINTS EMAIL OR POSTAL ADDRESS</Placeholder>. We will investigate and respond within <Placeholder>COMPLAINT RESPONSE TIMEFRAME</Placeholder>. If you are not satisfied, you may contact the Office of the Australian Information Commissioner.</p></section>
    <section><h2>11. Changes to this policy</h2><p>We may update this policy from time to time. The current version will be published on this page with its updated date.</p></section>
    <p className="legal-review">Draft template only. It must be completed with HHA’s actual practices and reviewed by an Australian-qualified legal adviser before publishing.</p>
  </article><SiteFooter /></main>;
}

export function WebsiteDisclaimerPage() {
  return <main className="legal-page"><LegalHeader title="Website Disclaimer" updated="DATE" /><article className="legal-content">
    <p className="legal-intro">This website is operated by <Placeholder>LEGAL ENTITY NAME</Placeholder> trading as HHA Buyers Agent.</p>
    <section><h2>1. General information only</h2><p>Information on this website is general in nature. It is not financial, legal, tax, accounting, building, pest, valuation, lending, investment or other professional advice, and it does not take account of your personal circumstances.</p></section>
    <section><h2>2. Property information</h2><p>Property-related information, market commentary, price references and other content may change and may be incomplete. You should make your own enquiries and obtain independent professional advice before making a decision or entering a transaction.</p></section>
    <section><h2>3. No guarantee</h2><p>We do not guarantee a particular property outcome, price, return, finance outcome, availability, timing, access to off-market opportunities or suitability of any property or service.</p></section>
    <section><h2>4. Third-party material and links</h2><p>This website may contain links to third-party websites or information. We do not control, endorse or accept responsibility for third-party content, services or privacy practices.</p></section>
    <section><h2>5. Licensing and service scope</h2><p>HHA provides services only within the scope of its applicable licences, registrations and authorities. Licence details: <Placeholder>LICENCE TYPE, LICENCE NUMBER, LICENSED ENTITY AND RELEVANT STATE/TERRITORY</Placeholder>.</p></section>
    <section><h2>6. Liability</h2><p>To the maximum extent permitted by law, we exclude liability for loss arising from reliance on this website. Nothing in this disclaimer excludes rights or remedies that cannot lawfully be excluded.</p></section>
    <section><h2>7. Contact</h2><p>For questions about this website, contact <Placeholder>CONTACT EMAIL ADDRESS AND TELEPHONE NUMBER</Placeholder>.</p></section>
    <p className="legal-review">Draft template only. It must be completed and reviewed by an Australian-qualified legal adviser before publishing.</p>
  </article><SiteFooter /></main>;
}
