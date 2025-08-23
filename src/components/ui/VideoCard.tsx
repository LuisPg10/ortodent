import { Pause, Play } from 'lucide-react';
import { useMobile, useVideo } from '@/hooks';

interface Props {
  src: string;
  title: string;
  description: string;
}

export const VideoCard = ({ src, title, description }: Props) => {
  const { videoRef, videoState, handleMouseMove, togglePause } = useVideo();
  const { isMobile } = useMobile();

  return (
    <article className="from-primary/30 to-primary/20 relative h-[480px] w-80 scale-100 transform overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl transition-all duration-300">
      <video
        ref={videoRef}
        onClick={isMobile ? handleMouseMove : undefined}
        onMouseMove={handleMouseMove}
        autoPlay
        className="h-full w-full object-cover"
        loop
        muted
      >
        <source src={src} type="video/webm" />
        Este video no es compatible con tu navegador
      </video>

      {videoState.isHover && (
        <div onMouseMove={handleMouseMove} onClick={togglePause}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={togglePause}
              className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/90"
            >
              {videoState.isPlaying ? (
                <Pause className="text-primary ml-1 h-8 w-8" />
              ) : (
                <Play className="text-primary ml-1 h-8 w-8" />
              )}
            </button>
          </div>

          <div className="absolute right-6 bottom-6 left-6">
            <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-white/90">{description}</p>
          </div>
        </div>
      )}
    </article>
  );
};
