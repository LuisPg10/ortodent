import { Phone, Mail, MapPin, Clock, Smile } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Header,
} from '@/components/ui';

import {
  HeroSection,
  ServicesSection,
  TeamSection,
  VideosSection,
} from '@/components/sections';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const MainPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <HeroSection />

      <ServicesSection />

      <TeamSection />

      <VideosSection />

      {/* Contact Section */}
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
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground font-serif text-2xl">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo
                  pronto.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-card-foreground mb-2 block text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      placeholder="Tu nombre completo"
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label className="text-card-foreground mb-2 block text-sm font-medium">
                      Teléfono
                    </label>
                    <Input
                      placeholder="Tu número de teléfono"
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-card-foreground mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label className="text-card-foreground mb-2 block text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="bg-input border-border min-h-[120px]"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      <MapPin className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-card-foreground mb-2 font-semibold">
                        Dirección
                      </h3>
                      <p className="text-muted-foreground">
                        Av. Principal 123, Centro
                        <br />
                        Ciudad, Estado 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      <Phone className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-card-foreground mb-2 font-semibold">
                        Teléfono
                      </h3>
                      <p className="text-muted-foreground">
                        +52 (555) 123-4567
                        <br />
                        +52 (555) 765-4321
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      <Mail className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-card-foreground mb-2 font-semibold">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        info@dentalcare.com
                        <br />
                        citas@dentalcare.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      <Clock className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-card-foreground mb-2 font-semibold">
                        Horarios
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                        <p>Sábados: 9:00 AM - 2:00 PM</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                  <Smile className="text-primary-foreground h-5 w-5" />
                </div>
                <span className="font-serif text-xl font-bold">Ortodent</span>
              </div>
              <p className="text-background/80 mb-4">
                Cuidamos tu sonrisa con excelencia profesional y tecnología de
                vanguardia.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Enlaces Rápidos</h4>
              <ul className="text-background/80 space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-primary transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-primary transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-background/20 text-background/60 mt-8 border-t pt-8 text-center">
            <p>&copy; 2025 Ortodent. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
