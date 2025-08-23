import { type MouseEvent, useRef, useState } from 'react';

let timer: NodeJS.Timeout | null; //? Para evitar el salto del wrapper

export const useVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState({
    isHover: false,
    isPlaying: true,
  });

  const handleMouseMove = async () => {
    if (!videoState.isHover) setVideoState({ ...videoState, isHover: true });

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      setVideoState({ ...videoState, isHover: false });
    }, 1000);
  };

  const togglePause = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (videoRef.current?.paused) {
      videoRef.current.play();
      setVideoState({ ...videoState, isPlaying: true });
      return;
    }

    videoRef.current?.pause();
    setVideoState({ ...videoState, isPlaying: false });
  };

  return {
    videoRef,
    videoState,

    handleMouseMove,
    togglePause,
  };
};
