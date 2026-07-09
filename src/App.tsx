import { AdvisorsSection } from './components/AdvisorsSection';
import { HeroSection } from './components/HeroSection';
import { PartnerSection } from './components/PartnerSection';
import { PropertyCarousel } from './components/PropertyCarousel';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { WhySection } from './components/WhySection';
import { ClientOutcomesSection, DueDiligenceSection, ExpandingMediaSection, FaqSection, FinalCtaSection, MarketIntelligenceSection, QuoteRevealSection, StrategyCallModal } from './components/StrategicSections';

export function App() {
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
      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
      <StrategyCallModal />
    </main>
  );
}
