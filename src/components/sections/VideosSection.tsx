import { ChevronLeft, ChevronRight } from 'lucide-react';
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

          {/* Controles de navegación */}
          <button className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white">
            <ChevronLeft className="text-primary h-6 w-6" />
          </button>
          <button className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white">
            <ChevronRight className="text-primary h-6 w-6" />
          </button>

          {/* Indicadores de video */}
          <div className="mt-8 flex justify-center space-x-2">
            <div className="bg-primary h-2 w-2 rounded-full"></div>
            <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
            <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
            <div className="bg-muted-foreground h-2 w-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
