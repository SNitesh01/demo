"use client";

import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Shanti Raman",
    time: "2 months ago",
    tag: "Home Buyer",
    text: "We purchased our home through Mr. Devraj ji and the experience was seamless. He kept us informed at every step and made the process feel easy.",
    love: 3,
    initial: "S",
  },
  {
    name: "Nkp Chaursiya",
    time: "3 months ago",
    tag: "Property Dealer",
    text: "One of the best property consultants in Ranchi. They guided us honestly and never forced unnecessary charges before showing options.",
    love: 2,
    initial: "N",
  },
  {
    name: "Rameshwer Oraon",
    time: "2 months ago",
    tag: "Flat Buyer",
    text: "Excellent customer relations. Mr. Deepak Kumar Himansu helped me a lot in getting a flat in Ranchi. I wish him the best.",
    love: 2,
    initial: "R",
  },
  {
    name: "Anjula Sinha",
    time: "2 months ago",
    tag: "Service",
    text: "Mr. Deoraj is a very gentle person. Sri Ram Property Consultancy provided very good service to me.",
    love: 2,
    initial: "A",
  },
  {
    name: "VBSH",
    time: "4 months ago",
    tag: "Plot Buyer",
    text: "Very good property dealer. I recently bought a new plot at the best market rate. I highly recommend them.",
    love: 5,
    initial: "V",
  },
];

const reviewStats = [
  { label: "Total Rating", value: "5.0" },
  { label: "Google Reviews", value: "26" },
  { label: "Client Trust", value: "100%" },
];

export function TestimonialsSwiper() {
  const [active, setActive] = useState(0);
  const review = testimonials[active];

  function move(direction: number) {
    setActive((current) => {
      const next = current + direction;

      if (next < 0) {
        return testimonials.length - 1;
      }

      if (next >= testimonials.length) {
        return 0;
      }

      return next;
    });
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#1f2f29] px-4 py-10 text-white shadow-[0_35px_100px_rgba(31,47,41,0.16)] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(243,203,122,0.28),transparent_28%),radial-gradient(circle_at_88%_16%,rgba(255,250,240,0.12),transparent_24%),linear-gradient(135deg,#14231e_0%,#1f2f29_48%,#315d50_100%)]" />
      <div className="absolute -left-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#c79340]/20 blur-3xl" />
      <div className="absolute -right-20 top-8 -z-10 h-72 w-72 rounded-full bg-[#fffaf0]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative isolate py-5 sm:py-8 lg:py-10 lg:pr-10 xl:pr-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f3cb7a]">
              Client Reviews
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Trusted by real buyers.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#d8d1c4]">
              Genuine feedback from clients who trusted Sri Ram Property
              Consultancy for flats, plots, and property guidance in Ranchi.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
              {reviewStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <p className="text-3xl font-bold text-[#f3cb7a]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.14em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="bg-[#fffaf0] p-4 text-[#21170f] sm:p-6 lg:rounded-[2rem] lg:p-8">
            <div className="rounded-[1.6rem] border border-[#dfceb1] bg-white p-5 shadow-[0_24px_80px_rgba(48,36,19,0.12)] sm:rounded-[2rem] lg:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#efe1c9] pb-5">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-[#284f45] text-xl font-bold text-[#f3cb7a]">
                    {review.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.02em]">
                      {review.name}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full bg-[#f0dfbd] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#7a5724]">
                  {review.tag}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 text-[#c79340]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#806342]">
                    {review.time}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3dc] px-4 py-2 text-sm font-bold text-[#8a5a1f]">
                  <Heart className="size-4 fill-current text-[#c94a4a]" />
                  {review.love}
                </div>
              </div>

              <blockquote className="mt-5 text-lg leading-8 text-[#4f3d29] lg:mt-6">
                “{review.text}”
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-4 lg:mt-7">
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        active === index
                          ? "w-9 bg-[#284f45]"
                          : "w-2.5 bg-[#d7c4a3]"
                      }`}
                      aria-label={`Show review ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    className="grid size-11 place-items-center rounded-full border border-[#dfceb1] bg-[#fffaf0] text-[#284f45] transition hover:bg-[#284f45] hover:text-white"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    className="grid size-11 place-items-center rounded-full border border-[#dfceb1] bg-[#fffaf0] text-[#284f45] transition hover:bg-[#284f45] hover:text-white"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
