import type { FormEvent } from 'react';
import { servicesSectionContent } from '@/data/sections/services-section-content';

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

export const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert('Enviado');
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <CustomInput
              required
              id="name"
              name="name"
              label="Nombre"
              autoComplete="given-name"
              placeholder="Tu nombre"
              type="text"
            />

            <CustomInput
              required
              id="last-name"
              name="last-name"
              label="Apellido"
              autoComplete="family-name"
              placeholder="Tu apellido"
              type="text"
            />
          </div>

          <Options
            id="service"
            label="Servicio de interés"
            defaultOption="Seleccione un servicio"
            required
          >
            {servicesSectionContent.map(({ title }, i) => (
              <option key={i}>{title}</option>
            ))}
          </Options>

          <label className="text-card-foreground mb-2 block text-sm font-medium">
            Mensaje
            <Textarea
              name="message"
              placeholder="Cuéntanos cómo podemos ayudarte..."
              className="bg-input border-border mt-2 min-h-[120px]"
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
