import { useEffect, useRef } from "react";

// Adds an IntersectionObserver that adds `reveal-visible` to any
// element carrying the `reveal` class.
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current
      ? ref.current.querySelectorAll(".reveal")
      : document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
