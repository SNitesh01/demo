"use client";

import {
  ArrowRight,
  BadgeIndianRupee,
  BookOpenCheck,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  CircleDollarSign,
  Clapperboard,
  Camera,
  GraduationCap,
  Handshake,
  Lightbulb,
  Link,
  Menu,
  MessageCircle,
  PenLine,
  Play,
  Send,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Creators", href: "#creators" },
  { label: "Training", href: "#training" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const heroPillars = [
  { title: "Learn", icon: GraduationCap, detail: "Skill training" },
  { title: "Connect", icon: Handshake, detail: "Brand access" },
  { title: "Grow", icon: TrendingUp, detail: "Content strategy" },
  { title: "Earn", icon: CircleDollarSign, detail: "Paid campaigns" },
];

const benefits = [
  {
    title: "Professional Training",
    description:
      "Aapko professional training milegi jisse aap apni skills better banakar earning ke naye raste khol sakte hain.",
    icon: GraduationCap,
  },
  {
    title: "Content Creation",
    description:
      "Aap seekhenge attractive, high-quality aur trending content banana jo aapki pehchan aur reach badhata hai.",
    icon: Clapperboard,
  },
  {
    title: "Content Writing",
    description:
      "Content writing training se aap strong copy, captions, scripts aur SEO-friendly content likhna seekhenge.",
    icon: PenLine,
  },
  {
    title: "Influencer Connect Commission",
    description:
      "Dusre influencers ko platform se jodkar aap achha commission hasil kar sakte hain.",
    icon: UsersRound,
  },
  {
    title: "Brand Connect Commission",
    description:
      "Brands ko connect karke aap commission kama sakte hain aur apna network strong bana sakte hain.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Paid Collaboration Opportunities",
    description:
      "Aapko har mahine paid collaborations ke behtar mauke mil sakte hain, profile readiness ke saath.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Paid Collaboration Guidance",
    description:
      "Hum sikhayenge brands se contact, pitch, deal aur paid collaboration ko professionally kaise manage karna hai.",
    icon: Target,
  },
  {
    title: "Growth & Personal Development",
    description:
      "Aapke personal brand, confidence, communication aur digital presence ko high level tak le jane mein support milega.",
    icon: Trophy,
  },
];

const trainingItems = [
  {
    title: "Live Training Sessions",
    description: "Weekly live sessions jahan experts practical knowledge aur direct guidance denge.",
    icon: BookOpenCheck,
  },
  {
    title: "Pre-recorded Courses",
    description: "Detailed video training ko aap jab chahein, jitni baar chahein dekh sakte hain.",
    icon: Clapperboard,
  },
  {
    title: "Practical Assignments",
    description: "Assignments ke through learning ke saath-saath real practice karwai jayegi.",
    icon: PenLine,
  },
  {
    title: "Personal Guidance & Support",
    description: "Expert team ki taraf se personal guidance aur support milega.",
    icon: Lightbulb,
  },
  {
    title: "Regular Updates",
    description: "Trends, market aur brand requirements ke hisab se regular updates milenge.",
    icon: Sparkles,
  },
];

const collaborationSteps = [
  "Profile Building",
  "Brand Discovery",
  "Pitching Guidance",
  "Negotiation Support",
  "Paid Collaboration",
];

const stats = [
  { value: "4", label: "Growth pillars" },
  { value: "8", label: "Creator benefits" },
  { value: "5", label: "Training formats" },
  { value: "100%", label: "Action focused" },
];

const audiences = [
  {
    title: "Influencers",
    description:
      "For creators who want better content planning, stronger brand presence, and collaboration confidence.",
    icon: Star,
  },
  {
    title: "New Creators",
    description:
      "For beginners who need training, direction, and a simple roadmap to start professionally.",
    icon: Sparkles,
  },
  {
    title: "Professionals",
    description:
      "For coaches, freelancers, consultants, and experts building a credible digital identity.",
    icon: BriefcaseBusiness,
  },
];

const joinReasons = [
  "Apni pehchan banaiye",
  "Skills seekhiye",
  "Network badhaiye",
  "Earning ke naye avsar paiye",
  "100% support aur guidance",
  "Regular updates aur personal direction",
];

const profileHighlights = [
  "Professional profile building",
  "Digital presence aur personal brand clarity",
  "Content ideas, captions aur scripts",
  "Email, pitch aur brand conversation training",
  "Deal aur payment negotiation support",
  "Confidence, communication aur consistency",
];

const testimonials = [
  {
    quote:
      "Training se mujhe samajh aaya ki professional profile kaise banani hai aur brands se kaise baat karni hai.",
    name: "Creator member",
  },
  {
    quote:
      "Content planning, pitching aur paid collaboration process ab kaafi clear lagta hai.",
    name: "Influencer member",
  },
  {
    quote:
      "Annu Brand Connection ne guidance, support aur roadmap diya. Pehle confusion tha, ab clarity hai.",
    name: "Professional member",
  },
];

const ctaPoints = [
  "Learn new skills",
  "Build your identity",
  "Create a strong network",
  "Earn better income",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f0df] text-[#17120c]">
      <Header />
      <section
        id="home"
        className="relative isolate px-4 pt-[76px] sm:px-6 lg:px-8 lg:pt-[88px]"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#070604_0%,#17120c_42%,#4b3517_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-45 bg-[radial-gradient(circle_at_18%_18%,rgba(245,199,95,0.48),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(255,255,255,0.2),transparent_24%)]" />

        <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-12">
          <div className="scroll-reveal text-center text-white lg:text-left">
            <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[0.005em] min-[390px]:text-4xl sm:text-6xl lg:mx-0 lg:text-7xl">
              Build Your Creator Brand.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#f8edd0]/82 sm:text-lg sm:leading-8 lg:mx-0">
              Sahi margdarshan, behtar avsar aur growth ki guarantee ke saath
              creators ko training, content support aur brand connections.
            </p>
            <div className="mt-6 hidden grid-cols-2 gap-3 sm:mt-7 sm:flex sm:justify-center lg:justify-start">
              <GoldButton href="#contact">Join Now</GoldButton>
              <a
                href="#benefits"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#17120c] sm:px-7 sm:text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
          <HeroVisual />
          <div className="grid grid-cols-2 gap-2.5 sm:hidden">
            <GoldButton href="#contact">Join Now</GoldButton>
            <a
              href="#benefits"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white hover:text-[#17120c]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <StatsBand />
      <AboutSection />

      <Section
        id="benefits"
        eyebrow="Benefits"
        title="Benefits of Joining Annu Brand Connection"
        intro="Hum aapko dete hain sahi margdarshan, better opportunities aur growth ka clear roadmap."
        center
        compact
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <FeatureCard key={benefit.title} item={benefit} index={index} />
          ))}
        </div>
      </Section>

      <AudienceSection />
      <WhyJoinSection />
      <ProfileSection />

      <Section
        id="training"
        eyebrow="Training"
        title="How You Will Be Trained"
        intro="Live sessions, recorded courses, assignments aur personal support ke through aapko practical training milegi."
        dark
        center
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trainingItems.map((item) => (
            <TrainingCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <section id="collaborations" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
              Collaborations
            </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
              How Corporate Collaborations Work
            </h2>
            <p className="mt-5 text-base leading-7 text-[#675235] sm:text-lg sm:leading-8">
              Profile building se paid collaboration tak, hum har step par
              guidance dete hain taaki brands aap par trust kar saken.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {collaborationSteps.map((step, index) => (
              <StepCard key={step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="scroll-reveal mx-auto max-w-7xl rounded-[1.6rem] border border-[#e0c995] bg-white p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)] sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
                Your Opportunity
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-[0.005em] text-[#17120c] sm:text-3xl lg:text-4xl">
                Ye sirf ek platform nahi, ye aapke sapno ko haqeeqat mein
                badalne ka avsar hai.
              </h2>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {ctaPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-[#ead6aa] bg-[#fffaf0] p-3"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-[#b47a1f]" />
                    <span className="text-sm font-bold text-[#4d3a22]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] bg-[#17120c] p-5">
                <p className="text-sm font-semibold leading-7 text-[#fff3d5]">
                Aaj hi Annu Brand Connection ke saath judiye. Learn, connect,
                grow aur earn karne ke liye ek professional ecosystem ka hissa
                baniye.
                </p>
                <div className="mt-5">
                  <GoldButton href="#contact">Join Annu Brand Connection Today</GoldButton>
                </div>
            </div>
          </div>
        </div>
      </section>

      <FounderVisionSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-[#f6c45f]/20 bg-[#080704]/90 px-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-6 lg:h-[88px] lg:px-8">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 lg:h-[88px]">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#f7d985,#b47a1f)] text-sm font-black text-[#17120c] shadow-[0_12px_30px_rgba(246,196,95,0.25)]">
            Annu
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-black uppercase tracking-[0.13em] sm:text-base lg:text-lg">
              Annu Brand
            </span>
            <span className="block truncate text-[11px] font-black uppercase tracking-[0.24em] text-[#f6c45f] lg:text-xs">
              Connection
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold text-white/72 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#f6c45f]">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-[#f6c45f] px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-[#17120c] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
        >
          Join Now
        </a>
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="grid size-11 cursor-pointer place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#f6c45f] transition hover:bg-[#f6c45f] hover:text-[#17120c]"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <Menu className="size-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className={`fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300 ${
              drawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-label="Close menu overlay"
          />
          <div
            className={`fixed right-0 top-0 z-[70] h-[100svh] w-[min(82vw,20rem)] border-l border-[#e0c995] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 ease-out ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-[76px] items-center gap-3 border-b border-[#e0c995] px-5 pr-16">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#f7d985,#b47a1f)] text-sm font-black text-[#17120c]">
                Annu
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-black uppercase tracking-[0.13em] text-[#17120c]">
                  Annu Brand
                </span>
                <span className="block text-[11px] font-black uppercase tracking-[0.24em] text-[#a87522]">
                  Connection
                </span>
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="absolute right-4 top-4 grid size-11 cursor-pointer place-items-center rounded-2xl border border-[#e0c995] bg-[#17120c] text-[#f6c45f]"
                aria-label="Close menu"
              >
                <X className="size-5" strokeWidth={2.4} />
              </button>
            </div>
            <div className="p-5">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-2xl border border-[#e0c995] bg-[#fffaf0] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#4d3a22] transition hover:bg-[#17120c] hover:text-[#f6c45f]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setDrawerOpen(false)}
                className="mt-3 rounded-2xl bg-[#f6c45f] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#17120c]"
              >
                Join Now
              </a>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="scroll-reveal relative mx-auto w-full max-w-sm sm:max-w-lg">
      <div className="relative overflow-hidden rounded-[1.35rem] border border-[#f6c45f]/25 bg-[#fff8e8] p-2.5 shadow-[0_30px_90px_rgba(0,0,0,0.26)] sm:rounded-[1.75rem] sm:p-4">
        <div className="rounded-[1.05rem] bg-[linear-gradient(145deg,#fffaf0_0%,#f1dca8_58%,#17120c_59%,#2c2113_100%)] p-4 sm:rounded-[1.35rem] sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9d6d1c] sm:text-xs sm:tracking-[0.24em]">
                Creator Path
              </p>
              <h2 className="mt-1.5 text-lg font-extrabold tracking-[0.005em] text-[#17120c] sm:mt-2 sm:text-2xl">
                Learn. Connect. Grow. Earn.
              </h2>
            </div>
            <Sparkles className="size-6 text-[#b47a1f] sm:size-8" strokeWidth={2.2} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
            {heroPillars.map((pillar, index) => (
              <VisualPillar key={pillar.title} item={pillar} index={index} />
            ))}
          </div>
          <div className="mt-4 rounded-[1rem] border border-white/10 bg-[#17120c] p-3 text-white sm:mt-5 sm:rounded-[1.25rem] sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black sm:text-base">Campaign readiness</p>
              <p className="text-sm font-black text-[#f6c45f]">92%</p>
            </div>
            <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-white/10 sm:mt-3 sm:h-3">
              <div className="h-full w-[92%] rounded-full bg-[linear-gradient(90deg,#f6c45f,#fff2b8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBand() {
  return (
    <section className="relative z-10 -mt-4 px-4 pb-12 sm:-mt-5 sm:px-6 sm:pb-16 lg:-mt-6 lg:px-8 lg:pb-20">
      <div className="scroll-reveal mx-auto grid max-w-7xl grid-cols-2 gap-2 rounded-[1.35rem] border border-[#e5c67d] bg-white/92 p-2.5 shadow-[0_22px_80px_rgba(69,48,17,0.12)] backdrop-blur sm:grid-cols-2 sm:gap-3 sm:rounded-[1.8rem] sm:p-5 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-[1rem] bg-[#fff8e8] p-3 text-center transition hover:bg-[#17120c] sm:rounded-[1.25rem] sm:p-6"
          >
            <p className="text-2xl font-extrabold tracking-[0.005em] text-[#17120c] transition group-hover:text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.13em] text-[#a87522] transition group-hover:text-[#f6c45f] sm:text-xs sm:tracking-[0.18em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
        <div className="scroll-reveal">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
            About
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
            About Annu Brand Connection
          </h2>
          <p className="mt-4 inline-flex rounded-full bg-[#17120c] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f6c45f]">
            5+ years industry experience
          </p>
        </div>
        <div className="scroll-reveal">
          <p className="text-base leading-7 text-[#675235] sm:text-lg sm:leading-8">
            Annu Brand Connection brings 5+ years of industry and market
            experience to help creators, influencers, and professionals grow
            with practical direction. We understand digital growth, content
            creation, brand positioning, and collaboration opportunities, and we
            guide members with a clear roadmap.
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#675235] sm:text-base">
            Our vision is simple: give the right guidance, build a strong
            network, and help you take your digital journey to the next level.
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#675235] sm:text-base">
            Learn new skills, build your identity, create a strong network, and
            earn better income with confidence.
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#675235] sm:text-base">
            From profile building to content planning and brand communication,
            our approach is practical, easy to follow, and focused on real
            growth in the creator economy.
          </p>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="creators" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="scroll-reveal">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
              Who It Is For
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
              Designed for people who want to be seen professionally.
            </h2>
          </div>
          <p className="scroll-reveal max-w-2xl text-base leading-7 text-[#675235] sm:text-lg sm:leading-8 lg:justify-self-end">
            Chahe aap beginner ho ya already content bana rahe ho, the goal is
            simple: build a stronger identity, improve your content quality, and
            become ready for better opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                className="scroll-reveal flex flex-col rounded-[1.6rem] border border-[#e0c995] bg-white p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_75px_rgba(69,48,17,0.14)] sm:min-h-[220px] sm:p-6"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-[#17120c] text-[#f6c45f]">
                  <Icon className="size-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[0.005em] text-[#17120c]">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#675235]">
                  {audience.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-[#f7f0df] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="scroll-reveal">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
            Pricing
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
            Triple Nine Membership
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#675235] sm:text-lg sm:leading-8">
            Ek baar ka investment, structured learning aur creator growth
            support ke saath. Aapki creativity, hamari connectivity.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["New skills", "Your reach", "More income", "Strong network"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-[#e0c995] bg-white p-3 shadow-[0_12px_35px_rgba(69,48,17,0.06)]"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-[#b47a1f]" />
                  <p className="text-sm font-bold text-[#4d3a22]">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="scroll-reveal rounded-[2rem] border border-[#e0c995] bg-[#17120c] p-6 text-white shadow-[0_28px_90px_rgba(69,48,17,0.18)] sm:p-8 lg:p-10">
          <div className="rounded-[1.5rem] border border-[#f6c45f]/25 bg-[linear-gradient(135deg,rgba(246,196,95,0.2),rgba(255,255,255,0.06))] p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c45f]">
              Membership
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-3">
              <span className="text-6xl font-extrabold leading-none tracking-[0.005em] text-white sm:text-7xl">
                Rs. 999
              </span>
              <span className="mb-2 rounded-full bg-[#f6c45f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#17120c]">
                One-time
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold leading-6 text-[#fff3d5]/75">
              Training, content creation guidance, brand connect support,
              pitching guidance aur paid collaboration readiness ek hi
              membership mein.
            </p>
            <div className="mt-7">
              <GoldButton href="#contact">Join Now</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="scroll-reveal">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
            Why Join
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
            Kyon judein hamare saath?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#675235] sm:text-lg sm:leading-8">
            Ye platform aapke dreams ko reality banane ke liye hai. Skills,
            network, guidance aur earning opportunities ek structured system ke
            saath milte hain.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {joinReasons.map((reason) => (
            <div
              key={reason}
              className="scroll-reveal flex items-center gap-3 rounded-2xl border border-[#e0c995] bg-white p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)]"
            >
              <Star className="size-5 shrink-0 fill-[#b47a1f] text-[#b47a1f]" />
              <p className="font-bold text-[#4d3a22]">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-[#e0c995] bg-[#fffaf0] p-6 shadow-[0_24px_85px_rgba(69,48,17,0.1)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-10">
        <div className="scroll-reveal rounded-[1.6rem] bg-[#17120c] p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c45f]">
            Profile System
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] sm:text-4xl">
            Build a brand-ready creator profile.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#fff3d5]/75">
            Brands notice clarity. We help you arrange your profile, content,
            pitch, and communication so your digital presence feels reliable and
            professional.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <ChartNoAxesColumnIncreasing className="size-9 text-[#f6c45f]" />
            <div>
              <p className="font-black">Better presentation</p>
              <p className="text-sm text-[#fff3d5]/65">Better conversations</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {profileHighlights.map((item) => (
            <div
              key={item}
              className="scroll-reveal flex items-start gap-3 rounded-2xl border border-[#e0c995] bg-white p-4"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#b47a1f]" />
              <p className="text-sm font-bold leading-6 text-[#4d3a22]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
  center = false,
  compact = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 ${
        compact ? "py-12 sm:py-16 lg:py-20" : "py-12 sm:py-16 lg:py-20"
      } ${
        dark ? "bg-[#17120c] text-white" : "bg-[#f7f0df] text-[#17120c]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className={`scroll-reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c18a2d]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-[#fff3d5]/75" : "text-[#675235]"}`}>
            {intro}
          </p>
        </div>
        <div className={compact ? "mt-7 sm:mt-8" : "mt-8 sm:mt-12"}>{children}</div>
      </div>
    </section>
  );
}

function FeatureCard({
  item,
  index,
}: {
  item: { title: string; description: string; icon: LucideIcon };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article className="scroll-reveal group flex flex-col rounded-[1.45rem] border border-[#e0c995] bg-white p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)] transition hover:-translate-y-2 hover:border-[#c18a2d] hover:shadow-[0_26px_75px_rgba(69,48,17,0.15)] sm:min-h-[230px] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-[#17120c] text-[#f6c45f] transition group-hover:rotate-3">
          <Icon className="size-6" strokeWidth={2.2} />
        </span>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#c18a2d]">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-extrabold tracking-[0.005em] text-[#17120c]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#675235]">{item.description}</p>
    </article>
  );
}

function TrainingCard({
  item,
}: {
  item: { title: string; description: string; icon: LucideIcon };
}) {
  const Icon = item.icon;

  return (
    <article className="scroll-reveal rounded-[1.45rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:-translate-y-2 hover:bg-white/[0.1] sm:min-h-[210px] sm:p-6">
      <Icon className="size-8 text-[#f6c45f]" strokeWidth={2.2} />
      <h3 className="mt-5 text-lg font-extrabold tracking-[0.005em]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#fff3d5]/72">{item.description}</p>
    </article>
  );
}

function StepCard({ step, index }: { step: string; index: number }) {
  const isOutcome = index === collaborationSteps.length - 1;

  return (
    <article
      className={`scroll-reveal group relative overflow-hidden rounded-[1.45rem] p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_75px_rgba(69,48,17,0.14)] sm:min-h-[230px] sm:p-6 ${
        isOutcome
          ? "border border-[#b47a1f] bg-[#17120c] text-white md:col-span-2 lg:col-span-4"
          : "border border-[#e0c995] bg-[#fffaf0] hover:border-[#b47a1f] hover:bg-white"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f6c45f,#b47a1f)]" />
      <div className="flex items-center justify-between gap-4">
        <p
          className={`grid size-12 place-items-center rounded-2xl text-lg font-black shadow-[0_14px_35px_rgba(23,18,12,0.18)] transition ${
            isOutcome
              ? "bg-[linear-gradient(135deg,#f7d985,#b47a1f)] text-[#17120c]"
              : "bg-[#17120c] text-[#f6c45f] group-hover:bg-[linear-gradient(135deg,#f7d985,#b47a1f)] group-hover:text-[#17120c]"
          }`}
        >
          {index + 1}
        </p>
        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${
            isOutcome
              ? "border border-[#f6c45f]/30 bg-white/10 text-[#f6c45f]"
              : "border border-[#e0c995] bg-white text-[#a87522]"
          }`}
        >
          {isOutcome ? "Outcome" : "Step"}
        </span>
      </div>
      <h3
        className={`mt-6 text-lg font-extrabold leading-tight tracking-[0.005em] sm:text-xl ${
          isOutcome ? "text-white" : "text-[#17120c]"
        }`}
      >
        {step}
      </h3>
      <p className={`mt-3 text-sm leading-6 ${isOutcome ? "text-[#fff3d5]/78" : "text-[#675235]"}`}>
        {[
          "Professional profile ready hoga taaki brands aap par trust kar saken.",
          "Relevant brands ke saath right connection build karne mein support milega.",
          "Pitch, email aur brand conversation ka practical guidance milega.",
          "Deal terms, deliverables aur payment discussion mein support diya jayega.",
          "Strong process ke baad paid campaign opportunity ke liye ready honge.",
        ][index]}
      </p>
    </article>
  );
}

function TestimonialSection() {
  return (
    <section className="bg-[#fffaf0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a87522]">
            Member Voice
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] text-[#17120c] sm:text-4xl lg:text-5xl">
            Confidence grows when direction becomes clear.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="scroll-reveal flex flex-col rounded-[1.6rem] border border-[#e0c995] bg-white p-5 shadow-[0_18px_55px_rgba(69,48,17,0.08)] sm:min-h-[220px] sm:p-6"
            >
              <div className="flex gap-1 text-[#b47a1f]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="size-4 fill-current" strokeWidth={1.8} />
                ))}
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-[#4d3a22]">
                "{item.quote}"
              </p>
              <p className="mt-auto pt-6 text-sm font-black uppercase tracking-[0.18em] text-[#a87522]">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderVisionSection() {
  return (
    <section className="bg-[#17120c] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div className="scroll-reveal rounded-[1.6rem] bg-[linear-gradient(135deg,#f6c45f,#fff2b8)] p-6 text-[#17120c] sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#684611]">
            Founder Vision
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] sm:text-4xl lg:text-5xl">
            Annu
          </h2>
          <p className="mt-5 text-base font-semibold leading-7 sm:text-lg sm:leading-8">
            Har creator ko sahi direction, practical training aur professional
            confidence milna chahiye, taaki woh apne talent ko real earning
            opportunity mein badal sake.
          </p>
        </div>
        <div className="scroll-reveal">
          <p className="text-base leading-7 text-[#fff3d5]/78 sm:text-lg sm:leading-8">
            Annu Brand Connection sirf membership nahi hai. Ye ek creator growth
            ecosystem hai jahan Annu ka focus hai beginners aur professionals ko
            step-by-step guide karna: profile building, content quality,
            networking, pitching aur paid collaboration readiness tak.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Learn with clarity", "Connect with confidence", "Grow your identity", "Earn with dignity"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <CheckCircle2 className="size-5 shrink-0 text-[#f6c45f]" />
                <p className="font-bold text-[#fff3d5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(69,48,17,0.14)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-[#17120c] p-6 text-white sm:p-8 lg:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c45f]">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[0.005em] sm:text-4xl">
            Start your creator growth journey.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#fff3d5]/75">
            Share your details and the Annu Brand Connection team can help you
            understand the next step for training, content, networking, and paid
            collaboration guidance.
          </p>
          <a
            href="https://wa.me/?text=Hello%20Annu%20Brand%20Connection%2C%20I%20want%20to%20join."
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#f6c45f]/30 bg-white/10 px-5 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-[#f6c45f] transition hover:-translate-y-1 hover:bg-[#f6c45f] hover:text-[#17120c]"
          >
            <MessageCircle className="size-5" strokeWidth={2.3} />
            Chat on WhatsApp
          </a>
        </div>
        <form className="grid gap-4 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Name" name="name" placeholder="Your full name" />
            <FormField label="Phone" name="phone" placeholder="Your phone number" type="tel" />
          </div>
          <FormField label="Email" name="email" placeholder="you@example.com" type="email" />
          <label className="grid gap-2 text-sm font-bold text-[#4d3a22]">
            Select Career Interest
            <Select name="career-interest">
              <SelectTrigger
                aria-label="Select career interest"
                className="rounded-2xl border-[#e0c995] bg-[#fffaf0] px-4 py-3 text-[#17120c] focus:border-[#b47a1f] focus:bg-white data-[placeholder]:text-[#9b855d]"
              >
                <SelectValue placeholder="Choose your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="influencer-career">Influencer Career</SelectItem>
                  <SelectItem value="professional-creator">Professional Creator</SelectItem>
                  <SelectItem value="paid-collaboration">Paid Collaboration</SelectItem>
                  <SelectItem value="brand-connect">Brand Connect</SelectItem>
                  <SelectItem value="content-training">Content Creation Training</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#4d3a22]">
            Message
            <textarea
              name="message"
              placeholder="Tell us about your creator goals"
              rows={5}
              className="resize-none rounded-2xl border border-[#e0c995] bg-[#fffaf0] px-4 py-3 text-[#17120c] outline-none transition placeholder:text-[#9b855d] focus:border-[#b47a1f] focus:bg-white"
            />
          </label>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#17120c] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#f6c45f] transition hover:-translate-y-1 hover:bg-[#b47a1f] hover:text-white"
          >
            Submit
            <Send className="size-4" strokeWidth={2.4} />
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#4d3a22]">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="rounded-2xl border border-[#e0c995] bg-[#fffaf0] px-4 py-3 text-[#17120c] outline-none transition placeholder:text-[#9b855d] focus:border-[#b47a1f] focus:bg-white"
      />
    </label>
  );
}

function VisualPillar({
  item,
  index,
}: {
  item: { title: string; detail: string; icon: LucideIcon };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <div className="rounded-[1rem] border border-[#e4c37b] bg-white/75 p-3 shadow-sm backdrop-blur sm:rounded-[1.25rem] sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="grid size-9 place-items-center rounded-xl bg-[#17120c] text-[#f6c45f] sm:size-11 sm:rounded-2xl">
          <Icon className="size-4 sm:size-5" strokeWidth={2.3} />
        </span>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#a87522] sm:text-xs sm:tracking-[0.18em]">
            0{index + 1}
          </p>
          <p className="text-sm font-black text-[#17120c] sm:text-base">{item.title}</p>
        </div>
      </div>
      <p className="mt-2 text-xs font-semibold text-[#675235] sm:mt-3 sm:text-sm">
        {item.detail}
      </p>
    </div>
  );
}

function GoldButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#fff2b8,#f6c45f_52%,#b47a1f)] px-3 py-2.5 text-center text-xs font-black uppercase tracking-[0.12em] text-[#17120c] shadow-[0_18px_50px_rgba(246,196,95,0.32)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(246,196,95,0.42)] sm:min-h-12 sm:gap-2 sm:px-7 sm:py-3 sm:text-sm sm:tracking-[0.14em]"
    >
      {children}
      <ArrowRight className="size-4" strokeWidth={2.5} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080704] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#f7d985,#b47a1f)] text-sm font-black text-[#17120c]">
                Annu
              </span>
              <span className="leading-tight">
                <span className="block text-base font-black uppercase tracking-[0.13em] text-white">
                  Annu Brand
                </span>
                <span className="block text-xs font-black uppercase tracking-[0.24em] text-[#f6c45f]">
                  Connection
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-white/62">
              Helping creators, influencers, and professionals learn, connect,
              grow, and earn with practical guidance and brand-ready confidence.
            </p>
            <p className="mt-4 text-sm font-black text-[#f6c45f]">
              Learn | Connect | Grow | Earn
            </p>
          </div>

          <FooterColumn
            title="Quick Links"
            links={[
              { label: "Home", href: "#home" },
              { label: "Benefits", href: "#benefits" },
              { label: "Training", href: "#training" },
              { label: "Pricing", href: "#pricing" },
            ]}
          />

          <FooterColumn
            title="Programs"
            links={[
              { label: "Influencer Career", href: "#creators" },
              { label: "Content Creation", href: "#benefits" },
              { label: "Brand Connect", href: "#collaborations" },
              { label: "Paid Collaboration", href: "#collaborations" },
            ]}
          />

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f6c45f]">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                { label: "Instagram", icon: Camera },
                { label: "YouTube", icon: Play },
                { label: "LinkedIn", icon: Link },
              ].map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#home"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm font-bold text-white/70 transition hover:bg-[#f6c45f] hover:text-[#17120c]"
                  >
                    <Icon className="size-4" strokeWidth={2.3} />
                    {social.label}
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f6c45f] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#17120c] transition hover:bg-white sm:w-auto"
            >
              Join Now
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Annu Brand Connection. Creator growth and collaboration platform.</p>
          <a href="#home" className="text-[#f6c45f] transition hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f6c45f]">
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-bold text-white/62 transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
