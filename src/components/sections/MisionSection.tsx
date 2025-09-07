import {
  compromises,
  misionImageGallery,
} from '@/data/sections/mision-section-content';
import { Button, PinterestGallery } from '../ui';

export const MisionSection = () => {
  return (
    <section id="mision" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Pinterest-style Gallery */}
          <PinterestGallery columns={2} images={misionImageGallery} />

          {/* Inspirational Message */}
          <div className="space-y-8">
            <div>
              <h2 className="text-foreground mb-6 font-serif text-3xl font-bold text-balance md:text-4xl">
                Tu Sonrisa es Nuestra{' '}
                <span className="text-primary">Pasión</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Cada día trabajamos con dedicación para transformar vidas a
                través de sonrisas saludables. Creemos que una sonrisa hermosa
                no solo mejora tu apariencia, sino que también aumenta tu
                confianza y bienestar general.
              </p>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Utilizamos las técnicas más avanzadas y materiales de la más
                alta calidad para garantizar resultados excepcionales que
                perduren en el tiempo. Tu comodidad y satisfacción son nuestra
                prioridad número uno.
              </p>
            </div>

            <div className="bg-primary/5 border-primary rounded-r-lg border-l-4 p-6">
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                Nuestro Compromiso
              </h3>
              <ul className="text-muted-foreground space-y-3">
                {compromises.map((compromise, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <span>{compromise}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
