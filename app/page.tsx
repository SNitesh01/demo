"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  LayoutGrid,
  Link2,
  Mail,
  Menu,
  Search,
  Shield,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Undo2,
  User,
  X,
} from "lucide-react";
import { useId, useLayoutEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/** Unsplash IDs verified reachable with `?w=&q=` (avoid legacy crop URLs that 404). */
const P = {
  hero: "1600585154340-be6161a56a0c",
  bedroom: "1505693416388-ac5ce068fe85",
  living: "1540574163026-643ea20ade25",
  fabric: "1615876234886-fd9a39fda97f",
  sofa: "1555041469-a586c61ea9bc",
  interiorA: "1616486338812-3dadae4b4ace",
  interiorB: "1615529328331-f8917597711f",
  bath: "1582719478250-c89cae4dc85b",
  dining: "1578662996442-48f60103fc96",
  warmRoom: "1519710164239-da123dc03ef4",
} as const;

function u(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;
}

/** Replace FILM_SRC with your own textile / loom clip when ready. */
const FILM_POSTER = u(P.fabric, 1600);
const FILM_SRC = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

type Product = {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  imageId: string;
  badge?: "Sale" | "New" | "Limited";
  blurb: string;
};

function productHref(label: string) {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `#product-${slug}`;
}

const productsMegaMenu = [
  {
    title: "Shop by collection",
    Icon: LayoutGrid,
    links: ["All products", "New arrivals", "Best sellers", "Featured picks", "Limited runs"],
  },
  {
    title: "Bedding",
    Icon: Heart,
    links: ["Bedsheets", "Pillows", "Comforters", "Blankets", "Quilts & coverlets"],
  },
  {
    title: "Living & bath",
    Icon: Sparkles,
    links: ["Sofa covers", "Throws", "Towels", "Bath linens"],
  },
  {
    title: "Windows & light",
    Icon: SlidersHorizontal,
    links: ["Curtains & drapes", "Sheers", "Blackout panels", "Room darkening", "Hardware & tiebacks"],
  },
] as const;

/** Main header nav labels (not mega panel). Links keep original sizing; button gets the same classes + UA resets. */
const primaryNavLinkClass =
  "rounded-lg px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c534a] transition hover:bg-black/[0.04] hover:text-[#2a2622]";

const primaryNavMenuButtonClass = `${primaryNavLinkClass} inline-flex items-center gap-1.5 border-0 bg-transparent m-0 cursor-pointer appearance-none shadow-none outline-none ring-[#b6a06a]/0 focus-visible:ring-2 group-hover/products:bg-black/[0.04] group-hover/products:text-[#2a2622] group-focus-within/products:bg-black/[0.04] group-focus-within/products:text-[#2a2622]`;

/** Same grid as main sections: outer gutters, then `max-w-7xl` (no double horizontal padding). */
const pageGutterClass = "px-4 sm:px-6 lg:px-8";
const pageInnerClass = "mx-auto max-w-7xl";

const categories = [
  { label: "Bedsheets", id: P.bedroom, href: "#featured" },
  { label: "Pillows", id: P.fabric, href: "#featured" },
  { label: "Comforters", id: P.warmRoom, href: "#featured" },
  { label: "Sofa Covers", id: P.sofa, href: "#bestsellers" },
  { label: "Towels", id: P.bath, href: "#new" },
  { label: "Curtains", id: P.interiorA, href: "#bestsellers" },
  { label: "Blankets", id: P.living, href: "#new" },
] as const;

const whyUs = [
  {
    title: "Premium fabrics",
    body: "Long-staple cotton, European linen, and brushed layers chosen for hand-feel and drape.",
    Icon: Sparkles,
  },
  {
    title: "Designed for comfort",
    body: "Breathable weaves and weight-balanced fills for sleep that feels quietly indulgent.",
    Icon: Heart,
  },
  {
    title: "Built to last",
    body: "Reinforced seams, color-true dyes, and finishes that survive real laundry cycles.",
    Icon: Shield,
  },
  {
    title: "Easy returns",
    body: "30-night bedding trial on select sets, plus simple exchanges if the tone is not quite right.",
    Icon: Undo2,
  },
] as const;

const featured: Product[] = [
  {
    id: "f1",
    name: "Sable Sateen Sheet Set",
    price: 13999,
    compareAt: 18999,
    rating: 4.9,
    reviewCount: 312,
    imageId: P.bedroom,
    badge: "Sale",
    blurb: "Cool-touch sateen with a luminous matte sheen—hotel weight, home softness.",
  },
  {
    id: "f2",
    name: "Loom Down Alternative Pillow",
    price: 7999,
    rating: 4.8,
    reviewCount: 186,
    imageId: P.fabric,
    badge: "New",
    blurb: "Lofty microfiber fill with a cotton sateen shell—supportive without the crunch.",
  },
  {
    id: "f3",
    name: "Maison Weighted Quilt",
    price: 20499,
    compareAt: 24699,
    rating: 4.7,
    reviewCount: 94,
    imageId: P.warmRoom,
    badge: "Sale",
    blurb: "Channel-stitched layers for even warmth—reads minimal, feels substantial.",
  },
  {
    id: "f4",
    name: "Tailored Sofa Throw",
    price: 16499,
    rating: 4.6,
    reviewCount: 142,
    imageId: P.sofa,
    badge: "Limited",
    blurb: "Protective coverage that drapes like styling—soft neutral pile, quiet hardware.",
  },
];

const newArrivals: Product[] = [
  {
    id: "n1",
    name: "Ivory Waffle Towel Set",
    price: 6999,
    compareAt: 8999,
    rating: 4.8,
    reviewCount: 56,
    imageId: P.bath,
    badge: "New",
    blurb: "Spa-weight waffle with quick-dry loft—edges bound in tonal cotton.",
  },
  {
    id: "n2",
    name: "Linen Curtain Panel",
    price: 10299,
    rating: 4.7,
    reviewCount: 73,
    imageId: P.interiorA,
    blurb: "Rippled light control with a dry hand—dyed in small batches for depth.",
  },
  {
    id: "n3",
    name: "Cashmere-Blend Throw",
    price: 14799,
    compareAt: 17499,
    rating: 4.9,
    reviewCount: 41,
    imageId: P.living,
    badge: "Sale",
    blurb: "Featherlight warmth for sofas and beds—fringe-free, modern hem.",
  },
  {
    id: "n4",
    name: "Mattress Protector",
    price: 9299,
    rating: 4.5,
    reviewCount: 128,
    imageId: P.bedroom,
    blurb: "Quiet waterproof membrane with a cotton terry face—no crinkle, no heat trap.",
  },
];

const bestSellers: Product[] = [
  {
    id: "b1",
    name: "Maison Everyday Duvet",
    price: 22199,
    compareAt: 26499,
    rating: 4.9,
    reviewCount: 402,
    imageId: P.warmRoom,
    badge: "Sale",
    blurb: "Baffle-box construction with responsibly sourced down alternative.",
  },
  {
    id: "b2",
    name: "European Linen Sham Pair",
    price: 5999,
    rating: 4.8,
    reviewCount: 221,
    imageId: P.fabric,
    blurb: "Relaxed weave that softens with every wash—mother-of-pearl buttons.",
  },
  {
    id: "b3",
    name: "Velvet Curtain Pair",
    price: 16499,
    compareAt: 19999,
    rating: 4.7,
    reviewCount: 167,
    imageId: P.interiorB,
    badge: "Sale",
    blurb: "Low-sheen pile that reads rich at night, calm by day.",
  },
  {
    id: "b4",
    name: "Cushion Cover Set (4)",
    price: 5299,
    rating: 4.6,
    reviewCount: 305,
    imageId: P.dining,
    blurb: "Hidden zipper, knife-edge tailoring—mixes with every palette.",
  },
];

const testimonials = [
  {
    quote:
      "The sateen sheets feel like five-star bedding but warmer—no synthetic shine, just calm drape.",
    name: "Elena M.",
    city: "Mumbai",
  },
  {
    quote: "Finally curtains that photograph true to tone. The sage reads sage, not grey.",
    name: "Jordan P.",
    city: "Bengaluru",
  },
  {
    quote: "Returns were painless when the quilt was heavier than I expected. The exchange team was lovely.",
    name: "Amira K.",
    city: "Delhi NCR",
  },
];

function formatRupee(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

function StarRow({ value }: { value: number }) {
  const clamped = Math.min(5, Math.max(0, value));
  return (
    <div className="flex items-center gap-0.5 text-[#b6a06a]" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const diff = clamped - i;
        if (diff >= 1) {
          return <Star key={i} className="size-3.5 fill-current" strokeWidth={1.25} />;
        }
        if (diff >= 0.35) {
          return <Star key={i} className="size-3.5 fill-current opacity-50" strokeWidth={1.25} />;
        }
        return <Star key={i} className="size-3.5 fill-none opacity-35" strokeWidth={1.25} />;
      })}
    </div>
  );
}

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.06 },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
            }
      }
    >
      {children}
    </motion.div>
  );
}

