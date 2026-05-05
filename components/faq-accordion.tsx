"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can this site work for a fabric mill or textile trader?",
    answer:
      "Yes. The demo is structured for mills, fabric traders, exporters, and B2B sourcing teams that need an informative website with enquiry capture.",
  },
  {
    question: "What content should the full website include?",
    answer:
      "The full website can include company profile, product range, sourcing capabilities, compliance details, buyer FAQs, and a contact or RFQ flow.",
  },
  {
    question: "Can product categories be customized?",
    answer:
      "Yes. Cotton, blends, knits, denim, home textiles, technical textiles, or garment services can be adjusted to match the business.",
  },
  {
    question: "Does the form support buyer RFQs?",
    answer:
      "The current form is a front-end demo. It can later be connected to email, WhatsApp, CRM, or a database-backed RFQ workflow.",
  },
  {
    question: "Is compliance content important for textile B2B?",
    answer:
      "Very important. Buyers often look for testing, certifications, audit readiness, packing standards, and sample-to-bulk quality controls before contacting a supplier.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;

        return (
          <article key={faq.question} className="border-b border-[#d7d0c0] py-4">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-base font-bold text-[#17211e] sm:text-lg">
                {faq.question}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-[#1f4f4a] text-[#f4d06f]">
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
                <p className="max-w-2xl pt-3 text-sm leading-6 text-[#5f584d] sm:text-base sm:leading-7">
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
