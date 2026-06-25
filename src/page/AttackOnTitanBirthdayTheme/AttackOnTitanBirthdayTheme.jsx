import HeroSection from "../../components/AttackOnTitanBirthdayTheme/HeroSection";
import CharacterProfile from "../../components/AttackOnTitanBirthdayTheme/CharacterProfile";
import TimelineSection from "../../components/AttackOnTitanBirthdayTheme/TimelineSection";
import AchievementsSection from "../../components/AttackOnTitanBirthdayTheme/AchievementsSection";
import MemoryScrapbook from "../../components/AttackOnTitanBirthdayTheme/MemoryScrapbook";
import QuotesSection from "../../components/AttackOnTitanBirthdayTheme/QuotesSection";
import PathsRealm from "../../components/AttackOnTitanBirthdayTheme/PathsRealm";
import TitanPowerSection from "../../components/AttackOnTitanBirthdayTheme/TitanPowerSection";
import AchievementsWall from "../../components/AttackOnTitanBirthdayTheme/AchievementsWall";
import LetterSection from "../../components/AttackOnTitanBirthdayTheme/LetterSection";
import FinalSection from "../../components/AttackOnTitanBirthdayTheme/FinalSection";
import Footer from "../../components/AttackOnTitanBirthdayTheme/Footer";
import EasterEgg from "../../components/AttackOnTitanBirthdayTheme/EasterEgg";
import Thunder from "../../components/AttackOnTitanBirthdayTheme/Thunder";

function AttackOnTitanBirthdayTheme() {
  return (
    <main>
      <Thunder active={true} />
      <EasterEgg />
      <HeroSection />
      <CharacterProfile />
      <TimelineSection />
      <AchievementsSection />
      <MemoryScrapbook />
      <QuotesSection />
      <PathsRealm />
      <TitanPowerSection />
      <AchievementsWall />
      <LetterSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
export default AttackOnTitanBirthdayTheme;