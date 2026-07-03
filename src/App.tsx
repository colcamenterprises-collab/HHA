import { AdvisorsSection } from './components/AdvisorsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { PartnerSection } from './components/PartnerSection';
import { PropertyCarousel } from './components/PropertyCarousel';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { WhySection } from './components/WhySection';

export function App() {
  return <main className="page"><HeroSection/><AdvisorsSection/><PartnerSection/><ServicesSection/><WhySection/><PropertyCarousel/><TestimonialSection/><ContactSection/><Footer/></main>;
}
