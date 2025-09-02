import { ContactForm, ContactInformation } from '../contact';

export const ContactSection = () => {
  return (
    <section id="contacto" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
            Contáctanos
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Estamos aquí para ayudarte. Agenda tu cita o contáctanos para
            cualquier consulta.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInformation />
        </div>
      </div>
    </section>
  );
};
