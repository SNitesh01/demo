"use client";

import { EnquiryForm } from "@/components/enquiry-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function BookCallModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="rounded-full border border-[#f3cb7a]/60 bg-[linear-gradient(135deg,#284f45_0%,#1f2f29_48%,#c79340_100%)] px-4 py-3 text-xs font-black text-[#fff7df] shadow-[0_16px_34px_rgba(40,79,69,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(199,147,64,0.28)] sm:px-5 sm:text-sm"
        >
          Book Call
        </button>
      </DialogTrigger>
      <DialogContent>
        <p className="pr-12 text-sm font-black uppercase tracking-[0.25em] text-[#f3cb7a]">
          Book A Call
        </p>
        <DialogHeader>
          <DialogTitle>Share your need.</DialogTitle>
          <DialogDescription>
            Share your location, property type, and budget. We will guide you
            with verified options.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm />
      </DialogContent>
    </Dialog>
  );
}
