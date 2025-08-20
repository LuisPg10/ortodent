import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="py-20 bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6">
          Cuidamos tu Sonrisa con{' '}
          <span className="text-primary">Excelencia</span>
        </p>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Brindamos servicios dentales de alta calidad con tecnología avanzada y
          un equipo profesional comprometido con tu bienestar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Agendar Consulta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Conocer Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};
