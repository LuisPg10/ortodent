import { teamContent } from '@/data/sections/team-section-content';

export const TeamSection = () => {
  return (
    <section id="nosotros" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {teamContent.map(({ title, name, info, message, image }) => (
            <div
              key={title}
              className="grid items-center gap-12 md:grid-cols-2"
            >
              <div>
                <img
                  src={image}
                  alt={name}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-foreground mb-6 font-serif text-3xl font-bold md:text-4xl">
                  {title}
                </h2>
                <h3 className="text-primary mb-4 text-xl font-semibold">
                  {name}
                </h3>

                {info.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                <blockquote className="border-primary text-foreground border-l-4 pl-4 italic">
                  {`"${message}"`}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
