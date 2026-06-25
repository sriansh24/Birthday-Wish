import { useEffect, useRef } from "react";

function EmberParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const embers = [];

    function createEmber() {
      const el = document.createElement("div");
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const drift = (Math.random() - 0.5) * 200;
      const hue = Math.random() > 0.5 ? "#F59E0B" : "#FFB703";

      el.style.cssText = `
        position: fixed;
        bottom: -10px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${hue};
        box-shadow: 0 0 ${size * 2}px ${hue};
        pointer-events: none;
        z-index: 50;
        --drift: ${drift}px;
        animation: ember-float ${duration}s linear forwards;
        opacity: 0.8;
      `;
      container.appendChild(el);
      embers.push(el);

      setTimeout(() => {
        el.remove();
        const idx = embers.indexOf(el);
        if (idx > -1) embers.splice(idx, 1);
      }, duration * 1000);
    }

    for (let i = 0; i < 40; i++) {
      setTimeout(() => createEmber(), Math.random() * 5000);
    }
    const interval = setInterval(createEmber, 400);

    return () => {
      clearInterval(interval);
      embers.forEach((e) => e.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}
export default EmberParticles;
