import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  Layers3,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Ruler,
  SearchCheck,
  ShieldCheck,
  Shirt,
  Sparkles,
  SwatchBook,
  Truck,
  UsersRound,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

import { AreasMarquee } from "@/components/areas-marquee";
import { BookCallModal } from "@/components/book-call-modal";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { TestimonialsSwiper } from "@/components/testimonials-swiper";

const pageBlueprint = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Compliance", href: "#compliance" },
  { label: "RFQ", href: "#enquiry" },
];

const products = [
  {
    title: "Cotton & Blends",
    description: "Everyday shirting, sheeting, twill, poplin, canvas, and blended base fabrics.",
    detail: "Woven",
    icon: SwatchBook,
  },
  {
    title: "Knits & Jerseys",
    description: "Single jersey, rib, interlock, fleece, and performance knit programs.",
    detail: "Knitted",
    icon: Shirt,
  },
  {
    title: "Processed Fabrics",
    description: "Dyed, printed, washed, finished, and value-added fabrics for bulk buying.",
    detail: "Finished",
    icon: Sparkles,
  },
];

const capabilities = [
  {
    title: "Mill Sourcing",
    description: "Match your count, construction, finish, MOQ, and lead time with suitable mills.",
    icon: Factory,
  },
  {
    title: "Sampling Desk",
    description: "Coordinate lab dips, strike-offs, hand-feel references, and buyer approvals.",
    icon: Ruler,
  },
  {
    title: "Bulk Tracking",
    description: "Keep production, inspection, packing, and dispatch milestones visible.",
    icon: BarChart3,
  },
  {
    title: "Export Support",
    description: "Prepare commercial, packing, and shipment documentation for buyer teams.",
    icon: FileText,
  },
];

const whyPoints = [
  { text: "Verified textile supplier network", icon: ShieldCheck },
  { text: "Sample-to-bulk coordination", icon: PackageCheck },
  { text: "Compliance documentation support", icon: ClipboardCheck },
  { text: "Clear MOQ and lead-time planning", icon: SearchCheck },
];

const processSteps = [
  "Share fabric brief",
  "Receive sourced options",
  "Approve samples",
  "Track bulk dispatch",
];

const heroStats = [
  { value: "250+", label: "Fabric references" },
  { value: "45", label: "Mill partners" },
  { value: "12", label: "Export categories" },
  { value: "24h", label: "Brief response" },
];

