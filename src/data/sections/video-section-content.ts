import aestheticBrackets from '../../assets/videos/aesthetic-brackets.webm';
import conventionalBrackets from '../../assets/videos/conventional-brackets.webm';
import conventionalBracketsTwo from '../../assets/videos/convencional-brackets-two.webm';

export const videos = [
  {
    id: crypto.randomUUID(),
    title: 'Brackets estéticos',
    description: 'Proceso de colocación de brackets estéticos',
    src: aestheticBrackets,
  },

  {
    id: crypto.randomUUID(),
    title: 'Brackets convencionales',
    description: 'Proceso de colocación de brackets convencionales',
    src: conventionalBrackets,
  },

  {
    id: crypto.randomUUID(),
    title: 'Mejorando tu sonrisa',
    description: 'Siempre con esmero y dedicación en cada paso',
    src: conventionalBracketsTwo,
  },
];
