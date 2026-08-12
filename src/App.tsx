import { AdvisorsSection } from './components/AdvisorsSection';
import { HeroSection } from './components/HeroSection';
import { PartnerSection } from './components/PartnerSection';
import { PropertyCarousel } from './components/PropertyCarousel';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { WhySection } from './components/WhySection';
import { ClientOutcomesSection, ClientReviewQuoteSection, DueDiligenceSection, ExpandingMediaSection, FaqSection, FinalCtaSection, MarketIntelligenceSection, QuoteRevealSection } from './components/StrategicSections';
import { FreeStrategyCallPage } from './components/FreeStrategyCallPage';

export function App() {
  if (window.location.pathname === '/free-strategy-call' || window.location.pathname === '/free-strategy-call/') {
    return <FreeStrategyCallPage />;
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
