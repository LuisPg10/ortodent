import { useForm } from 'react-hook-form';

import type { ContactFormInputs } from '@/types/contact-form-inputs';

import { sendWhatsAppMessage } from '@/lib/send-data';
import { whatsAppMessage } from '@/data/messages';

export const useContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormInputs>();

  const sendData = (contactData: ContactFormInputs) => {
    const { name, lastName, service, message } = contactData;
    const finalMessage = whatsAppMessage(name, lastName, service, message);

    sendWhatsAppMessage(finalMessage);
  };

  return {
    errors,
    onFormSubmit: handleSubmit(sendData),
    register,
  };
};
