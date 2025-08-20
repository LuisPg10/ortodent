import { servicesSectionContent } from '@/data/sections/services-section-content';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

export const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-20 sm:px-0 md:px-10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Ofrecemos una amplia gama de tratamientos dentales para cuidar tu
            salud bucal y mejorar tu sonrisa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesSectionContent.map((info, i) => (
            <Card
              key={i}
              className="bg-card border-border transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <info.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-card-foreground font-serif text-xl">
                  {info.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {info.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
