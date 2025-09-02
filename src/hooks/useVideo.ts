import { type MouseEvent, useEffect, useRef, useState } from 'react';

export const useVideo = (isActive: boolean = true) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [videoState, setVideoState] = useState({
    isHover: false,
    isPlaying: isActive,
    isActive,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        handlePlay();
        return;
      }

      handlePause();
    }
  }, [isActive]);

  const handleMouseMove = () => {
    if (!videoState.isHover) {
      setVideoState((prev) => ({ ...prev, isHover: true }));
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setVideoState((prev) => ({ ...prev, isHover: false }));
    }, 1000);
  };

  const handlePlay = () => {
    videoRef.current?.play();
    setVideoState((prev) => ({ ...prev, isPlaying: true }));
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setVideoState((prev) => ({ ...prev, isPlaying: false }));
  };

  const togglePause = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (videoRef.current?.paused) {
      handlePlay();
      return;
    }

    handlePause();
  };

  return {
    videoRef,
    videoState,

    handleMouseMove,
    handlePause,
    handlePlay,
    togglePause,
  };
};
