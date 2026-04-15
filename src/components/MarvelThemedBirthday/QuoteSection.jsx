import { useScrollReveal } from "../../hooks/MarvelThemedBirthday/useScrollReveal";
import { BIRTHDAY_PERSON } from "../../constants/MarvelThemedBirthday/heroesData";

function QuoteSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="quote"
      ref={ref}
      className="reveal-section py-28 px-6 flex justify-center bg-linear-to-b from-[#140000] via-[#0b0f1a] to-[#140000] border-y border-[#3a0000]"
    >
      <div className="max-w-4xl text-center">

        {/* TOP THIN LINE */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-red-700 to-transparent mb-10" />

        {/* QUOTE */}
        <h2
          className="
            font-rajdhani
            text-4xl md:text-6xl
            leading-tight
            tracking-wide
            bg-linear-to-r from-yellow-400 via-orange-500 to-red-600
            bg-clip-text text-transparent
            drop-shadow-[0_0_20px_rgba(255,120,0,0.4)]
          "
        >
          “PART OF THE JOURNEY IS THE END — BUT YOUR STORY IS FAR FROM OVER,
          <span className="text-red-500"> {BIRTHDAY_PERSON.firstName} Sir</span>.”
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-xs tracking-[0.4rem] text-gray-500 uppercase">
          — The Avengers | Your Team
        </p>
      </div>
    </section>
  );
}

export default QuoteSection;