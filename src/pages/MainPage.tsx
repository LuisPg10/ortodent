import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Smile,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';

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

      {/* Videos Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
              Nuestros Tratamientos
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Descubre algunos de nuestros casos de éxito y procedimientos más
              destacados.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center justify-center space-x-4 overflow-hidden">
              {/* Video anterior (más pequeño) */}
              <div className="hidden scale-75 opacity-60 transition-all duration-300 md:block">
                <div className="from-primary/20 to-primary/10 relative h-96 w-64 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg">
                  <img
                    src="/dental-procedure-before-after.png"
                    alt="Procedimiento dental anterior"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                      <Play className="text-primary ml-1 h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="mb-1 text-sm font-semibold text-white">
                      Blanqueamiento Dental
                    </h3>
                    <p className="text-xs text-white/80">
                      Resultados en una sesión
                    </p>
                  </div>
                </div>
              </div>

              {/* Video principal (más grande) */}
              <div className="from-primary/30 to-primary/20 relative h-[480px] w-80 scale-100 transform overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl transition-all duration-300">
                <img
                  src="/dental-implant-procedure.png"
                  alt="Procedimiento principal"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                    <Play className="text-primary ml-1 h-8 w-8" />
                  </div>
                </div>
                <div className="absolute right-6 bottom-6 left-6">
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Implante Dental Completo
                  </h3>
                  <p className="text-sm text-white/90">
                    Proceso completo de colocación de implante
                  </p>
                </div>
                <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="h-1 w-8 rounded-full bg-white/60"></div>
                    <div className="h-1 w-8 rounded-full bg-white"></div>
                    <div className="h-1 w-8 rounded-full bg-white/60"></div>
                    <div className="h-1 w-8 rounded-full bg-white/60"></div>
                  </div>
                </div>
              </div>

              {/* Video siguiente (más pequeño) */}
              <div className="hidden scale-75 opacity-60 transition-all duration-300 md:block">
                <div className="from-primary/20 to-primary/10 relative h-96 w-64 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg">
                  <img
                    src="/placeholder-1m8dh.png"
                    alt="Procedimiento dental siguiente"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                      <Play className="text-primary ml-1 h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="mb-1 text-sm font-semibold text-white">
                      Ortodoncia Invisible
                    </h3>
                    <p className="text-xs text-white/80">Progreso en 6 meses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <button className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white">
              <ChevronLeft className="text-primary h-6 w-6" />
            </button>
            <button className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white">
              <ChevronRight className="text-primary h-6 w-6" />
            </button>

            {/* Indicadores de video */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
              <div className="bg-primary h-2 w-2 rounded-full"></div>
              <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
              <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

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
