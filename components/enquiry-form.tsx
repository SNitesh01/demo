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
      <label className="grid gap-2 text-sm font-bold text-[#f9e5ae]">
        Your Name
        <input
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:text-base"
          name="name"
          placeholder="Enter your full name"
          type="text"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#f9e5ae]">
        Preferred Location
        <input
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:text-base"
          name="location"
          placeholder="Example: Hinoo, Ranchi"
          type="text"
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="grid gap-2 text-sm font-bold text-[#f9e5ae]">
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
        <label className="grid gap-2 text-sm font-bold text-[#f9e5ae]">
          Budget Range
          <input
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#f3cb7a] focus:bg-white/15 sm:text-base"
            name="budget"
            placeholder="Example: 40L-70L"
            type="text"
          />
        </label>
      </div>
      <button
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f3cb7a] px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-[#21170f] transition hover:-translate-y-0.5 hover:bg-white sm:mt-2 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
        type="button"
      >
        Request Consultation
        <Send className="size-4" strokeWidth={2.4} />
      </button>
    </form>
  );
}
