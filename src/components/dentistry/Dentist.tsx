import type { DentistInfo } from '@/types/dentist-info';

interface Props {
  dentist: DentistInfo;
}

export const Dentist = ({ dentist }: Props) => {
  return (
    <div
      key={dentist.title}
      className="grid items-center gap-12 md:grid-cols-2"
    >
      <div>
        <img
          src={dentist.image}
          alt={dentist.name}
          className="w-full rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>

      <div>
        <h2 className="text-foreground mb-6 font-serif text-3xl font-bold md:text-4xl">
          {dentist.title}
        </h2>
        <h3 className="text-primary mb-4 text-xl font-semibold">
          {dentist.name}
        </h3>

        {dentist.info.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}

        <blockquote className="border-primary text-foreground border-l-4 pl-4 italic">
          {`"${dentist.message}"`}
        </blockquote>
      </div>
    </div>
  );
};
