import { useState, useRef, useEffect } from "react";
import Surprise from "../../page/MidnightBirthdaySurprise/Surprise";
import CakeSection from "../../components/MidnightBirtdaySurprise/CakeSection";
import Scrapbook from "../../components/MidnightBirtdaySurprise/Scrapbook";
import Birthday_Girl from "../../assets/img/MidnightBirthdaySurprise/adyasha-satpathy.png";
import Birthday_Song from '../../assets/birthday-song/BirthdayThemeSongs/happy-birthday-1.mp3';
import "../../assets/css/MidnightBirthdaySurprise/SurpriseFlow.css";

function SurpriseFlow() {
  const [step, setStep] = useState("surprise");
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
    }
  }, []);
  // "surprise" → "cake" → "scrapbook"

  return (
    <>
    {/* Birthday Song */}
      <audio ref={audioRef}>
        <source src={Birthday_Song} type="audio/mpeg" />
      </audio>
      <div className={`surprise-flow-root step-${step}`}>
        {/* Birthday Person's Image */}
        <div className="birthday-image-frame">
          <img src={Birthday_Girl} alt="Birthday" />
        </div>
        {step === "surprise" && <Surprise onNext={() => setStep("cake")} />}

        {step === "cake" && <CakeSection onNext={() => setStep("scrapbook")} />}

        {step === "scrapbook" && <Scrapbook />}
      </div>
    </>
  );
}

export default SurpriseFlow;
