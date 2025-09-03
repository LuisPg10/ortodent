import { Header } from '@/components/ui';
import {
  ContactSection,
  HeroSection,
  ServicesSection,
  TeamSection,
  VideosSection,
} from '@/components/sections';
import { FooterInfo } from '@/components/footer';

export const MainPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main>
        <HeroSection />

        <ServicesSection />

        <TeamSection />

        <VideosSection />

        <ContactSection />
      </main>

      <footer className="bg-foreground text-background py-12">
        <FooterInfo />
      </footer>
    </div>
  );
};
