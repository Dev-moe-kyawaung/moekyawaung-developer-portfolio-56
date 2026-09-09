// Centralized content for Moe Kyaw Aung's portfolio

export const identity = {
  name: "Moe Kyaw Aung",
  fullName: "Moe Kyaw Aung",
  burmese: "မိုးကျော်အောင်",
  role: "Senior Android Developer",
  tagline: "Engineering secure Android products that scale.",
  locationMatch: "Tachileik, Myanmar ↔ Bangkok, Thailand",
  locationEmoji: ["🇲🇲", "🇹🇭"],
  email: "hello@moekyawaung.dev",
  phone: ["+95 9 889 000 889", "+959 666 000 050"],
  github: "https://github.com/Dev-moe-kyawaung/",
  githubHandle: "Dev-moe-kyawaung",
  linkedin: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
  profilePic:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  currentlyBuilding: "MoekyawTranslator — AI Translation App",
  philosophy: "Code with culture. Build with purpose.",
  languages: ["Burmese 🇲🇲", "English 🌐", "Kotlin ☕"],
};

export const nav = [
  { id: "security", label: "Security Mindset", cmd: "run ./audit" },
  { id: "engineering", label: "Android Engineering", cmd: "adb --stack" },
  { id: "projects", label: "Selected Projects", cmd: "ls workspace/" },
  { id: "repos", label: "GitHub Repositories", cmd: "git contributors" },
  { id: "certifications", label: "Certifications", cmd: "openssl verify" },
  { id: "experience", label: "Experience", cmd: "cat resume.log" },
  { id: "contact", label: "Contact", cmd: "nc moe.kyaung 443" },
];

export const stats = [
  { value: "82+", label: "Certificates", note: "9 domains" },
  { value: "3+", label: "Years building", note: "Android & web" },
  { value: "40+", label: "Public repos", note: "across GitHub" },
  { value: "5", label: "Security focus areas", note: "case studies" },
];

export const focus = [
  {
    domain: "Mobile",
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Arch"],
    hue: "cyan" as const,
  },
  {
    domain: "Backend & Cloud",
    stack: ["Firebase", "REST APIs", "Retrofit", "Python"],
    hue: "green" as const,
  },
  {
    domain: "Security",
    stack: ["Ethical Hacking", "Cybersecurity", "Linux", "Kali"],
    hue: "amber" as const,
  },
  {
    domain: "AI / ML",
    stack: ["Claude API", "TFLite", "On-Device ML"],
    hue: "magenta" as const,
  },
];

// --- Security Mindset ---
export const securityPrinciples = [
  {
    icon: "🔒",
    title: "Threat Modeling First",
    body: "Every feature starts with a threat model. I map data flows, identify trust boundaries and classify risks before writing a single line of Kotlin.",
    tag: "STRIDE",
  },
  {
    icon: "🧱",
    title: "Defense in Depth",
    body: "Auth, encryption, secure storage and network rules are layered — so a single broken control never exposes user data.",
    tag: "MITRE",
  },
  {
    icon: "🦠",
    title: "Zero-Knowledge Mindset",
    body: "Plaintext secrets are treated as a breach. Keys live in Keystore, tokens rotate, and scope is minimal-by-design.",
    tag: "OWASP",
  },
];

export const secureStack = [
  { k: "Android Keystore", v: "Hardware-backed", detail: "AES / RSA · StrongBox" },
  { k: "BiometricPrompt", v: "Auth", detail: "Face / Fingerprint gates" },
  { k: "Firebase Rules", v: "Least privilege", detail: "Validated + revocable" },
  { k: "Certificate Pinning", v: "Transport", detail: "OkHttp · Retrofit" },
  { k: "RASP / Obfuscation", v: "Release", detail: "R8 · ProGuard" },
  { k: "Secrets hygiene", v: "Repo", detail: "git-secrets · env injection" },
];

