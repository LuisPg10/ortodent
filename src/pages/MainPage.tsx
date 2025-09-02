import { Smile } from 'lucide-react';

import { Header } from '@/components/ui';

import {
  ContactSection,
  HeroSection,
  ServicesSection,
  TeamSection,
  VideosSection,
} from '@/components/sections';

export const MainPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <HeroSection />

      <ServicesSection />

      <TeamSection />

      <VideosSection />

      <ContactSection />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <Smile className="text-primary-foreground h-5 w-5" />
                </div>
                <span className="font-serif text-xl font-bold">Ortodent</span>
              </div>
              <p className="text-background/80 mb-4">
                Cuidamos tu sonrisa con excelencia profesional y tecnología de
                vanguardia.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Enlaces Rápidos</h4>
              <ul className="text-background/80 space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-primary transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-primary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-background/20 text-background/60 mt-8 border-t pt-8 text-center">
            <p>&copy; 2025 Ortodent. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
