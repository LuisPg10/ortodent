import { teamContent } from '@/data/sections/team-section-content';
import { Dentist } from '../dentistry/Dentist';

export const TeamSection = () => {
  return (
    <section id="nosotros" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {teamContent.map((dentist) => (
            <Dentist key={dentist.name} dentist={dentist} />
          ))}
        </div>
      </div>
    </section>
  );
};
