"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

const P = {
  hero: "1616627561839-074385245ff6",
  bedroom: "1617325247661-675ab4b64ae2",
  bedding: "1600585154340-be6161a56a0c",
  comforter: "1505693416388-ac5ce068fe85",
  curtains: "1616486338812-3dadae4b4ace",
  cushion: "1615876234886-fd9a39fda97f",
  bath: "1582719478250-c89cae4dc85b",
  weave: "1615529328331-f8917597711f",
  neutral: "1519710164239-da123dc03ef4",
  sofa: "1555041469-a586c61ea9bc",
  dining: "1578662996442-48f60103fc96",
  linen: "1540574163026-643ea20ade25",
} as const;

function img(id: string, width = 1400) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=82&auto=format&fit=crop`;
}

type CategoryKey =
  | "Bedding Sets"
  | "Comforters"
  | "Curtains"
  | "Cushions"
  | "Towels"
  | "Throws"
  | "Sofa Covers"
  | "Bath Linens";

type Product = {
  id: string;
  category: CategoryKey;
  name: string;
  price: number;
  compareAt?: number;
  tone: string;
  imageId: string;
  badge?: string;
  rating: number;
  reviews: number;
  detail: string;
};

const categories: Array<{
  key: CategoryKey;
  title: string;
  kicker: string;
  imageId: string;
  description: string;
}> = [
  {
    key: "Bedding Sets",
    title: "Coordinated bedding sets",
    kicker: "Sleep-ready layers",
    imageId: P.bedding,
    description: "Complete sheet, sham, and coverlet edits for hotel-polished bedrooms.",
  },
  {
    key: "Comforters",
    title: "Airy comforters",
    kicker: "Cloud-soft warmth",
    imageId: P.comforter,
    description: "Balanced fills and cotton shells that feel lofty without trapping heat.",
  },
  {
    key: "Curtains",
    title: "Tailored curtains",
    kicker: "Light and privacy",
    imageId: P.curtains,
    description: "Sheer, room-darkening, and blackout panels cut for calmer daylight.",
  },
  {
    key: "Cushions",
    title: "Cushions and covers",
    kicker: "Sofa finishing",
    imageId: P.cushion,
    description: "Textured accents, quiet colors, and tactile details for finished rooms.",
  },
  {
    key: "Towels",
    title: "Spa-soft towels",
    kicker: "Bath ritual",
    imageId: P.bath,
    description: "Plush, absorbent towels for everyday bathing with a calm hotel feel.",
  },
  {
    key: "Throws",
    title: "Layered throws",
    kicker: "Quiet warmth",
    imageId: P.neutral,
    description: "Light sofa and bed layers that add softness without visual heaviness.",
  },
  {
    key: "Sofa Covers",
    title: "Tailored sofa covers",
    kicker: "Living room polish",
    imageId: P.sofa,
    description: "Protective covers with a styled drape for refreshed living spaces.",
  },
  {
    key: "Bath Linens",
    title: "Bath linen edits",
    kicker: "Clean comfort",
    imageId: P.linen,
    description: "Coordinated towels and textured bath layers for a finished suite.",
  },
];

const products: Product[] = [
  {
    id: "sheet-cloudtouch-latte",
    category: "Bedding Sets",
    name: "CloudTouch 8-piece Bedding Set",
    price: 5999,
    compareAt: 11999,
    tone: "Latte Creme",
    imageId: P.bedroom,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 418,
    detail: "A coordinated sheet, duvet, pillow, and cushion set with a cool sateen hand.",
  },
  {
    id: "sheet-cocoon-blue",
    category: "Bedding Sets",
    name: "Cocoon Complete Bed Edit",
    price: 6499,
    compareAt: 11999,
    tone: "Blue Meadow",
    imageId: P.neutral,
    badge: "New",
    rating: 4.8,
    reviews: 136,
    detail: "Soft washed cotton layers arranged for easy styling and everyday laundering.",
  },
  {
    id: "comforter-mulberry",
    category: "Comforters",
    name: "CloudTouch AC Comforter Set",
    price: 4999,
    compareAt: 10000,
    tone: "Mulberry",
    imageId: P.comforter,
    badge: "Save 50%",
    rating: 4.9,
    reviews: 272,
    detail: "Oversized, breathable comforter with two pillow covers and two cushion covers.",
  },
  {
    id: "comforter-morning",
    category: "Comforters",
    name: "Light Season Comforter",
    price: 4299,
    compareAt: 8499,
    tone: "Morning Glory",
    imageId: P.hero,
    rating: 4.7,
    reviews: 98,
    detail: "A light, lofty layer for warm nights and air-conditioned bedrooms.",
  },
  {
    id: "curtain-eudora-oat",
    category: "Curtains",
    name: "Eudora Jacquard Curtain Pair",
    price: 2699,
    compareAt: 5620,
    tone: "Oatleaf",
    imageId: P.curtains,
    badge: "Custom",
    rating: 4.8,
    reviews: 205,
    detail: "Room-darkening jacquard panels with custom length, lining, and header options.",
  },
  {
    id: "curtain-amore-white",
    category: "Curtains",
    name: "Amore Cotton Curtain Pair",
    price: 3109,
    compareAt: 5840,
    tone: "Off White",
    imageId: P.weave,
    rating: 4.7,
    reviews: 151,
    detail: "Plain cotton curtains for soft privacy, clean lines, and warm daylight.",
  },
  {
    id: "cushion-velvet-blush",
    category: "Cushions",
    name: "Velvet Cushion Cover Set",
    price: 1899,
    compareAt: 2999,
    tone: "Deep Blush",
    imageId: P.sofa,
    badge: "Set of 4",
    rating: 4.6,
    reviews: 184,
    detail: "Low-sheen velvet covers with hidden zippers and a rich, soft pile.",
  },
  {
    id: "cushion-jacquard-stone",
    category: "Cushions",
    name: "Pebble Jacquard Cushion Pair",
    price: 1599,
    tone: "Stone",
    imageId: P.dining,
    rating: 4.8,
    reviews: 74,
    detail: "Textured jacquard cushions that add dimension without visual noise.",
  },
  {
    id: "towel-waffle-ivory",
    category: "Towels",
    name: "Ivory Waffle Towel Stack",
    price: 2299,
    compareAt: 3599,
    tone: "Ivory",
    imageId: P.bath,
    badge: "Bath edit",
    rating: 4.8,
    reviews: 92,
    detail: "Quick-dry waffle towels with a soft hand and spa-inspired texture.",
  },
  {
    id: "throw-cashmere-oat",
    category: "Throws",
    name: "Oat Cloud Throw",
    price: 2799,
    compareAt: 4199,
    tone: "Warm Oat",
    imageId: P.neutral,
    rating: 4.7,
    reviews: 67,
    detail: "A light decorative throw for sofas, beds, and quiet reading corners.",
  },
  {
    id: "sofa-cover-stone",
    category: "Sofa Covers",
    name: "Stone Tailored Sofa Cover",
    price: 3899,
    compareAt: 5999,
    tone: "Stone",
    imageId: P.sofa,
    badge: "Living",
    rating: 4.6,
    reviews: 118,
    detail: "Soft protective coverage with a clean drape and neutral living-room finish.",
  },
  {
    id: "bath-linen-suite",
    category: "Bath Linens",
    name: "Bath Linen Suite",
    price: 3299,
    tone: "Cloud White",
    imageId: P.linen,
    rating: 4.8,
    reviews: 54,
    detail: "A coordinated bath linen edit for a fresh, composed bathroom shelf.",
  },
];

const benefits = [
  { label: "Free shipping above Rs. 999", Icon: Truck },
  { label: "Custom curtain sizing", Icon: Check },
  { label: "Soft cotton-rich fabrics", Icon: Sparkles },
  { label: "Easy exchanges", Icon: ShieldCheck },
];

const storyStats = [
  ["4.8/5", "average product rating"],
  ["100+", "curated colors and textures"],
  ["7 day", "exchange support"],
];

const roomGuides = [
  {
    title: "Bedroom refresh",
    body: "Start with a complete bedding set, add a comforter by season, then finish with two tonal cushions.",
    imageId: P.bedroom,
    video:
      "https://videos.pexels.com/video-files/6319254/6319254-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Window softness",
    body: "Use sheers for glow, room-darkening panels for privacy, and blackout lining where sleep matters most.",
    imageId: P.curtains,
    video:
      "https://videos.pexels.com/video-files/854116/854116-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Living room texture",
    body: "Layer cushions in velvet, jacquard, and cotton-rich textures to make sofas feel intentional.",
    imageId: P.sofa,
    video:
      "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
  },
];

const categoryHighlights = [
  ["Bedding Sets", "Coordinated sets for full-room upgrades", "Sateen, cotton-rich, washed textures"],
  ["Comforters", "Lightweight, AC-friendly, and oversized", "CloudTouch fills and breathable shells"],
  ["Curtains", "Customizable privacy and light control", "Sheer, blackout, jacquard, cotton"],
  ["Cushions", "Small accents with a finished designer feel", "Velvet, jacquard, solids, textured weaves"],
  ["Towels", "Spa softness for everyday bath rituals", "Waffle, terry, and quick-dry textures"],
  ["Throws", "Light layers for beds and sofas", "Brushed cotton and soft neutral weaves"],
  ["Sofa Covers", "Protective layers with polished drape", "Neutral covers for refreshed living rooms"],
  ["Bath Linens", "Coordinated bathroom softness", "Towels, hand towels, and bath accents"],
];

const popularClasses: Array<{
  title: string;
  category: CategoryKey;
  count: string;
  imageId: string;
  note: string;
}> = [
  {
    title: "Complete bed sets",
    category: "Bedding Sets",
    count: "24 styles",
    imageId: P.bedding,
    note: "Sheets, shams, covers, and cushions styled as one finished room.",
  },
  {
    title: "AC comforters",
    category: "Comforters",
    count: "18 styles",
    imageId: P.comforter,
    note: "Lightweight warmth for air-conditioned bedrooms and changing seasons.",
  },
  {
    title: "Custom curtains",
    category: "Curtains",
    count: "32 styles",
    imageId: P.curtains,
    note: "Sheer, blackout, and room-darkening panels for every light level.",
  },
  {
    title: "Decor cushions",
    category: "Cushions",
    count: "40 styles",
    imageId: P.cushion,
    note: "Velvet, jacquard, and cotton textures for sofa and bed finishing.",
  },
  {
    title: "Bath towel stacks",
    category: "Towels",
    count: "16 styles",
    imageId: P.bath,
    note: "Plush and waffle textures for an everyday spa-like routine.",
  },
  {
    title: "Sofa refresh covers",
    category: "Sofa Covers",
    count: "12 styles",
    imageId: P.sofa,
    note: "Protective, tailored layers that make living rooms feel newly styled.",
  },
];

const colorStories = [
  {
    name: "Cloud White",
    hex: "#f7f1e8",
    imageId: P.bedding,
    note: "Clean hotel calm for bedding sets and bath linens.",
  },
  {
    name: "Warm Oat",
    hex: "#c9b79d",
    imageId: P.neutral,
    note: "Soft neutral warmth for throws, curtains, and comforters.",
  },
  {
    name: "Sage Mist",
    hex: "#a8ad9a",
    imageId: P.curtains,
    note: "A quiet green-grey tone for relaxed window styling.",
  },
  {
    name: "Mulberry",
    hex: "#8b4d58",
    imageId: P.comforter,
    note: "A deeper accent shade for cushions and seasonal layers.",
  },
  {
    name: "Stone",
    hex: "#8d877d",
    imageId: P.sofa,
    note: "Grounded texture for sofa covers and everyday living rooms.",
  },
  {
    name: "Blue Meadow",
    hex: "#7d92a6",
    imageId: P.bedroom,
    note: "Cool softness for bedrooms that need a lighter mood.",
  },
];

const whyGloria = [
  {
    title: "Category-first home styling",
    body: "Bedding, curtains, cushions, throws, towels, and bath linens are organized around real room needs.",
    Icon: Sparkles,
  },
  {
    title: "Soft fabrics with structure",
    body: "Cotton-rich textures, smooth sateen finishes, and balanced fills are chosen for daily comfort and lasting shape.",
    Icon: Award,
  },
  {
    title: "Elegant, usable color stories",
    body: "Warm neutrals, soft whites, sage, stone, blue, and mulberry tones make it easier to style a complete room.",
    Icon: Moon,
  },
  {
    title: "Made for Indian homes",
    body: "Lightweight comforters, practical curtain options, and easy-care layers suit changing seasons and everyday use.",
    Icon: ShieldCheck,
  },
];

const customerReviews = [
  {
    quote:
      "The bedding feels soft without looking casual. It made the whole bedroom feel calmer the first night we used it.",
    name: "Ananya R.",
    location: "Delhi NCR",
    product: "CloudTouch Bedding Set",
  },
  {
    quote:
      "The curtains fall beautifully and the color is exactly the kind of muted tone I wanted for our living room.",
    name: "Meera S.",
    location: "Bengaluru",
    product: "Eudora Curtain Pair",
  },
  {
    quote:
      "The cushions and throw gave our sofa a finished designer look without making the room feel overdone.",
    name: "Ritika M.",
    location: "Mumbai",
    product: "Decor Cushion Edit",
  },
];

function rupee(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function Rating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#6a6258]">
      <span className="flex text-[#b58a46]" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-3.5 ${i < Math.round(value) ? "fill-current" : "opacity-30"}`}
            strokeWidth={1.3}
          />
        ))}
      </span>
      <span>
        {value.toFixed(1)} ({count})
      </span>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Bedding Sets");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const softnessRowRef = useRef<HTMLDivElement>(null);

  const selectedProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-[#25211d]">
      <header className="sticky top-0 z-50 border-b border-[#dfd4c6] bg-[#fbf8f3]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-serif text-2xl font-semibold tracking-[0.08em] text-[#25211d]">
            GLORIA
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {["Bedding", "Comforters", "Curtains", "Cushions", "Story"].map((item) => (
              <a
                key={item}
                href={item === "Story" ? "#story" : "#categories"}
                className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6a6258] transition hover:bg-[#eee6dc] hover:text-[#25211d]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-[#dfd4c6] text-[#3c352e] transition hover:bg-[#eee6dc]"
              aria-label="Search"
            >
              <Search className="size-4" strokeWidth={1.7} />
            </button>
            <button
              type="button"
              className="relative grid size-10 place-items-center rounded-full bg-[#25211d] text-white transition hover:bg-black"
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-4" strokeWidth={1.7} />
            </button>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-[#dfd4c6] text-[#3c352e] transition hover:bg-[#eee6dc] lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="border-t border-[#dfd4c6] bg-[#fbf8f3] px-4 py-4 lg:hidden">
            <div className="grid gap-2">
              {["Bedding", "Comforters", "Curtains", "Cushions", "Story"].map((item) => (
                <a
                  key={item}
                  href={item === "Story" ? "#story" : "#categories"}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-[#3c352e] hover:bg-[#eee6dc]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main id="home">
        <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#201c18]">
          <Image
            src={img(P.hero, 2200)}
            alt="Layered luxury bedding in a warm bedroom"
            fill
            priority
            className="object-cover opacity-78"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,0.78),rgba(18,15,12,0.28),rgba(18,15,12,0.14))]" />
          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl pb-[8vh] text-[#fffaf3]">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e2c895]">
                Luxury bedding and home textiles
              </p>
              <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
                Calm rooms, softer sleep, beautifully finished.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#fff6e8]/88 sm:text-lg">
                Category-led collections for bedding sets, comforters, curtains, and cushions, styled with the quiet elegance of a premium home linen boutique.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#categories"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fffaf3] px-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#25211d] transition hover:bg-white"
                >
                  Shop categories <ArrowRight className="size-4" />
                </a>
                <a
                  href="#bestsellers"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 px-7 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                >
                  View bestsellers
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfd4c6] bg-[#fffaf3]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#dfd4c6] px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
            {benefits.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3 py-5 text-sm font-medium text-[#3c352e] sm:px-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eee6dc] text-[#8f6530]">
                  <Icon className="size-4" strokeWidth={1.6} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#fffaf3] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Soft touch edit</p>
                <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  Softness Beyond Your Wildest Dreams
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full border border-[#dfd4c6] bg-white text-[#25211d] transition hover:bg-[#eee6dc]"
                  aria-label="Scroll softness edit left"
                  onClick={() => softnessRowRef.current?.scrollBy({ left: -340, behavior: "smooth" })}
                >
                  <ChevronLeft className="size-4" strokeWidth={1.7} />
                </button>
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full border border-[#dfd4c6] bg-white text-[#25211d] transition hover:bg-[#eee6dc]"
                  aria-label="Scroll softness edit right"
                  onClick={() => softnessRowRef.current?.scrollBy({ left: 340, behavior: "smooth" })}
                >
                  <ChevronRight className="size-4" strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>
          <div ref={softnessRowRef} className="hide-scrollbar mt-9 overflow-x-auto overflow-y-hidden px-4 pb-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl gap-4">
              {[...categories, ...products.slice(0, 4).map((product) => ({
                key: product.category,
                title: product.name,
                kicker: product.tone,
                imageId: product.imageId,
                description: product.detail,
              }))].map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group w-[78vw] shrink-0 overflow-hidden rounded-lg border border-[#dfd4c6] bg-white sm:w-72 lg:w-80"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e8ded0]">
                    <Image
                      src={img(item.imageId, 900)}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 78vw, 320px"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f6530]">{item.kicker}</p>
                    <h3 className="mt-3 font-serif text-2xl font-medium leading-tight">{item.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6a6258]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Shop by category</p>
                <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  Built around the way your home is actually styled.
                </h2>
              </div>
            </div>

            <div className="hide-scrollbar mt-10 flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`group w-[78vw] shrink-0 overflow-hidden rounded-lg border text-left transition sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)] ${
                    activeCategory === category.key
                      ? "border-[#8f6530] bg-[#fffaf3] shadow-[0_18px_55px_rgba(60,53,46,0.12)]"
                      : "border-[#dfd4c6] bg-white hover:border-[#bda98f]"
                  }`}
                >
                  <span className="relative block aspect-[4/5] overflow-hidden bg-[#e8ded0]">
                    <Image
                      src={img(category.imageId, 900)}
                      alt={category.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </span>
                  <span className="block p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f6530]">
                      {category.kicker}
                    </span>
                    <span className="mt-2 block font-serif text-2xl font-medium">{category.title}</span>
                    <span className="mt-3 block text-sm leading-6 text-[#6a6258]">{category.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Popular classes</p>
                <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  The product classes shoppers reach for first.
                </h2>
              </div>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#25211d]"
              >
                View all categories <ArrowRight className="size-3.5" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {popularClasses.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveCategory(item.category)}
                  className="group grid overflow-hidden rounded-lg border border-[#dfd4c6] bg-white text-left transition hover:border-[#bda98f] hover:shadow-[0_18px_55px_rgba(60,53,46,0.1)] sm:grid-cols-[9rem_1fr]"
                >
                  <span className="relative block aspect-[5/4] bg-[#e8ded0] sm:aspect-auto sm:min-h-44">
                    <Image
                      src={img(item.imageId, 700)}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 144px"
                    />
                  </span>
                  <span className="flex min-h-44 flex-col p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f6530]">{item.count}</span>
                    <span className="mt-3 font-serif text-2xl font-medium leading-tight">{item.title}</span>
                    <span className="mt-3 text-sm leading-6 text-[#6a6258]">{item.note}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#25211d]">
                      Explore class <ArrowRight className="size-3.5" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="bestsellers" className="bg-[#25211d] px-4 py-16 text-[#fffaf3] sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2c895]">Curated edit</p>
                <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  {activeCategory} with a more elegant point of view.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setActiveCategory(category.key)}
                    className={`inline-flex min-h-10 items-center rounded-full border px-4 text-[10px] font-bold uppercase tracking-[0.16em] transition ${
                      activeCategory === category.key
                        ? "border-[#e2c895] bg-[#e2c895] text-[#25211d]"
                        : "border-white/20 text-[#fffaf3] hover:bg-white/10"
                    }`}
                  >
                    {category.key}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {selectedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  dark
                  onQuickView={() => setQuickView(product)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Category compass</p>
                <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  Help shoppers understand the whole home collection at a glance.
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#6a6258]">
                  This section keeps the landing page focused on product families instead of cart actions, so each category has a clear purpose and taste level.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {categoryHighlights.map(([title, body, materials]) => (
                  <article key={title} className="rounded-lg border border-[#dfd4c6] bg-white p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f6530]">{title}</p>
                    <h3 className="mt-4 font-serif text-2xl font-medium">{body}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#6a6258]">{materials}</p>
                    <a
                      href="#bestsellers"
                      onClick={() => setActiveCategory(title as CategoryKey)}
                      className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#25211d]"
                    >
                      Explore edit <ArrowRight className="size-3.5" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Why Gloria</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Soft home layers with a quieter, more considered point of view.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#6a6258]">
                Gloria Beddings is built for shoppers who want their rooms to feel composed, comfortable, and easy to update by category, color, or mood.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyGloria.map(({ title, body, Icon }) => (
                <article key={title} className="rounded-lg border border-[#dfd4c6] bg-white p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-[#eee6dc] text-[#8f6530]">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-medium leading-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6a6258]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#e8ded0] lg:aspect-[5/6]">
              <Image
                src={img(P.linen, 1400)}
                alt="Close detail of premium linen fabric"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Material story</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Softness first, but never at the cost of structure.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6a6258]">
                The new layout gives each category a clear shopping job: bedding for complete room updates, comforters for seasonal sleep, curtains for privacy and light, and cushions for finishing texture.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {storyStats.map(([value, label]) => (
                  <div key={value} className="border-l border-[#cdbca6] pl-5">
                    <p className="font-serif text-4xl font-semibold">{value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6a6258]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  ["Cotton-rich handfeel", "Smooth, breathable, and easy to layer across Indian seasons."],
                  ["Category specific styling", "Every section shows what the product does in the room."],
                  ["Warm neutral palette", "Elegant ivory, walnut, stone, and muted gold instead of loud sale blocks."],
                  ["Practical commerce", "Fast add to cart, quick view, and compact pricing remain close to the product."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg border border-[#dfd4c6] bg-[#fffaf3] p-5">
                    <p className="font-serif text-xl font-medium">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a6258]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Shop By Color</p>
                <h2 className="mt-3 max-w-2xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  Choose the tone first, then build the room around it.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {colorStories.map((color) => (
                  <a
                    key={color.name}
                    href="#categories"
                    className="grid size-9 place-items-center rounded-full border border-[#dfd4c6] bg-white transition hover:scale-105"
                    aria-label={`Shop ${color.name}`}
                    title={color.name}
                  >
                    <span
                      className="size-6 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colorStories.map((color) => (
                <article key={color.name} className="group overflow-hidden rounded-lg border border-[#dfd4c6] bg-white">
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#e8ded0]">
                    <Image
                      src={img(color.imageId, 900)}
                      alt={`${color.name} home textile mood`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#fffaf3]/95 px-3 py-2 shadow-sm">
                      <span
                        className="size-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#25211d]">
                        {color.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl font-medium">{color.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#6a6258]">{color.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Shop by room mood</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Category stories that feel editorial, not transactional.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {roomGuides.map((guide, index) => (
                <article key={guide.title} className="group overflow-hidden rounded-lg border border-[#dfd4c6] bg-[#fffaf3]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#e8ded0]">
                    <SlowVideo
                      src={guide.video}
                      poster={img(guide.imageId, 1000)}
                      label={guide.title}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#fffaf3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#25211d]">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-3xl font-medium">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6a6258]">{guide.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Bedroom bundles",
                  body: "Sheets, comforters, pillow covers, and cushions arranged as ready-to-style edits.",
                  imageId: P.bedroom,
                  Icon: Moon,
                },
                {
                  title: "Window finishing",
                  body: "Choose sheer, room-darkening, or blackout curtains by utility, color, and fabric.",
                  imageId: P.curtains,
                  Icon: ShieldCheck,
                },
                {
                  title: "Giftable softness",
                  body: "Towels, throws, and covers that make simple home upgrades feel considered.",
                  imageId: P.bath,
                  Icon: Award,
                },
              ].map(({ title, body, imageId, Icon }) => (
                <article key={title} className="overflow-hidden rounded-lg border border-[#dfd4c6] bg-white">
                  <div className="relative aspect-[5/4]">
                    <Image src={img(imageId, 900)} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <Icon className="size-6 text-[#8f6530]" strokeWidth={1.5} />
                    <h3 className="mt-4 font-serif text-2xl font-medium">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#6a6258]">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f4ee] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8f6530]">Customer reviews</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                Loved for softness, restraint, and rooms that feel finished.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {customerReviews.map((review) => (
                <figure key={review.name} className="rounded-lg border border-[#dfd4c6] bg-[#fffaf3] p-6 shadow-[0_18px_55px_rgba(60,53,46,0.06)]">
                  <div className="flex items-center justify-between gap-4">
                    <Rating value={5} count={1} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f6530]">Verified</span>
                  </div>
                  <blockquote className="mt-6 font-serif text-2xl font-medium leading-snug text-[#25211d]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 border-t border-[#dfd4c6] pt-5">
                    <p className="font-semibold text-[#25211d]">{review.name}</p>
                    <p className="mt-1 text-sm text-[#6a6258]">{review.location}</p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f6530]">
                      {review.product}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f4ee] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-lg border border-[#dfd4c6] bg-[#25211d] text-[#fffaf3] md:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e2c895]">First order offer</p>
                <h2 className="mt-3 font-serif text-4xl font-medium leading-tight sm:text-5xl">
                  15% off your first order of ₹200+
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e8ded0]">
                  A soft welcome for new shoppers exploring bedding sets, comforters, curtains, and cushion edits.
                </p>
              </div>
              <div className="flex items-center border-t border-white/10 p-6 md:border-l md:border-t-0 sm:p-8 lg:p-10">
                <div className="min-w-52 rounded-lg border border-white/15 bg-white/[0.06] p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e2c895]">Use code</p>
                  <p className="mt-2 font-serif text-3xl font-semibold tracking-[0.08em]">WELCOME15</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171411] px-4 py-14 text-[#f8f4ee] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl font-semibold tracking-[0.08em]">GLORIA BEDDINGS</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#d8cdbd]">
              Elegant home linens for softer bedrooms, calmer windows, plush bath rituals, and finished living spaces.
            </p>
          </div>
          <FooterColumn title="Categories" links={["Bedding Sets", "Comforters", "Curtains", "Cushions", "Towels"]} />
          <FooterColumn title="Home" links={["Throws", "Sofa Covers", "Bath Linens", "Room Mood", "Material Story"]} />
          <FooterColumn title="Support" links={["Shipping", "Returns", "Care Guide", "Size Help", "Contact"]} />
          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e2c895]">Visit</p>
            <p className="mt-4 text-sm leading-7 text-[#d8cdbd]">
              Panipat, Haryana
              <br />
              India
            </p>
            <p className="mt-4 text-sm leading-7 text-[#d8cdbd]">
              hello@gloriabeddings.com
              <br />
              +91 1800-123-456
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#d8cdbd]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gloria Beddings. All rights reserved.</p>
          <p className="font-semibold uppercase tracking-[0.16em]">UPI · RuPay · Visa · Mastercard</p>
        </div>
      </footer>

      <Dialog.Root open={Boolean(quickView)} onOpenChange={(open) => !open && setQuickView(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/55" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] max-h-[90vh] w-[min(92vw,940px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-[#fffaf3] shadow-2xl outline-none">
            {quickView ? (
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square min-h-72 bg-[#e8ded0] md:aspect-auto">
                  <Image src={img(quickView.imageId, 1200)} alt={quickView.name} fill className="object-cover" sizes="(max-width: 768px) 92vw, 470px" />
                </div>
                <div className="p-7 sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f6530]">{quickView.category}</p>
                      <Dialog.Title className="mt-3 font-serif text-3xl font-medium leading-tight">{quickView.name}</Dialog.Title>
                    </div>
                    <Dialog.Close className="grid size-10 shrink-0 place-items-center rounded-full border border-[#dfd4c6] hover:bg-[#eee6dc]" aria-label="Close quick view">
                      <X className="size-4" />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="mt-5 text-sm leading-7 text-[#6a6258]">
                    {quickView.detail}
                  </Dialog.Description>
                  <div className="mt-5">
                    <Rating value={quickView.rating} count={quickView.reviews} />
                  </div>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-2xl font-bold">{rupee(quickView.price)}</span>
                    {quickView.compareAt ? <span className="text-sm text-[#9b8d7c] line-through">{rupee(quickView.compareAt)}</span> : null}
                  </div>
                  <p className="mt-2 text-sm text-[#6a6258]">{quickView.tone}</p>
                  <div className="mt-8 rounded-lg border border-[#dfd4c6] bg-white p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f6530]">Category note</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a6258]">
                      Use this product as part of the {quickView.category.toLowerCase()} edit to show color, texture, and room purpose before asking shoppers to choose.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={cartOpen} onOpenChange={setCartOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/45" />
          <Dialog.Content className="fixed right-0 top-0 z-[90] flex h-dvh w-[min(100vw,28rem)] flex-col bg-[#fffaf3] shadow-2xl outline-none">
            <div className="flex items-center justify-between border-b border-[#dfd4c6] px-5 py-4">
              <div>
                <Dialog.Title className="font-serif text-2xl font-medium">Your cart</Dialog.Title>
                <Dialog.Description className="mt-1 text-xs uppercase tracking-[0.16em] text-[#6a6258]">
                  Category-first preview
                </Dialog.Description>
              </div>
              <Dialog.Close className="grid size-10 place-items-center rounded-full border border-[#dfd4c6] hover:bg-[#eee6dc]" aria-label="Close cart">
                <X className="size-4" />
              </Dialog.Close>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <span className="grid size-14 place-items-center rounded-full bg-[#eee6dc] text-[#8f6530]">
                  <ShoppingBag className="size-6" strokeWidth={1.5} />
                </span>
                <p className="mt-6 font-serif text-3xl font-medium leading-tight">Cart stays in the header.</p>
                <p className="mt-4 text-sm leading-7 text-[#6a6258]">
                  The landing page now introduces categories first. Product purchase actions can be connected later from collection or product detail pages without making this page feel crowded.
                </p>
                <div className="mt-7 grid gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      type="button"
                      className="flex items-center justify-between rounded-lg border border-[#dfd4c6] bg-white px-4 py-3 text-left transition hover:bg-[#f8f4ee]"
                      onClick={() => {
                        setActiveCategory(category.key);
                        setCartOpen(false);
                      }}
                    >
                      <span>
                        <span className="block font-serif text-lg font-medium">{category.key}</span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-[#8f6530]">{category.kicker}</span>
                      </span>
                      <ArrowRight className="size-4 text-[#8f6530]" />
                    </button>
                  ))}
                </div>
              </div>
              <Dialog.Close className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#25211d] px-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-black">
                Continue exploring
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function SlowVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  return (
    <video
      ref={(node) => {
        if (node) {
          node.playbackRate = 0.55;
        }
      }}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      aria-label={label}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e2c895]">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-[#d8cdbd]">
        {links.map((link) => (
          <li key={link}>
            <a href="#categories" className="transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCard({
  product,
  dark = false,
  onQuickView,
}: {
  product: Product;
  dark?: boolean;
  onQuickView: () => void;
}) {
  return (
    <article
      className={`group grid overflow-hidden rounded-lg border md:grid-cols-[0.9fr_1.1fr] ${
        dark ? "border-white/12 bg-white/[0.06]" : "border-[#dfd4c6] bg-white"
      }`}
    >
      <div className="relative min-h-72 overflow-hidden bg-[#e8ded0]">
        <Image
          src={img(product.imageId, 1000)}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#fffaf3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#25211d]">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex min-h-72 flex-col p-6">
        <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${dark ? "text-[#e2c895]" : "text-[#8f6530]"}`}>
          {product.category}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-medium leading-tight">{product.name}</h3>
        <p className={`mt-3 text-sm leading-6 ${dark ? "text-[#e8ded0]" : "text-[#6a6258]"}`}>{product.detail}</p>
        <div className="mt-5">
          <Rating value={product.rating} count={product.reviews} />
        </div>
        <div className="mt-5 flex items-baseline gap-3">
          <span className="text-2xl font-bold">{rupee(product.price)}</span>
          {product.compareAt ? (
            <span className={`text-sm line-through ${dark ? "text-[#c7bba9]" : "text-[#9b8d7c]"}`}>{rupee(product.compareAt)}</span>
          ) : null}
        </div>
        <p className={`mt-1 text-sm ${dark ? "text-[#c7bba9]" : "text-[#6a6258]"}`}>{product.tone}</p>
        <div className="mt-auto flex gap-3 pt-6">
          <button
            type="button"
            onClick={onQuickView}
            className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
              dark ? "border-white/25 text-white hover:bg-white/10" : "border-[#dfd4c6] text-[#25211d] hover:bg-[#eee6dc]"
            }`}
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
}
