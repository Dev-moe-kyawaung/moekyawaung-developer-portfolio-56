import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { nav } from "../data";

function scrollProgress() {
  const doc = document.documentElement;
  const total = doc.scrollHeight - window.innerHeight;
  return total > 0 ? (window.scrollY / total) * 100 : 0;
}

export default function TerminalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [bar, setBar] = useState(0);
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setBar(scrollProgress());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(t);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-[#050a08]/85 border-b border-[#123529]/70 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.9)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      {/* scroll progress */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#0a1713]">
        <div
          className="h-full bg-gradient-to-r from-[#2affb3] to-[#2dd6ff] transition-[width] duration-150"
          style={{ width: `${bar}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        {/* logo / prompt */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-[#2affb3]/40 bg-[#0a1713] text-sm">
            <span className="font-mono text-[#2affb3]">{" >"}</span>
          </span>
          <span className="font-mono text-sm tracking-tight">
            <span className="text-[#5c7a6e]">moe</span>
            <span className="text-[#8aa79c]">@</span>
            <span className="text-[#d7e7e0]">android-engineer</span>
            <span className="text-[#2affb3]">{"$"}</span>
            <span className="ml-1 inline-block h-3.5 w-2 animate-pulse align-middle bg-[#2affb3]/70" />
          </span>
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative rounded-md px-3 py-1.5 text-[13px] font-medium text-[#8aa79c] transition-colors hover:bg-[#0d1d18] hover:text-[#2affb3]"
            >
              <span className="font-mono text-[#2dd6ff] opacity-70 transition group-hover:opacity-100">cd </span>
              {item.label}
              <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px scale-x-0 bg-gradient-to-r from-[#2affb3] to-transparent transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* right meta */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="font-mono text-xs text-[#5c7a6e]">
            <span className="text-[#2affb3]">●</span> online · {clock}
          </span>
          <button className="rounded-lg border border-[#123529] bg-[#0a1713] px-3 py-1.5 font-mono text-xs text-[#2affb3] transition hover:border-[#2affb3]/50 hover:bg-[#0d1d18]">
            ./status.sh
          </button>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#123529] text-[#2affb3] lg:hidden"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-b border-[#123529]/60 bg-[#050a08]/95 transition-all duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0 border-b-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm text-[#d7e7e0] transition hover:bg-[#0d1d18] hover:text-[#2affb3]"
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <span className="mr-2 font-mono text-xs text-[#2dd6ff]">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
              <span className="float-right font-mono text-[11px] text-[#5c7a6e]">{item.cmd}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
