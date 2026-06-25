import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMusic } from "react-icons/fi";
import AotThemeSong from "../../assets/birthday-song/AotThemeBirthday/attack_on_titan-2.mp3";

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef(null);

  // ✅ Auto-play as soon as component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    // Browsers block autoplay without user interaction.
    // This attempts autoplay and falls back gracefully.
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true); // ✅ autoplay succeeded
        })
        .catch(() => {
          // ✅ Autoplay blocked by browser — wait for first user click anywhere
          const resumeOnClick = () => {
            audio.play().then(() => {
              setPlaying(true);
            });
            window.removeEventListener("click", resumeOnClick);
          };
          window.addEventListener("click", resumeOnClick);
        });
    }

    return () => {
      audio.pause();
    };
  }, []);

  // ✅ Sync play/pause state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  // ✅ Sync volume
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = muted ? 0 : volume;
  }, [volume, muted]);

  return (
    <>
      {/* ✅ Hidden audio element */}
      <audio ref={audioRef} src={AotThemeSong} loop preload="auto" />

      <motion.div
        className="fixed bottom-6 right-6 z-[500] glass-card glow-border p-3 flex flex-col gap-2"
        style={{ minWidth: expanded ? 220 : 56 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-3">
          {/* Music icon toggle */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-[#F59E0B] hover:text-[#FFB703] transition-colors"
            aria-label="Toggle music player"
          >
            <FiMusic size={20} />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
              >
                {/* Play / Pause */}
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="text-[#F59E0B] hover:text-[#FFB703] transition-colors"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <FiPause size={18} /> : <FiPlay size={18} />}
                </button>

                {/* Mute / Unmute */}
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="text-[#F59E0B] hover:text-[#FFB703] transition-colors"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
                </button>

                {/* Volume slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(+e.target.value);
                    setMuted(false);
                  }}
                  className="w-20 accent-[#F59E0B]"
                  aria-label="Volume"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ✅ Now shows playing status instead of placeholder text */}
        {expanded && (
          <p className="text-[#94a3b8] text-[10px] font-inter text-center whitespace-nowrap">
            {playing ? "♪ Now Playing — AOT Theme" : "⏸ Paused"}
          </p>
        )}
      </motion.div>
    </>
  );
}

export default MusicPlayer;
