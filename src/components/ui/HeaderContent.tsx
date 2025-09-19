import { navContent } from '@/data/nav-content';

import { Button } from './button';
import { CustomList } from './CustomList';
import { OrtodentIcon } from './OrtodentIcon';

export const HeaderContent = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <OrtodentIcon />

      <nav className="hidden space-x-6 md:flex">
        <CustomList listInfo={navContent} itemStyle="text-foreground" />
      </nav>

      <a href="#contacto">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Agendar Cita
        </Button>
      </a>
    </div>
  );
};
