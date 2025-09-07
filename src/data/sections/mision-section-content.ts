import type { ImageGalleryItem } from '@/types/image-gallery-item';

import andymv from '../../assets/images/andymv.jpg';
import tartinationTreatment from '../../assets/images/tartination-treatment.jpeg';
import danylani from '../../assets/images/danylani.jpg';
import dentalWhitening from '../../assets/images/dental-whitening.jpeg';

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
