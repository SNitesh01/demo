import Image from "next/image";
import Link from "next/link";
import { ExternalLink, PlayCircle } from "lucide-react";

const P = {
  hero: "1616627561839-074385245ff6",
  bedding: "1600585154340-be6161a56a0c",
  comforter: "1505693416388-ac5ce068fe85",
  curtains: "1616486338812-3dadae4b4ace",
  cushion: "1615876234886-fd9a39fda97f",
  bath: "1582719478250-c89cae4dc85b",
  neutral: "1519710164239-da123dc03ef4",
  sofa: "1555041469-a586c61ea9bc",
  linen: "1540574163026-643ea20ade25",
} as const;

function img(id: string, width = 1400) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=82&auto=format&fit=crop`;
}

const categories = [
  { key: "Bedding Sets", title: "Coordinated bedding sets", imageId: P.bedding },
  { key: "Comforters", title: "Airy comforters", imageId: P.comforter },
  { key: "Curtains", title: "Tailored curtains", imageId: P.curtains },
  { key: "Cushions", title: "Cushions and covers", imageId: P.cushion },
  { key: "Towels", title: "Spa-soft towels", imageId: P.bath },
  { key: "Sofa Covers", title: "Tailored sofa covers", imageId: P.sofa },
];

const bioFeatureLinks = [
  ["Soft Sleep Starts Here", "Build your bedroom from bedding, comforters, and pillows."],
  ["Curtains That Calm The Light", "Sheer, blackout, and custom panels for every room."],
  ["Color Stories For Real Homes", "Choose Cloud White, Warm Oat, Sage Mist, or Stone."],
  ["The Gloria Home Edit", "Cushions, throws, towels, and sofa covers in one place."],
];

const bioResourceLinks = [
  { title: "The Gloria Sleep Club", detail: "Read our comfort journal", imageId: P.bedding },
  { title: "Interior Design Trade Program", detail: "For stylists and studios", imageId: P.curtains },
  { title: "Client Room Styling", detail: "Plan a bedroom or living room", imageId: P.sofa },
  { title: "Wholesale Program", detail: "Hospitality and retail supply", imageId: P.linen },
  { title: "Helping From Home", detail: "Soft furnishings for fresh starts", imageId: P.bath },
];

export default function BioPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#8fa8aa] px-4 py-8 text-white sm:px-6 lg:px-8">
      <Image
        src={img(P.curtains, 2200)}
        alt="Soft blue home textile background"
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#7f9b9e]/82" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0)_24%,rgba(37,33,29,0.10)_24%,rgba(37,33,29,0.10)_48%,rgba(255,255,255,0)_48%,rgba(255,255,255,0)_72%,rgba(37,33,29,0.10)_72%)]" />

      <div className="relative z-10 mx-auto flex max-w-[29rem] flex-col items-center text-center">
        <Link
          href="/landing#landing"
          className="grid size-24 place-items-center rounded-full bg-[#252b45] font-serif text-4xl font-semibold tracking-[-0.08em] text-[#f4eadb] shadow-[0_18px_60px_rgba(37,33,29,0.22)] sm:size-28"
          aria-label="Gloria Beddings main landing"
        >
          GB
        </Link>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-[0.08em] text-white sm:text-4xl">
          GLORIA BEDDINGS
        </h1>
        <div className="mt-3 flex items-center justify-center gap-3 text-white/95">
          {[
            { label: "Instagram", mark: "ig" },
            { label: "TikTok", mark: "tt" },
            { label: "LinkedIn", mark: "in" },
            { label: "YouTube", mark: "yt" },
          ].map(({ label, mark }) => (
            <Link
              key={label}
              href="/landing#landing"
              className="grid size-6 place-items-center rounded-full border border-white/35 text-[10px] font-bold uppercase transition hover:scale-110 hover:bg-white/15 hover:text-white"
              aria-label={label}
            >
              {mark}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-base font-bold leading-snug">Softness Beyond Your Wildest Dreams</p>
        <Link href="/landing#landing" className="mt-1 text-sm font-semibold leading-snug transition hover:underline">
          Enter the Gloria home collection
        </Link>

        <Link href="/landing#landing" className="group mt-5 block w-full overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(37,33,29,0.24)]">
          <span className="relative block aspect-square bg-[#e8ded0]">
            <Image
              src={img(P.hero, 1200)}
              alt="Elegant Gloria bedding on a styled bed"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 92vw, 464px"
            />
          </span>
        </Link>

        <div className="mt-8 grid w-full gap-3">
          {bioFeatureLinks.map(([title, detail]) => (
            <Link
              key={title}
              href="/landing#landing"
              className="rounded-full border border-white/95 bg-white/5 px-5 py-3 text-center shadow-sm backdrop-blur-sm transition hover:bg-white/15"
            >
              <span className="block font-serif text-base font-semibold leading-tight">{title}</span>
              <span className="mt-0.5 block text-[11px] font-medium leading-tight text-white/88">{detail}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 w-full">
          <p className="font-serif text-lg font-semibold">Shop by Category</p>
          <div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto overflow-y-hidden pb-2">
            {categories.map((category) => (
              <Link
                key={category.key}
                href="/landing#categories"
                className="group relative h-56 w-[82%] shrink-0 overflow-hidden rounded-2xl bg-[#25211d] sm:w-80"
              >
                <Image
                  src={img(category.imageId, 800)}
                  alt={category.title}
                  fill
                  className="object-cover opacity-78 transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 82vw, 320px"
                />
                <span className="absolute inset-0 bg-black/20" />
                <span className="absolute inset-x-5 bottom-5 font-serif text-3xl font-semibold drop-shadow">
                  {category.key}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 grid w-full gap-3">
          {bioResourceLinks.map((link) => (
            <Link
              key={link.title}
              href="/landing#landing"
              className="flex min-h-14 items-center gap-3 rounded-full border border-white/95 bg-white/5 px-3 py-2 text-left backdrop-blur-sm transition hover:bg-white/15"
            >
              <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-white/20">
                <Image src={img(link.imageId, 180)} alt="" fill className="object-cover" sizes="40px" />
              </span>
              <span className="min-w-0 flex-1 text-center">
                <span className="block font-serif text-base font-semibold leading-tight">{link.title}</span>
                <span className="block text-[11px] font-medium leading-tight text-white/82">{link.detail}</span>
              </span>
              <ExternalLink className="mr-1 size-3.5 shrink-0 opacity-75" />
            </Link>
          ))}
        </div>

        <Link href="/landing#landing" className="group mt-8 block w-full overflow-hidden rounded-2xl bg-[#25211d] shadow-[0_24px_80px_rgba(37,33,29,0.24)]">
          <span className="relative block aspect-video">
            <Image
              src={img(P.neutral, 1000)}
              alt="Gloria comfort campaign video preview"
              fill
              className="object-cover opacity-82 transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 92vw, 464px"
            />
            <span className="absolute inset-0 bg-black/25" />
            <span className="absolute left-4 top-4 text-left">
              <span className="block text-xs font-bold leading-tight">Gloria Beddings</span>
              <span className="block text-[10px] text-white/85">Cooling comfort collection</span>
            </span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-red-600 text-white shadow-xl">
                <PlayCircle className="size-9 fill-current" strokeWidth={1.4} />
              </span>
            </span>
            <span className="absolute inset-x-6 bottom-6 font-serif text-3xl font-medium leading-tight">
              Cool Comfort That&apos;s So Refreshing
            </span>
          </span>
        </Link>
      </div>
    </main>
  );
}
