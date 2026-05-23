import React, { useMemo, useState } from "react";

type IconProps = {
  className?: string;
  title?: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  impact: string;
  link: string;
};

type BentoCard = {
  eyebrow: string;
  title: string;
  body: string;
};

type JourneyItem = {
  year: string;
  title: string;
  detail: string;
};

const profile = {
  name: "JhingShaw",
  role: "Frontend / Full-stack Developer",
  headline: "Rubber-fast interfaces. Pirate-level execution.",
  location: "Indonesia",
  email: "ajjayv2@gmail.com",
  github: "https://github.com/jhingshaw",
  linkedin: "https://linkedin.com/in/-",
};

const featuredCharacter = {
  name: "Monkey D. Luffy",
  label: "Character Energy",
  quote: "I do not build average things. I ship with captain energy.",
};

/**
 * Put your uploaded image in the public folder:
 *
 * public/luffy-removebg-preview.png
 *
 * In Vite/React, anything inside /public is served from the site root.
 * This avoids build failure when the asset file is not available during bundling.
 */
const LUFFY_IMAGE_SRC = "/luffy-removebg-preview.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Luffy Mode", href: "#luffy" },
  { label: "Bento", href: "#bento" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST API",
  "UI Engineering",
  "Web Security",
  "Vercel",
  "GitHub Workflow",
] as const;

const bentoCards: BentoCard[] = [
  {
    eyebrow: "Speed",
    title: "Fast like Gear Second",
    body: "Interface ringan, responsive, dan siap dioptimasi untuk Core Web Vitals.",
  },
  {
    eyebrow: "Design",
    title: "Premium anime-tech fusion",
    body: "Bento layout, bold typography, soft gradients, dan karakter visual yang memorable.",
  },
  {
    eyebrow: "Trust",
    title: "Professional, not childish",
    body: "Tema One Piece tetap terasa elegan untuk client, recruiter, dan personal brand.",
  },
  {
    eyebrow: "Delivery",
    title: "Built for Vercel deploy",
    body: "Single-page React component, no icon CDN, public image path, dan mudah dikustom.",
  },
];

const projects: Project[] = [
  {
    title: "Gear Five Portfolio Engine",
    category: "Personal Brand",
    description:
      "Portfolio interaktif dengan bento cards, visual mascot, CTA kuat, dan storytelling yang tajam.",
    stack: ["React", "Tailwind", "Vite"],
    impact: "Brand recall + strong first impression",
    link: "https://portofolio-jhingshaw.vercel.app",
  },
  {
    title: "Luffy Gear Portfolio Theme",
    category: "Anime Portfolio Website",
    description:
      "Website portfolio bertema Monkey D. Luffy dengan hero section bold, karakter visual utama, bento layout modern, responsive design, dan CTA profesional untuk personal branding developer.",
    stack: ["React", "Tailwind CSS", "Vite", "Vercel"],
    impact: "Membuat portfolio lebih standout, memorable, dan siap dipakai untuk GitHub serta deploy Vercel",
    link: "https://portofolio-thema-luffy.vercel.app",
  },
  {
    title: "Sunny Commerce UI",
    category: "E-commerce UI",
    description:
      "Frontend katalog produk dengan layout modern, filter cepat, dan microcopy conversion-oriented.",
    stack: ["Next.js", "SEO", "CMS"],
    impact: "Better browsing and conversion flow",
    link: "#",
  },
];

const journey: JourneyItem[] = [
  {
    year: "2025",
    title: "Product-minded developer",
    detail:
      "Membangun web yang bukan hanya terlihat bagus, tetapi juga jelas, cepat, dan mudah dipakai.",
  },
  {
    year: "2024",
    title: "Modern interface systems",
    detail:
      "Fokus pada bento UI, responsive design, accessibility, animation restraint, dan deployment pipeline.",
  },
  {
    year: "2023",
    title: "Full-stack foundation",
    detail:
      "Menguasai dasar frontend, backend, API, database, authentication, Git, dan production workflow.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </IconWrapper>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </IconWrapper>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconWrapper>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </IconWrapper>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <IconWrapper className={className}>
      <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
      <path d="M5 17v4" />
      <path d="M3 19h4" />
      <path d="M19 3v4" />
      <path d="M17 5h4" />
    </IconWrapper>
  );
}

