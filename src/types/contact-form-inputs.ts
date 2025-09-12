import type { InterestDentistryService } from './interest-dentistry-service';

export type ContactFormInputs = {
  name: string;
  lastName: string;
  email: string;
  service: InterestDentistryService;
  message: string;
};
