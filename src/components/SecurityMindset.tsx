import { securityPrinciples, secureStack } from "../data";
import { SectionHeader } from "./Section";

const chipColor: Record<string, string> = {
  STRIDE: "#2affb3",
  MITRE: "#2dd6ff",
  OWASP: "#ffd166",
  DEFAULT: "#c86bff",
};

export default function SecurityMindset() {
  return (
    <section id="security" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          cmd="run ./security.php?audit=full"
          title="Security Mindset"
          accent="#2affb3"
          sub="Before shipping a feature I ask one question: if this boundary is breached, what is genuinely exposed? Then I engineer the answer down to zero. This is how I build — security as a design constraint, not a checklist."
        />

        {/* principles grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {securityPrinciples.map((p, i) => (
            <article
              key={p.title}
              className="reveal group rounded-2xl border border-[#123529] bg-gradient-to-b from-[#0d1d18]/70 to-[#08120f]/50 p-6 transition hover:border-[#2affb3]/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#123529] bg-[#0a1713] text-xl">
                  {p.icon}
                </span>
                <span
                  className="rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-widest"
                  style={{
                    borderColor: "currentColor",
                    color: chipColor[p.tag] ?? chipColor.DEFAULT,
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8aa79c]">{p.body}</p>
              <div className="mt-4 font-mono text-[11px] text-[#5c7a6e]">
                <span className="text-[#2affb3]">$</span> threat_model --include {p.title.toLowerCase().replace(/\s+/g, "_")}
              </div>
            </article>
          ))}
        </div>

        {/* secure stack table panel */}
        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-[#123529]">
          <div className="flex items-center justify-between border-b border-[#123529] bg-[#08120f] px-5 py-3">
            <span className="font-mono text-xs text-[#8aa79c]">
              <span className="mr-2 text-[#2dd6ff]">$</span>cat ./controls.conf
            </span>
            <span className="font-mono text-[11px] text-[#2affb3]">
              <span className="pulse-dot">●</span> 6 protective layers active
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {secureStack.map((s) => (
              <div
                key={s.k}
                className="flex items-start justify-between gap-3 border-b border-[#123529]/60 px-5 py-4 transition-colors hover:bg-[#0a1713]/40"
              >
                <div>
                  <div className="font-mono text-sm font-medium text-[#d7e7e0]">
                    <span className="text-[#2affb3]">✓</span> {s.k}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-[#5c7a6e]">{s.detail}</div>
                </div>
                <span className="rounded-md bg-[#2affb3]/10 px-2 py-0.5 font-mono text-[10px] text-[#2affb3]">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
