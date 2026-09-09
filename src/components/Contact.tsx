import { useState } from "react";
import { SectionHeader } from "./Section";
import { identity, socials } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;
    setSent(true);
    // mailto fall-through for real composition
    window.location.href = `mailto:${identity.email}?subject=from ${encodeURIComponent(
      form.name || "portfolio"
    )}&body=${encodeURIComponent(form.msg)}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          cmd="nc moe.kyaung 443 --say=hi"
          title="Open a Secure Channel"
          accent="#2affb3"
          sub={
            <>
              Based in {identity.locationMatch} 🇲🇲↔🇹🇭. Open to senior Android roles,
              security-conscious teams and remote collaborate-first builds.
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form panel as term */}
          <div className="reveal overflow-hidden rounded-2xl border border-[#123529]">
            <div className="flex items-center gap-2 border-b border-[#123529] bg-[#08120f] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-[#5c7a6e]">
                moe@secure-host:~/contact
              </span>
              <span className="ml-auto font-mono text-[11px] text-[#2affb3]">
                <span className="pulse-dot">●</span> ready
              </span>
            </div>

            {sent ? (
              <div className="space-y-3 p-8">
                <p className="font-mono text-lg text-[#2affb3] glow-green">
                  ✔ transmission encrypted & queued
                </p>
                <p className="font-mono text-sm text-[#8aa79c]">
                  Your compose window opened. If your mail client didn’t launch, reach me
                  directly at:
                </p>
                <a
                  href={`mailto:${identity.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2affb3]/40 px-4 py-2 font-mono text-sm text-[#2affb3] hover:bg-[#2affb3]/10"
                >
                  {identity.email} ↗
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5 p-6">
                <div className="font-mono text-xs text-[#5c7a6e]">
                  <span className="text-[#2dd6ff]">$</span> ./init_contact.sh
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[11px] text-[#8aa79c]">
                      name<span className="text-[#2affb3]">_callsign</span>
                    </span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Jane · your_handle"
                      className="w-full rounded-lg border border-[#123529] bg-[#050a08] px-3 py-2.5 font-mono text-sm text-white placeholder-[#3b544a] outline-none transition focus:border-[#2affb3]/60 focus:ring-2 focus:ring-[#2affb3]/15"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[11px] text-[#8aa79c]">
                      return<span className="text-[#2dd6ff]">@addr</span>
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="you@domain.com"
                      className="w-full rounded-lg border border-[#123529] bg-[#050a08] px-3 py-2.5 font-mono text-sm text-white placeholder-[#3b544a] outline-none transition focus:border-[#2affb3]/60 focus:ring-2 focus:ring-[#2affb3]/15"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[11px] text-[#8aa79c]">
                    payload<span className="text-[#2dd6ff]">_message</span>
                  </span>
                  <textarea
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    required
                    rows={4}
                    placeholder="Let's talk about your Android team / threat model / release…"
                    className="w-full resize-none rounded-lg border border-[#123529] bg-[#050a08] px-3 py-2.5 font-mono text-sm text-white placeholder-[#3b544a] outline-none transition focus:border-[#2affb3]/60 focus:ring-2 focus:ring-[#2affb3]/15"
                  />
                </label>
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="group rounded-xl border border-[#2affb3]/60 bg-[#2affb3]/10 px-5 py-2.5 font-mono text-sm font-semibold text-[#2affb3] transition hover:bg-[#2affb3]/20"
                  >
                    <span className="mr-1 text-[#2dd6ff]">&gt;</span> send_packet()
                    <span className="inline-block text-[#2affb3] transition-transform group-hover:translate-x-0.5"> →</span>
                  </button>
                  <span className="font-mono text-[11px] text-[#5c7a6e]">
                    TLS enforced · no tracking pixels
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* contact info + socials */}
          <div className="space-y-5">
            <div className="reveal rounded-2xl border border-[#123529] bg-[#0a1713]/50 p-6">
              <p className="font-mono text-[11px] text-[#5c7a6e]">$ cat identity.rc</p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-[#123529]/60 pb-3">
                  <span className="font-mono text-xs text-[#8aa79c]">email</span>
                  <a href={`mailto:${identity.email}`} className="font-mono text-[#2dd6ff] hover:underline">
                    {identity.email}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-[#123529]/60 pb-3">
                  <span className="font-mono text-xs text-[#8aa79c]">phone1</span>
                  <span className="font-mono text-[#d7e7e0]">{identity.phone[0]}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#123529]/60 pb-3">
                  <span className="font-mono text-xs text-[#8aa79c]">phone2</span>
                  <span className="font-mono text-[#d7e7e0]">{identity.phone[1]}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#123529]/60 pb-3">
                  <span className="font-mono text-xs text-[#8aa79c]">location</span>
                  <span className="text-right text-[#d7e7e0]">Tachileik 🇲🇲 ↔ Bangkok 🇹🇭</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8aa79c]">languages</span>
                  <span className="font-mono text-[#2affb3]">{"{ 🇲🇲 🇬🇧 ☕ }"}</span>
                </div>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-2xl border border-[#123529] bg-[#0a1713]/40">
              <div className="border-b border-[#123529] px-5 py-3 font-mono text-[11px] text-[#5c7a6e]">
                <span className="text-[#2dd6ff]">$</span> whoami --social
              </div>
              <div className="grid grid-cols-1 divide-y divide-[#123529]/50">
                {socials.slice(0, 6).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between px-5 py-3 transition hover:bg-[#080f0c]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#2affb3]">⌁</span>
                      <span className="text-sm font-medium text-[#d7e7e0] group-hover:text-[#2affb3]">
                        {s.name}
                      </span>
                    </span>
                    <span className="font-mono text-[11px] text-[#5c7a6e]">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
