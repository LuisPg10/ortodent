import { Smile } from 'lucide-react';
import { Button } from './button';

export const Header = () => {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
            <Smile className="text-primary-foreground h-5 w-5" />
          </div>

          <h1 className="text-foreground font-serif text-xl font-bold">
            Ortodent
          </h1>
        </div>

        <nav className="hidden space-x-6 md:flex">
          <a
            href="#inicio"
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre Nosotros
          </a>

          <a
            href="#contacto"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Agendar Cita
        </Button>
      </div>
    </header>
  );
};
