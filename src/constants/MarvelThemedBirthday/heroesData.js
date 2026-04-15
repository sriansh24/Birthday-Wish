import CaptainAmerica from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-captain-america.png";
import IronMan from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-ironman.png";
import Hulk from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-hulk.png";
import Thor from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-thor.png";
import DoctorStrange from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-doctor-strange.png";
import Hawkeye from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/sandeep-sir-as-hawkeye.png";
import IronManHelmet from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/iron-man.png";
import Shield from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/shield.png";
import Hammer from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/thor-hammer.png";
import Brain from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/brain.png";
import BowArrow from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/bow-and-arrow.png";
import Magic from "../../assets/img/MarvelThemeBirthday-Sandeep-Sir/icons/magic.png";

export const BIRTHDAY_PERSON = {
  name: "Sandeep Saurav Das",
  firstName: "Sandeep",
};

export const HEROES_DATA = [
  {
    id: "captain",
    icon: Shield,
    name: "Mentor",
    trait: "Like Captain America",
    image: CaptainAmerica,
    color: "bg-marvel-red",
    borderColor: "border-marvel-red",
    barColor: "bg-marvel-red",
    hoverBorderClass: "hover:border-marvel-red",
    description:
      "Just like Captain America, you lead with integrity, guide others selflessly, and always stand strong for what is right. Your mentorship inspires confidence and courage in everyone around you.",
  },
  {
    id: "ironman",
    icon: IronManHelmet,
    name: "Visionary",
    trait: "Like Iron Man",
    image: IronMan,
    color: "bg-marvel-gold",
    borderColor: "border-marvel-gold",
    barColor: "bg-marvel-gold",
    hoverBorderClass: "hover:border-marvel-gold",
    description: "Genius-level thinking that powers every breakthrough. Like Iron Man, you dont just imagine the future — you build it. Your mind is your greatest weapon, constantly innovating, solving the impossible, and turning challenges into opportunities. With confidence, creativity, and relentless determination, you lead through intellect and vision, inspiring others to dream bigger and achieve beyond limits.",
  },
  {
    id: "hulk",
    icon: Brain,
    name: "Smart",
    trait: "Like Hulk",
    image: Hulk,
    color: "bg-marvel-dark-green",
    borderColor: "border-marvel-dark-green",
    barColor: "bg-marvel-dark-green",
    hoverBorderClass: "hover:border-marvel-dark-green",
    description: "Brilliant at heart and powerful in action, just like Hulk, your intelligence goes far beyond the surface. You possess a deep understanding of situations, paired with the strength to act when it matters most. Your mind is calm, thoughtful, and capable — even in chaos — allowing you to solve problems others find overwhelming. With a perfect balance of wisdom and strength, you prove that true power comes from control, clarity, and inner resilience.",
  },
  {
    id: "thor",
    icon: Hammer,
    name: "Leader",
    trait: "Like Thor Odinson",
    image: Thor,
    color: "bg-marvel-blue",
    borderColor: "border-marvel-blue",
    barColor: "bg-marvel-blue",
    hoverBorderClass: "hover:border-marvel-blue",
    description: "Commands with thunder, inspires with every word. Like Thor, you lead with strength, honor, and unwavering courage. Your presence is powerful, yet your leadership is rooted in wisdom and responsibility. You uplift those around you, guiding them through challenges with confidence and clarity. Just as thunder echoes across the skies, your influence leaves a lasting impact — bold, fearless, and truly inspiring.",
  },
  {
    id: "hawkeye",
    icon: BowArrow,
    name: "High—Aim",
    trait: "Like Hawkeye",
    image: Hawkeye,
    color: "bg-marvel-purple",
    borderColor: "border-marvel-purple",
    barColor: "bg-marvel-purple",
    hoverBorderClass: "hover:border-marvel-purple",
    description: "Precise in focus and unmatched in accuracy, just like Hawkeye, you have a clear vision that never wavers. You stay calm under pressure, making the right decisions when it matters most. Your ability to aim high and hit your goals with consistency sets you apart. With discipline, patience, and sharp instinct, you prove that true strength lies not in power, but in precision and control.",
  },
  {
    id: "strange",
    icon: Magic,
    name: "Wisdom",
    trait: "Like Doctor Strange",
    image: DoctorStrange,
    color: "bg-marvel-purple",
    borderColor: "border-marvel-purple",
    barColor: "bg-marvel-purple",
    hoverBorderClass: "hover:border-marvel-purple",
    description: "Master of insight — always sees what others miss. Like Doctor Strange, your wisdom goes beyond the obvious, allowing you to understand deeper truths and hidden possibilities. You approach every situation with clarity, intuition, and a calm mind, guiding others through uncertainty with confidence. Your ability to think ahead, adapt, and make the right decisions at the right moment makes you a true guardian of knowledge and vision.",
  },
];

export const CONFETTI_COLORS = [
  "#C60000",
  "#FFD700",
  "#1A8CFF",
  "#7B2FBE",
  "#ffffff",
  "#00C896",
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Powers", href: "#powers" },
  { label: "Quote", href: "#quote" },
  { label: "Celebrate", href: "#celebrate" },
];