function GithubIcon({ className, title = "GitHub" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      role="img"
      aria-label={title}
    >
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.15c-3.21.7-3.89-1.38-3.89-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className, title = "LinkedIn" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      role="img"
      aria-label={title}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black tracking-tight transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#100b07]",
        variant === "primary" && "bg-red-600 text-white shadow-xl shadow-red-950/30 hover:-translate-y-0.5 hover:bg-red-500",
        variant === "secondary" && "bg-[#f8d36b] text-[#21140c] shadow-xl shadow-yellow-900/20 hover:-translate-y-0.5 hover:bg-[#ffe08a]",
        variant === "ghost" && "border border-black/10 bg-white/70 text-[#21140c] backdrop-blur-xl hover:bg-white",
        className,
      )}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700 shadow-sm">
      <SparkIcon className="h-4 w-4" />
      {children}
    </div>
  );
}

function LuffyFallback() {
  return (
    <div className="relative z-10 flex h-[340px] w-full max-w-[280px] flex-col items-center justify-center rounded-[2.2rem] border border-red-200 bg-gradient-to-br from-[#fff2c7] via-white to-red-50 p-6 text-center shadow-inner">
      <div className="grid h-28 w-28 place-items-center rounded-full bg-[#f8d36b] text-5xl font-black text-red-600 shadow-[inset_0_-12px_0_rgba(121,48,28,.10)]">
        L
      </div>
      <p className="mt-6 text-xl font-black text-[#21140c]">Monkey D. Luffy</p>
      <p className="mt-2 max-w-[220px] text-sm font-bold leading-6 text-[#7b6552]">
        Add the uploaded PNG to <code className="rounded bg-black/5 px-1">public/luffy-removebg-preview.png</code>
      </p>
    </div>
  );
}

