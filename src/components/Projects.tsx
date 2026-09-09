import { useState } from "react";
import { projects, caseStudies } from "../data";
import { SectionHeader } from "./Section";
import { cn } from "../utils/cn";

const accentMap: Record<string, string> = {
  green: "#2affb3",
  cyan: "#2dd6ff",
  amber: "#ffd166",
  magenta: "#c86bff",
};

export default function Projects() {
  const [active, setActive] = useState(caseStudies[0].id);

  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          cmd="ls ~/workspace --selected"
          title="Selected Projects"
          sub="Real products engineered end-to-end — with case studies that show how I balance performance, privacy and protection on every axis."
          accent="#2dd6ff"
        />

        {/* project tiles */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-[#123529] bg-gradient-to-b from-[#0d1d18]/70 to-[#08120f]/60 p-6 transition hover:-translate-y-1 hover:border-[#2affb3]/40 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 opacity-70"
                  style={{ background: `linear-gradient(90deg, ${a}, transparent)` }}
                />
                <div className="flex items-center justify-between">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg border font-mono text-xs font-semibold"
                    style={{ color: a, borderColor: "currentColor", background: "#08120f" }}
                  >
                    {p.title.slice(0, 1)}
                  </span>
                  <span className="rounded-md border border-[#123529] px-2 py-1 font-mono text-[10px] text-[#8aa79c]">
                    {p.metric}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#2affb3] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8aa79c]">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#123529] bg-[#0a1713] px-2 py-0.5 font-mono text-[10px] text-[#d7e7e0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 font-mono text-[11px]" style={{ color: a }}>
                  git ↗ view_repo <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </span>
              </a>
            );
          })}

          {/* all platforms tile */}
          <div className="reveal flex flex-col items-start justify-center rounded-2xl border border-dashed border-[#123529] bg-[#08120f]/30 p-6">
            <span className="font-mono text-3xl">▣</span>
            <h3 className="mt-3 text-lg font-semibold text-white">…and 40+ more repos</h3>
            <p className="mt-1 text-sm text-[#8aa79c]">
              PWA apps, weather, daily planners, stock & crypto trackers, admin dashboards,
              Vivo theme design and a LEGEND video player collection.
            </p>
            <a
              href="#repos"
              className="mt-4 rounded-lg border border-[#2dd6ff]/40 px-3 py-1.5 font-mono text-xs text-[#2dd6ff] transition hover:bg-[#2dd6ff]/10"
            >
              git clone --all ↓
            </a>
          </div>
        </div>

        {/* ===== Case Studies ===== */}
        <div className="mt-20 reveal">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#2dd6ff]">
                //── engineer — deep dives
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">Case Studies</h3>
            </div>
            <span className="font-mono text-xs text-[#5c7a6e]">select_scan → read_report</span>
          </div>

          {/* study tabs */}
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudies.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-lg border px-3.5 py-2 text-left font-mono text-xs transition",
                  active === c.id
                    ? "border-[#2affb3]/60 bg-[#2affb3]/10 text-[#2affb3]"
                    : "border-[#123529] bg-[#0a1713]/50 text-[#8aa79c] hover:border-[#2dd6ff]/40 hover:text-[#d7e7e0]"
                )}
              >
                <span className={cn("mr-2", active === c.id ? "text-[#2affb3]" : "text-[#5c7a6e]")}>
                  {active === c.id ? "●" : "○"}
                </span>
                {c.category}
              </button>
            ))}
          </div>

          {/* active study */}
          <div
            key={current.id}
            className="reveal-up mt-6 grid gap-6 rounded-2xl border border-[#123529] bg-gradient-to-br from-[#0d1d18]/80 to-[#060b09]/80 p-6 lg:grid-cols-[1fr_1.15fr] lg:p-8"
          >
            {/* left summary */}
            <div className="space-y-5 lg:border-r lg:border-[#123529] lg:pr-8">
              <div>
                <span className="rounded bg-[#2affb3]/10 px-2 py-0.5 font-mono text-[10px] tracking-widest text-[#2affb3]">
                  #{current.id}
                </span>
                <span className="ml-2 rounded border border-[#ffd166]/30 px-2 py-0.5 font-mono text-[10px] text-[#ffd166]">
                  {current.status}
                </span>
                <h4 className="mt-3 text-xl font-bold leading-snug text-white">
                  {current.title}
                </h4>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#2dd6ff]">
                  ▸ objective
                </div>
                <p className="mt-1 text-sm leading-relaxed text-[#8aa79c]">{current.objective}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#ffd166]">
                  ▸ challenge
                </div>
                <p className="mt-1 text-sm leading-relaxed text-[#8aa79c]">{current.challenge}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#2affb3]">
                  ▸ relevance
                </div>
                <p className="mt-1 rounded-lg border border-[#2affb3]/15 bg-[#2affb3]/[0.04] p-3 text-xs leading-relaxed text-[#9fc9b6]">
                  {current.relevance}
                </p>
              </div>
            </div>

            {/* right approach/outcome as terminal log */}
            <div className="overflow-hidden rounded-xl border border-[#123529] bg-[#050b08]">
              <div className="flex items-center gap-2 border-b border-[#123529] bg-[#08120f] px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-[#5c7a6e]">
                  report_{current.id}.log
                </span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-7">
                <p className="text-[#2dd6ff]">$ tail -f ./responses/{current.id}</p>
                <p className="text-[#5c7a6e]">=== APPROACH ===</p>
                <div className="space-y-1">
                  {current.approach.map((a, i) => (
                    <p key={i} className="flex gap-2 text-[#d7e7e0]">
                      <span className="text-[#2affb3]">[{(i + 1).toString().padStart(2, "0")}]</span>
                      {a}
                    </p>
                  ))}
                </div>
                <p className="mt-3 text-[#5c7a6e]">=== OUTCOME · MEASURED ===</p>
                <div className="space-y-1">
                  {current.outcome.map((o, i) => (
                    <p key={i} className="flex gap-2 text-[#2affb3]">
                      <span className="text-[#28c840]">✔</span>
                      {o}
                    </p>
                  ))}
                </div>
                <p className="mt-3 text-[#5c7a6e]"># insights recorded → architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
