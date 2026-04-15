import { useState } from "react";
import HeroCard from "../../components/MarvelThemedBirthday/HeroCard.jsx";
import HeroModal from "../../components/MarvelThemedBirthday/HeroModal.jsx";
import { HEROES_DATA } from "../../constants/MarvelThemedBirthday/heroesData.js";
import { useScrollReveal } from "../../hooks/MarvelThemedBirthday/useScrollReveal.js";

function PowersSection() {
  const [selectedHero, setSelectedHero] = useState(null);
  const ref = useScrollReveal();

  return (
    <section
      id="powers"
      ref={ref}
      className="reveal-section py-24 px-6 text-center"
    >
      <div className="py-20 px-6 md:px-16 text-center">
        <h2 className="font-bebas text-4xl tracking-[0.3rem] text-white">
          His Superpowers
        </h2>

        <p className="text-[10px] tracking-[0.4rem] text-red-500 mt-2 uppercase">
          Every Hero Has Their Gifts
        </p>

        <div className="mt-14 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {HEROES_DATA.map((hero, i) => (
              <HeroCard key={i} hero={hero} onClick={() => setSelectedHero(hero)} />
            ))}
          </div>
        </div>
      </div>
      {selectedHero && (
        <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
      )}
    </section>
  );
}
export default PowersSection;
