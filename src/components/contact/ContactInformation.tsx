import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui';

export const ContactInformation = () => {
  return (
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
              <h3 className="text-card-foreground mb-2 font-semibold">Email</h3>
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
  );
};
