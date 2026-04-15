import Navbar from "../../components/MarvelThemedBirthday/Navbar";
import StarField from "../../components/MarvelThemedBirthday/StarField";
import SectionDivider from "../../components/MarvelThemedBirthday/SectionDivider";
import Footer from "../../components/MarvelThemedBirthday/Footer";
import HeroSection from "../../components/MarvelThemedBirthday/HeroSection";
import PowersSection from "../../components/MarvelThemedBirthday/PowersSection";
import QuoteSection from "../../components/MarvelThemedBirthday/QuoteSection";
import CelebrateSection from "../../components/MarvelThemedBirthday/CelebrateSection";

function AvengersBase({
  stopOpening,
  playScrollSound,
  playCelebrateSound,
  stopAllAudio,
}) {
  return (
    <div className="relative bg-[#0a0a0f] min-h-screen">
      {/* Fixed background elements */}
      <StarField />
      <Navbar />

      {/* Page content — sits above starfield */}
      <main className="relative z-10 pt-16">
        <HeroSection
          stopOpening={stopOpening}
          playScrollSound={playScrollSound}
        />
        <SectionDivider />
        <PowersSection />
        <SectionDivider />
        <QuoteSection />
        <CelebrateSection
          playCelebrateSound={playCelebrateSound}
          stopAllAudio={stopAllAudio}
        />
      </main>

      <Footer />
    </div>
  );
}
export default AvengersBase;
