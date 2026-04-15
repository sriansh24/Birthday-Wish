import AvengersLogo from "../../components/MarvelThemedBirthday/AvengersLogo.jsx";
import { BIRTHDAY_PERSON } from "../../constants/MarvelThemedBirthday/heroesData.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <AvengersLogo className="w-6 h-6 opacity-50" />
        <span className="font-bebas text-base tracking-widest text-white/30">
          Avengers Initiative
        </span>
      </div>

      <p className="text-white/20 text-sm tracking-widest">
        Made with ❤️ for{" "}
        <span className="text-white/40">{BIRTHDAY_PERSON.name}</span> — {year}
      </p>
    </footer>
  );
}
export default Footer;
