// ─── Global Styles & Keyframes ────────────────────────────
// Injected once via <style> in App.jsx
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Orbitron:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; height: 100%; overflow: hidden; }

  :root {
    --neon-blue:     #00d4ff;
    --neon-blue-dim: rgba(0,212,255,0.3);
    --neon-blue-glow:rgba(0,212,255,0.6);
    --gold:          #ffd700;
  }

  /* ── Keyframes ── */
  @keyframes twinkle {
    0%,100% { opacity: 0.1;  }
    50%      { opacity: 0.85; }
  }
  @keyframes fallDown {
    0%   { transform: translateY(0) rotate(var(--angle,15deg)); opacity: 1; }
    100% { transform: translateY(var(--fall-dist,300px)) rotate(var(--angle,15deg)); opacity: 0; }
  }
  @keyframes framePulse {
    0%,100% { box-shadow: 0 0 20px var(--neon-blue-glow), 0 0 50px rgba(124,58,237,0.4); }
    50%      { box-shadow: 0 0 35px var(--neon-blue-glow), 0 0 80px rgba(124,58,237,0.6), 0 0 100px rgba(0,212,255,0.2); }
  }
  @keyframes giftGlow {
    0%,100% { box-shadow: 0 0 12px var(--neon-blue-dim), inset 0 0 10px rgba(0,212,255,0.05); }
    50%      { box-shadow: 0 0 28px var(--neon-blue-glow), 0 0 50px rgba(0,212,255,0.3), inset 0 0 16px rgba(0,212,255,0.1); }
  }
  @keyframes goldGlow {
    0%,100% { box-shadow: 0 0 12px rgba(255,215,0,0.3); }
    50%      { box-shadow: 0 0 28px rgba(255,215,0,0.7), 0 0 50px rgba(255,215,0,0.3); }
  }
  @keyframes rotate3d {
    0%   { transform: perspective(400px) rotateY(0deg);   }
    100% { transform: perspective(400px) rotateY(360deg); }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0);     }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes cakeFadeUp {
    0%   { opacity: 0; transform: translateY(80px); }
    100% { opacity: 1; transform: translateY(0);    }
  }
  @keyframes scrapFadeIn {
    0%   { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1);   }
  }
  @keyframes confettiFall {
    0%   { transform: translateY(0) rotateZ(0); opacity: 1; }
    100% { transform: translateY(var(--cf-dist,200px)) translateX(var(--cf-x,20px)) rotateZ(var(--cf-rot,720deg)); opacity: 0; }
  }
  @keyframes flicker {
    0%,100% { transform: scaleY(1)    scaleX(1);    }
    50%      { transform: scaleY(1.15) scaleX(0.85); }
  }

  /* ── Utility Classes ── */
  .star-static {
    position: absolute; border-radius: 50%; background: white; opacity: 0;
    animation: twinkle var(--dur,3s) ease-in-out infinite var(--delay,0s);
  }
  .fall-star {
    position: absolute; width: 2px; border-radius: 2px;
    background: linear-gradient(180deg, #fff 0%, rgba(180,220,255,0.8) 50%, transparent 100%);
    animation: fallDown var(--fall-dur,1s) ease-in forwards;
    pointer-events: none;
  }
  .nebula { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; }

  .anim-fade-down  { animation: fadeInDown  1.2s ease        both; }
  .anim-fade-up-1  { animation: fadeInUp    1.4s ease 0.3s   both; }
  .anim-fade-up-2  { animation: fadeInUp    1.4s ease 0.6s   both; }
  .anim-fade-up-3  { animation: fadeInUp    1.5s ease 0.8s   both; }
  .anim-fade-right { animation: fadeInRight 1.4s ease 0.4s   both; }

  /* ── Neon Frame (Profile Photo) ── */
  .name-gradient {
    background: linear-gradient(135deg, #fff 0%, var(--neon-blue) 40%, #a78bfa 70%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 0 20px rgba(0,212,255,0.5));
}
  .neon-frame {
    border-radius: 50%;
    background: linear-gradient(135deg, var(--neon-blue), #7c3aed, var(--neon-blue));
    padding: 3px;
    animation: framePulse 3.5s ease-in-out infinite;
    flex-shrink: 0;
  }
  .neon-frame-inner {
    width: 100%; height: 100%; border-radius: 50%;
    background: linear-gradient(135deg, #1a0a3d, #0a1a3d);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .neon-frame-inner img {
    width: 100%; height: 100%; object-fit: cover; object-position: center top; border-radius: 50%;
  }

  /* ── Buttons ── */
  .gift-btn {
    font-family: 'Orbitron', sans-serif;
    color: var(--neon-blue);
    border: 2px solid var(--neon-blue);
    background: rgba(0,212,255,0.06);
    border-radius: 50px; cursor: pointer;
    animation: giftGlow 2s ease-in-out infinite,
               rotate3d 6s linear infinite,
               fadeInUp 1.5s ease 0.8s both;
    transition: background 0.2s;
  }
  .gift-btn:hover { background: rgba(0,212,255,0.15); }

  .blow-btn {
    font-family: 'Orbitron', sans-serif;
    color: #ffd700; border: 2px solid #ffd700;
    background: rgba(255,215,0,0.06);
    border-radius: 50px; cursor: pointer;
    animation: goldGlow 2s ease-in-out infinite,
               rotate3d 6s linear infinite;
    transition: background 0.2s;
  }
  .blow-btn:hover { background: rgba(255,215,0,0.15); }

  /* ── Section Transitions ── */
  .cake-enter     { animation: cakeFadeUp  1s   ease both; }
  .scrapbook-enter{ animation: scrapFadeIn 1.2s ease both; }

  /* ── Confetti ── */
  .confetti-piece {
    position: absolute; width: 6px; height: 6px; border-radius: 1px; pointer-events: none;
    animation: confettiFall var(--cf-dur,2s) ease-out forwards var(--cf-delay,0s);
  }

  /* ── Memory Card ── */
  .memory-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px; padding: 10px 6px; text-align: center;
    transition: transform 0.2s, box-shadow 0.2s; cursor: default;
  }
  .memory-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,212,255,0.15);
  }
`;

export default globalStyles;
