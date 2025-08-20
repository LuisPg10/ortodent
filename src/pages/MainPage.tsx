import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  Shield,
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
import { HeroSection } from '@/components/sections';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactContent } from '@/data/sections/contact-content';

export const MainPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de tratamientos dentales para cuidar tu
              salud bucal y mejorar tu sonrisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Odontología General
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Cuidado integral de tu salud bucal con revisiones, limpiezas y
                  tratamientos preventivos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Ortodoncia
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Corrección de la posición de los dientes con brackets
                  tradicionales y ortodoncia invisible.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Implantes Dentales
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reemplazo de dientes perdidos con implantes de titanio de alta
                  calidad y durabilidad.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smile className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Estética Dental
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Blanqueamientos, carillas y tratamientos para mejorar la
                  apariencia de tu sonrisa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Endodoncia
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tratamiento de conductos radiculares para salvar dientes
                  dañados o infectados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-card-foreground">
                  Periodoncia
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tratamiento especializado de las encías y estructuras de
                  soporte de los dientes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section id="fundadora" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {contactContent.map(({ title, name, info, message, image }) => (
              <div
                key={title}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <img
                    src={image}
                    alt={name}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
                    {title}
                  </h2>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {info}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Su compromiso con la educación continua y las últimas
                    tecnologías la mantiene a la vanguardia de los tratamientos
                    dentales modernos. Cree firmemente que cada paciente merece
                    una sonrisa saludable y hermosa.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    {`"${message}"`}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Nuestros Tratamientos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre algunos de nuestros casos de éxito y procedimientos más
              destacados.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-4 overflow-hidden">
              {/* Video anterior (más pequeño) */}
              <div className="hidden md:block opacity-60 scale-75 transition-all duration-300">
                <div className="relative w-64 h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/dental-procedure-before-after.png"
                    alt="Procedimiento dental anterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      Blanqueamiento Dental
                    </h3>
                    <p className="text-white/80 text-xs">
                      Resultados en una sesión
                    </p>
                  </div>
                </div>
              </div>

              {/* Video principal (más grande) */}
              <div className="relative w-80 h-[480px] bg-gradient-to-br from-primary/30 to-primary/20 rounded-2xl overflow-hidden shadow-2xl transform scale-100 transition-all duration-300">
                <img
                  src="/dental-implant-procedure.png"
                  alt="Procedimiento principal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Implante Dental Completo
                  </h3>
                  <p className="text-white/90 text-sm">
                    Proceso completo de colocación de implante
                  </p>
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex space-x-1">
                    <div className="w-8 h-1 bg-white/60 rounded-full"></div>
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <div className="w-8 h-1 bg-white/60 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/60 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Video siguiente (más pequeño) */}
              <div className="hidden md:block opacity-60 scale-75 transition-all duration-300">
                <div className="relative w-64 h-96 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/placeholder-1m8dh.png"
                    alt="Procedimiento dental siguiente"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      Ortodoncia Invisible
                    </h3>
                    <p className="text-white/80 text-xs">Progreso en 6 meses</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>

            {/* Indicadores de video */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Agenda tu cita o contáctanos para
              cualquier consulta.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-card-foreground">
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo
                  pronto.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input
                      placeholder="Tu nombre completo"
                      className="bg-input border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">
                      Teléfono
                    </label>
                    <Input
                      placeholder="Tu número de teléfono"
                      className="bg-input border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="bg-input border-border min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Smile className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold font-serif">Ortodent</span>
              </div>
              <p className="text-background/80 mb-4">
                Cuidamos tu sonrisa con excelencia profesional y tecnología de
                vanguardia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-background/80">
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
                    href="#fundadora"
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
              <h4 className="font-semibold mb-4">Síguenos</h4>
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

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 Ortodent. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
