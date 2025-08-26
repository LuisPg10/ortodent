import { videos } from '@/data/sections/video-section-content';
import { VideoCard } from '../ui/VideoCard';

export const VideosSection = () => {
  return (
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
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
