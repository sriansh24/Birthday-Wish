import AvengersLogo from "../../components/MarvelThemedBirthday/AvengersLogo";
import ArcReactor from "../../components/MarvelThemedBirthday/ArcReactor";
import { BIRTHDAY_PERSON } from "../../constants/MarvelThemedBirthday/heroesData";

function HeroSection({ stopOpening, playScrollSound }) {
  const handleScrollDown = () => {
    const el = document.querySelector("#powers");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Radial red glow behind content */}
      <div
        aria-hidden="true"
        className="hero-glow absolute top-1/2 left-1/2 w-150 h-150 rounded-full animate-pulse-slow pointer-events-none"
      />

      {/* Avengers logo — drop-in */}
      <div className="animate-drop-in animation-fill-both mb-6 z-10">
        <AvengersLogo className="w-20 h-20" />
      </div>

      {/* Tagline */}
      <p className="tagline animate-fade-up animation-delay-300 animation-fill-both z-10">
        Earth's Mightiest Heroes Present
      </p>

      {/* Happy Birthday title */}
      <h1
        className="font-bebas text-gradient-white leading-none tracking-wide z-10 animate-fade-up animation-delay-500 animation-fill-both"
        style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
      >
        Happy Birthday
      </h1>

      {/* Birthday person name */}
      <h2
        className="font-bebas text-gradient-gold-red leading-none tracking-wide mb-10 z-10 animate-fade-up animation-delay-700 animation-fill-both"
        style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}
      >
        {BIRTHDAY_PERSON.name}
      </h2>

      {/* Arc Reactor */}
      <div className="mb-8 z-10 animate-fade-up animation-delay-900 animation-fill-both">
        <ArcReactor className="w-28 h-28" />
      </div>

      {/* Sub-message */}
      <p className="text-white/60 max-w-lg leading-relaxed text-lg mb-10 z-10 animate-fade-up animation-delay-1100 animation-fill-both">
        The Avengers have assembled to celebrate one of the greatest heroes —
        your mentor, your guide, your legend.
      </p>

      {/* Scroll hint */}
      <button
        onClick={() => {
          stopOpening(); // stop opening music
          playScrollSound(); // play Jarvis intro
          handleScrollDown(); // your existing scroll
        }}
        className="scroll-hint z-10 animate-fade-up animation-delay-1500 animation-fill-both bg-transparent border-none cursor-pointer"
        aria-label="Scroll down to powers section"
      >
        ▼ &nbsp; Scroll to continue &nbsp; ▼
      </button>
    </section>
  );
}
export default HeroSection;
