import { useEffect, useRef } from "react";

function Thunder({ active }) {
  const flashRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const el = flashRef.current;
    if (!el) return;

    let t;
    const flash = () => {
      el.style.opacity = "1";
      setTimeout(() => {
        el.style.opacity = "0";
      }, 80);
      setTimeout(() => {
        el.style.opacity = "0.7";
      }, 150);
      setTimeout(() => {
        el.style.opacity = "0";
      }, 230);
      t = setTimeout(flash, Math.random() * 4000 + 3000);
    };
    t = setTimeout(flash, 1000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div
      ref={flashRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.08)",
        pointerEvents: "none",
        zIndex: 9990,
        opacity: 0,
        transition: "opacity 0.05s",
      }}
    />
  );
}
export default Thunder;