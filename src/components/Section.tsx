import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function SectionHeader({
  cmd,
  title,
  sub,
  accent = "#2affb3",
}: {
  cmd: string;
  title: string;
  sub?: string | ReactNode;
  accent?: string;
}) {
  return (
    <div className="mb-10 reveal">
      <div className="inline-flex items-center gap-2 rounded-lg border border-[#123529] bg-[#0a1713]/70 px-3 py-1.5 font-mono text-xs">
        <span className="text-[#8aa79c]">$</span>
        <span className="text-[#2dd6ff]">{cmd}</span>
        <span className="h-3.5 w-1.5" style={{ background: accent }} />
      </div>
      <div className="mt-5 flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: accent }}>
          //──
        </span>
        <h2 className="text-[clamp(1.8rem,3.2vw,2.7rem)] font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {sub && <p className="reveal mt-4 max-w-2xl text-[#8aa79c]">{sub}</p>}
    </div>
  );
}

export function Panel({
  className,
  children,
  header,
}: {
  className?: string;
  children: ReactNode;
  header?: { left: string; right?: string; dot?: string };
}) {
  return (
    <div className={cn("code-card overflow-hidden", className)}>
      {header && (
        <div className="flex items-center gap-2 border-b border-[#123529] bg-[#08120f] px-4 py-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#1a3a2e]" />
          ))}
          <span className="ml-3 font-mono text-[11px] text-[#5c7a6e]">{header.left}</span>
          {header.right && (
            <span
              className="ml-auto font-mono text-[11px]"
              style={{ color: header.dot ?? "#2affb3" }}
            >
              {header.right}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
