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
          className="rounded-sm border border-[#f4d06f]/60 bg-[#1f4f4a] px-4 py-3 text-xs font-black text-[#fff7df] shadow-[0_16px_34px_rgba(31,79,74,0.2)] transition hover:-translate-y-0.5 hover:bg-[#173d39] sm:px-5 sm:text-sm"
        >
          RFQ Call
        </button>
      </DialogTrigger>
      <DialogContent>
        <p className="pr-12 text-sm font-black uppercase tracking-[0.25em] text-[#bd6f3e]">
          Book An RFQ Call
        </p>
        <DialogHeader>
          <DialogTitle>Share your fabric need.</DialogTitle>
          <DialogDescription>
            Share your fabric type, quantity, finish, and timeline. We will
            respond with relevant sourcing options.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm />
      </DialogContent>
    </Dialog>
  );
}
