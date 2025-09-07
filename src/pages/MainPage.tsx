import { HeaderContent } from '@/components/ui';
import {
  ContactSection,
  HeroSection,
  MisionSection,
  ServicesSection,
  TeamSection,
  VideosSection,
} from '@/components/sections';
import { FooterInfo } from '@/components/footer';

export const MainPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <HeaderContent />
      </header>

      <main>
        <HeroSection />

        <MisionSection />

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
