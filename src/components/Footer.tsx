import { identity } from "../data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#123529] bg-[#050a08]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-10">
        <div className="font-mono text-xs text-[#5c7a6e]">
          <span className="text-[#8aa79c]">moe@android-engineer</span>
          <span className="text-[#2affb3]">:#</span>
          <span className="text-[#d7e7e0]">~ demo — read-only</span>
          <span className="inline-block h-3 w-2 animate-pulse bg-[#2affb3]/70" />
        </div>

        <p className="max-w-md text-center font-mono text-[11px] leading-relaxed text-[#8aa79c]">
          "Code with culture. Build with purpose." — security engineered into Android
          products that scale to real users.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "GitHub", url: identity.github },
            { label: "LinkedIn", url: identity.linkedin },
            { label: "Email", url: `mailto:${identity.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#123529] px-3 py-1.5 font-mono text-xs text-[#8aa79c] transition hover:border-[#2affb3]/40 hover:text-[#2affb3]"
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[#5c7a6e]">
          <span className="text-[#2affb3]">©</span> MMXXVI · Moe Kyaw Aung · Secure by design
        </div>
      </div>
    </footer>
  );
}
