import { useReveal } from "./hooks/useReveal";
import TerminalNav from "./components/TerminalNav";
import Hero from "./components/Hero";
import SecurityMindset from "./components/SecurityMindset";
import AndroidEngineering from "./components/AndroidEngineering";
import Projects from "./components/Projects";
import GitHubRepos from "./components/GitHubRepos";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const ref = useReveal();

  return (
    <main ref={ref} className="grid-bg relative min-h-screen overflow-hidden">
      <TerminalNav />

      <div id="scaffold">
        <Hero />
        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="SEC / MIND" />
        </div>
        <SecurityMindset />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="ANDROID / ENGINEERING" />
        </div>
        <AndroidEngineering />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="WORK / CASE STUDIES" />
        </div>
        <Projects />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="GITHUB / REPOSITORIES" />
        </div>
        <GitHubRepos />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="CREDENTIALS / CERTS" />
        </div>
        <Certifications />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="RESUME / EXPERIENCE" />
        </div>
        <Experience />

        <div className="mx-auto max-w-7xl px-5">
          <SectionDivider label="CHANNEL / CONTACT" />
        </div>
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-1">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#123529] to-[#2affb3]/30" />
      <span className="font-mono text-[10px] tracking-[0.35em] text-[#5c7a6e]">
        <span className="text-[#2affb3]">▚</span> SEC ][ {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#123529] to-[#2dd6ff]/30" />
    </div>
  );
}
