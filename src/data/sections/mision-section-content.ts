import type { ImageGalleryItem } from '@/types/image-gallery-item';

import andymv from '../../assets/images/andymv.webp';
import tartinationTreatment from '../../assets/images/tartination-treatment.webp';
import danylani from '../../assets/images/danylani.webp';
import dentalWhitening from '../../assets/images/dental-whitening.webp';

export const misionImageGallery: ImageGalleryItem[] = [
  {
    src: andymv,
    alt: 'Paciente de ortodent disfrutando de su sonrisa en una fiesta',
  },
  {
    src: tartinationTreatment,
    alt: 'Paciente de ortodent mostrando la felicidad en el ejercicio con su brillante sonrisa',
  },
  {
    src: dentalWhitening,
    alt: 'Proceso de blanqueamiento dental',
  },
  {
    src: danylani,
    alt: 'Paciente disfrutando de la naturaleza con una bella sonrisa',
  },
];

export const compromises: string[] = [
  ' Atención personalizada para cada paciente',
  'Tecnología de vanguardia en todos nuestros tratamientos',
  'Ambiente cálido y profesional para tu tranquilidad',
  'Resultados duraderos que superan tus expectativas',
];
