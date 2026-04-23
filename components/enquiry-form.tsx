"use client";

import { Send } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function EnquiryForm() {
  return (
    <form className="mt-5 grid gap-3 sm:mt-7 sm:gap-4">
      <label className="grid gap-1.5 text-xs font-bold text-[#f9e5ae] sm:gap-2 sm:text-sm">
        Your Name
        <input
          className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:rounded-2xl sm:px-4 sm:text-base"
          name="name"
          placeholder="Enter your full name"
          type="text"
        />
      </label>
      <label className="grid gap-1.5 text-xs font-bold text-[#f9e5ae] sm:gap-2 sm:text-sm">
        Preferred Location
        <input
          className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:rounded-2xl sm:px-4 sm:text-base"
          name="location"
          placeholder="Example: Hinoo, Ranchi"
          type="text"
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="grid gap-1.5 text-xs font-bold text-[#f9e5ae] sm:gap-2 sm:text-sm">
          Requirement
          <Select name="requirement">
            <SelectTrigger aria-label="Requirement">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="plot">Plot</SelectItem>
                <SelectItem value="flat-home">Flat / Home</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-[#f9e5ae] sm:gap-2 sm:text-sm">
          Budget Range
          <input
            className="rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:rounded-2xl sm:px-4 sm:text-base"
            name="budget"
            placeholder="Example: 40L-70L"
            type="text"
          />
        </label>
      </div>
      <button
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#f3cb7a] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#21170f] transition hover:-translate-y-0.5 hover:bg-white sm:mt-2 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
        type="button"
      >
        Request Consultation
        <Send className="size-4" strokeWidth={2.4} />
      </button>
    </form>
  );
}
