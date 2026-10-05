import { navContent } from '@/data/nav-content';
import { socialNetwork } from '@/data/social-media';
import logoCofepris from '@/assets/images/logos/logo-cofepris.svg';

import { CustomList } from '../ui/CustomList';
import { OrtodentIcon } from '../ui/OrtodentIcon';

export const FooterInfo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col flex-wrap gap-10 sm:flex-row lg:gap-24">
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

      <div className="border-background/20 mt-8 border-t pt-8">
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <img
            src={logoCofepris}
            alt="Logo de COFEPRIS"
            className="h-7 w-auto shrink-0 object-contain sm:h-8"
          />
          <span
            aria-hidden="true"
            className="bg-background/30 hidden h-6 w-px sm:block"
          />
          <p className="text-sm">
            <span className="font-bold">Licencia de publicidad:</span>{' '}
            2627042002A00230
          </p>
        </div>

        <p className="text-background/60 mt-20 text-center">
          &copy; {new Date().getFullYear()} Ortodent. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};
