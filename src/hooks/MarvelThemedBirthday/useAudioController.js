import { useRef } from "react";

export default function useAudioController() {
  const openingRef = useRef(null);
  const scrollRef = useRef(null);
  const celebrateRef = useRef(null);

  const fadeOut = (audio) => {
    if (!audio) return;

    let fade = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        clearInterval(fade);
        audio.pause();
        audio.currentTime = 0;

        audio.volume = audio.dataset.defaultVolume
          ? Number(audio.dataset.defaultVolume)
          : 0.8;
      }
    }, 40);
  };

  const stopAllAudio = () => {
    [openingRef, scrollRef].forEach((ref) => {
      if (ref.current) {
        fadeOut(ref.current);
      }
    });
  };

  const playOpening = () => {
    if (openingRef.current) {
      const audio = openingRef.current;

      audio.loop = true;
      audio.volume = 0.6;

      audio.load();

      audio.play().catch((err) => {
        console.log("Opening audio failed:", err);
      });
    }
  };

  const stopOpening = () => {
    if (openingRef.current) {
      const audio = openingRef.current;
      let fade = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          clearInterval(fade);
          audio.pause();
          audio.currentTime = 0;
          audio.volume = 0.6; // reset
        }
      }, 50);
    }
  };

  const playScrollSound = () => {
    if (scrollRef.current) {
      const audio = scrollRef.current;

      audio.volume = 0;
      audio.currentTime = 0;
      audio.play();

      let fade = setInterval(() => {
        if (audio.volume < 0.8) {
          audio.volume += 0.05;
        } else {
          clearInterval(fade);
        }
      }, 50);
    }
  };

  const playCelebrateSound = () => {
    if (celebrateRef.current) {
      const audio = celebrateRef.current;

      audio.pause();
      audio.currentTime = 0;
      audio.loop = false;
      audio.volume = 0.9;

      audio.load();

      audio.play().catch((e) => {
        console.log("Celebrate audio failed:", e);
      });
    }
  };

  return {
    openingRef,
    scrollRef,
    celebrateRef,
    playOpening,
    stopOpening,
    playScrollSound,
    playCelebrateSound,
    stopAllAudio,
  };
}
