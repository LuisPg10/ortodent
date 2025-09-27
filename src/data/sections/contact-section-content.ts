import type { ContactInformation } from '@/types/contact-information';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const contactInformationContent: ContactInformation[] = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: [
      'Av. Gregorio Méndez Magaña 3217, Atasta de Serra, 86100 Villahermosa, Tabasco, México',
    ],
  },

  {
    icon: Phone,
    title: 'Teléfono',
    content: ['+52 1 993 370 9871'],
  },

  {
    icon: Mail,
    title: 'Correo',
    content: ['citas@ortodent.care'],
  },

  {
    icon: Clock,
    title: 'Horarios',
    content: [
      'Lunes y Jueves: 3:00 PM - 8:00 PM',
      'Martes, Viernes y Sábados: 9:00 AM - 3:00 PM',
      'Miércoles: 9:00 AM - 8:00 PM',
    ],
  },
];
