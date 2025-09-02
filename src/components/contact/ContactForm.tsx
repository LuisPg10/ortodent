import type { FormEvent } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Textarea,
  Button,
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
            <label className="text-card-foreground mb-2 block text-sm font-medium">
              Nombre
              <Input
                name="name"
                type="text"
                autoComplete="given-name"
                placeholder="Tu nombre completo"
                className="bg-input border-border mt-2"
              />
            </label>

            <label className="text-card-foreground mb-2 block text-sm font-medium">
              Teléfono
              <Input
                name="phone"
                autoComplete="tel"
                type="tel"
                placeholder="Tu número de teléfono"
                className="bg-input border-border mt-2"
              />
            </label>
          </div>

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
