"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you deal in plots, flats, and commercial spaces?",
    answer:
      "Yes. We help clients with premium plots, luxury flats, homes, and commercial property options.",
  },
  {
    question: "Are properties verified before visits?",
    answer:
      "We focus on serious and verified options so clients spend time only on suitable properties.",
  },
  {
    question: "Do you provide Vastu guidance?",
    answer:
      "Yes. We provide practical property and Vastu guidance before you make a decision.",
  },
  {
    question: "Can I share my budget first?",
    answer:
      "Yes. Share your budget, location, and requirement. We will shortlist matching options.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our office is in Hinoo, Ranchi. You can contact us first and then plan a visit.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;

        return (
          <article key={faq.question} className="border-b border-[#dfceb1] py-4">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-bold text-[#1f2f29] sm:text-lg">
                {faq.question}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#284f45] text-[#f3cb7a]">
                <ChevronDown
                  className={`size-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.4}
                />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pt-3 text-sm leading-6 text-[#6b553b] sm:text-base sm:leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
