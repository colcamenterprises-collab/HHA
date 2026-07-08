import { AdvisorsSection } from './components/AdvisorsSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { PartnerSection } from './components/PartnerSection';
import { PropertyCarousel } from './components/PropertyCarousel';
import { ServicesSection } from './components/ServicesSection';
import { WhySection } from './components/WhySection';
import { ClientOutcomesSection, DueDiligenceSection, FaqSection, FinalCtaSection, MarketIntelligenceSection } from './components/StrategicSections';

export function App() {
  return (
    <main className="page">
      <HeroSection />
      <AdvisorsSection />
      <MarketIntelligenceSection />
      <PartnerSection />
      <ServicesSection />
      <DueDiligenceSection />
      <WhySection />
      <PropertyCarousel />
      <ClientOutcomesSection />
      <FaqSection />
      <FinalCtaSection />
      <ContactSection />
    </main>
  );
}
