"use client";

import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Nadia Mehta",
    time: "Sample program",
    tag: "Buying House",
    text: "The site structure makes the supplier feel organized. Product range, capability, compliance, and enquiry are all easy for our buyers to understand.",
    love: 5,
    initial: "N",
  },
  {
    name: "Arun Shah",
    time: "Bulk order",
    tag: "Garment Exporter",
    text: "A textile B2B page should answer practical questions quickly. This layout gives space for fabric details, MOQs, approvals, and shipment readiness.",
    love: 4,
    initial: "A",
  },
  {
    name: "Priya Kapoor",
    time: "Vendor review",
    tag: "Retail Label",
    text: "The website feels simple and professional. It is built for procurement teams, not like a generic brochure website.",
    love: 5,
    initial: "P",
  },
];

const reviewStats = [
  { label: "Buyer Clarity", value: "High" },
  { label: "Product Focus", value: "Clear" },
  { label: "RFQ Flow", value: "Ready" },
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
    <section className="relative isolate overflow-hidden bg-[#e9f0eb] px-4 py-10 text-[#17211e] shadow-[0_35px_100px_rgba(31,35,32,0.08)] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-linear-gradient(90deg,rgba(31,79,74,0.12)_0_8px,transparent_8px_20px),repeating-linear-gradient(0deg,rgba(189,111,62,0.12)_0_6px,transparent_6px_18px)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="py-5 sm:py-8 lg:py-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4d06f]">
              Design Notes
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-5xl">
              Credibility for serious textile buyers.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5b574f]">
              These sample reviews show the positioning this landing page aims
              for: practical, informative, and buyer-ready.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
              {reviewStats.map((stat) => (
                <div key={stat.label} className="border border-[#d7d0c0] bg-[#fffdf7]/78 p-4">
                  <p className="text-2xl font-black text-[#bd6f3e]">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#5b574f]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fffdf7] p-4 text-[#17211e] sm:p-6 lg:p-8">
            <div className="border border-[#d7d0c0] bg-white p-5 shadow-[0_24px_80px_rgba(31,35,32,0.12)] lg:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eee4d6] pb-5">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-sm bg-[#1f4f4a] text-xl font-black text-[#f4d06f]">
                    {review.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-normal">{review.name}</h3>
                    <p className="text-sm font-bold text-[#7a7063]">{review.time}</p>
                  </div>
                </div>
                <span className="bg-[#efe6d6] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#79573e]">
                  {review.tag}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 text-[#bd6f3e]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-[#fff1df] px-4 py-2 text-sm font-bold text-[#8a5130]">
                  <Heart className="size-4 fill-current text-[#bd6f3e]" />
                  {review.love}
                </div>
              </div>

              <blockquote className="mt-5 text-lg leading-8 text-[#3d403d] lg:mt-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-4 lg:mt-7">
                <div className="flex gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`h-2.5 transition-all ${
                        active === index ? "w-9 bg-[#1f4f4a]" : "w-2.5 bg-[#d7d0c0]"
                      }`}
                      aria-label={`Show review ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    className="grid size-11 place-items-center border border-[#d7d0c0] bg-[#fffdf7] text-[#1f4f4a] transition hover:bg-[#f4d06f] hover:text-[#17211e]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    className="grid size-11 place-items-center border border-[#d7d0c0] bg-[#fffdf7] text-[#1f4f4a] transition hover:bg-[#f4d06f] hover:text-[#17211e]"
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
