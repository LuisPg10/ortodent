import type { ClassValue } from 'clsx';

import { cn } from '@/lib/utils';

import logoOrtodent from '../../assets/images/logos/logo-ortodent.webp';
import logoOrtodentBg from '../../assets/images/logos/logo-ortodent-bg.webp';

interface Props {
  style?: 'dark' | 'light';
  className?: ClassValue;
}

export const OrtodentIcon = ({ style = 'light', className }: Props) => {
  const isDark = style === 'dark';

  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full">
        <img
          src={isDark ? logoOrtodentBg : logoOrtodent}
          alt="Logo de la empresa Ortodent"
        />
      </div>

      <h1
        className={`${isDark ? 'text-background' : 'text-foreground'} font-serif text-xl font-bold`}
      >
        Ortodent
      </h1>
    </div>
  );
};
