import { type MouseEvent, useRef, useState } from 'react';

export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [videoState, setVideoState] = useState({
    isHover: false,
    isPlaying: true,
  });

  const handleMouseMove = () => {
    if (!videoState.isHover) {
      setVideoState((prev) => ({ ...prev, isHover: true }));
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setVideoState((prev) => ({ ...prev, isHover: false }));
    }, 1000);
  };

  const togglePause = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (videoRef.current?.paused) {
      videoRef.current.play();
      setVideoState((prev) => ({ ...prev, isPlaying: true }));
      return;
    }

    videoRef.current?.pause();
    setVideoState((prev) => ({ ...prev, isPlaying: false }));
  };

  return {
    videoRef,
    videoState,

    handleMouseMove,
    togglePause,
  };
};
