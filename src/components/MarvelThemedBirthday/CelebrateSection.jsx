import { useRef } from "react";
import BirthdayCake from "../../components/MarvelThemedBirthday/BirthdayCake";
import ConfettiContainer from "../../components/MarvelThemedBirthday/ConfettiContainer";
import { useScrollReveal } from "../../hooks/MarvelThemedBirthday/useScrollReveal";
import { useConfetti } from "../../hooks/MarvelThemedBirthday/useConfetti";
import { BIRTHDAY_PERSON } from "../../constants/MarvelThemedBirthday/heroesData";

function CelebrateSection({ playCelebrateSound, stopAllAudio  }) {
  const sectionRef = useScrollReveal();
  const confettiRef = useRef(null);
  const { launchConfetti } = useConfetti(confettiRef);

  return (
    <>
      {/* Confetti canvas — mounted at document level visually */}
      <ConfettiContainer ref={confettiRef} />

      <section
        id="celebrate"
        ref={sectionRef}
        className="reveal-section py-24 px-6 text-center relative overflow-hidden"
      >
        {/* Section heading */}
        <h2 className="section-title font-bebas">Make a Wish</h2>
        <p className="section-subtitle">Tap the cake to celebrate</p>

        {/* Interactive cake */}
        <BirthdayCake
          onClick={() => {
            stopAllAudio();
            launchConfetti();
            setTimeout(() => {
              playCelebrateSound();
            }, 200);
          }}
        />

        {/* Pulse hint text */}
        <p className="text-white/40 tracking-[0.2rem] text-sm uppercase mb-10 animate-pulse">
          Click the cake to unleash confetti!
        </p>

        {/* Wish card */}
        <div className="wish-box">
          <h3 className="font-bebas text-3xl text-marvel-gold tracking-wide mb-4">
            To Our Hero
          </h3>

          <p className="text-white/75 leading-[1.8] text-lg">
            <span className="text-marvel-gold font-bold">
              {BIRTHDAY_PERSON.name}
            </span>
            , on your special day, the entire team assembles to say — thank you
            for being the{" "}
            <span className="text-marvel-gold font-bold">Iron Man</span> of
            ideas, the{" "}
            <span className="text-white font-bold">Captain America</span> of
            integrity, and the{" "}
            <span className="text-marvel-blue font-bold">Thor</span> of
            confidence. You've powered us through every challenge like an Arc
            Reactor that never dims.
          </p>

          <p className="text-white/75 leading-[1.8] text-lg mt-5">
            May this year be your{" "}
            <span className="text-marvel-gold font-bold">Endgame victory</span>{" "}
            — filled with new adventures, epic wins, and moments worth
            assembling for. 🎉
          </p>

          <p className="text-white font-bold text-xl mt-6 font-rajdhani tracking-wider">
            Happy Birthday, Legend. ⚡
          </p>

          {/* CTA button */}
          <button
            onClick={() => {
              stopAllAudio();
              launchConfetti();
              setTimeout(() => {
                playCelebrateSound();
              }, 200);
            }}
          >
            ⚡ Assemble & Celebrate
          </button>
        </div>
      </section>
    </>
  );
}
export default CelebrateSection;
