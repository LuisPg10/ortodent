import { servicesSectionContent } from '@/data/sections/services-section-content';
import { useContactForm } from '@/hooks';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CustomInput,
  Options,
  Textarea,
} from '../ui';
import { contactFormErrors } from '@/errors/contact-form-erros';

export const ContactForm = () => {
  const { errors, onFormSubmit, register } = useContactForm();

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground font-serif text-2xl">
          Envíanos un Mensaje
        </CardTitle>

        <CardDescription className="text-muted-foreground">
          Completa el formulario y nos pondremos en contacto contigo pronto.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onFormSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <CustomInput
              required
              id="name"
              label="Nombre"
              autoComplete="given-name"
              placeholder="Tu nombre"
              error={errors.name?.message}
              type="text"
              {...register('name', {
                required: contactFormErrors.name.required,
                minLength: {
                  value: 2,
                  message: contactFormErrors.name.minLength,
                },
                maxLength: {
                  value: 50,
                  message: contactFormErrors.name.maxLength,
                },
              })}
            />

            <CustomInput
              required
              id="last-name"
              label="Apellido"
              autoComplete="family-name"
              placeholder="Tu apellido"
              error={errors.lastName?.message}
              type="text"
              {...register('lastName', {
                required: contactFormErrors.lastName.required,
                minLength: {
                  value: 2,
                  message: contactFormErrors.lastName.minLength,
                },
                maxLength: {
                  value: 50,
                  message: contactFormErrors.lastName.maxLength,
                },
              })}
            />
          </div>

          <Options
            id="service"
            label="Servicio de interés"
            defaultOption="Seleccione un servicio"
            error={errors.service?.message}
            required
            {...register('service', {
              required: contactFormErrors.service.required,
            })}
          >
            {servicesSectionContent.map(({ title }, i) => (
              <option key={i}>{title}</option>
            ))}
          </Options>

          <label className="text-card-foreground mb-2 block text-sm font-medium">
            Mensaje
            <Textarea
              placeholder="Cuéntanos cómo podemos ayudarte..."
              className="bg-input border-border mt-2 min-h-[120px]"
              {...register('message')}
            />
          </label>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-5 w-full">
            Enviar Mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