// --- Case studies ---
export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  status: string;
  objective: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  relevance: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "performance",
    category: "PERFORMANCE",
    title: "Cold-start tuning: 2.6s → sub-900ms",
    status: "Production",
    objective:
      "Cut a slow boot-time and UI jank that was bleeding activation on a media-heavy Android app.",
    challenge:
      "A monolithic dependency graph stalled main-thread startup and RecyclerView frames dropped during image-heavy feeds.",
    approach: [
      "Profile with Macrobenchmark & Perfetto, then set explicit performance budgets.",
      "Lazy-inject heavy dependencies and defer non-critical work off the critical path.",
      "Baseline Profiles + Paging 3 with Room-backed source for smooth infinite scroll.",
      "Move image loaders to Coil with adaptive placeholder/alpha and memory-aware caching.",
    ],
    outcome: [
      "Cold start reduced ~65% from DEX/Window to first frame.",
      "Scroll dropped-frame ratio under 0.5% on mid-tier devices.",
      "60fps retained at 4K feed density across test matrix.",
    ],
    relevance: "Performance is a security control: faster apps surrender less telemetry and keep fewer attackers in CPU-window windows.",
  },
  {
    id: "privacy",
    category: "PRIVACY",
    title: "Privacy-grade data minimization",
    status: "Compliance",
    objective:
      "Ship an analytics & sync layer that respects user consent and collects nothing it doesn't need.",
    challenge:
      "Oversized permission surface and permissive storage access exposed more PII than the product required.",
    approach: [
      "Move to scoped storage and per-file permissions — zero broad storage access.",
      "Consent-gated event pipeline with an opt-out that truly deletes remote data.",
      "Encrypt at-rest caches and bind local models to on-device identity keys.",
    ],
    outcome: [
      "100% of users can generate a data copy & erasure request in-app.",
      "Raw PII no longer leaves the device unless explicitly authorized.",
      "Passed a third-party privacy review with zero critical findings.",
    ],
    relevance: "Privacy engineering raises the cost of exploitation and answers attacker abuse with materially less exposed data.",
  },
  {
    id: "firebase",
    category: "FIREBASE SECURITY",
    title: "Tightening a Firebase backend",
    status: "Hardening",
    objective:
      "Close the mobile > cloud attack surface of a Firestore + Auth + Functions product.",
    challenge:
      "Overly broad security rules, readable client queries, and a function layer with no privileged elevation boundary.",
    approach: [
      "Author Firestore rules from explicit allow-lists: roles, ownership, and timestamps.",
      "Route all elevation through onCreate callable Cloud Functions with token validation.",
      "Enable App Check to reject emulated, tampered, or non-Play clients at the edge.",
      "Shift Crashlytics & analytics keys behind build-type injection.",
    ],
    outcome: [
      "Blocked a documented route for reading another tenant's documents.",
      "App Check rejected non-genuine builds before any billable read.",
      "Reduced Firestore over-permission incidents to zero in review.",
    ],
    relevance: "Mobile apps are the most exposed client; Firebase rules are the firewall between a device and the world's data.",
  },
  {
    id: "api",
    category: "API PROTECTION",
    title: "Hardening a public REST endpoint",
    status: "Advisory",
    objective:
      "Protect a consumer-facing REST API from scraping, replay, and credential abuse.",
    challenge:
      "Unescaped rate limits let attackers iterate credentials, while verbose errors leaked API shape.",
    approach: [
      "Apply token rotation, HMAC request signing, and a Replay-protection timestamp window.",
      "Rate-limit per API-key and identity, then respond with 429 + Retry-After.",
      "Return neutral 401/403 payloads so scanners cannot distinguish bad key vs account.",
      "Pin transports inside releases to defeat MITM on weak networks.",
    ],
    outcome: [
      "Cost-per-attack attempt rose sharply, decelerating brute force.",
      "API key loss no longer leaks quota or route structure.",
      "Replay attacks neutralized beyond the signing window.",
    ],
    relevance: "An API contract is public by definition; the header & ratelimit layer is where you win before crypto ever runs.",
  },
  {
    id: "architecture",
    category: "ARCHITECTURE",
    title: "Securable multi-module architecture",
    status: "Foundation",
    objective:
      "Refactor a flaky single app into modules that isolate trust boundaries and stay auditable.",
    challenge:
      "One Gradle module mixed UI, network and credentials — code review and test isolation were impossible.",
    approach: [
      "Introduce multi-module Clean Architecture: data / domain / presentation + :core:security.",
      "Gate dangerous capabilities behind explicit interfaces and singleton risk-owners.",
      "Enforce dependency rules in CI so reviews flag any cross-boundary leak.",
      "Give each module a threat-model README as the security contract.",
    ],
    outcome: [
      "Security-critical code reviewable in isolation without UI noise.",
      "Build parallelized and test wall-time dropped.",
      "A single privileged surface to audit instead of dozens of ad-hoc spots.",
    ],
    relevance: "Security scales only when architecture does — separate the surface from the core and defenders can keep pace.",
  },
];

