import { getEnvironment } from '@/config/environment';
import { messageToUriComponent } from './format';

const { VITE_PHONE_NUMBER } = getEnvironment();

export const sendWhatsAppMessage = (message: string) => {
  const encodedMessage = messageToUriComponent(message);

  window.open(
    `https://wa.me/${VITE_PHONE_NUMBER}?text=${encodedMessage}`,
    '_blank'
  );
};
