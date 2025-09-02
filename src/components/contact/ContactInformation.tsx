import { contactInformationContent } from '@/data/sections/contact-section-content';
import { Card, CardContent } from '../ui';

export const ContactInformation = () => {
  return (
    <div className="space-y-8">
      {contactInformationContent.map((info, i) => (
        <Card key={i} className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <info.icon className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-card-foreground mb-2 font-semibold">
                  {info.title}
                </h3>

                <div className="text-muted-foreground space-y-1">
                  {info.content.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