// --- Selected Projects / Features ---
export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  metric: string;
  link: string;
  accent: "green" | "cyan" | "amber" | "magenta";
};

export const projects: Project[] = [
  {
    title: "PulseSync",
    blurb:
      "Multi-module, offline-first real-time sync platform demonstrating senior Android architecture, a hardened Firebase backend, and a full GitHub Actions CI/CD pipeline.",
    stack: ["Kotlin", "Compose", "MVVM", "Firebase", "Gradle"],
    metric: "Flagship · CI/CD",
    link: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
    accent: "green",
  },
  {
    title: "MoekyawTranslator",
    blurb:
      "Currently building an on-device AI translation app. Privacy-preserving sentence translation with TFLite + Claude API hybrid routing.",
    stack: ["Kotlin", "Compose", "Claude API", "TFLite"],
    metric: "Now shipping",
    link: "https://github.com/Dev-moe-kyawaung/",
    accent: "cyan",
  },
  {
    title: "Advance POS · Pro Max",
    blurb:
      "A retail-grade Point-of-Sale suite with role-based employee access, receipt audit trails, local-first sync, and per-user permission enforcement.",
    stack: ["Kotlin", "SQLite", "Firebase", "Jetpack"],
    metric: "Local-first · RBAC",
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    accent: "amber",
  },
  {
    title: "Video Player",
    blurb:
      "Secure media playback with signed-stream handling, remote ephemeral access, and offline caching that obeys licensing scope.",
    stack: ["Kotlin", "ExoPlayer", "Media3", "Room"],
    metric: "DRM-aware",
    link: "https://github.com/moekyawaung-tech/video-player",
    accent: "magenta",
  },
  {
    title: "Social Dashboard",
    blurb:
      "A content & engagement console aggregating channels with OAuth token storage bound to the Android Keystore and scoped graph access.",
    stack: ["Kotlin", "Compose", "OAuth", "Retrofit"],
    metric: "OAuth secure",
    link: "https://github.com/moekyawaung-tech/social-dashboard",
    accent: "cyan",
  },
  {
    title: "PWA App",
    blurb:
      "Progressive web installer with secure service-worker caching and an integrity-checked update path bridging Android and HTTP caches.",
    stack: ["TypeScript", "PWA", "Workbox", "Firebase"],
    metric: "Cache integrity",
    link: "https://github.com/moekyawaung-tech/pwa-app",
    accent: "green",
  },
];

export type Cert = { code: string; name: string; date: string; id: string };

