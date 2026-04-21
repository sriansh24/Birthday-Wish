import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/MidnightBirthdaySurprise/Landing.css";

function MidnightBirthdaySurprise({ onEnter }) {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [fallingStars, setFallingStars] = useState([]);
  const counterRef = useRef(0);

  // Starfield canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3,
      alpha: Math.random(),
      delta: (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.delta;
        if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Falling stars every 2-3s
  useEffect(() => {
    const spawn = () => {
      const id = counterRef.current++;
      const star = {
        id,
        left: Math.random() * 90 + 5,
        duration: Math.random() * 1.5 + 1.5,
        size: Math.random() * 3 + 2,
        delay: 0,
      };
      setFallingStars((prev) => [...prev, star]);
      setTimeout(
        () => {
          setFallingStars((prev) => prev.filter((s) => s.id !== id));
        },
        (star.duration + 0.5) * 1000,
      );

      const next = Math.random() * 1500 + 1500;
      setTimeout(spawn, next);
    };
    const t = setTimeout(spawn, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="landing-root">
      <canvas ref={canvasRef} className="starfield-canvas" />

      {/* Falling Stars */}
      {fallingStars.map((s) => (
        <div
          key={s.id}
          className="falling-star"
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size * 18}px`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Moon glow */}
      <div className="moon" />

      {/* Center content */}
      <div className="landing-content">
        <p className="landing-sub">✨ A Midnight Surprise ✨</p>
        <h1 className="landing-title">
          Someone's
          <br />
          Special Day
        </h1>
        <p className="landing-tagline">The stars aligned just for tonight</p>

        <button
          className="star-btn"
          onClick={() => {
            const audio = new Audio();
            audio.play().catch(() => {});
            navigate("/surprise-adyasha");
          }}
          aria-label="Click for your gift"
        >
          <svg viewBox="0 0 120 120" className="star-svg">
            <polygon
              points="60,5 72,42 110,42 80,65 91,102 60,80 29,102 40,65 10,42 48,42"
              className="star-polygon"
            />
          </svg>
          <span className="star-btn-text">Click For Your Gift</span>
        </button>
      </div>

      {/* Floating orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
    </div>
  );
}
export default MidnightBirthdaySurprise;
