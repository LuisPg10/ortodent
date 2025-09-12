import { motion } from 'motion/react';
import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="from-background to-muted bg-gradient-to-br py-52"
    >
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="text-foreground mb-6 font-serif text-4xl font-bold md:text-6xl">
          Cuidamos tu Sonrisa con{' '}
          <span className="text-primary">Excelencia</span>
        </p>

        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          Brindamos servicios dentales de alta calidad con tecnología avanzada y
          un equipo profesional comprometido con tu bienestar.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Agendar Consulta
            </Button>
          </a>
          <a href="#servicios">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Conocer Servicios
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
