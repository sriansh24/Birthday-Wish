import { useEffect, useRef } from "react";

function Cursor() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    let mouseX = 0,
      mouseY = 0;
    let glowX = 0,
      glowY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    let raf;
    const animate = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + "px";
      glow.style.top = glowY + "px";
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    const onEnterLink = () => {
      glow.style.width = "60px";
      glow.style.height = "60px";
    };
    const onLeaveLink = () => {
      glow.style.width = "20px";
      glow.style.height = "20px";
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="cursor-glow"
        style={{ width: 40, height: 40 }}
      />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
export default Cursor;