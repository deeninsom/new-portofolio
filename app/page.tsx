import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ExperienceSection from '@/components/experience-section';
import PortfolioSections from '@/components/portfolio-sections';
import ProcessSection from '@/components/process-section';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <div className="border-t border-gray-200">
        <ExperienceSection />
      </div>
      <div className="border-t border-gray-200">
        <PortfolioSections />
      </div>
      <div className="border-t border-gray-200">
        <ProcessSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
