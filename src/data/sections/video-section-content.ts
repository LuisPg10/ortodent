import aestheticBrackets from '../../assets/videos/aesthetic-brackets.webm';
import conventionalBrackets from '../../assets/videos/conventional-brackets.webm';
import conventionalBracketsTwo from '../../assets/videos/convencional-brackets-two.webm';
import dentalWhiteningProcess from '../../assets/videos/dental-whitening-process.webm';
import dentalWhiteningResult from '../../assets/videos/dental-whitening-result.webm';
import unknownVideo from '../../assets/videos/unknown-video.webm';

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

  {
    id: crypto.randomUUID(),
    title: 'Proceso de blanqueamiento dental',
    description:
      'Descubre el paso a paso del blanqueamiento dental para devolverle brillo natural a tus dientes.',
    src: dentalWhiteningProcess,
  },

  {
    id: crypto.randomUUID(),
    title: 'Resultado de blanqueamiento dental',
    description:
      'Observa los resultados reales de una sonrisa más blanca y saludable.',
    src: dentalWhiteningResult,
  },

  {
    id: crypto.randomUUID(),
    title: 'Vídeo desconocido',
    description: '😶',
    src: unknownVideo,
  },
];
