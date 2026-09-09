import { useEffect, useState } from "react";
import { identity, stats } from "../data";

const sublines = ["kotlin android engineer --compiler secure", "firebase hardened · keystore first"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [line, setLine] = useState(0);
  const full = "Engineering secure Android products that scale.";

  // type once, then keep steady with a blinking cursor
  useEffect(() => {
    if (typed.length >= full.length) return;
    const t = setTimeout(() => {
      setTyped(full.slice(0, typed.length + 1));
    }, 26);
    return () => clearTimeout(t);
  }, [typed, full]);

  // terminal sub-line cycle
  useEffect(() => {
    const t = setInterval(() => setLine((l) => (l + 1) % sublines.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#2affb3]/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[#2dd6ff]/10 blur-[150px]" />

      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left: copy */}
        <div>
          {/* terminal window: avatar + identity header */}
          <div className="mb-6 overflow-hidden rounded-xl border border-[#123529] bg-[#0a1713]/80 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-[#123529] bg-[#08120f] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-[#5c7a6e]">
                moe@secure-host: ~/intro — zsh
              </span>
              <span className="ml-auto font-mono text-[11px] text-[#2affb3]/70">EST. 2026</span>
            </div>
            <div className="flex items-center gap-5 px-5 py-6 sm:gap-7">
              <div className="relative shrink-0">
                <div className="border-grad h-24 w-24 overflow-hidden rounded-full bg-[#08120f] p-[3px] sm:h-28 sm:w-28">
                  <img
                    src={identity.profilePic}
                    alt="Moe Kyaw Aung"
                    className="h-full w-full rounded-full object-cover ring-1 ring-[#2affb3]/30"
                    loading="eager"
                  />
                </div>
                <span className="pulse-dot absolute -bottom-0.5 -right-0.5 grid h-7 w-7 place-items-center rounded-full border-2 border-[#0a1713] bg-[#0a1713]">
                  <span className="block h-3 w-3 rounded-full bg-[#2affb3] shadow-[0_0_12px_#2affb3]" />
                </span>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#2dd6ff]">
                  $ whoami
                </p>
                <h1 className="mt-1 font-semibold text-2xl leading-tight text-white sm:text-3xl">
                  {identity.name}
                </h1>
                <p className="font-mono text-xs text-[#8aa79c]">
                  Burmese: <span className="text-[#2affb3]">{identity.burmese}</span>
                </p>
                <p className="mt-2 text-sm font-medium text-[#2affb3]">{identity.role}</p>
              </div>
            </div>
          </div>

          {/* headline */}
          <h2 className="text-[clamp(2rem,4.6vw,3.9rem)] font-bold leading-[1.05] tracking-tight text-white">
            {typed}
            <span className="cursor-block" />
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#8aa79c]">
            {identity.fullName} builds and hardens Android products from architecture to
            release — Kotlin, Jetpack Compose, Firebase security and beyond. I treat the
            device as a boundary and ship software that respects it.
          </p>

          {/* focus chips row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
            <span className="text-[#2dd6ff]">→</span>
            <span className="text-[#5c7a6e]">cat</span>
            <span className="text-[#d7e7e0]">
              {identity.currentlyBuilding}
              <span className="tcursor" />
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative rounded-xl border border-[#2affb3]/50 bg-[#2affb3]/10 px-5 py-3 text-sm font-semibold text-[#2affb3] transition hover:bg-[#2affb3]/20"
            >
              <span className="mr-2 font-mono">$</span> inspect work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[#123529] bg-[#0a1713] px-5 py-3 text-sm font-semibold text-[#d7e7e0] transition hover:border-[#2dd6ff]/50 hover:text-[#2dd6ff]"
            >
              <span className="mr-2 font-mono text-[#2dd6ff]">./</span>contact.sh
            </a>
          </div>

          {/* secondary commands line */}
          <div className="mt-6 space-y-1 font-mono text-xs text-[#5c7a6e]">
            <p>
              <span className="text-[#2affb3]">✔</span> status: open to work ·{" "}
              <span className="text-[#8aa79c]">{identity.locationMatch}</span>
            </p>
            <p>
              <span className="text-[#2dd6ff]">$</span> echo "{identity.philosophy}"
            </p>
            <p className="pl-5 text-[#2affb3] tip">{identity.philosophy}</p>
          </div>
        </div>

        {/* right: command panel + stats */}
        <div className="space-y-5">
          <div className="code-card overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-[#123529] bg-[#08120f] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-[#5c7a6e]">
                moe@secure-host:~ — session
              </span>
              <span className="ml-auto font-mono text-[11px] text-[#2dd6ff]">{sublines[line]}</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              <p><span className="text-[#8aa79c]">moe@secure-host</span><span className="text-[#5c7a6e]">:~</span><span className="text-[#2affb3]">$</span> <span className="text-[#d7e7e0]">uname --role</span></p>
              <p><span className="text-[#2affb3]">senior-android-developer</span></p>
              <p className="mt-2"><span className="text-[#8aa79c]">moe@secure-host</span><span className="text-[#5c7a6e]">:~</span><span className="text-[#2affb3]">$</span> <span className="text-[#d7e7e0]">echo $TRUST_BOUNDARY</span></p>
              <p><span className="text-[#2dd6ff]">device-browser → app-process → secure-cloud</span></p>
              <p className="mt-2"><span className="text-[#8aa79c]">moe@secure-host</span><span className="text-[#5c7a6e]">:~</span><span className="text-[#2affb3]">$</span> <span className="text-[#d7e7e0]">encrypt --all --keys /keystore</span></p>
              <p><span className="text-[#2affb3]">[ok] sealed keys · transport pinned</span></p>
              <p className="mt-2"><span className="text-[#8aa79c]">moe@secure-host</span><span className="text-[#5c7a6e]">:~</span><span className="text-[#2affb3]">$</span> <span className="text-[#d7e7e0]">deploy --ci github-actions</span></p>
              <p className="status-bar"><span className="text-[#ffd166]">▮ building release 3.2.1 …</span></p>
              <p className="mt-2"><span className="text-[#8aa79c]">moe@secure-host</span><span className="text-[#5c7a6e]">:~</span><span className="text-[#2affb3]">$</span> <span className="text-[#d7e7e0]">{"{"} scan: clean · 0 critical {"}"}</span><span className="tcursor" /></p>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[#123529] bg-[#0a1713]/60 px-4 py-3 backdrop-blur transition hover:border-[#2affb3]/40"
              >
                <div className="font-mono text-2xl font-semibold text-[#2affb3] glow-green">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-[#d7e7e0]">{s.label}</div>
                <div className="text-[11px] text-[#5c7a6e]">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#security"
        className="pointer-events-auto mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#123529] px-4 py-1.5 font-mono text-xs text-[#5c7a6e] transition hover:text-[#2affb3]"
      >
        scroll to audit <span className="text-[#2affb3]">↓</span>
      </a>
    </section>
  );
}
