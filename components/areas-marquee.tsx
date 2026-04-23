import { MapPin } from "lucide-react";

const serviceAreas = [
  "Hinoo",
  "Doranda",
  "Harmu",
  "Argora",
  "Lalpur",
  "Kanke",
  "Bariatu",
  "Namkum",
  "Ratu Road",
  "Main Road",
  "Kokar",
  "Morabadi",
  "Kantatoli",
  "Ashok Nagar",
  "Hehal",
  "Piska More",
  "Tupudana",
  "Booty More",
  "Ranchi University",
  "Airport Road",
];

export function AreasMarquee() {
  return (
    <div className="mx-auto mt-6 max-w-7xl overflow-hidden sm:mt-8">
      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f5efe2] via-[#f5efe2]/80 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f5efe2] via-[#f5efe2]/80 to-transparent sm:w-24" />
        <div className="flex w-max animate-[marquee_42s_linear_infinite] gap-4 px-4 hover:[animation-play-state:paused]">
        {[...serviceAreas, ...serviceAreas].map((area, index) => (
          <div
            key={`${area}-${index}`}
            className="flex min-w-max items-center gap-2 rounded-full border border-[#dfceb1] bg-white/80 px-4 py-2.5 shadow-sm sm:gap-3 sm:px-5 sm:py-3"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#284f45] text-[#f3cb7a] sm:size-8">
              <MapPin className="size-3.5 sm:size-4" strokeWidth={2.4} />
            </span>
            <p className="text-sm font-bold text-[#284f45]">{area}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