export const certCategories = [
  {
    name: "Programming Languages",
    icon: "⌨️",
    count: "13",
    items: ["C Programming", "Java", "Python Essentials", "JavaScript", "Kotlin"],
  },
  {
    name: "Web Development",
    icon: "🌐",
    count: "13",
    items: ["Node.js", "React", "TypeScript", "REST APIs", "HTML5 & CSS3"],
  },
  {
    name: "Mobile & App Dev",
    icon: "📱",
    count: "7",
    items: ["Android Development", "Jetpack Compose", "Flutter Basics", "Mobile Security"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    count: "6",
    items: ["SQL & SQLite", "Firebase Firestore", "Room", "PostgreSQL"],
  },
  {
    name: "AI & Data Science",
    icon: "🤖",
    count: "11",
    items: ["Machine Learning", "TensorFlow Lite", "Python for Data", "Claude API"],
  },
  {
    name: "Security & DevOps",
    icon: "🔐",
    count: "10",
    items: ["Ethical Hacking", "Cybersecurity", "Linux", "Kali", "Docker", "CI/CD"],
  },
  {
    name: "Blockchain",
    icon: "⛓️",
    count: "4",
    items: ["Blockchain Basics", "Smart Contracts", "Web3"],
  },
  {
    name: "Software Engineering",
    icon: "🛠️",
    count: "7",
    items: ["Clean Architecture", "OOP", "SOLID", "Testing (JUnit/MockK)"],
  },
];

export const badgeCerts = [
  "Google Developers Launchpad",
  "AWS Cloud Practitioner",
  "Azure Fundamentals",
  "GitHub Actions",
  "CompTIA Security+ (self-study)",
  "Ethical Hacking",
  "Linux Professional",
  "Firebase Summit",
];

export const experience = [
  {
    role: "Senior Android Engineer",
    org: "Independent · Microsoft-scale product work",
    period: "Present",
    piped: false,
    points: [
      "Ship multi-module, offline-first apps with Clean Architecture, MVVM/MVI and Compose.",
      "Harden Firebase and REST backends; enforce least privilege and App Check.",
      "Drive CI/CD with GitHub Actions, Fastlane and Azure DevOps into trusted releases.",
    ],
  },
  {
    role: "Cybersecurity · Ethical Hacking",
    period: "Ongoing",
    org: "Certification track",
    points: [
      "Pen-test Linux/Kali lab practice with OWASP and MITRE as reference models.",
      "Apply threat modeling to every Android feature before code is written.",
    ],
  },
  {
    role: "Self-Taught Platform Engineer",
    org: "Cross-stack builders",
    period: "3+ years",
    points: [
      "82+ certificates across 9 domains — programming, web, mobile, DB, AI, security and more.",
      "Mentor junior developers on clean, testable, culture-minded engineering.",
    ],
  },
];

export const socials = [
  { name: "GitHub", handle: "@Dev-moe-kyawaung", url: identity.github },
  { name: "LinkedIn", handle: "/in/moe-kyaw-aung", url: identity.linkedin },
  { name: "YouTube", handle: "uaung.dev channel", url: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG" },
  { name: "Bluesky", handle: "@moekyawaung96", url: "https://bsky.app/profile/moekyawaung96.bsky.social" },
  { name: "Gravatar", handle: "moekyawaung13721", url: "https://gravatar.com/moekyawaung13721" },
  { name: "Flickr", handle: "moekyawaung", url: "https://www.flickr.com/people/204037451@N06" },
  { name: "Tumblr", handle: "moekyawaung", url: "https://www.tumblr.com/moekyawaung" },
  { name: "Vimeo", handle: "uaung", url: "https://vimeo.com/user252414232" },
];

export const toolbelt = [
  "Kotlin", "Jetpack Compose", "MVVM", "MVI", "Clean Architecture",
  "Coroutines", "Flow", "Room", "Paging", "Retrofit", "OkHttp",
  "Firebase", "Firestore", "Cloud Messaging", "Crashlytics", "App Check",
  "GitHub Actions", "Azure DevOps", "Fastlane", "Jenkins", "JUnit", "Espresso", "MockK",
  "Auth", "Keystore", "BiometricPrompt", "R8/ProGuard", "Linux", "Kali",
  "TFLite", "Python", "Claude API", "Material 3", "Figma",
];
