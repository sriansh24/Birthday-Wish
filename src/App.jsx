import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAudioController from "./hooks/MarvelThemedBirthday/useAudioController";
import openingSong from "./assets/birthday-song/MarvelThemeSong/avengers-theme-by-vj.mp3";
import jarvisIntro from "./assets/birthday-song/MarvelThemeSong/Jarvis-intro.mp3";
import avengersAssemble from "./assets/birthday-song/MarvelThemeSong/Voicy_Avengers Assemble.mp3";
// import BirthdayWish from "./page/BirthdayWish/BirthdayWish";
// import MidnightBirthdaySurprise from "./page/MidnightBirtdaySurprise/MidnightBirtdaySurprise";
// import AvengersBase from "./page/MarvelThemeBirthdayPage/AvengersBase";
import AvengersBase2 from "./page/MarvelThemeBirthdayPage/AvengersBase2";
// import MarvelThemeBirthday from "./page/MarvelThemeBirthdayPage/MarvelThemeBirthday";

function App() {
  const {
    openingRef,
    scrollRef,
    celebrateRef,
    playOpening,
    stopOpening,
    playScrollSound,
    playCelebrateSound,
    stopAllAudio,
  } = useAudioController();

  const hasPlayed = useRef(false);

  const handleFirstClick = () => {
    if (!hasPlayed.current) {
      playOpening();
      hasPlayed.current = true;
    }
  };

  return (
    <>
      <div onClick={handleFirstClick}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/birtday-wish/birtday-wish" />} /> */}
          {/* <Route path="/birtday-wish/birtday-wish" element={<BirthdayWish />} /> */}
          {/* <Route path="/birtday-wish/birtday-wish" element={<MidnightBirthdaySurprise />} /> */}
          {/* <Route path="/birtday-wish/birtday-wish-avengers-base" element={<AvengersBase />} /> */}
          {/* <Route path="/birtday-wish/birtday-wish-marvel-theme" element={<MarvelThemeBirthday />} /> */}
          {/* <Route path="/birtday-wish/birtday-wish-marvel-theme" element={<MarvelThemeBirthday />} /> */}
          <Route
            path="/"
            element={<Navigate to="/birtday-wish/marvel-theme-birthday" />}
          />
          <Route
            path="/birtday-wish/marvel-theme-birthday"
            element={
              <AvengersBase2
                stopOpening={stopOpening}
                playScrollSound={playScrollSound}
                playCelebrateSound={playCelebrateSound}
                stopAllAudio={stopAllAudio}
              />
            }
          />
        </Routes>
        <audio ref={openingRef} src={openingSong} data-default-volume="0.6" />
        <audio ref={scrollRef} src={jarvisIntro} data-default-volume="0.8" />
        <audio
          ref={celebrateRef}
          src={avengersAssemble}
          data-default-volume="0.9"
        />
      </div>
    </>
  );
}
export default App;
