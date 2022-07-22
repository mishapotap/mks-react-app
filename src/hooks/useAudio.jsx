import React, {useState, useEffect } from 'react';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => audio.play());
      return () => {
        audio.removeEventListener('ended', () => audio.play());
      };
    }, []);
  
    return [playing, toggle];
  };

  export default useAudio;