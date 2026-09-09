import { focus, toolbelt } from "../data";
import { SectionHeader, Panel } from "./Section";

const hueMap: Record<string, string> = {
  cyan: "#2dd6ff",
  green: "#2affb3",
  amber: "#ffd166",
  magenta: "#c86bff",
};

export default function AndroidEngineering() {
  return (
    <section id="engineering" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2affb3]/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          cmd="adb check-stack --clean-arch"
          title="Android Engineering"
          sub="From a single fragile activity to multi-module systems, I design for testability, scalability and security all at once. Kotlin-first, Compose-native, Clean Architecture by habit."
          accent="#2dd6ff"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="reveal">
            <Panel
              header={{
                left: "tech_focus.kt — declared focus areas",
                right: "//@Composable focus",
                dot: "#2dd6ff",
              }}
            >
              <div className="divide-y divide-[#123529]/60">
                {focus.map((f) => {
                  const c = hueMap[f.hue] ?? "#2affb3";
                  return (
                    <div key={f.domain} className="flex items-start gap-4 px-5 py-4">
                      <div className="flex flex-col items-center">
                        <span className="font-mono text-[10px]" style={{ color: c }}>
                          202
                        </span>
                        <span style={{ color: c }}>▎</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-semibold text-white">{f.domain}</h3>
                          <span
                            className="rounded font-mono text-[10px] tracking-widest"
                            style={{ color: c }}
                          >
                            {f.domain.toUpperCase().slice(0, 4)} ✦
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {f.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border px-2 py-0.5 font-mono text-[11px]"
                              style={{
                                color: "var(--ink-dim)",
                                borderColor: "var(--line)",
                                background: "rgba(255,255,255,0.02)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between border-t border-[#123529] px-5 py-3 font-mono text-[11px]">
                <span className="text-[#5c7a6e]">val stackStatus</span>
                <span className="text-[#2dd6ff]">ProductionReady()</span>
              </div>
            </Panel>
          </div>

          {/* Full toolbelt */}
          <div className="reveal flex flex-col gap-5">
            <Panel
              header={{
                left: "toolbelt.sh — skills matrix",
                right: "list · ls $-PATH",
              }}
            >
              <div className="p-5">
                <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-[#123529] bg-[#08120f] px-3 py-2">
                    <div className="font-mono text-[11px] text-[#5c7a6e]">core_lang</div>
                    <div className="text-[#d7e7e0]">Kotlin · Java</div>
                  </div>
                  <div className="rounded-lg border border-[#123529] bg-[#08120f] px-3 py-2">
                    <div className="font-mono text-[11px] text-[#5c7a6e]">ui_kit</div>
                    <div className="text-[#d7e7e0]">Jetpack Compose · M3</div>
                  </div>
                  <div className="rounded-lg border border-[#123529] bg-[#08120f] px-3 py-2">
                    <div className="font-mono text-[11px] text-[#5c7a6e]">backend</div>
                    <div className="text-[#d7e7e0]">Firebase · REST · Python</div>
                  </div>
                  <div className="rounded-lg border border-[#123529] bg-[#08120f] px-3 py-2">
                    <div className="font-mono text-[11px] text-[#5c7a6e]">securesys</div>
                    <div className="text-[#d7e7e0]">Keystore · App Check · Linux</div>
                  </div>
                </div>
                <p className="mb-2 font-mono text-[11px] text-[#5c7a6e]">
                  # full tool-belt — used across releases
                </p>
                <div className="max-h-[15rem] space-y-1 overflow-y-auto pr-2 font-mono text-[11px]">
                  {toolbelt.map((t, i) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="text-[#123529]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[#2affb3]">-</span>
                      <span className="text-[#d7e7e0]">{t}</span>
                      <span className="ml-auto text-[#2dd6ff]/50">∈ stack</span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            {/* compact principles code line */}
            <Panel header={{ left: "principles.md", right: "@Composable" }}>
              <div className="p-5 font-mono text-[13px] leading-7 text-[#8aa79c]">
                <p><span className="text-[#c86bff]">val</span> <span className="text-[#2dd6ff]">engineering</span> = <span className="text-[#2affb3]">"clean"</span></p>
                <p><span className="text-[#c86bff]">val</span> <span className="text-[#2dd6ff]">tests</span> = listOf(<span className="text-[#2affb3]">"unit"</span>, <span className="text-[#2affb3]">"instrumented"</span>)</p>
                <p><span className="text-[#c86bff]">val</span> <span className="text-[#2dd6ff]">ship</span> = ...<span className="text-[#2affb3]">// trusted release</span></p>
                <p><span className="text-[#c86bff]">val</span> <span className="text-[#2dd6ff]">margin</span> = <span className="text-[#2affb3]">"CI + build types"</span><span className="text-[#5c7a6e]">;</span></p>
                <p className="mt-2"><span className="text-[#5c7a6e]"># exit code</span></p>
                <p><span className="text-[#2affb3]">val deployment = Deploy(clean = true)</span><span className="tcursor" /></p>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}
