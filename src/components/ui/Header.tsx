import { Smile } from 'lucide-react';
import { Button } from './button';

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Smile className="w-5 h-5 text-primary-foreground" />
          </div>

          <h1 className="text-xl font-bold font-serif text-foreground">
            Ortodent
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
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
            href="#fundadora"
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