function ProductMegaPanel({ onPickLink }: { onPickLink?: () => void }) {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-[#faf8f5] p-5 shadow-[0_24px_80px_rgba(42,38,34,0.14)] ring-1 ring-black/[0.03] sm:p-6">
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {productsMegaMenu.map(({ title, Icon, links }) => (
          <div key={title} className="min-w-0">
            <p className="flex items-center gap-2.5 border-b border-black/[0.06] pb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2a2622]">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#ebe4d9] text-[#5c534a] shadow-inner shadow-white/40">
                <Icon className="size-[18px]" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="leading-tight">{title}</span>
            </p>
            <ul className="mt-3 space-y-0.5">
              {links.map((label) => (
                <li key={label}>
                  <a
                    href={productHref(label)}
                    onClick={onPickLink}
                    className="group/link flex items-center gap-2 rounded-lg py-1.5 pl-1 pr-2 text-[13px] leading-snug text-[#4a433c] transition hover:bg-[#ebe4d9]/60 hover:text-[#2a2622]"
                  >
                    <ArrowRight
                      className="-translate-x-1 size-3 shrink-0 text-[#b6a06a] opacity-0 transition group-hover/link:translate-x-0 group-hover/link:opacity-100"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsMegaNav({ onPickLink }: { onPickLink?: () => void }) {
  return (
    <div className="group/products relative">
      <button
        type="button"
        className={primaryNavMenuButtonClass}
        aria-expanded="false"
        aria-haspopup="true"
      >
        Products
        <ChevronDown
          className="size-3.5 shrink-0 text-[#8a8076] transition duration-300 group-hover/products:rotate-180 group-focus-within/products:rotate-180"
          aria-hidden
        />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full z-[100] w-screen max-w-[100vw] -translate-x-1/2 pt-1 opacity-0 transition duration-200 ease-out invisible group-hover/products:pointer-events-auto group-hover/products:visible group-hover/products:opacity-100 group-focus-within/products:pointer-events-auto group-focus-within/products:visible group-focus-within/products:opacity-100">
      <div className={`${pageGutterClass} pt-1`}>
        <div className={pageInnerClass}>
          <ProductMegaPanel onPickLink={onPickLink} />
        </div>
      </div>
      </div>
    </div>
  );
}

function MobileProductMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mt-2 max-h-[min(70vh,28rem)] overflow-y-auto rounded-xl border border-black/[0.08] bg-white/80 p-2">
      {productsMegaMenu.map(({ title, Icon, links }) => (
        <details key={title} className="group border-b border-black/[0.06] last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center gap-2.5 py-3 pl-2 pr-2 [&::-webkit-details-marker]:hidden">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#ebe4d9] text-[#5c534a]">
              <Icon className="size-[18px]" strokeWidth={1.5} aria-hidden />
            </span>
            <span className="flex-1 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2a2622]">{title}</span>
            <ChevronDown className="size-4 shrink-0 text-[#8a8076] transition group-open:rotate-180" aria-hidden />
          </summary>
          <ul className="space-y-0.5 pb-3 pl-3">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={productHref(label)}
                  onClick={onNavigate}
                  className="flex items-center gap-2 rounded-lg py-2 pl-10 pr-2 text-[13px] text-[#4a433c] hover:bg-black/[0.04] hover:text-[#2a2622]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

function CategorySwiper() {
  const uid = useId();
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      spaceBetween={16}
      slidesPerView={1.15}
      breakpoints={{
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
      className="category-swiper overflow-hidden"
    >
      {categories.map((c) => (
        <SwiperSlide key={`${uid}-${c.label}`} className="!h-auto">
          <a
            href={c.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_14px_40px_rgba(42,38,34,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(42,38,34,0.1)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={u(c.id, 900)} alt={c.label} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 70vw, 280px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
              <span className="absolute inset-x-0 bottom-0 px-3 pb-3 text-center font-serif text-base text-white drop-shadow sm:text-lg">{c.label}</span>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProductSwiper({
  products,
  onQuickView,
  onAddToCart,
}: {
  products: Product[];
  onQuickView: (p: Product) => void;
  onAddToCart: () => void;
}) {
  const uid = useId();
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true, dynamicBullets: true }}
      spaceBetween={20}
      slidesPerView={1.08}
      breakpoints={{
        520: { slidesPerView: 1.35 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className={`product-swiper overflow-hidden !pb-12 [&_.swiper-pagination-bullet-active]:bg-[#2a2622]`}
    >
      {products.map((p) => (
        <SwiperSlide key={`${uid}-${p.id}`} className="!h-auto">
          <ProductCard product={p} onQuickView={() => onQuickView(p)} onAddToCart={onAddToCart} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const HERO_IMAGE_SLIDES = [
  { id: P.hero, alt: "Sunlit living space with layered neutrals" },
  { id: P.living, alt: "Welcoming living room with soft daylight" },
  { id: P.warmRoom, alt: "Warm bedroom textiles and gentle light" },
] as const;

const heroSwiperClass =
  "hero-swiper !absolute inset-0 z-0 h-full w-full [&_.swiper-slide]:h-full [&_.swiper-wrapper]:h-full";

function HeroSection({ reduce, topChromeH }: { reduce: boolean; topChromeH: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const offset = topChromeH > 0 ? topChromeH : 104;

  return (
    <section
      id="home"
      style={{ height: `calc(100svh - ${offset}px)` }}
      className="relative isolate min-h-[22rem] overflow-hidden bg-[#1a1612]"
    >
      <Swiper
        modules={[Autoplay]}
        speed={900}
        rewind
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        className={heroSwiperClass}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
        }}
        onSlideChange={(swiper) => {
          const v = videoRef.current;
          if (swiper.activeIndex === 0) {
            swiper.autoplay.stop();
            if (v) {
              v.currentTime = 0;
              void v.play().catch(() => {});
            }
          } else {
            v?.pause();
            if (!swiper.autoplay.running) swiper.autoplay.start();
          }
        }}
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={FILM_POSTER}
              muted
              playsInline
              preload="metadata"
              autoPlay
              onEnded={() => {
                const s = swiperRef.current;
                if (!s || s.activeIndex !== 0) return;
                s.slideNext();
                s.autoplay.start();
              }}
            >
              <source src={FILM_SRC} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        {HERO_IMAGE_SLIDES.map((slide, idx) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={u(slide.id, 2400)}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div
                className={
                  reduce
                    ? "pointer-events-none absolute inset-0 bg-black/40"
                    : "pointer-events-none absolute inset-0 bg-black/[0.18] backdrop-blur-[3px]"
                }
                aria-hidden
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/20 to-black/25" />
      <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 py-16 text-center text-[#faf8f5]">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#f5f0e8]/90"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury textiles for restful rooms
        </motion.p>
        <motion.h1
          className="mt-6 max-w-3xl font-serif text-[2.5rem] font-medium leading-[1.08] tracking-[0.02em] sm:text-5xl lg:text-[3.5rem]"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Soft layers. Quiet rooms. Everyday indulgence.
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Pillows, bedding, bath, and window dressings—curated like a boutique, finished like heirlooms.
        </motion.p>
        <motion.div
          className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <a
            href="#featured"
            className="inline-flex min-h-12 min-w-[11rem] items-center justify-center rounded-full bg-[#faf8f5] px-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#2a2622] shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
          >
            Shop the edit
          </a>
          <a
            href="#categories"
            className="inline-flex min-h-12 min-w-[11rem] items-center justify-center rounded-full border border-white/55 px-8 text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-white/10"
          >
            Browse categories
          </a>
        </motion.div>
      </div>
      <div className="pointer-events-auto absolute bottom-7 right-4 z-[3] flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          className="grid size-10 place-items-center rounded-full border border-white/25 bg-black/40 text-[#faf8f5] shadow-sm backdrop-blur-sm transition hover:bg-black/55"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="size-5" strokeWidth={1.75} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="grid size-10 place-items-center rounded-full border border-white/25 bg-black/40 text-[#faf8f5] shadow-sm backdrop-blur-sm transition hover:bg-black/55"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="size-5" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  const reduce = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [newsletter, setNewsletter] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sent">("idle");
  const [topChromeH, setTopChromeH] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const promo = document.getElementById("site-promo");
      const head = document.getElementById("site-header");
      setTopChromeH((promo?.getBoundingClientRect().height ?? 0) + (head?.getBoundingClientRect().height ?? 0));
    };
    measure();
    const ro = new ResizeObserver(measure);
    const p = document.getElementById("site-promo");
    const h = document.getElementById("site-header");
    if (p) ro.observe(p);
    if (h) ro.observe(h);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#faf8f5] text-[#2a2622]">
      <div id="site-promo" className="bg-[#2a2622] py-2.5 text-[#f5f0e8]">
        <div className={pageGutterClass}>
          <p className={`${pageInnerClass} text-center text-[11px] font-medium uppercase leading-snug tracking-[0.28em] sm:text-xs`}>
            Complimentary shipping on orders over ₹12,000 · Woven with care in Panipat
          </p>
        </div>
      </div>

      <header id="site-header" className="sticky top-0 z-50 overflow-x-clip overflow-y-visible border-b border-black/[0.06] bg-[#faf8f5]/90 backdrop-blur-md">
        <div className={pageGutterClass}>
          <div className={`${pageInnerClass} relative flex min-w-0 items-center justify-between gap-3 py-3 sm:py-4`}>
            <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-10">
              <a href="#home" className="shrink-0 font-serif text-xl font-semibold tracking-[0.06em] sm:text-2xl lg:text-[1.65rem]">
                Maison Loom
              </a>

              <nav className="hidden min-w-0 items-center gap-1 lg:flex" aria-label="Primary">
                <a href="#home" className={primaryNavLinkClass}>
                  Film
                </a>
                <a href="#new" className={primaryNavLinkClass}>
                  New arrivals
                </a>
                <a href="#bestsellers" className={primaryNavLinkClass}>
                  Best sellers
                </a>
                <a href="#why" className={primaryNavLinkClass}>
                  Our craft
                </a>
                <ProductsMegaNav />
              </nav>
            </div>

            <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
              <button
                type="button"
                aria-label="Search"
                className="grid size-10 place-items-center rounded-full text-[#3a342e] transition hover:bg-black/[0.04]"
              >
                <Search className="size-[18px] stroke-[1.6]" />
              </button>
              <button
                type="button"
                aria-label="Account"
                className="hidden size-10 place-items-center rounded-full text-[#3a342e] transition hover:bg-black/[0.04] sm:grid"
              >
                <User className="size-[18px] stroke-[1.6]" />
              </button>
              <button
                type="button"
                aria-label={`Cart, ${cartCount} items`}
                className="relative grid size-10 place-items-center rounded-full text-[#3a342e] transition hover:bg-black/[0.04]"
              >
                <ShoppingBag className="size-[18px] stroke-[1.6]" />
                {cartCount > 0 ? (
                  <span className="absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-[#b6a06a] px-1 text-[10px] font-semibold text-white">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-full border border-black/[0.08] text-[#2a2622] lg:hidden"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="size-[18px] stroke-[1.6]" />
              </button>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <button type="button" className="absolute inset-0 bg-black/35" aria-label="Close menu" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 flex h-full w-[min(100vw-1rem,22rem)] flex-col bg-[#faf8f5] p-5 shadow-2xl sm:w-[min(100vw-1rem,26rem)]">
              <div className="flex items-center justify-between gap-2 border-b border-black/[0.06] pb-4">
                <p className="font-serif text-xl">Menu</p>
                <button type="button" className="grid size-10 place-items-center rounded-full border border-black/[0.08]" aria-label="Close" onClick={() => setMobileOpen(false)}>
                  <X className="size-[18px]" />
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2 overflow-y-auto pb-6">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a89886]">Browse</p>
                {[
                  ["Film", "#home"],
                  ["New arrivals", "#new"],
                  ["Best sellers", "#bestsellers"],
                  ["Our craft", "#why"],
                  ["Shop categories", "#categories"],
                  ["Featured", "#featured"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between rounded-xl border border-black/[0.08] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#3a342e] transition hover:bg-black/[0.04]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                    <ArrowRight className="size-4 text-[#b6a06a]" strokeWidth={1.5} aria-hidden />
                  </a>
                ))}
                <p className="mt-4 px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a89886]">Products — mega menu</p>
                <MobileProductMega onNavigate={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <Dialog.Root open={quickView !== null} onOpenChange={(open) => !open && setQuickView(null)}>
        <main>
          <HeroSection reduce={reduce ?? false} topChromeH={topChromeH} />

          <section id="categories" className="border-b border-black/[0.06] bg-[#f3efe8] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <FadeIn className="text-center">
                <h2 className="font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">Shop by category</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6b635a]">
                  Swipe through bedsheets, pillows, comforters, and more—everything to compose a calmer home.
                </p>
              </FadeIn>
              <FadeIn className="mt-10" delay={0.08}>
                <CategorySwiper />
              </FadeIn>
            </div>
          </section>

          <section id="featured" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a89886]">Curated now</p>
                  <h2 className="mt-2 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">Featured products</h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6b635a]">Editor favorites with limited palettes—swipe to compare, tap for quick view.</p>
                </div>
                <a href="#bestsellers" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2a2622] underline-offset-4 hover:underline">
                  View best sellers
                </a>
              </FadeIn>
              <FadeIn className="mt-10" delay={0.06}>
                <ProductSwiper products={featured} onQuickView={setQuickView} onAddToCart={() => setCartCount((c) => c + 1)} />
              </FadeIn>
            </div>
          </section>

          <section id="why" className="border-y border-black/[0.06] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-6xl text-center">
              <FadeIn>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a89886]">Why Maison Loom</p>
                <h2 className="mt-3 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">Quiet quality you can feel</h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6b635a] sm:text-base">
                  We obsess over weight, drape, and the way fabric sounds when you turn over at midnight—because details define luxury.
                </p>
              </FadeIn>
              <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {whyUs.map(({ title, body, Icon }) => (
                  <StaggerItem key={title}>
                    <div className="h-full rounded-2xl border border-black/[0.06] bg-[#faf8f5] p-7 text-left shadow-[0_12px_40px_rgba(42,38,34,0.05)]">
                      <span className="inline-flex size-12 items-center justify-center rounded-full border border-[#e6dfd3] bg-white text-[#b6a06a]">
                        <Icon className="size-5" strokeWidth={1.35} />
                      </span>
                      <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#2a2622]">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#6b635a]">{body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>

          <section id="new" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <FadeIn className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a89886]">Just landed</p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">New arrivals</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6b635a]">Fresh textures for bath, bed, and living—small batches, honest photography.</p>
              </FadeIn>
              <FadeIn className="mt-10" delay={0.06}>
                <ProductSwiper products={newArrivals} onQuickView={setQuickView} onAddToCart={() => setCartCount((c) => c + 1)} />
              </FadeIn>
            </div>
          </section>

          <FadeIn className="w-full">
            <section className="relative isolate min-h-[360px] overflow-hidden py-16 sm:min-h-[420px] sm:py-20 lg:py-24">
              <Image src={u(P.interiorA, 2000)} alt="Layered bedroom styling" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2622]/85 via-[#2a2622]/55 to-[#2a2622]/25" />
              <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <div className="max-w-xl text-[#faf8f5]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f5f0e8]/75">The linen room edit</p>
                  <h2 className="mt-4 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">Compose a bedroom that exhales</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                    Start with breathable bases, add tonal layers, finish with light-filtering curtains—three moves, boutique result.
                  </p>
                </div>
                <a
                  href="#featured"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#faf8f5] px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2a2622] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5"
                >
                  Build your bed
                </a>
              </div>
            </section>
          </FadeIn>

          <section id="bestsellers" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <FadeIn className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a89886]">Customer favorites</p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">Best sellers</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6b635a]">Pieces that earn repeat orders—swipe to explore the full set.</p>
              </FadeIn>
              <FadeIn className="mt-10" delay={0.06}>
                <ProductSwiper products={bestSellers} onQuickView={setQuickView} onAddToCart={() => setCartCount((c) => c + 1)} />
              </FadeIn>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <FadeIn className="mx-auto max-w-6xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a89886]">Loved by homes everywhere</p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-[0.04em] sm:text-4xl">Customer reviews</h2>
            </FadeIn>
            <Stagger className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <figure className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-[#faf8f5] p-8 text-left shadow-[0_14px_44px_rgba(42,38,34,0.06)]">
                    <StarRow value={5} />
                    <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-[#2a2622]">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-6 text-sm text-[#6b635a]">
                      <span className="font-semibold text-[#2a2622]">{t.name}</span> · {t.city}
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <section className="border-t border-black/[0.06] bg-[#f3efe8] px-4 py-16 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-black/[0.06] bg-white px-6 py-12 text-center shadow-[0_22px_70px_rgba(42,38,34,0.08)] sm:px-12">
                <Mail className="size-8 text-[#b6a06a]" strokeWidth={1.25} />
                <h2 className="font-serif text-3xl font-medium tracking-[0.04em]">Join the Maison list</h2>
                <p className="max-w-xl text-sm leading-relaxed text-[#6b635a]">Private launches, care guides, and styling notes—no clutter, one elegant note per week.</p>
                <form
                  className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterStatus("sent");
                    setNewsletter("");
                  }}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="Email address"
                    className="min-h-12 flex-1 rounded-full border border-black/[0.1] bg-[#faf8f5] px-5 text-sm outline-none ring-[#b6a06a]/40 transition focus:ring-2"
                  />
                  <button
                    type="submit"
                    className="min-h-12 rounded-full bg-[#2a2622] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#faf8f5] transition hover:bg-black"
                  >
                    Subscribe
                  </button>
                </form>
                {newsletterStatus === "sent" ? <p className="text-sm text-[#6b635a]">Thank you—your first note is on the way.</p> : null}
              </div>
            </FadeIn>
          </section>
        </main>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/45" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] w-[min(92vw,960px)] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-black/[0.08] bg-[#faf8f5] p-0 shadow-2xl outline-none">
            {quickView ? (
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto md:min-h-[420px]">
                  <Image src={u(quickView.imageId, 1400)} alt={quickView.name} fill className="object-cover md:rounded-l-3xl" sizes="(max-width:768px) 92vw, 480px" />
                </div>
                <div className="flex flex-col p-8 md:p-10">
                  <Dialog.Title className="font-serif text-3xl font-medium leading-tight">{quickView.name}</Dialog.Title>
                  <Dialog.Description className="mt-4 text-sm leading-relaxed text-[#6b635a]">{quickView.blurb}</Dialog.Description>
                  <div className="mt-5 flex items-center gap-3">
                    <StarRow value={quickView.rating} />
                    <span className="text-sm text-[#6b635a]">
                      {quickView.rating.toFixed(1)} ({quickView.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-2xl font-semibold text-[#2a2622]">{formatRupee(quickView.price)}</span>
                    {quickView.compareAt && quickView.compareAt > quickView.price ? (
                      <span className="text-base text-[#a89886] line-through">{formatRupee(quickView.compareAt)}</span>
                    ) : null}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#2a2622] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#faf8f5] transition hover:bg-black"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setQuickView(null);
                      }}
                    >
                      Add to cart
                    </button>
                    <Dialog.Close className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-black/[0.12] px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2a2622] transition hover:bg-black/[0.04]">
                      Close
                    </Dialog.Close>
                  </div>
                </div>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <footer className="bg-[#221e1a] px-4 py-16 text-[#f5f0e8] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl tracking-[0.06em]">Maison Loom</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#d8d0c6]/85">
              Luxury home textiles for calmer bedrooms, softer sofas, and windows that glow at golden hour—rooted in Panipat.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#home" className="grid size-10 place-items-center rounded-full border border-white/15 text-[#f5f0e8] transition hover:bg-white/10" aria-label="Instagram">
                <Camera className="size-[18px]" strokeWidth={1.35} />
              </a>
              <a href="#home" className="grid size-10 place-items-center rounded-full border border-white/15 text-[#f5f0e8] transition hover:bg-white/10" aria-label="Facebook">
                <Link2 className="size-[18px]" strokeWidth={1.35} />
              </a>
              <a href="#home" className="grid size-10 place-items-center rounded-full border border-white/15 text-[#f5f0e8] transition hover:bg-white/10" aria-label="Email">
                <Mail className="size-[18px]" strokeWidth={1.35} />
              </a>
            </div>
          </div>
          <FooterCol className="lg:col-span-2" title="Shop" links={["Bedding", "Bath", "Windows", "Living", "Sale"]} />
          <FooterCol className="lg:col-span-2" title="Help" links={["Orders & shipping", "Returns", "Care guides", "Size finder", "Contact"]} />
          <FooterCol className="lg:col-span-2" title="Company" links={["Our story", "Materials", "Sustainability", "Press", "Careers"]} />
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8d0c6]/55">Visit</p>
            <p className="mt-4 text-sm leading-relaxed text-[#d8d0c6]/85">
              Atelier & flagship
              <br />
              Model Town, Panipat
              <br />
              Haryana 132103, India
            </p>
            <p className="mt-3 text-sm text-[#d8d0c6]/85">
              <a href="tel:+911800123456" className="transition hover:text-white">
                +91 1800-123-456
              </a>
            </p>
            <p className="mt-1 text-sm text-[#d8d0c6]/85">
              <a href="mailto:hello@maisonloom.com" className="transition hover:text-white">
                hello@maisonloom.com
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[#d8d0c6]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Loom. All rights reserved.</p>
          <p className="font-medium tracking-[0.12em] text-[#d8d0c6]/65">UPI · RuPay · Visa · Mastercard</p>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ product, onQuickView, onAddToCart }: { product: Product; onQuickView: () => void; onAddToCart: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_14px_44px_rgba(42,38,34,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(42,38,34,0.1)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ece7df]">
        <Image src={u(product.imageId, 900)} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width:1024px) 85vw, 25vw" />
        {product.badge ? (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm ${
              product.badge === "Sale" ? "bg-[#8b5a4a]" : product.badge === "New" ? "bg-[#2a2622]" : "bg-[#b6a06a]"
            }`}
          >
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          onClick={onQuickView}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2a2622] opacity-0 shadow-md backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4"
        >
          Quick view
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-medium leading-snug">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <StarRow value={product.rating} />
          <span className="text-xs text-[#6b635a]">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-semibold text-[#2a2622]">{formatRupee(product.price)}</span>
          {product.compareAt && product.compareAt > product.price ? (
            <span className="text-sm text-[#a89886] line-through">{formatRupee(product.compareAt)}</span>
          ) : null}
        </div>
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={onAddToCart}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#2a2622] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#faf8f5] transition hover:bg-black"
          >
            Add to cart
          </button>
          <button
            type="button"
            onClick={onQuickView}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/[0.1] px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2a2622] transition hover:bg-black/[0.04]"
            aria-label={`Quick view ${product.name}`}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}

function FooterCol({ title, links, className }: { title: string; links: string[]; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d8d0c6]/55">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-[#d8d0c6]/80">
        {links.map((l) => (
          <li key={l}>
            <a href="#home" className="transition hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
