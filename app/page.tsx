import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Factory,
  HomeIcon,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Store,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import { AreasMarquee } from "@/components/areas-marquee";
import { BookCallModal } from "@/components/book-call-modal";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { TestimonialsSwiper } from "@/components/testimonials-swiper";

const services = [
  {
    title: "Premium Plots",
    description:
      "Verified plots for living and investment.",
    detail: "Investment | Residential",
    icon: MapPin,
  },
  {
    title: "Luxury Flats & Homes",
    description:
      "Refined homes for comfort and value.",
    detail: "Flats | Villas | Homes",
    icon: HomeIcon,
  },
  {
    title: "Commercial Spaces",
    description:
      "Business-ready spaces in strong locations.",
    detail: "Office | Retail | Lease",
    icon: Building2,
  },
];

const trustPoints = [
  {
    text: "Verified options",
    icon: ShieldCheck,
  },
  {
    text: "Clear deal support",
    icon: CheckCircle2,
  },
  {
    text: "Vastu guidance",
    icon: Compass,
  },
  {
    text: "Ranchi market insight",
    icon: Landmark,
  },
];

const projects = [
  {
    title: "Plot Corridors",
    description:
      "Land options with growth potential.",
    tag: "Plots",
    icon: MapPin,
  },
  {
    title: "Home Shortlists",
    description:
      "Premium homes filtered for lifestyle.",
    tag: "Homes",
    icon: HomeIcon,
  },
  {
    title: "Commercial Spaces",
    description:
      "Retail and office spaces with visibility.",
    tag: "Commercial",
    icon: Building2,
  },
];

const industries = [
  {
    title: "Home Buyers",
    description: "Secure homes in good locations.",
    icon: UsersRound,
  },
  {
    title: "Investors",
    description: "Assets with stronger growth logic.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Retail Brands",
    description: "Visible spaces for customer footfall.",
    icon: Store,
  },
  {
    title: "Offices",
    description: "Practical workspaces in Ranchi.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Developers",
    description: "Market guidance for project owners.",
    icon: Factory,
  },
  {
    title: "Remote Buyers",
    description: "Verified options with clear updates.",
    icon: Compass,
  },
];

const steps = [
  "Share your requirement",
  "Get handpicked options",
  "Visit only serious matches",
  "Close with clarity",
];

