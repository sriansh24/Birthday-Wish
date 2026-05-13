import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import BirthdayWish from "./page/BirthdayWish/BirthdayWish";
// import useAudioController from "./hooks/MarvelThemedBirthday/useAudioController";
// import openingSong from "./assets/birthday-song/MarvelThemeSong/avengers-theme-by-vj.mp3";
// import jarvisIntro from "./assets/birthday-song/MarvelThemeSong/Jarvis-intro.mp3";
// import avengersAssemble from "./assets/birthday-song/MarvelThemeSong/Voicy_Avengers Assemble.mp3";
// import AvengersBase from "./page/MarvelThemeBirthdayPage/AvengersBase";
// import MidnightBirthdaySurprise from "./page/MidnightBirthdaySurprise/MidnightBirthdaySurprise";
// import SurpriseFlow from "./components/MidnightBirtdaySurprise/SurpriseFlow";
// import MainSection from "./page/NatureThemedBirthday/MainSection";
// import Plant from "./page/NatureThemedBirthday/Plant";
// import Tree from "./page/NatureThemedBirthday/Tree";
// import Bloom from "./page/NatureThemedBirthday/Bloom";
// import Final from "./page/NatureThemedBirthday/Final";

function App() {
  // const {
  //   openingRef,
  //   scrollRef,
  //   celebrateRef,
  //   playOpening,
  //   stopOpening,
  //   playScrollSound,
  //   playCelebrateSound,
  //   stopAllAudio,
  // } = useAudioController();

  // const hasPlayed = useRef(false);

  // const handleFirstClick = () => {
  //   if (!hasPlayed.current) {
  //     playOpening();
  //     hasPlayed.current = true;
  //   }
  // };

  //---------------------------- Nature Theme Birthday ----------------------------
  // useEffect(() => {
  //   document.body.classList.add("overflow-hidden");
  // }, []);

  return (
    <>
      {/* Marvel Theme Birtday */}
      {/* <div onClick={handleFirstClick}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/birthday-wish/marvel-theme-birthday" />}
          />
          <Route
            path="/birthday-wish/marvel-theme-birthday"
            element={
              <AvengersBase
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
      </div> */}

      <Routes>
        {/* Normal Birthday Website */}
        <Route
          path="/"
          element={<Navigate to="/birtday-wish/birtday-wish" />}
        />
        <Route path="/birtday-wish/birtday-wish" element={<BirthdayWish />} />

        {/* Midnight Birthday Surprise */}
        {/* <Route
          path="/"
          element={<Navigate to="/birthday-wish" />}
        />
        <Route path="/birthday-wish" element={<MidnightBirthdaySurprise />} />
        <Route path="/surprise-adyasha" element={<SurpriseFlow />} /> */}

        {/* Nature Theme Birthday */}
        {/* <Route
          path="/"
          element={<Navigate to="nature-theme-birthday-wish" />}
        />
        <Route path="/nature-theme-birthday-wish" element={<MainSection />} />
        <Route path="/nature-theme-birthday-wish/plant" element={<Plant />} />
        <Route path="/nature-theme-birthday-wish/tree" element={<Tree />} />
        <Route path="/nature-theme-birthday-wish/bloom" element={<Bloom />} />
        <Route path="/nature-theme-birthday-wish/final" element={<Final />} /> */}
      </Routes>
    </>
  );
}
export default App;