const markets = [
  { title: "Garment Exporters", description: "Reliable fabric programs for repeat buyer orders.", icon: Shirt },
  { title: "Buying Houses", description: "Vendor discovery, samples, and order follow-up.", icon: UsersRound },
  { title: "Retail Labels", description: "Seasonal fabric capsules and replenishment support.", icon: BadgeCheck },
  { title: "Home Textile Brands", description: "Sheeting, canvas, duck, dobby, and made-up bases.", icon: Warehouse },
  { title: "Industrial Buyers", description: "Utility textiles, packaging fabrics, and workwear bases.", icon: Boxes },
  { title: "Import Teams", description: "Export-ready coordination from sample to dispatch.", icon: Truck },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3ea] pb-24 text-[#1e2320] md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d7d0c0] bg-[#fffdf7]/94 shadow-[0_14px_44px_rgba(31,35,32,0.08)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-10 xl:px-0">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-sm bg-[#1f4f4a] text-sm font-black text-[#f4d06f]">
              TX
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.2em] text-[#1f4f4a]">
                Texora Supply
              </span>
              <span className="block text-xs font-bold text-[#7a6246]">
                B2B Textile Sourcing
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-1 text-sm font-black text-[#5f584d]">
              {pageBlueprint.map((item) => (
                <a
                  key={item.label}
                  className="px-3 py-2.5 transition hover:text-[#1f4f4a] lg:px-4"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <BookCallModal />
          </div>

          <div className="md:hidden">
            <BookCallModal />
          </div>
        </nav>
      </header>

      <section className="relative isolate px-4 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[#f7f3ea]" />
        <div className="absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(90deg,#1f4f4a_1px,transparent_1px),linear-gradient(0deg,#bd7d4d_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-7xl items-center gap-10 py-16 pt-28 sm:py-24 sm:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-28 lg:pt-32" id="top">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d8cbb7] bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#bd6f3e]">
              <Layers3 className="size-4" />
              B2B textile sourcing
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-normal text-[#17211e] min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
              Textile sourcing built for serious bulk buyers.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5b574f] sm:text-lg sm:leading-8">
              A clean informative B2B website demo for mills, exporters, buying houses, and fabric traders who need product clarity, compliance trust, and fast enquiry flow.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <a href="#enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#f4d06f] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#17211e] shadow-[0_18px_44px_rgba(189,111,62,0.18)] transition hover:-translate-y-1 hover:bg-[#ecc35a] sm:px-7 sm:text-sm">
                Send Brief
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </a>
              <a href="#products" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#1f4f4a]/25 bg-white/72 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#1f4f4a] transition hover:-translate-y-1 hover:bg-white sm:px-7 sm:text-sm">
                View Range
              </a>
            </div>
          </div>

          <HeroFabricPanel />
        </div>
      </section>

      <section id="products" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Product Range" title="Fabric categories buyers can scan fast." text="Practical product groups, construction notes, and commercial language help B2B buyers understand the sourcing offer quickly." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {products.map((product, index) => (
              <ProductCard key={product.title} index={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
          <SectionIntro eyebrow="Capabilities" title="From mill search to dispatch follow-up." text="Designed for informative B2B credibility: clear operations, measurable checkpoints, and a direct path from enquiry to sample approval." />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl border border-[#d7d0c0] bg-[#e9f0eb] p-5 text-[#17211e] shadow-[0_30px_90px_rgba(31,35,32,0.08)] sm:p-8 lg:p-10 xl:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionIntro eyebrow="Markets Served" title="Built for textile teams that buy repeatedly." text="The content blocks are shaped for procurement teams, exporters, labels, and import managers who need dependable sourcing information." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map((market) => (
                <MarketCard key={market.title} market={market} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="compliance" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          <div>
            <SectionIntro eyebrow="Compliance & Trust" title="Documentation before decoration." text="For textile B2B, trust is not just a badge. This layout gives space for certifications, testing, shade controls, packaging standards, and buyer-specific audit notes." />
            <a href="#enquiry" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#f4d06f] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#17211e] transition hover:-translate-y-1 hover:bg-[#ecc35a] sm:text-sm">
              Request Supplier Profile
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div key={point.text} className="border border-[#d7d0c0] bg-white/72 p-5 shadow-[0_18px_55px_rgba(31,35,32,0.06)]">
                <point.icon className="mb-5 size-8 text-[#bd6f3e]" strokeWidth={2.2} />
                <p className="text-lg font-black leading-7 text-[#17211e]">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Process" title="A simple sourcing flow for bulk orders." text="The demo landing page keeps the buyer journey obvious, then the remaining pages can go deeper into products, quality, documentation, and company story." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="border border-[#d7d0c0] bg-[#fffdf7] p-5">
                <p className="text-3xl font-black text-[#bd6f3e]">0{index + 1}</p>
                <p className="mt-5 text-lg font-black text-[#17211e]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#bd6f3e]">Fabric Focus</p>
            <p className="mt-3 text-base leading-7 text-[#5b574f] sm:text-lg sm:leading-8">
              Example categories for the product page and landing-page quick scan.
            </p>
          </div>
        </div>
        <AreasMarquee />
      </section>

      <TestimonialsSwiper />

      <section className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionIntro eyebrow="FAQ" title="Buyer questions answered early." text="The FAQ keeps the site informative and reduces weak enquiries before a buyer reaches the contact page." />
          <FaqAccordion />
        </div>
      </section>

      <section id="enquiry" className="px-4 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#bd6f3e] shadow-[0_30px_90px_rgba(189,111,62,0.24)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-5 text-[#17211e] sm:p-8 lg:p-10 xl:p-12">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3a2b21]/78">Start A Sourcing Brief</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal text-[#17211e] sm:text-4xl lg:text-5xl">
              Turn textile requirements into qualified supplier options.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#3a2b21]/82 sm:text-lg sm:leading-8">
              Share fabric type, GSM or construction, quantity, finish, and delivery target. The contact page in the full site can expand this into a detailed RFQ workflow.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <InfoPill icon={Mail} label="Email" value="sourcing@texora.demo" />
              <InfoPill icon={Phone} label="Desk" value="Buyer enquiry support" />
            </div>
          </div>
          <div className="bg-[#e9f0eb] p-5 text-[#17211e] sm:p-8 lg:p-10 xl:p-12">
            <div className="border border-[#d7d0c0] bg-[#fffdf7] p-5 shadow-[0_20px_60px_rgba(31,35,32,0.08)] sm:p-7">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4d06f]">Quick RFQ</p>
              <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Send your fabric brief.</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b574f]">
                This demo form is ready for buyer capture and can later connect to email, CRM, or WhatsApp.
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

function HeroFabricPanel() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-5 top-8 h-36 w-36 bg-[#f4d06f]/35 blur-3xl" />
      <div className="absolute -bottom-6 right-0 h-52 w-52 bg-[#1f4f4a]/20 blur-3xl" />
      <div className="relative border border-[#d7d0c0] bg-[#fffdf7] p-3 shadow-[0_34px_100px_rgba(31,35,32,0.16)]">
        <div className="relative min-h-[420px] overflow-hidden bg-[#e9f0eb] p-5 text-[#17211e] sm:min-h-[520px] sm:p-7">
          <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(31,79,74,0.12)_0_8px,transparent_8px_18px),repeating-linear-gradient(0deg,rgba(189,111,62,0.12)_0_6px,transparent_6px_16px)]" />
          <div className="absolute inset-x-8 top-9 h-44 rotate-[-7deg] bg-[#bd6f3e] shadow-[0_24px_60px_rgba(0,0,0,0.2)]" />
          <div className="absolute inset-x-16 top-28 h-44 rotate-[5deg] bg-[#f4d06f] shadow-[0_24px_60px_rgba(0,0,0,0.16)]" />
          <div className="absolute inset-x-10 top-48 h-44 rotate-[-3deg] bg-[#d8e4df] shadow-[0_24px_60px_rgba(0,0,0,0.18)]" />
          <div className="relative ml-auto w-44 border border-[#d7d0c0] bg-[#fffdf7]/90 p-4 shadow-[0_18px_45px_rgba(31,35,32,0.1)] backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#bd6f3e]">Live Brief</p>
            <p className="mt-2 text-2xl font-black">40s cotton poplin</p>
            <p className="mt-2 text-sm leading-6 text-[#5b574f]">20,000 meters, dyed, export packing</p>
          </div>
          <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border border-[#d7d0c0] bg-[#fffdf7]/88 p-3 shadow-[0_16px_38px_rgba(31,35,32,0.08)] backdrop-blur">
                <p className="text-2xl font-black text-[#bd6f3e]">{stat.value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#5b574f]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.24em] ${dark ? "text-[#bd6f3e]" : "text-[#bd6f3e]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-5xl ${dark ? "text-[#17211e]" : "text-[#17211e]"}`}>{title}</h2>
      <p className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-[#5b574f]" : "text-[#5b574f]"}`}>{text}</p>
    </div>
  );
}

function ProductCard({ index, product }: { index: number; product: (typeof products)[number] }) {
  const Icon = product.icon;

  return (
    <article className="group border border-[#d7d0c0] bg-[#fffdf7] p-5 shadow-[0_20px_60px_rgba(31,35,32,0.07)] transition hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(31,35,32,0.12)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-13 place-items-center bg-[#1f4f4a] text-[#f4d06f] transition group-hover:rotate-3">
          <Icon className="size-7" strokeWidth={2.2} />
        </span>
        <span className="bg-[#efe6d6] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#79573e]">{product.detail}</span>
      </div>
      <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#bd6f3e]">0{index + 1}</p>
      <h3 className="mt-3 text-2xl font-black text-[#17211e]">{product.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5f584d] sm:text-base sm:leading-7">{product.description}</p>
    </article>
  );
}

function CapabilityCard({ item }: { item: { title: string; description: string; icon: LucideIcon } }) {
  const Icon = item.icon;

  return (
    <article className="border border-[#d7d0c0] bg-white/72 p-5">
      <Icon className="mb-5 size-8 text-[#1f4f4a]" strokeWidth={2.2} />
      <h3 className="text-xl font-black text-[#17211e]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5f584d] sm:text-base sm:leading-7">{item.description}</p>
    </article>
  );
}

function MarketCard({ market }: { market: { title: string; description: string; icon: LucideIcon } }) {
  const Icon = market.icon;

  return (
    <article className="border border-[#d7d0c0] bg-[#fffdf7]/78 p-4">
      <Icon className="mb-4 size-7 text-[#1f4f4a]" strokeWidth={2.1} />
      <h3 className="text-lg font-black text-[#17211e]">{market.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#5b574f]">{market.description}</p>
    </article>
  );
}

function InfoPill({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="border border-[#17211e]/18 bg-white/18 p-4">
      <Icon className="mb-3 size-6 text-[#17211e]" strokeWidth={2.2} />
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#3a2b21]/68">{label}</p>
      <p className="mt-1 font-black text-[#17211e]">{value}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d7d0c0] bg-[#e9f0eb] px-4 py-10 text-[#17211e] sm:px-8 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-sm bg-[#f4d06f] text-sm font-black text-[#17211e]">TX</span>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1f4f4a]">Texora Supply</p>
                <p className="text-sm font-bold text-[#5b574f]">B2B Textile Sourcing</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#5b574f] sm:text-base sm:leading-7">
              Demo landing page for a textile B2B informative website covering products, sourcing capability, compliance, and buyer enquiry.
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1f4f4a]">Pages</p>
            <div className="mt-4 grid gap-3 text-sm font-bold text-[#5b574f]">
              {pageBlueprint.map((page) => (
                <a key={page.label} href={page.href} className="transition hover:text-[#1f4f4a]">{page.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1f4f4a]">Contact</p>
            <div className="mt-4 grid gap-3 text-sm font-bold text-[#5b574f]">
              <p>sourcing@texora.demo</p>
              <p>Fabric RFQ desk</p>
              <a href="#enquiry" className="text-[#bd6f3e] transition hover:text-[#1f4f4a]">Send enquiry</a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-[#d7d0c0] pt-5 text-xs font-bold text-[#5b574f] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>Texora Supply demo. Textile sourcing, sampling, and bulk coordination.</p>
          <a href="#top" className="text-[#bd6f3e] transition hover:text-[#1f4f4a]">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

function MobileBottomNav() {
  const items = [
    { label: "Range", href: "#products", icon: SwatchBook },
    { label: "Ops", href: "#capabilities", icon: Factory },
    { label: "Trust", href: "#compliance", icon: ShieldCheck },
    { label: "RFQ", href: "#enquiry", icon: Phone },
  ];

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 border border-[#d7d0c0] bg-[#fffdf7]/94 p-1.5 shadow-[0_18px_50px_rgba(31,35,32,0.16)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a key={item.label} href={item.href} className="flex flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-black text-[#5f584d] transition hover:bg-[#f4d06f] hover:text-[#17211e] min-[390px]:text-[11px]">
              <Icon className="size-5" strokeWidth={2.4} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function WhatsAppCta() {
  return (
    <a href="https://wa.me/?text=Hello%2C%20I%20want%20to%20share%20a%20fabric%20sourcing%20brief." target="_blank" rel="noreferrer" className="fixed bottom-[5.75rem] right-4 z-50 grid size-12 place-items-center rounded-full bg-[#25d366]/92 text-[#17211e] shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 hover:bg-[#25d366] sm:right-6 sm:size-16 md:bottom-6" aria-label="Chat on WhatsApp">
      <MessageCircle className="size-6 sm:size-8" strokeWidth={2.4} />
    </a>
  );
}
