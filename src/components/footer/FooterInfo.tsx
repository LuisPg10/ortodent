import { navContent } from '@/data/nav-content';
import { socialNetwork } from '@/data/social-media';

import { CustomList } from '../ui/CustomList';
import { OrtodentIcon } from '../ui/OrtodentIcon';

export const FooterInfo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-10 lg:gap-24">
        <div className="max-w-sm">
          <OrtodentIcon style="dark" className="space-x-2" />
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
