import { experience } from "../data";
import { SectionHeader } from "./Section";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          cmd="cat resume.log --timeline"
          title="Experience"
          accent="#2dd6ff"
          sub="A focus outline rather than a laundry list — the three threads that today define how Moe ships software."
        />

        <div className="relative ml-2 border-l border-[#123529] pl-8 sm:pl-10">
          {experience.map((e, i) => (
            <article key={e.role} className="relative pb-10 last:pb-0">
              {/* node */}
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-[#2affb3]/50 bg-[#050a08] sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-[#2affb3] shadow-[0_0_10px_#2affb3]" />
              </span>
              <div className="mb-1 flex items-center gap-3 font-mono text-[11px]">
                <span className="text-[#2dd6ff]">
                  {String(i + 1).padStart(2, "0")} →
                </span>
                <span className="rounded-md border border-[#123529] bg-[#0a1713] px-2 py-0.5 text-[#2affb3]">
                  {e.period}
                </span>
                <span className="hidden text-[#5c7a6e] sm:inline">{e.org}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <p className="mb-3 font-mono text-xs text-[#5c7a6e] sm:hidden">{e.org}</p>
              <ul className="space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-[#8aa79c]">
                    <span className="mt-0.5 text-[#2affb3]">$</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* philosophy line */}
        <div className="reveal mt-10 flex items-center justify-between gap-4 rounded-2xl border border-[#2dd6ff]/20 bg-gradient-to-r from-[#0a1713]/60 to-transparent px-6 py-5">
          <div className="font-mono text-sm leading-relaxed text-[#9fc9b6]">
            <span className="text-[#2dd6ff]">"</span>
            Code with culture. Build with purpose.
            <span className="text-[#2dd6ff]">"</span>
            <span className="ml-2 text-[#5c7a6e]">— {""}moe.kt</span>
          </div>
          <span className="hidden font-mono text-[10px] text-[#5c7a6e] sm:block"># philosophy</span>
        </div>
      </div>
    </section>
  );
}
