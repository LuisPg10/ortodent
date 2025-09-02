import type { ContactInformation } from '@/types/contact-information';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const contactInformationContent: ContactInformation[] = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: ['Calle 123, Ciudad, Pais'],
  },

  {
    icon: Phone,
    title: 'Teléfono',
    content: ['+1 123 456 789'],
  },

  {
    icon: Mail,
    title: 'Correo',
    content: ['info@ortodent.com'],
  },

  {
    icon: Clock,
    title: 'Horarios',
    content: [
      'Lunes - Viernes: 9:00 AM - 7:00 PM',
      'Sábados: 9:00 AM - 2:00 PM',
      'Domingos: Cerrado',
    ],
  },
];
