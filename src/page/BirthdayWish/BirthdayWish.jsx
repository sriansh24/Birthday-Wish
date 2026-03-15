import { useState, useEffect, useRef } from "react";

import personImage from "../../assets/img/ratnakar.png";
const BIRTHDAY_PERSON_IMAGE = personImage;
const BIRTHDAY_PERSON_NAME = "RATNAKAR";

const WISHES = [
  {
    id: 1,
    title: "Good Fortune",
    emoji: "🌟",
    quote:
      "May this year of yours or the upcoming year be filled with good fortune and bright opportunities.",
  },
  {
    id: 2,
    title: "Perfect Health and Vitality",
    emoji: "💚",
    quote:
      "I wish may you have a long, active life, free from disease and pain, with the mental strength and physical stamina to enjoy it.",
  },
  {
    id: 3,
    title: "A Wish for Adventures",
    emoji: "🧭",
    quote:
      "May your year and upcoming year ahead be packed with exciting adventures, fun discoveries, and endless happiness!",
  },
];

// ── Balloon ────────────────────────────────────────────────
function Balloon({ color, left, delay, size }) {
  return (
    <div
      className="absolute bottom-0 pointer-events-none select-none"
      style={{
        left: `${left}%`,
        animation: `floatBalloon ${7 + (left % 5)}s ${delay}s ease-in-out infinite alternate`,
      }}
    >
      <svg width={size} height={size * 1.2} viewBox="0 0 60 80">
        <ellipse cx="30" cy="28" rx="22" ry="26" fill={color} opacity="0.88" />
        <ellipse cx="22" cy="18" rx="7" ry="5" fill="white" opacity="0.25" />
        <path
          d="M30 54 Q28 60 30 66 Q32 60 30 54"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M30 66 Q20 72 15 80 Q25 76 30 66 Q35 76 45 80 Q40 72 30 66"
          stroke="#ccc"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// ── Confetti ───────────────────────────────────────────────
function ConfettiStrip({ color, left, delay, rotate }) {
  return (
    <div
      className="absolute top-0 pointer-events-none"
      style={{
        left: `${left}%`,
        width: 8,
        height: 22,
        backgroundColor: color,
        borderRadius: 3,
        transform: `rotate(${rotate}deg)`,
        animation: `fallConfetti ${6 + (left % 4)}s ${delay}s linear infinite`,
        opacity: 0.8,
      }}
    />
  );
}

// ── Ribbon ─────────────────────────────────────────────────
function Ribbon({ color, left, delay }) {
  return (
    <div
      className="absolute top-0 pointer-events-none"
      style={{
        left: `${left}%`,
        width: 4,
        height: 60,
        background: `linear-gradient(180deg, ${color} 0%, transparent 100%)`,
        borderRadius: 2,
        animation: `fallRibbon ${8 + (left % 4)}s ${delay}s ease-in-out infinite`,
        opacity: 0.75,
      }}
    />
  );
}

// ── Flame ──────────────────────────────────────────────────
function Flame({ blown }) {
  return (
    <div className="flex flex-col items-center" style={{ marginBottom: -2 }}>
      {!blown ? (
        <div
          style={{
            width: 10,
            height: 18,
            borderRadius: "50% 50% 30% 30%",
            background: "linear-gradient(180deg,#fff176,#ffb300,#ff6d00)",
            animation: "flicker 0.4s ease-in-out infinite alternate",
            filter: "blur(0.5px)",
            boxShadow: "0 0 8px 3px #ffb30088",
          }}
        />
      ) : (
        <div
          style={{
            width: 10,
            height: 4,
            borderRadius: 2,
            background: "#aaa",
            opacity: 0.5,
          }}
        />
      )}
    </div>
  );
}

// ── Cake ───────────────────────────────────────────────────
function Cake({ blown }) {
  return (
    <div className="flex flex-col items-center" style={{ userSelect: "none" }}>
      <div className="flex gap-3 mb-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <Flame blown={blown} />
            <div
              style={{
                width: 10,
                height: 36,
                borderRadius: 4,
                background: i % 2 === 0 ? "#f06292" : "#ba68c8",
                boxShadow: "inset -2px 0 4px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        ))}
      </div>
      {/* Top tier */}
      <div
        style={{
          width: "min(160px, 42vw)",
          height: 48,
          borderRadius: "12px 12px 0 0",
          background: "linear-gradient(135deg,#f8bbd0,#f48fb1)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 16,
            background:
              "repeating-linear-gradient(90deg,#fff 0px,#fff 12px,transparent 12px,transparent 24px)",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold opacity-70">
          ★ ★ ★
        </div>
      </div>
      {/* Middle tier */}
      <div
        style={{
          width: "min(200px, 52vw)",
          height: 56,
          background: "linear-gradient(135deg,#ce93d8,#ab47bc)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 14,
            background:
              "repeating-linear-gradient(90deg,#f8bbd0 0px,#f8bbd0 10px,transparent 10px,transparent 20px)",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-60 text-sm">
          🌸 🌸 🌸
        </div>
      </div>
      {/* Bottom tier */}
      <div
        style={{
          width: "min(250px, 64vw)",
          height: 64,
          borderRadius: "0 0 16px 16px",
          background: "linear-gradient(135deg,#80cbc4,#26a69a)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 16,
            background:
              "repeating-linear-gradient(90deg,#fff 0px,#fff 8px,transparent 8px,transparent 16px)",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm opacity-70">
          🎂 Happy Birthday 🎂
        </div>
      </div>
      {/* Plate */}
      <div
        style={{
          width: "min(280px, 72vw)",
          height: 14,
          borderRadius: "0 0 50% 50%",
          background: "linear-gradient(90deg,#b2dfdb,#80cbc4)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
}

// ── Party Popper ───────────────────────────────────────────
function PartyPopper({ side, active }) {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    angle: side === "left" ? 20 + i * 9 : 160 - i * 9,
    color: ["#f06292", "#ba68c8", "#4fc3f7", "#ffb300", "#66bb6a", "#ff7043"][
      i % 6
    ],
    dist: 60 + i * 4,
    size: 6 + (i % 4),
    delay: i * 0.03,
  }));

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        [side]: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5,
      }}
    >
      <div style={{ position: "relative", width: 100, height: 180 }}>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            [side === "left" ? "left" : "right"]: 10,
            width: 28,
            height: 56,
            borderRadius:
              side === "left" ? "50% 30% 10% 50%" : "30% 50% 50% 10%",
            background: "linear-gradient(135deg,#ffb300,#ff6d00)",
            transform: side === "left" ? "rotate(-30deg)" : "rotate(30deg)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
        {active &&
          particles.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "40%",
                  left: side === "left" ? "30%" : "70%",
                  width: p.size,
                  height: p.size,
                  borderRadius: i % 2 === 0 ? "50%" : "2px",
                  backgroundColor: p.color,
                  animation: `popParticle${side === "left" ? "L" : "R"} 1.2s ${p.delay}s ease-out infinite`,
                  "--tx": `${Math.cos(rad) * p.dist}px`,
                  "--ty": `${-Math.sin(rad) * p.dist}px`,
                  opacity: 0,
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

// ── Wind Overlay ───────────────────────────────────────────
function WindOverlay({ active, onDone }) {
  const lines = Array.from({ length: 8 }).map((_, i) => ({
    top: 30 + i * 6,
    width: 60 + i * 5,
    delay: i * 0.08,
    opacity: 0.4 + i * 0.05,
  }));

  useEffect(() => {
    if (active) {
      const t = setTimeout(onDone, 1800);
      return () => clearTimeout(t);
    }
  }, [active, onDone]);

  if (!active) return null;
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      style={{ zIndex: 50 }}
    >
      {lines.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${l.top}%`,
            left: 0,
            height: 4,
            width: `${l.width}%`,
            borderRadius: 4,
            background:
              "linear-gradient(90deg, transparent, #b3e5fc, #e1f5fe, transparent)",
            opacity: l.opacity,
            animation: `windLine 1.4s ${l.delay}s ease-in forwards`,
          }}
        />
      ))}
      <div
        style={{ fontSize: 48, animation: "windLine 1.4s ease-in forwards" }}
      >
        💨
      </div>
    </div>
  );
}

// ── Wish Modal ─────────────────────────────────────────────
function WishModal({ onSelect }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="rounded-3xl p-6 flex flex-col items-center gap-4 shadow-2xl w-full"
        style={{
          background: "linear-gradient(135deg,#1a0533 0%,#2d1b69 100%)",
          border: "2px solid rgba(255,255,255,0.15)",
          maxWidth: 480,
          animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div style={{ fontSize: 44 }}>🎁</div>
        <h2
          className="text-white font-bold text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.2rem, 5vw, 1.6rem)",
            letterSpacing: 1,
          }}
        >
          Choose Your Birthday Wish
        </h2>
        <p className="text-purple-200 text-sm text-center opacity-80">
          Pick one wish that resonates with your heart ✨
        </p>
        <div className="flex flex-col gap-3 w-full mt-1">
          {WISHES.map((w) => (
            <button
              key={w.id}
              onClick={() => onSelect(w)}
              className="w-full py-3 px-4 rounded-2xl text-left font-semibold cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                color: "white",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(13px, 3.5vw, 15px)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <span style={{ marginRight: 10 }}>{w.emoji}</span>
              {w.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────
function BirthdayWish() {
  const [stage, setStage] = useState("landing");
  const [windActive, setWindActive] = useState(false);
  const [blown, setBlown] = useState(false);
  const [selectedWish, setSelectedWish] = useState(null);
  const audioRef = useRef(null);

  const balloons = useRef(
    Array.from({ length: 18 }).map((_, i) => ({
      color: [
        "#f06292",
        "#ba68c8",
        "#4fc3f7",
        "#ffb300",
        "#66bb6a",
        "#ff7043",
        "#e91e63",
        "#7c4dff",
      ][i % 8],
      left: 2 + (i / 18) * 96,
      delay: (i * 0.4) % 3,
      size: 48 + (i % 3) * 16,
    })),
  ).current;

  const confettis = useRef(
    Array.from({ length: 35 }).map((_, i) => ({
      color: [
        "#f06292",
        "#ba68c8",
        "#4fc3f7",
        "#ffb300",
        "#66bb6a",
        "#ff7043",
        "#e040fb",
        "#00bcd4",
      ][i % 8],
      left: (i / 35) * 100,
      delay: (i * 0.18) % 5,
      rotate: ((i * 13) % 90) - 45,
    })),
  ).current;

  const ribbons = useRef(
    Array.from({ length: 20 }).map((_, i) => ({
      color: ["#f06292", "#ba68c8", "#4fc3f7", "#ffb300", "#66bb6a"][i % 5],
      left: (i / 20) * 100,
      delay: (i * 0.25) % 4,
    })),
  ).current;

  const handleGiftClick = () => {
    setStage("revealed");
    setTimeout(() => setStage("cake"), 3000);
  };

  const handleWindDone = () => {
    setWindActive(false);
    setBlown(true);
    setTimeout(() => setStage("wishModal"), 600);
  };

  const handleWishSelect = (wish) => {
    setSelectedWish(wish);
    setStage("done");
    if (audioRef.current) audioRef.current.pause();
  };

  useEffect(() => {
    if (stage === "cake" && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [stage]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { height: 100%; }

        body {
          font-family: 'Nunito', sans-serif;
          overflow-x: hidden;
          min-height: 100%;
          width: 100%;
        }

        #root {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        @keyframes floatBalloon {
          0%   { transform: translateY(0) rotate(-4deg); }
          100% { transform: translateY(-60px) rotate(4deg); }
        }
        @keyframes fallConfetti {
          0%   { transform: translateY(-30px) rotate(0deg); opacity: 0.9; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes fallRibbon {
          0%   { transform: translateY(-80px) scaleX(1); opacity: 0.8; }
          50%  { transform: translateY(50vh) scaleX(-1); opacity: 0.9; }
          100% { transform: translateY(110vh) scaleX(1); opacity: 0; }
        }
        @keyframes flicker {
          0%   { transform: scaleY(1) scaleX(1) rotate(-2deg); opacity: 1; }
          100% { transform: scaleY(1.18) scaleX(0.85) rotate(3deg); opacity: 0.85; }
        }
        @keyframes fadeSlideDown {
          0%   { opacity: 0; transform: translateY(-60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes windLine {
          0%   { transform: translateX(-120%); opacity: 0.8; }
          100% { transform: translateX(120vw); opacity: 0; }
        }
        @keyframes popParticleL {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0.3); opacity: 0; }
        }
        @keyframes popParticleR {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(calc(-1 * var(--tx)), var(--ty)) scale(0.3); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 24px 6px #f06292aa, 0 4px 32px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 40px 12px #ba68c8aa, 0 4px 32px rgba(0,0,0,0.3); }
        }
        @keyframes quoteReveal {
          0%   { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounceIn {
          0%   { transform: scale(0.3); opacity: 0; }
          60%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* 🎵 Place happy-birthday.mp3 inside public/ folder */}
      <audio ref={audioRef} loop>
        <source src="/happy-birthday.mp3" type="audio/mpeg" />
      </audio>

      {/* ── FULL SCREEN WRAPPER ── */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#1a0533 0%,#2d1b69 50%,#0d1b4b 100%)",
        }}
      >
        {/* Decorations */}
        {balloons.map((b, i) => (
          <Balloon key={`b${i}`} {...b} />
        ))}
        {confettis.map((c, i) => (
          <ConfettiStrip key={`c${i}`} {...c} />
        ))}
        {ribbons.map((r, i) => (
          <Ribbon key={`r${i}`} {...r} />
        ))}

        {/* ── LANDING ── */}
        {stage === "landing" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              zIndex: 10,
              padding: "0 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(48px,12vw,72px)",
                animation: "bounceIn 1s cubic-bezier(0.34,1.56,0.64,1) both",
              }}
            >
              🎉
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 6vw, 4rem)",
                color: "white",
                textShadow: "0 0 30px rgba(240,98,146,0.7)",
                letterSpacing: 2,
              }}
            >
              Someone Special's Day! 🎂
            </h1>
            <button
              onClick={handleGiftClick}
              style={{
                padding: "16px 40px",
                borderRadius: 999,
                fontSize: "clamp(15px, 4vw, 20px)",
                fontWeight: 800,
                fontFamily: "'Nunito', sans-serif",
                background: "linear-gradient(135deg,#f06292,#ba68c8,#4fc3f7)",
                color: "white",
                border: "none",
                cursor: "pointer",
                animation: "pulseGlow 2s ease-in-out infinite",
                letterSpacing: 1,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.07)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              🎁 Click for your gift
            </button>
          </div>
        )}

        {/* ── REVEALED + CAKE ── */}
        {(stage === "revealed" || stage === "cake") && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 10,
              width: "100%",
              padding: "20px 16px",
            }}
          >
            {/* Image + Name row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(16px, 5vw, 40px)",
                width: "100%",
                animation: "fadeSlideDown 1s ease both",
                flexWrap: "wrap",
                padding: "0 16px",
              }}
            >
              <img
                src={BIRTHDAY_PERSON_IMAGE}
                alt={BIRTHDAY_PERSON_NAME}
                style={{
                  width: "clamp(80px, 20vw, 140px)",
                  height: "clamp(80px, 20vw, 140px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "5px solid #f06292",
                  boxShadow: "0 0 30px rgba(240,98,146,0.6)",
                  flexShrink: 0,
                }}
              />
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
                  color: "white",
                  textShadow: "0 0 20px rgba(186,104,200,0.8)",
                  letterSpacing: 2,
                  textAlign: "center",
                }}
              >
                {BIRTHDAY_PERSON_NAME} 🌟
              </h2>
            </div>

            {/* Cake */}
            {stage === "cake" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                  position: "relative",
                  marginTop: "clamp(28px, 7vw, 56px)",
                  animation: "fadeSlideUp 1s ease both",
                  width: "100%",
                }}
              >
                <PartyPopper side="left" active={true} />
                <PartyPopper side="right" active={true} />
                <WindOverlay active={windActive} onDone={handleWindDone} />
                <Cake blown={blown} />
                {!blown && (
                  <button
                    onClick={() => setWindActive(true)}
                    style={{
                      marginTop: 16,
                      padding: "13px 36px",
                      borderRadius: 999,
                      fontSize: "clamp(14px, 4vw, 18px)",
                      fontWeight: 800,
                      fontFamily: "'Nunito', sans-serif",
                      background: "linear-gradient(135deg,#4fc3f7,#0288d1)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 0 20px rgba(79,195,247,0.5)",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.07)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    💨 Blow the Candles
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── WISH MODAL ── */}
        {stage === "wishModal" && <WishModal onSelect={handleWishSelect} />}

        {/* ── DONE ── */}
        {stage === "done" && selectedWish && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
              zIndex: 10,
              padding: "24px 20px",
              maxWidth: 640,
              width: "100%",
              animation: "quoteReveal 1s ease both",
              textAlign: "center",
            }}
          >
            <img
              src={BIRTHDAY_PERSON_IMAGE}
              alt={BIRTHDAY_PERSON_NAME}
              style={{
                width: "clamp(80px, 20vw, 110px)",
                height: "clamp(80px, 20vw, 110px)",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #f06292",
                boxShadow: "0 0 24px rgba(240,98,146,0.5)",
              }}
            />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 5vw, 3rem)",
                color: "white",
                textShadow: "0 0 20px rgba(186,104,200,0.8)",
                letterSpacing: 2,
              }}
            >
              {BIRTHDAY_PERSON_NAME} {selectedWish.emoji}
            </h2>
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: 24,
                padding: "24px clamp(16px, 5vw, 36px)",
                border: "1.5px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
                  color: "#f8f8ff",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  letterSpacing: 0.5,
                  textShadow: "0 0 10px rgba(186,104,200,0.4)",
                }}
              >
                "{selectedWish.quote}"
              </p>
            </div>
            <div style={{ fontSize: 36, animation: "bounceIn 0.8s ease both" }}>
              🎊🎂🎊
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.45)",
                fontSize: "clamp(0.75rem, 2vw, 1rem)",
                letterSpacing: 1,
                marginTop: 8,
              }}
            >
              Made by Sriansh
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export default BirthdayWish;
