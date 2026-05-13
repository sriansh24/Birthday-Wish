import { useState, useEffect, useRef } from "react";
import "../../assets/css/NatureThemedBirthday/NatureThemedBirthday.css";
import BirthdayPerson from "../../assets/img/NatureThemeBirthday/beuda.png";
import BirthdaySong from "../../assets/birthday-song/BirthdayThemeSongs/happy-birthday-1.mp3";

// ============================================================
// PARTICLE SYSTEM - Fireflies & Leaves Background
// ============================================================
function Particles({ type = "fireflies" }) {
  const count = type === "fireflies" ? 30 : 20;
  return (
    <div className="particles-container">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={type === "fireflies" ? "firefly" : "leaf-particle"}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// SECTION 1 - LANDING PAGE: Glowing Seed & Countdown
// ============================================================
function LandingSection({ onNext }) {
  const [timeLeft, setTimeLeft] = useState({});
  const birthday = new Date("2025-12-31T00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = birthday - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section landing-section">
      <Particles type="fireflies" />

      {/* Soil ground */}
      <div className="soil-ground" />

      {/* Glowing Seed */}
      <div className="seed-wrapper">
        <div className="seed-glow-ring" />
        <div className="seed-glow-ring ring-2" />
        <div className="seed-body">
          <div className="seed-inner-shine" />
        </div>
        <p className="seed-label">A story begins…</p>
      </div>

      {/* Title */}
      <div className="landing-title-block">
        <h1 className="landing-title">Something Beautiful</h1>
        <h2 className="landing-subtitle">is about to bloom</h2>
      </div>

      {/* Countdown */}
      <div className="countdown-wrapper">
        <p className="countdown-label">Counting down to the special day</p>
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unit, val]) => (
            <div key={unit} className="countdown-cell">
              <span className="countdown-value">
                {String(val).padStart(2, "0")}
              </span>
              <span className="countdown-unit">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="cta-btn" onClick={onNext}>
        Begin the Journey ↓
      </button>
    </section>
  );
}

// ============================================================
// SECTION 2 - GROWING PLANT: Childhood Memories
// ============================================================
function GrowingPlantSection({ onNext }) {
  const memories = [
    {
      emoji: "🌱",
      title: "First Steps",
      text: "Every mighty tree starts as a tiny seed — just like you, curious and full of wonder.",
    },
    {
      emoji: "🎒",
      title: "School Days",
      text: "Backpack bigger than yourself, dreams even bigger — you were unstoppable from the start.",
    },
    {
      emoji: "🎨",
      title: "Creative Sparks",
      text: "Crayon masterpieces and afternoon adventures painted your world in every colour.",
    },
    {
      emoji: "⭐",
      title: "First Victories",
      text: "Gold stars, proud smiles, and lessons learned — each moment shaped who you are.",
    },
  ];

  return (
    <section className="section plant-section">
      <Particles type="leaves" />

      {/* Animated plant SVG */}
      <div className="plant-animation-wrapper">
        <svg
          viewBox="0 0 200 300"
          className="plant-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem */}
          <line
            x1="100"
            y1="290"
            x2="100"
            y2="60"
            stroke="#5a8a3a"
            strokeWidth="4"
            strokeLinecap="round"
            className="stem-line"
          />
          {/* Left leaf 1 */}
          <ellipse
            cx="70"
            cy="220"
            rx="30"
            ry="14"
            fill="#7bba52"
            className="leaf leaf-l1"
            transform="rotate(-30 70 220)"
          />
          {/* Right leaf 1 */}
          <ellipse
            cx="130"
            cy="190"
            rx="30"
            ry="14"
            fill="#8dcf5e"
            className="leaf leaf-r1"
            transform="rotate(30 130 190)"
          />
          {/* Left leaf 2 */}
          <ellipse
            cx="65"
            cy="155"
            rx="28"
            ry="12"
            fill="#7bba52"
            className="leaf leaf-l2"
            transform="rotate(-40 65 155)"
          />
          {/* Right leaf 2 */}
          <ellipse
            cx="135"
            cy="130"
            rx="28"
            ry="12"
            fill="#8dcf5e"
            className="leaf leaf-r2"
            transform="rotate(40 135 130)"
          />
          {/* Bud */}
          <ellipse
            cx="100"
            cy="65"
            rx="14"
            ry="20"
            fill="#e8a83e"
            className="bud"
          />
          <ellipse
            cx="100"
            cy="55"
            rx="10"
            ry="14"
            fill="#f5c96a"
            className="bud"
          />
        </svg>
      </div>

      <div className="section-header">
        <h2 className="section-title green-title">Roots & Beginnings</h2>
        <p className="section-sub">
          Every leaf holds a memory from the early days
        </p>
      </div>

      <div className="memories-grid">
        {memories.map((m, i) => (
          <div
            key={i}
            className="memory-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="memory-emoji">{m.emoji}</div>
            <h3 className="memory-title">{m.title}</h3>
            <p className="memory-text">{m.text}</p>
          </div>
        ))}
      </div>

      <button className="cta-btn green-btn" onClick={onNext}>
        Watch the tree grow ↓
      </button>
    </section>
  );
}

// ============================================================
// SECTION 3 - TREE: Strong Friendship
// ============================================================
function TreeSection({ onNext }) {
  const friends = [
    {
      avatar: "🌿",
      name: "Alex",
      message:
        "You are the oak in every storm — always standing tall for everyone around you.",
    },
    {
      avatar: "🍃",
      name: "Maya",
      message:
        "Years of laughter, secrets, and adventures. Our friendship is deep-rooted and forever.",
    },
    {
      avatar: "🌾",
      name: "Jordan",
      message:
        "From strangers to family — you make every place feel like home.",
    },
  ];

  return (
    <section className="section tree-section">
      <Particles type="leaves" />

      {/* Big Tree SVG */}
      <div className="tree-wrapper">
        <svg
          viewBox="0 0 300 320"
          className="tree-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Trunk */}
          <rect x="130" y="200" width="40" height="110" rx="8" fill="#7a5230" />
          {/* Bark lines */}
          <line
            x1="140"
            y1="210"
            x2="138"
            y2="300"
            stroke="#5a3a18"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="155"
            y1="215"
            x2="158"
            y2="295"
            stroke="#5a3a18"
            strokeWidth="2"
            opacity="0.5"
          />
          {/* Canopy layers */}
          <ellipse
            cx="150"
            cy="180"
            rx="95"
            ry="60"
            fill="#4a7c2f"
            className="canopy c3"
          />
          <ellipse
            cx="150"
            cy="150"
            rx="80"
            ry="55"
            fill="#5a9438"
            className="canopy c2"
          />
          <ellipse
            cx="150"
            cy="115"
            rx="65"
            ry="50"
            fill="#6db344"
            className="canopy c1"
          />
          <ellipse
            cx="150"
            cy="85"
            rx="48"
            ry="40"
            fill="#82cc52"
            className="canopy c0"
          />
          {/* Highlight */}
          <ellipse
            cx="135"
            cy="75"
            rx="22"
            ry="18"
            fill="#9ddd6a"
            opacity="0.4"
          />
          {/* Roots */}
          <path
            d="M130 305 Q110 320 85 315"
            stroke="#7a5230"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M170 305 Q190 320 215 315"
            stroke="#7a5230"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M150 308 Q148 325 145 330"
            stroke="#7a5230"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="section-header">
        <h2 className="section-title brown-title">The Strong Tree</h2>
        <p className="section-sub">Friendship that weathers every season</p>
      </div>

      <div className="friends-row">
        {friends.map((f, i) => (
          <div
            key={i}
            className="friend-card"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <div className="friend-avatar">{f.avatar}</div>
            <h3 className="friend-name">{f.name}</h3>
            <p className="friend-message">"{f.message}"</p>
          </div>
        ))}
      </div>

      <button className="cta-btn brown-btn" onClick={onNext}>
        See the blooms ↓
      </button>
    </section>
  );
}

// ============================================================
// SECTION 4 - BLOOM: Fun Memories & Floating Petals
// ============================================================
function BloomSection({ onNext }) {
  const funMemories = [
    { icon: "🎉", label: "The surprise party that wasn't so surprising" },
    { icon: "🏖️", label: "That chaotic beach trip we still laugh about" },
    { icon: "🎵", label: "Midnight karaoke with absolutely zero regrets" },
    { icon: "🍕", label: "The pizza challenge that took three hours" },
    { icon: "🎬", label: "Movie marathons that turned into sunrise sessions" },
    { icon: "🌈", label: "Dancing in the rain because why not" },
  ];

  return (
    <section className="section bloom-section">
      {/* Floating petals */}
      <div className="petals-container">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className={`petal petal-shape-${(i % 3) + 1}`}
            style={{
              left: `${(i * 6) % 100}%`,
              animationDelay: `${(i * 0.4) % 7}s`,
              animationDuration: `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Flower SVG */}
      <div className="flower-wrapper">
        <svg
          viewBox="0 0 200 200"
          className="flower-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="28"
              ry="50"
              fill={i % 2 === 0 ? "#f4a0c0" : "#f7c5d8"}
              opacity="0.85"
              transform={`rotate(${angle} 100 100)`}
              className="flower-petal-svg"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
          <circle cx="100" cy="100" r="24" fill="#f5c96a" />
          <circle cx="100" cy="100" r="14" fill="#e8a83e" />
          <circle cx="100" cy="100" r="7" fill="#d4902a" />
        </svg>
      </div>

      <div className="section-header">
        <h2 className="section-title bloom-title">In Full Bloom</h2>
        <p className="section-sub">
          The moments that made us cry from laughter
        </p>
      </div>

      <div className="fun-memories-grid">
        {funMemories.map((m, i) => (
          <div
            key={i}
            className="fun-memory-pill"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="fun-icon">{m.icon}</span>
            <span className="fun-label">{m.label}</span>
          </div>
        ))}
      </div>

      <button className="cta-btn bloom-btn" onClick={onNext}>
        See the grand finale ↓
      </button>
    </section>
  );
}

// ============================================================
// SECTION 5 - BIRTHDAY FINALE: Night Sky & Stars
// ============================================================
function BirthdaySection({ onRestart }) {
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowMessage(true), 800);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
    return () => {
      clearTimeout(t);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const wishes = [
    "May every dream you plant take root and grow.",
    "May laughter fill your days like sunlight fills the forest.",
    "May kindness return to you a thousandfold.",
    "May this year bloom beyond your wildest imagination.",
  ];

  return (
    <section className="section night-section">
      {/* Birthday Song */}
      <audio ref={audioRef} src={BirthdaySong} autoPlay />
      {/* Stars */}
      <div className="stars-bg">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 75}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="moon">
        <div className="moon-crater c1" />
        <div className="moon-crater c2" />
      </div>

      {/* Birthday Person's Image */}
      <div className="birthday-person-wrapper">
        <img
          src={BirthdayPerson}
          alt="birthday-person"
          className="birthday-person-image"
        />
      </div>

      {/* Shooting stars */}
      <div className="shooting-star s1" />
      <div className="shooting-star s2" />
      <div className="shooting-star s3" />

      {/* Silhouette tree */}
      <div className="silhouette-tree">
        <svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
          <rect x="88" y="160" width="24" height="90" rx="5" fill="#1a2a10" />
          <ellipse cx="100" cy="140" rx="65" ry="45" fill="#1a2a10" />
          <ellipse cx="100" cy="110" rx="52" ry="40" fill="#1f3314" />
          <ellipse cx="100" cy="82" rx="38" ry="32" fill="#1a2a10" />
        </svg>
      </div>

      {/* Happy Birthday text */}
      <div className={`birthday-message ${showMessage ? "show-message" : ""}`}>
        <p className="birthday-date-label">Today is your day</p>
        <h1 className="happy-birthday-text">
          {"Happy Birthday Ratikanta".split("").map((char, i) => (
            <span
              key={i}
              className="hb-char"
              style={{ animationDelay: `${0.8 + i * 0.07}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="birthday-divider">✦ ✦ ✦</div>
        <div className="wishes-list">
          {wishes.map((w, i) => (
            <p
              key={i}
              className="wish-item"
              style={{ animationDelay: `${1.8 + i * 0.2}s` }}
            >
              🌿 {w}
            </p>
          ))}
        </div>
        <div className="birthday-signature">
          <p>With love, always 🌸</p>
        </div>
      </div>

      <button className="cta-btn restart-btn" onClick={onRestart}>
        🌱 Relive the journey
      </button>
    </section>
  );
}

// ============================================================
// PROGRESS NAV DOTS
// ============================================================
function NavDots({ current, total, onDotClick }) {
  return (
    <div className="nav-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`nav-dot ${i === current ? "active-dot" : ""}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ============================================================
// ROOT APP
// ============================================================
function BirthdayWish() {
  const [section, setSection] = useState(0);
  const total = 5;

  const sections = [
    <LandingSection onNext={() => setSection(1)} />,
    <GrowingPlantSection onNext={() => setSection(2)} />,
    <TreeSection onNext={() => setSection(3)} />,
    <BloomSection onNext={() => setSection(4)} />,
    <BirthdaySection onRestart={() => setSection(0)} />,
  ];

  return (
    <div className="app-root">
      {sections[section]}
      <NavDots current={section} total={total} onDotClick={setSection} />
    </div>
  );
}
export default BirthdayWish;
