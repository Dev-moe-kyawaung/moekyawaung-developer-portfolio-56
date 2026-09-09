import { certCategories, badgeCerts } from "../data";
import { SectionHeader } from "./Section";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          cmd="openssl verify --chain learnings.pem"
          title="Certifications"
          accent="#2affb3"
          sub="82+ certificates across 9 domains from Programming Hub and beyond — plus platform accreditations. Structured learning turned into production judgement."
        />

        {/* stats ribbon */}
        <div className="reveal mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "82+", v: "Certificates", c: "#2affb3" },
            { k: "9", v: "Disciplines", c: "#2dd6ff" },
            { k: "40+", v: "Of focus on Security", c: "#ffd166" },
            { k: "1", v: "Senior mind-set", c: "#c86bff" },
          ].map((s) => (
            <div
              key={s.v}
              className="flex items-center gap-3 rounded-xl border border-[#123529] bg-[#0a1713]/50 px-4 py-3"
            >
              <span className="font-mono text-2xl font-semibold" style={{ color: s.c }}>
                {s.k}
              </span>
              <span className="text-xs text-[#8aa79c]">{s.v}</span>
            </div>
          ))}
        </div>

        {/* categories */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal rounded-2xl border border-[#123529] bg-gradient-to-b from-[#0d1d18]/70 to-[#08120f]/50 p-5 transition hover:border-[#2affb3]/40"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#08120f] border border-[#123529] text-sm">
                    {cat.icon}
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-[#d7e7e0]">
                    {cat.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#2affb3]">{cat.count}</span>
              </div>
              <div className="mt-3 space-y-1 border-t border-[#123529]/50 pt-3">
                {cat.items.map((it) => (
                  <div key={it} className="flex items-start gap-2 font-mono text-[11px] text-[#8aa79c]">
                    <span className="text-[#2affb3]">✓</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 font-mono text-[10px] text-[#5c7a6e]">
                {cat.icon} {cat.name.toLowerCase().replace(/\s+/g, "_")}.cert
              </div>
            </div>
          ))}
        </div>

        {/* badges */}
        <div className="reveal mt-10">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-[#2dd6ff]">
            <span>//──</span> accreditation badges
          </div>
          <div className="flex flex-wrap gap-2">
            {badgeCerts.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-lg border border-[#123529] bg-[#0a1713] px-3 py-2 font-mono text-xs text-[#d7e7e0] transition hover:border-[#2affb3]/40 hover:text-[#2affb3]"
              >
                <span className="text-[#28c840]">🛡</span>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
