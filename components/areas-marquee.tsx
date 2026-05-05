import { SwatchBook } from "lucide-react";

const fabricCategories = [
  "Cotton Poplin",
  "Twill",
  "Canvas",
  "Dobby",
  "Rayon",
  "Linen Blends",
  "Single Jersey",
  "Rib Knit",
  "Fleece",
  "Interlock",
  "Denim",
  "Chambray",
  "Voile",
  "Sheeting",
  "Duck Fabric",
  "Yarn Dyed Checks",
  "Digital Prints",
  "Garment Washed",
  "Organic Cotton",
  "Recycled Blends",
];

export function AreasMarquee() {
  return (
    <div className="mx-auto mt-6 max-w-7xl overflow-hidden sm:mt-8">
      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3ea]/80 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f7f3ea] via-[#f7f3ea]/80 to-transparent sm:w-24" />
        <div className="flex w-max animate-[marquee_42s_linear_infinite] gap-4 px-4 hover:[animation-play-state:paused]">
          {[...fabricCategories, ...fabricCategories].map((area, index) => (
            <div
              key={`${area}-${index}`}
              className="flex min-w-max items-center gap-2 rounded-sm border border-[#d7d0c0] bg-white/80 px-4 py-2.5 shadow-sm sm:gap-3 sm:px-5 sm:py-3"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-sm bg-[#1f4f4a] text-[#f4d06f] sm:size-8">
                <SwatchBook className="size-3.5 sm:size-4" strokeWidth={2.4} />
              </span>
              <p className="text-sm font-bold text-[#1f4f4a]">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