const heroStats = [
  "Verified Listings",
  "Guided Deal Closure",
  "10+ Years Serving",
  "Expert Vastu Advice",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5efe2] pb-24 text-[#21170f] md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#d7c4a3]/70 bg-[#fffaf0]/90 shadow-[0_14px_45px_rgba(48,36,19,0.1)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10 xl:px-0">
          <div className="flex w-full items-center justify-between gap-4 md:w-auto">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-[#284f45] text-lg font-black text-[#f9e5ae]">
                SR
              </span>
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.2em] text-[#284f45]">
                  Sri Ram
                </span>
                <span className="block text-xs font-bold text-[#86663a]">
                  Property Consultancy
                </span>
              </span>
            </a>
            <div className="md:hidden">
              <BookCallModal />
            </div>
          </div>

          <div className="hidden text-sm font-bold text-[#61482d] md:flex md:items-center md:gap-8">
            <a
              className="transition hover:text-[#284f45]"
              href="#about"
            >
              About
            </a>
            <a
              className="transition hover:text-[#284f45]"
              href="#services"
            >
              Services
            </a>
            <a
              className="transition hover:text-[#284f45]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="transition hover:text-[#284f45]"
              href="#enquiry"
            >
              Contact Us
            </a>
            <BookCallModal />
          </div>
        </nav>
      </header>

      <section className="relative isolate px-4 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(199,147,64,0.32),transparent_28%),radial-gradient(circle_at_88%_6%,rgba(42,90,78,0.28),transparent_30%),linear-gradient(135deg,#fbf5ea_0%,#eadfc8_46%,#f7f0e2_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/35 blur-3xl" />

        <div
          id="top"
          className="mx-auto grid min-h-[calc(100svh-78px)] max-w-7xl items-center gap-8 py-14 pt-28 sm:gap-10 sm:py-24 sm:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-28 lg:pt-32"
        >
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight tracking-[-0.035em] text-[#1f2f29] min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
              Build your property legacy.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#604c36] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Verified plots, luxury homes, and commercial spaces in Ranchi,
              guided with trust and clarity.
            </p>
            <div className="mt-8 hidden sm:block">
              <HeroCtas />
            </div>
          </div>

          <HeroShowcase />
          <div className="sm:hidden">
            <HeroCtas />
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
              About Sri Ram
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
              Trusted property guidance.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8">
              Sri Ram Property Consultancy helps buyers, investors, and
              business owners choose verified plots, homes, and commercial
              spaces in Ranchi with clarity.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8">
              With 10+ years of serving clients, we shortlist serious options
              around your budget, location, and purpose, with transparent deal
              support and practical Vastu guidance.
            </p>
          </div>

          <div className="grid gap-3">
            {heroStats.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-[#dfceb1] bg-[#fffaf0]/75 p-4 shadow-[0_18px_55px_rgba(48,36,19,0.07)] backdrop-blur"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#284f45] text-[#f3cb7a]">
                  <CheckCircle2 className="size-5" strokeWidth={2.3} />
                </span>
                <p className="text-sm font-black uppercase tracking-[0.12em] text-[#284f45]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
              What We Deal In
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
              Property options that fit.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[1.8rem] border border-[#dfceb1] bg-[#fffaf0]/70 p-5 shadow-[0_24px_80px_rgba(48,36,19,0.08)] backdrop-blur sm:rounded-[2.5rem] sm:p-8 lg:p-10 xl:p-12">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
                Industries We Serve
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
                Who we serve.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8 lg:justify-self-end">
              Guidance for buyers, investors, and businesses.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
                Projects
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
                Curated project shortlists.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8 lg:justify-self-end">
              Compare serious options before visiting.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
            {projects.map((project) => (
              <FeatureCard key={project.title} item={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.8rem] bg-[#1f2f29] p-5 text-white shadow-[0_35px_100px_rgba(31,47,41,0.2)] sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:p-10 xl:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f3cb7a]">
              Why Choose Us
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] sm:mt-4 sm:text-4xl lg:text-5xl">
              Clarity before commitment.
            </h2>
            <p className="mt-4 leading-7 text-[#d8d1c4] sm:mt-6 sm:leading-8">
              We focus on clarity before commitment. Every recommendation is
              shaped around your purpose, preferred area, budget comfort, and
              future value.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.text}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:rounded-3xl sm:p-5"
              >
                <point.icon
                  className="mb-4 size-7 text-[#f3cb7a] sm:mb-5 sm:size-9"
                  strokeWidth={2}
                />
                <p className="text-base font-black leading-7 sm:text-lg">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
              Areas We Serve
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8">
              From Hinoo to key residential and commercial pockets, we help you
              compare practical property options across Ranchi.
            </p>
          </div>
        </div>
        <AreasMarquee />
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
              Simple Process
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
              Simple buying process.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8">
              Share your name, preferred location, requirement, and budget. We
              will filter suitable plots, flats, homes, or commercial spaces so
              you spend time only on serious options.
            </p>
            <a
              href="#enquiry"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c79340] px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-[#21170f] shadow-[0_18px_45px_rgba(199,147,64,0.26)] transition hover:-translate-y-1 hover:bg-[#d6a34f] sm:text-sm"
            >
              Start Enquiry
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>
          <div className="mt-8 grid gap-4 rounded-[1.8rem] border border-[#dfceb1] bg-[#fffaf0]/70 p-4 shadow-[0_24px_80px_rgba(48,36,19,0.08)] backdrop-blur sm:grid-cols-2 sm:p-5 lg:mt-10 lg:gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-white/65 p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5"
              >
                <p className="inline-flex size-11 items-center justify-center rounded-full bg-[#284f45] font-serif text-xl font-bold text-[#f3cb7a]">
                  0{index + 1}
                </p>
                <p className="mt-5 text-base font-bold text-[#1f2f29] sm:text-lg">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSwiper />

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#a67327]">
                FAQ
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#1f2f29] sm:text-4xl lg:text-5xl">
                Clear answers first.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#604c36] sm:text-lg sm:leading-8">
                Quick answers to common property questions before you contact
                our team.
              </p>
              <div className="mt-6">
                <BookCallModal />
              </div>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section id="enquiry" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.8rem] bg-[#c79340] shadow-[0_30px_90px_rgba(199,147,64,0.26)] sm:rounded-[2.7rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative isolate p-5 sm:p-8 lg:p-10 xl:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.32),transparent_30%)]" />
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#4f3718]">
              Make A Legendary Investment
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] text-[#21170f] sm:text-4xl lg:text-5xl">
              Ready to find your property?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4f3718] sm:mt-5 sm:text-lg sm:leading-8">
              Drop your requirement below. Our experts will shortlist practical,
              verified options and guide you with property and Vastu advice.
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <InfoPill icon={MapPin} label="Office" value="Hinoo, Ranchi" />
              <InfoPill
                icon={Phone}
                label="Consultation"
                value="Property & Vastu Advice"
              />
            </div>
          </div>

          <div className="bg-[#1f2f29] p-5 text-white sm:p-8 lg:p-10 xl:p-12">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 sm:rounded-[2rem] sm:p-7">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f3cb7a]">
                Quick Enquiry
              </p>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl">
                Get the right shortlist.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#d9d0bd]">
                Fill in the details and we will help you compare best-fit
                options for your location, budget, and purpose.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
      <WhatsAppCta />
    </main>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[23rem] sm:max-w-xl">
      <div className="absolute -right-5 top-8 h-44 w-44 animate-pulse rounded-full bg-[#284f45]/20 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-56 w-56 rounded-full bg-[#c79340]/25 blur-2xl" />

      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-[#fffaf0]/75 p-2.5 shadow-[0_35px_100px_rgba(48,36,19,0.2)] backdrop-blur sm:rounded-[2.5rem] sm:p-4">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.25rem] bg-[#1f2f29] p-4 text-white sm:min-h-[470px] sm:rounded-[2rem] sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(243,203,122,0.28),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(255,250,240,0.14),transparent_24%),linear-gradient(145deg,#162721_0%,#1f2f29_48%,#315d50_100%)]" />
          <div className="absolute -right-12 top-8 h-36 w-36 rounded-full border border-white/10 bg-white/5" />
          <div className="absolute left-8 top-8 h-20 w-20 rounded-[2rem] border border-[#f3cb7a]/20 bg-[#c79340]/20" />

          <div className="relative grid gap-3">
            <div className="ml-auto flex w-32 animate-[float_5s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur sm:w-48 sm:gap-3 sm:p-3">
              <span className="grid size-8 place-items-center rounded-xl bg-[#f3cb7a] text-[#1f2f29] sm:size-10">
                <BadgeIndianRupee className="size-4 sm:size-5" strokeWidth={2.4} />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#f3cb7a] sm:text-xs">
                  Smart
                </p>
                <p className="text-xs font-bold text-white sm:text-sm">Investment</p>
              </div>
            </div>

            <div className="mt-14 max-w-sm rounded-[1.2rem] border border-white/10 bg-white/[0.08] p-3.5 backdrop-blur-md sm:mt-8 sm:rounded-[1.6rem] sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f3cb7a]">
                Premium Advisory
              </p>
              <h2 className="mt-1.5 max-w-lg font-serif text-lg font-bold leading-tight tracking-[-0.03em] sm:mt-2 sm:text-3xl">
                Verified property. Clear guidance.
              </h2>
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-7 sm:bottom-7 sm:gap-3">
            <PropertyMetric
              icon={MapPin}
              label="Plots"
              value="01"
              delay="animate-[rise_0.7s_ease-out_both]"
            />
            <PropertyMetric
              icon={HomeIcon}
              label="Homes"
              value="02"
              delay="animate-[rise_0.7s_0.12s_ease-out_both]"
            />
            <PropertyMetric
              icon={Building2}
              label="Commercial"
              value="03"
              delay="animate-[rise_0.7s_0.24s_ease-out_both]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCtas() {
  return (
    <div className="grid grid-cols-2 justify-center gap-2 sm:flex sm:flex-row sm:gap-3 lg:justify-start">
      <a
        href="#enquiry"
        className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[#c79340] px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.1em] text-[#21170f] shadow-[0_20px_50px_rgba(199,147,64,0.35)] transition hover:-translate-y-1 hover:bg-[#d6a34f] min-[390px]:text-xs sm:min-h-12 sm:w-auto sm:gap-2 sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
      >
        Find Property
        <ArrowRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
      </a>
      <a
        href="#services"
        className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#9f7c49]/45 bg-white/45 px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.1em] text-[#284f45] transition hover:-translate-y-1 hover:bg-white min-[390px]:text-xs sm:min-h-12 sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
      >
        Explore Services
      </a>
    </div>
  );
}

function PropertyMetric({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delay: string;
}) {
  return (
    <div
      className={`rounded-[1rem] border border-white/10 bg-white/[0.09] p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.13] sm:rounded-[1.2rem] sm:p-4 ${delay}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-8 place-items-center rounded-xl bg-[#f3cb7a]/95 text-[#1f2f29] sm:size-10">
          <Icon className="size-4 sm:size-5" strokeWidth={2.4} />
        </span>
        <p className="font-serif text-xl font-bold text-[#f3cb7a] sm:text-2xl">{value}</p>
      </div>
      <p className="mt-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-white/70 sm:mt-3 sm:text-[10px] sm:tracking-[0.16em]">
        {label}
      </p>
    </div>
  );
}

function InfoPill({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#7f5721]/20 bg-white/25 p-4 sm:rounded-3xl sm:p-5">
      <Icon className="mb-3 size-6 text-[#284f45] sm:mb-4 sm:size-7" strokeWidth={2.2} />
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#704c1d]">
        {label}
      </p>
      <p className="mt-1 font-black text-[#21170f]">{value}</p>
    </div>
  );
}

function FeatureCard({
  item,
}: {
  item: {
    title: string;
    description: string;
    tag: string;
    icon: LucideIcon;
  };
}) {
  const Icon = item.icon;

  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-[#dfceb1] bg-[#fffaf0] shadow-[0_20px_60px_rgba(48,36,19,0.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(48,36,19,0.14)] sm:rounded-[2rem]">
      <div className="relative min-h-36 bg-[linear-gradient(135deg,#1f2f29_0%,#315d50_52%,#c79340_100%)] p-5 text-white sm:min-h-48 sm:p-6">
        <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/15 blur-xl" />
        <span className="grid size-12 place-items-center rounded-2xl bg-white/12 text-[#f3cb7a] backdrop-blur sm:size-14">
          <Icon className="size-6 sm:size-7" strokeWidth={2.2} />
        </span>
        <p className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur sm:bottom-6 sm:left-6">
          {item.tag}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold tracking-[-0.03em] text-[#21170f] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#6b553b] sm:mt-4 sm:text-base sm:leading-7">{item.description}</p>
      </div>
    </article>
  );
}

function IndustryCard({
  industry,
}: {
  industry: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
}) {
  const Icon = industry.icon;

  return (
    <article className="rounded-2xl border border-[#dfceb1] bg-white/55 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/80 sm:rounded-[1.7rem] sm:p-5">
      <Icon className="mb-4 size-7 text-[#284f45] sm:mb-5 sm:size-8" strokeWidth={2.2} />
      <h3 className="text-lg font-bold tracking-[-0.03em] text-[#21170f] sm:text-xl">
        {industry.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#6b553b] sm:mt-3 sm:text-base sm:leading-7">{industry.description}</p>
    </article>
  );
}

function ServiceCard({
  index,
  service,
}: {
  index: number;
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <article className="group rounded-[1.6rem] border border-[#dfceb1] bg-[#fffaf0] p-5 shadow-[0_20px_60px_rgba(48,36,19,0.08)] transition hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(48,36,19,0.14)] sm:rounded-[2rem] sm:p-6">
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-[#284f45] text-[#f3cb7a] transition group-hover:rotate-3 sm:size-14">
          <Icon className="size-6 sm:size-7" strokeWidth={2.2} />
        </span>
        <span className="rounded-full bg-[#f0dfbd] px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#7a5724] sm:px-4 sm:text-xs sm:tracking-[0.16em]">
          {service.detail}
        </span>
      </div>
      <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#c79340] sm:mt-8">
        0{index + 1}
      </p>
      <h3 className="mt-3 text-xl font-bold tracking-[-0.03em] text-[#21170f] sm:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#6b553b] sm:mt-4 sm:text-base sm:leading-7">{service.description}</p>
    </article>
  );
}

function Footer() {
  return (
    <footer className="bg-[#21170f] px-4 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-[#f3cb7a] text-lg font-black text-[#21170f]">
                SR
              </span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f3cb7a]">
                  Sri Ram
                </p>
                <p className="text-sm font-bold text-white/70">
                  Property Consultancy
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70 sm:mt-6 sm:text-base sm:leading-7">
              Verified plots, luxury homes, commercial spaces, and expert Vastu
              guidance for clients who want clarity before commitment.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f3cb7a]">
              Services
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold text-white/70 sm:mt-5 sm:gap-3">
              <a href="#services" className="transition hover:text-white">
                Premium Plots
              </a>
              <a href="#services" className="transition hover:text-white">
                Luxury Flats & Homes
              </a>
              <a href="#services" className="transition hover:text-white">
                Commercial Spaces
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f3cb7a]">
              Visit
            </p>
            <div className="mt-4 grid gap-2 text-sm font-bold text-white/70 sm:mt-5 sm:gap-3">
              <p>Office: Hinoo, Ranchi</p>
              <p>Property & Vastu Advice</p>
              <a href="#enquiry" className="text-[#f3cb7a] hover:text-white">
                Send Enquiry
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f3cb7a]">
              Connect
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-white/72 transition hover:bg-white/12 hover:text-white"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href="https://wa.me/?text=Hello%20Sri%20Ram%20Property%20Consultancy%2C%20I%20want%20property%20guidance%20in%20Ranchi."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-bold text-white/72 transition hover:bg-white/12 hover:text-white"
              >
                <MessageCircle className="size-4" strokeWidth={2.3} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold text-white/45 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>Sri Ram Property Consultancy. Real Estate Consultancy in Ranchi.</p>
          <a href="#top" className="text-[#f3cb7a] transition hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomNav() {
  const items = [
    { label: "About", href: "#about", icon: UsersRound },
    { label: "Services", href: "#services", icon: Building2 },
    { label: "Projects", href: "#projects", icon: Landmark },
    { label: "Contact", href: "#enquiry", icon: Phone },
  ];

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 rounded-[1.5rem] border border-[#d7c4a3]/70 bg-[#fffaf0]/92 p-1.5 shadow-[0_18px_50px_rgba(48,36,19,0.2)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 rounded-[1.1rem] px-2 py-2 text-[10px] font-black text-[#61482d] transition hover:bg-[#284f45] hover:text-white min-[390px]:text-[11px]"
            >
              <Icon className="size-5" strokeWidth={2.4} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14 8.4V6.8c0-.76.18-1.2 1.2-1.2H17V2.3C16.2 2.2 15.4 2 14.3 2c-2.7 0-4.5 1.6-4.5 4.6v1.8H7v3.7h2.8V22H14v-9.9h2.8l.4-3.7H14Z" />
    </svg>
  );
}

function WhatsAppCta() {
  return (
    <a
      href="https://wa.me/?text=Hello%20Sri%20Ram%20Property%20Consultancy%2C%20I%20want%20property%20guidance%20in%20Ranchi."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[5.75rem] right-4 z-50 grid size-12 place-items-center rounded-full border border-white/35 bg-[#25d366]/90 text-white shadow-[0_18px_45px_rgba(37,211,102,0.28)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#25d366] hover:shadow-[0_22px_55px_rgba(37,211,102,0.38)] sm:right-6 sm:size-16 md:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <svg
        aria-hidden="true"
        className="size-6 sm:size-8"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M16.03 4.5A11.42 11.42 0 0 0 6.1 21.6L4.5 27.5l6.05-1.58A11.42 11.42 0 1 0 16.03 4.5Zm0 20.78a9.3 9.3 0 0 1-4.72-1.29l-.34-.2-3.58.94.96-3.48-.22-.36a9.32 9.32 0 1 1 7.9 4.39Zm5.1-6.98c-.28-.14-1.64-.8-1.9-.9-.25-.1-.44-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.4-1.66-1.56-1.94-.16-.27-.02-.42.12-.56.13-.13.28-.32.42-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.86-2.05-.22-.53-.45-.45-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28s.98 2.64 1.12 2.82c.14.18 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.58.65.2 1.25.17 1.72.1.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.32Z" />
      </svg>
    </a>
  );
}
