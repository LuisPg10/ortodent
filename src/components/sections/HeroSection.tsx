import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="from-background to-muted bg-gradient-to-br py-52"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground mb-6 font-serif text-4xl font-bold md:text-6xl">
          Cuidamos tu Sonrisa con{' '}
          <span className="text-primary">Excelencia</span>
        </p>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          Brindamos servicios dentales de alta calidad con tecnología avanzada y
          un equipo profesional comprometido con tu bienestar.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
