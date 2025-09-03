import { useEffect, useState } from 'react';
import { useMobile } from '@/hooks';

import { videos } from '@/data/sections/video-section-content';

import { VideoCard } from '../ui/VideoCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '../ui/carousel';

export const VideosSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentVideo, setCurrentVideo] = useState(0);
  const { isMobile } = useMobile(870);

  useEffect(() => {
    if (!api) return;

    setCurrentVideo(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrentVideo(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="tratamientos" className="bg-background py-20">
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

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: 'center' }}
          className="mx-auto max-w-4xl"
        >
          <CarouselContent>
            {videos.map((video, i) => {
              const isActive = currentVideo === i + 1;

              return (
                <CarouselItem
                  key={video.id}
                  className="flex justify-center sm:basis-2/3 md:basis-1/3"
                >
                  <VideoCard
                    onClick={() => api?.scrollTo(i)}
                    isActive={isActive}
                    {...video}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {!isMobile && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}

          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: videos.length }).map((_, i) => (
              <span
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`${
                  currentVideo === i + 1 ? 'bg-primary' : 'bg-gray-500'
                } size-2 cursor-pointer rounded-full transition-colors`}
              ></span>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
