import { AdvisorsSection } from './components/AdvisorsSection';
import { HeroSection } from './components/HeroSection';
import { PartnerSection } from './components/PartnerSection';
import { PropertyCarousel } from './components/PropertyCarousel';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { WhySection } from './components/WhySection';
import { ClientOutcomesSection, ClientReviewQuoteSection, DueDiligenceSection, ExpandingMediaSection, FaqSection, FinalCtaSection, MarketIntelligenceSection, QuoteRevealSection } from './components/StrategicSections';
import { FreeStrategyCallPage } from './components/FreeStrategyCallPage';
import { StrategyCallConceptPage } from './components/StrategyCallConceptPage';
import { PrivacyPolicyPage, WebsiteDisclaimerPage } from './components/LegalPages';

export function App() {
  if (window.location.pathname === '/strategy-call-concept' || window.location.pathname === '/strategy-call-concept/') {
    return <StrategyCallConceptPage />;
  }
  if (window.location.pathname === '/free-strategy-call' || window.location.pathname === '/free-strategy-call/') {
    return <FreeStrategyCallPage />;
  }
  if (window.location.pathname === '/privacy-policy' || window.location.pathname === '/privacy-policy/') {
    return <PrivacyPolicyPage />;
  }
  if (window.location.pathname === '/website-disclaimer' || window.location.pathname === '/website-disclaimer/') {
    return <WebsiteDisclaimerPage />;
  }

  return (
    <main className="page">
      <HeroSection />
      <QuoteRevealSection />
      <AdvisorsSection />
      <MarketIntelligenceSection />
      <PartnerSection />
      <ServicesSection />
      <DueDiligenceSection />
      <WhySection />
      <PropertyCarousel />
      <ExpandingMediaSection />
      <ClientOutcomesSection />
      <ClientReviewQuoteSection />
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
