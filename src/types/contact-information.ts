import type { ComponentType } from 'react';

export interface ContactInformation {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string[];
}