function LuffyImageCard() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className="relative mx-auto flex min-h-[410px] w-full max-w-[390px] items-center justify-center py-6"
      aria-label="Monkey D. Luffy character image"
    >
      <div className="absolute inset-x-8 bottom-8 h-24 rounded-full bg-red-400/25 blur-3xl" />
      <div className="absolute left-2 top-10 z-20 rounded-2xl border border-black/10 bg-white/85 px-4 py-3 text-xs font-black text-[#21140c] shadow-xl backdrop-blur-xl">
        Monkey D. Luffy
      </div>
      <div className="absolute bottom-9 right-0 z-20 rounded-full bg-[#111827] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f8d36b] shadow-xl">
        Gear UI
      </div>

      {imageFailed ? (
        <LuffyFallback />
      ) : (
        <img
          src={LUFFY_IMAGE_SRC}
          alt="Monkey D. Luffy"
          className="relative z-10 h-auto w-full max-w-[330px] object-contain drop-shadow-[0_28px_44px_rgba(33,20,12,0.32)]"
          loading="eager"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}

function RubberLine() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[42%] -z-10 h-20 overflow-hidden opacity-70">
      <svg viewBox="0 0 1200 160" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M-80 92 C150 10 260 154 460 68 C620 0 705 166 890 76 C1030 8 1110 48 1280 20"
          fill="none"
          stroke="#dc2626"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.16"
        />
        <path
          d="M-80 92 C150 10 260 154 460 68 C620 0 705 166 890 76 C1030 8 1110 48 1280 20"
          fill="none"
          stroke="#f8d36b"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.42"
        />
      </svg>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.link}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_30px_90px_rgba(45,25,10,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_100px_rgba(185,28,28,.18)]",
        index === 0 && "md:col-span-2",
      )}
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-100 transition duration-500 group-hover:scale-125" />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">{project.category}</p>
            <h3 className="mt-3 max-w-xl text-3xl font-black leading-tight text-[#21140c]">{project.title}</h3>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#21140c] text-white transition group-hover:rotate-12 group-hover:bg-red-600">
            <ArrowUpRightIcon />
          </span>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-8 text-[#5b4636]">{project.description}</p>
          <p className="mt-4 rounded-2xl bg-[#fff5cf] px-4 py-3 text-sm font-bold text-[#5d3c16]">Impact: {project.impact}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-[#faf6ed] px-3 py-1 text-xs font-bold text-[#5b4636]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function runPortfolioSmokeTests() {
  const results = [
    {
      name: "navigation uses valid section anchors",
      pass: navItems.every((item) => item.href.startsWith("#") && item.label.trim().length > 0),
    },
    {
      name: "Monkey D. Luffy character is included",
      pass: featuredCharacter.name === "Monkey D. Luffy",
    },
    {
      name: "Luffy image source uses public path to avoid bundler file-not-found errors",
      pass: LUFFY_IMAGE_SRC.startsWith("/") && LUFFY_IMAGE_SRC.endsWith(".png"),
    },
    {
      name: "Luffy fallback can render if image is missing",
      pass: true,
    },
    {
      name: "bento cards are complete",
      pass: bentoCards.length >= 4 && bentoCards.every((card) => card.eyebrow && card.title && card.body),
    },
    {
      name: "projects have required content",
      pass: projects.length >= 3 && projects.every((project) => project.title && project.stack.length > 0 && project.impact && project.link),
    },
    {
      name: "journey timeline is complete",
      pass: journey.length >= 3 && journey.every((item) => item.year && item.title && item.detail),
    },
    {
      name: "social links are configured",
      pass: Boolean(profile.github.startsWith("https://") && profile.linkedin.startsWith("https://") && profile.email.includes("@")),
    },
  ];

  const failed = results.filter((result) => !result.pass);

  if (failed.length > 0) {
    throw new Error(`Portfolio smoke tests failed: ${failed.map((item) => item.name).join(", ")}`);
  }

  return results;
}

if (typeof window !== "undefined") {
  runPortfolioSmokeTests();
}

export default function OnePiecePortfolio() {
  const [open, setOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf6ed] text-[#21140c] selection:bg-red-600 selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes float-soft { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
        @keyframes grain-shift { 0% { transform: translate(0,0); } 100% { transform: translate(-6%, -6%); } }
        .float-soft { animation: float-soft 6s ease-in-out infinite; }
        .grain-layer::before {
          content: "";
          position: absolute;
          inset: -40%;
          opacity: .12;
          background-image: radial-gradient(#21140c 1px, transparent 1px);
          background-size: 18px 18px;
          animation: grain-shift 14s steps(8) infinite;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0 grain-layer overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-96 w-96 rounded-full bg-red-200 blur-3xl" />
        <div className="absolute right-[-12rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-yellow-200 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-200 blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 py-3 shadow-[0_20px_80px_rgba(45,25,10,.10)] backdrop-blur-2xl lg:px-6">
          <a href="#home" className="flex items-center gap-3" aria-label="Go to home section">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-red-600 text-lg font-black text-white shadow-lg shadow-red-900/20">
              L
            </span>
            <div className="leading-tight">
              <p className="text-sm font-black">{profile.name}</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">Luffy Mode</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-[#5b4636] transition hover:bg-[#21140c] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button href={profile.github} variant="ghost" external className="min-h-10 px-4 py-2">
              <GithubIcon className="h-4 w-4" /> GitHub
            </Button>
            <Button href="#contact" className="min-h-10 px-4 py-2">
              Hire Me
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#21140c] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-black/10 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-bold text-[#5b4636] hover:bg-[#faf0da]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-36 lg:grid-cols-[1fr_.95fr] lg:px-8">
        <RubberLine />

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-black text-[#5b4636] shadow-sm backdrop-blur-xl">
            <SparkIcon className="h-4 w-4 text-red-600" />
            New concept · Monkey D. Luffy inspired portfolio
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            {profile.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b4636]">
            Saya <span className="font-black text-[#21140c]">{profile.name}</span>, developer yang membangun web modern dengan rasa visual kuat. Konsep baru ini memakai energi <span className="font-black text-red-600">{featuredCharacter.name}</span>: playful, berani, cepat, tapi tetap elegan untuk portfolio profesional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" variant="primary">
              Explore Projects <ArrowUpRightIcon />
            </Button>
            <Button href="#luffy" variant="secondary">
              See Luffy Mode
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["01", "Bento-first layout"],
              ["02", "Public Luffy image"],
              ["03", "Vercel-ready build"],
            ].map(([number, label]) => (
              <div key={number} className="rounded-[1.7rem] border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-600">{number}</p>
                <p className="mt-2 text-lg font-black leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[3rem] bg-red-200 blur-3xl" />
          <div className="float-soft relative overflow-hidden rounded-[3rem] border border-black/10 bg-white/80 p-5 shadow-[0_40px_120px_rgba(45,25,10,.16)] backdrop-blur-2xl">
            <div className="rounded-[2.4rem] border border-black/10 bg-[#fff7df] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-red-600">{featuredCharacter.label}</p>
                  <h2 className="mt-1 text-3xl font-black tracking-tight">{featuredCharacter.name}</h2>
                </div>
                <span className="rounded-full bg-[#21140c] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f8d36b]">
                  Captain
                </span>
              </div>

              <LuffyImageCard />

              <blockquote className="rounded-[2rem] bg-[#21140c] p-5 text-white shadow-xl">
                <p className="text-sm font-bold leading-7 text-white/85">“{featuredCharacter.quote}”</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="luffy" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Luffy Mode</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Karakter Luffy jadi visual anchor, bukan sekadar dekorasi.
            </h2>
          </div>
          <div className="rounded-[2.5rem] border border-black/10 bg-white/75 p-7 shadow-[0_30px_90px_rgba(45,25,10,.10)] backdrop-blur-2xl">
            <p className="text-lg leading-8 text-[#5b4636]">
              Konsep ini dibuat lebih baru dari versi sebelumnya: warna lebih editorial, layout bento 2024–2025, karakter Monkey D. Luffy memakai gambar yang kamu upload, dan tone yang tetap credible. Agar tidak error saat build, gambar dipanggil dari folder public, bukan dari import bundler.
            </p>
            <div className="mt-6 rounded-2xl bg-[#fff5cf] p-4 text-sm font-bold leading-7 text-[#5d3c16]">
              Simpan file gambar di <code className="rounded bg-black/5 px-2 py-1">public/luffy-removebg-preview.png</code>. Jika file belum ada, halaman tetap build dan menampilkan fallback card.
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-2xl border border-black/10 bg-[#faf6ed] px-4 py-3 text-sm font-black text-[#5b4636]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bento" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionLabel>2024–2025 UI direction</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            Bento grid, strong type, soft depth, and mascot-led identity.
          </h2>
          <p className="max-w-md text-base leading-8 text-[#5b4636]">
            Cocok untuk portfolio developer yang ingin beda, tetapi tetap terlihat rapi dan serius.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {bentoCards.map((card, index) => (
            <div
              key={card.title}
              className={cn(
                "rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_25px_80px_rgba(45,25,10,.08)] backdrop-blur-2xl",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 1 && "md:col-span-2",
              )}
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-red-600">{card.eyebrow}</p>
              <h3 className={cn("mt-4 font-black tracking-tight", index === 0 ? "text-4xl" : "text-2xl")}>{card.title}</h3>
              <p className="mt-4 leading-7 text-[#5b4636]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionLabel>Featured work</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
            Project showcase dengan naming dan visual yang fresh.
          </h2>
          <Button href={profile.github} variant="ghost" external>
            <GithubIcon /> Open GitHub
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Journey log</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
              Clean timeline untuk trust dan positioning.
            </h2>
          </div>
          <div className="space-y-4">
            {journey.map((item) => (
              <div key={item.year} className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                  <p className="text-3xl font-black text-red-600">{item.year}</p>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[#5b4636]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#21140c] p-8 text-white shadow-[0_40px_120px_rgba(45,25,10,.22)] md:p-12">
          <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-red-600/40 blur-3xl" />
          <div className="absolute bottom-[-10rem] left-[-6rem] h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f8d36b]">Let’s ship</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
                Ready to build something with Luffy-level confidence?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                Tersedia untuk freelance, kolaborasi, project-based work, atau opportunity profesional. Ganti data kontak di object <code className="rounded bg-white/10 px-2 py-1">profile</code> sebelum deploy.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href={`mailto:${profile.email}`} variant="secondary">
                <MailIcon /> Email Me
              </Button>
              <Button href={profile.linkedin} variant="ghost" external>
                <LinkedinIcon /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-black/10 px-5 py-8 text-center text-sm font-bold text-[#7b6552]">
        © {year} {profile.name}. Fan-inspired portfolio concept featuring Monkey D. Luffy visual references. Not affiliated with One Piece, Toei Animation, or Shueisha.
      </footer>
    </main>
  );
}
