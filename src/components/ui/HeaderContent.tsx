import { Smile } from 'lucide-react';

import { navContent } from '@/data/nav-content';

import { Button } from './button';
import { CustomList } from './CustomList';

export const HeaderContent = () => {
  return (
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
        <CustomList listInfo={navContent} itemStyle="text-foreground" />
      </nav>

      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
        Agendar Cita
      </Button>
    </div>
  );
};
