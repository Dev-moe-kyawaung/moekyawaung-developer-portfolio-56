import { SectionHeader } from "./Section";
import { identity } from "../data";

const repos = [
  { name: "pulsesync-android", desc: "Multi-module offline-first sync platform · flagship", stars: "128", lang: "Kotlin", fork: false },
  { name: "video-player", desc: "Secure Media3 player · signed streams, DRM-aware caching", stars: "54", lang: "Kotlin", fork: false },
  { name: "POS-Ultimate-Pro-Max", desc: "Retail POS · RBAC, receipts, local-first sync", stars: "41", lang: "Kotlin", fork: false },
  { name: "social-dashboard", desc: "Channels console · OAuth tokens bound to Keystore", stars: "37", lang: "Kotlin", fork: false },
  { name: "game-collection", desc: "Compose game arcade with leaderboard auth", stars: "33", lang: "Kotlin", fork: false },
  { name: "pwa-app", desc: "Secure PWA installer · integrity-checked cache", stars: "30", lang: "TypeScript", fork: false },
  { name: "Job-Portal-App", desc: "Kotlin job board · role-scoped access", stars: "29", lang: "Kotlin", fork: false },
  { name: "weather-app", desc: "Location-safe weather, minimal permission surface", stars: "26", lang: "Kotlin", fork: false },
  { name: "thailand-travel", desc: "Travel guide · offline maps + secure sync", stars: "22", lang: "Kotlin", fork: false },
];

const langColor: Record<string, string> = {
  Kotlin: "#2affb3",
  TypeScript: "#2dd6ff",
  JavaScript: "#ffd166",
};

export default function GitHubRepos() {
  return (
    <section id="repos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          cmd="git log --contributors=me"
          title="GitHub Repositories"
          accent="#c86bff"
          sub="A public footprint built to be reviewed. Repos below represent production thinking — secure backends, clean modules and pipelines that ship trusted releases."
        />

        {/* header row */}
        <div className="reveal mb-4 flex items-center justify-between rounded-t-2xl border border-b-0 border-[#123529] bg-[#08120f] px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#123529] bg-[#0a1713] text-[#d7e7e0]">
              {/* github mark */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.6 4.6 0 0 1 5 5.7a4.3 4.3 0 0 1 .1-3.3s.9-.3 2.8 1.1a9.4 9.4 0 0 1 5 0C14.9 2.1 15.7 2.4 15.7 2.4a4.3 4.3 0 0 1 .1 3.3 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
              </svg>
            </span>
            <div>
              <div className="text-sm font-semibold text-white">{identity.githubHandle}</div>
              <div className="font-mono text-[11px] text-[#5c7a6e]">
                github.com/{identity.githubHandle}
              </div>
            </div>
          </div>
          <div className="hidden font-mono text-[11px] text-[#5c7a6e] sm:block">
            <span className="mr-4"><span className="text-[#ffd166]">★</span> featured</span>
            <span className="text-[#2affb3]">● 30+ public</span>
          </div>
        </div>

        {/* repo grid */}
        <div className="reveal grid gap-4 rounded-b-2xl border border-[#123529] bg-[#0a1713]/40 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <a
              key={r.name}
              href={`https://github.com/${identity.githubHandle}/${r.name}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-[#123529]/70 bg-[#08120f]/60 p-4 transition hover:border-[#c86bff]/50 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-22px_rgba(0,0,0,0.9)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-medium text-[#2dd6ff] group-hover:text-[#c86bff] transition-colors">
                  {r.name}
                </span>
                <span className="text-[#5c7a6e] text-xs">≣</span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#8aa79c]">{r.desc}</p>
              <div className="mt-3 flex items-center gap-3 font-mono text-[11px]">
                <span className="flex items-center gap-1 text-[#d7e7e0]">
                  <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: langColor[r.lang] ?? "#8aa79c" }} />
                  {r.lang}
                </span>
                <span className="flex items-center gap-1 text-[#ffd166]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor"><path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" /></svg>
                  {r.stars}
                </span>
                <span className="ml-auto text-[#5c7a6e]">public</span>
              </div>
            </a>
          ))}

          {/* clone all */}
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-[9rem] flex-col items-center justify-center rounded-xl border border-dashed border-[#c86bff]/40 bg-[#0f0a14]/40 p-4 text-center transition hover:bg-[#c86bff]/[0.05]"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#c86bff]" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="mt-2 text-sm font-medium text-[#c86bff]">git pull --all</div>
            <div className="mt-1 font-mono text-[11px] text-[#8aa79c]">
              40+ repos on {identity.githubHandle}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
