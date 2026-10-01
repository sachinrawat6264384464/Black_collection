"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { STORE_CONFIG } from "@/config/store";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-zinc-300/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto">
        <div className="w-full mx-auto bg-white border border-zinc-200 rounded-3xl p-5 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              DIRECT CONCIERGE ACCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-1 sm:mt-2 uppercase">
              GET IN TOUCH
            </h2>
            <p className="text-xs sm:text-base text-zinc-600 mt-2 sm:mt-3 font-medium">
              Have a question about a product, sizing, or custom styling? Our fashion concierge team is just a message away.
            </p>
          </div>

          {/* Contact Details 2-Column Mobile Pair Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 mb-8 sm:mb-10 relative z-10">
            {/* WhatsApp Contact Card */}
            <div className="p-2.5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 hover:border-emerald-500/50 transition overflow-hidden shadow-md">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0 w-full">
                <h3 className="text-[11px] sm:text-sm font-bold text-white leading-tight truncate">WhatsApp</h3>
                <p className="text-[9px] sm:text-xs text-zinc-400 line-clamp-1 sm:line-clamp-2">
                  Instant order support.
                </p>
                <p className="text-[9px] sm:text-xs font-semibold text-emerald-400 pt-0.5 truncate">
                  {STORE_CONFIG.whatsappDisplayNumber}
                </p>
              </div>
            </div>

            {/* Instagram Contact Card */}
            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 hover:border-pink-500/50 transition group overflow-hidden shadow-md"
            >
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-pink-950/80 border border-pink-800/40 text-pink-400 flex items-center justify-center shrink-0">
                <InstagramIcon className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0 w-full">
                <h3 className="text-[11px] sm:text-sm font-bold text-white group-hover:text-pink-300 transition leading-tight truncate">
                  Instagram
                </h3>
                <p className="text-[9px] sm:text-xs text-zinc-400 line-clamp-1 sm:line-clamp-2">
                  Reels & lookbooks.
                </p>
                <p className="text-[9px] sm:text-xs font-semibold text-pink-400 pt-0.5 truncate">
                  {STORE_CONFIG.instagramHandle}
                </p>
              </div>
            </a>

            {/* Email Contact Card */}
            <div className="p-2.5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 overflow-hidden shadow-md">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-amber-950/80 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0 w-full">
                <h3 className="text-[11px] sm:text-sm font-bold text-white leading-tight truncate">Email Desk</h3>
                <p className="text-[9px] sm:text-xs text-zinc-400 line-clamp-1 sm:line-clamp-2">
                  B2B partnerships.
                </p>
                <p className="text-[9px] sm:text-xs font-semibold text-amber-300 pt-0.5 truncate">
                  {STORE_CONFIG.email}
                </p>
              </div>
            </div>

            {/* Store Location & Hours */}
            <div className="p-2.5 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 overflow-hidden shadow-md">
              <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-zinc-800 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-zinc-300" />
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0 w-full">
                <h3 className="text-[11px] sm:text-sm font-bold text-white leading-tight truncate">Boutique</h3>
                <p className="text-[9px] sm:text-xs text-zinc-300 leading-tight truncate">
                  {STORE_CONFIG.shortLocation}
                </p>
                <p className="text-[9px] sm:text-[11px] text-zinc-400 pt-0.5 flex items-center gap-1 truncate">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>11 AM - 9 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Centralized WhatsApp Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-zinc-200 relative z-10">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={() => openWhatsAppEnquiry()}
            >
              Chat on WhatsApp
            </Button>

            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full text-zinc-900 border-zinc-300 hover:bg-zinc-100" icon={<InstagramIcon className="w-5 h-5 text-pink-600" />}>
                Visit Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
