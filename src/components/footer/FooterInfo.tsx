import { navContent } from '@/data/nav-content';
import { socialNetwork } from '@/data/social-media';

import { CustomList } from '../ui/CustomList';

export const FooterInfo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-10 lg:gap-24">
        <div className="max-w-sm">
          <div className="mb-4 flex items-center space-x-2">
            <p className="font-serif text-xl font-bold">Ortodent</p>
          </div>
          <p className="text-background/80 mb-4">
            Cuidamos tu sonrisa con excelencia profesional y tecnología de
            vanguardia.
          </p>
        </div>

        <CustomList
          title="Enlaces Rápidos"
          listInfo={navContent}
          horizontal={false}
        />

        <CustomList title="Síguenos" listInfo={socialNetwork} />
      </div>

      <div className="border-background/20 text-background/60 mt-8 border-t pt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ortodent. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};
