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
      <label className="grid gap-1.5 text-xs font-bold text-[#17211e] sm:gap-2 sm:text-sm">
        Your Name
        <input
          className="rounded-sm border border-[#d7d0c0] bg-white px-3.5 py-3 text-sm text-[#17211e] outline-none transition placeholder:text-[#7a7063] focus:border-[#1f4f4a] sm:px-4 sm:text-base"
          name="name"
          placeholder="Enter your full name"
          type="text"
        />
      </label>
      <label className="grid gap-1.5 text-xs font-bold text-[#17211e] sm:gap-2 sm:text-sm">
        Fabric Requirement
        <input
          className="rounded-sm border border-[#d7d0c0] bg-white px-3.5 py-3 text-sm text-[#17211e] outline-none transition placeholder:text-[#7a7063] focus:border-[#1f4f4a] sm:px-4 sm:text-base"
          name="fabric"
          placeholder="Example: cotton poplin, 120 GSM"
          type="text"
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <label className="grid gap-1.5 text-xs font-bold text-[#17211e] sm:gap-2 sm:text-sm">
          Category
          <Select name="requirement">
            <SelectTrigger aria-label="Requirement">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="woven">Woven Fabric</SelectItem>
                <SelectItem value="knit">Knitted Fabric</SelectItem>
                <SelectItem value="processed">Processed Fabric</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-[#17211e] sm:gap-2 sm:text-sm">
          Quantity
          <input
            className="rounded-sm border border-[#d7d0c0] bg-white px-3.5 py-3 text-sm text-[#17211e] outline-none transition placeholder:text-[#7a7063] focus:border-[#1f4f4a] sm:px-4 sm:text-base"
            name="quantity"
            placeholder="Example: 20,000 meters"
            type="text"
          />
        </label>
      </div>
      <button
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-[#f4d06f] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#17211e] transition hover:-translate-y-0.5 hover:bg-white sm:mt-2 sm:px-6 sm:py-4 sm:text-sm sm:tracking-[0.18em]"
        type="button"
      >
        Request Sourcing Options
        <Send className="size-4" strokeWidth={2.4} />
      </button>
    </form>
  );
}
