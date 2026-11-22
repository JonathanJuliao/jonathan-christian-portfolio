import { useEffect, useState } from "react";

export default function Effects() {
  const [progress, setProgress] = useState(0);
  const [point, setPoint] = useState({ x: -200, y: -200 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    const syncPointer = () => setFine(pointer.matches);
    syncPointer();
    pointer.addEventListener("change", syncPointer);

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    const onMove = (event) => setPoint({ x: event.clientX, y: event.clientY });

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      pointer.removeEventListener("change", syncPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      {fine && (
        <div
          className="cursor-glow"
          style={{ transform: `translate(${point.x - 180}px, ${point.y - 180}px)` }}
        />
      )}
    </>
  );
}
