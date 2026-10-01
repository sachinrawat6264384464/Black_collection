"use client";

import React from "react";
import {
  ShoppingBag,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { STORE_CONFIG } from "@/config/store";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2f070b] text-zinc-300 border-t border-[#61131e]/50 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-6">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-widest text-xl text-white">
                  THE BLACK
                </span>
                <span className="text-[10px] tracking-[0.25em] text-zinc-400">
                  COLLECTION 2025
                </span>
              </div>
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {STORE_CONFIG.description} Curated monochrome aesthetic, luxury streetwear drops, and custom tailored fashion.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
              </a>
              <button
                onClick={() => openWhatsAppEnquiry()}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {["Home", "Categories", "Brands", "Collection", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-300 transition flex items-center gap-1.5 group font-medium"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
              Categories
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {[
                "Trending Shirts & Boxy Fits",
                "Oversized & Graphic Tees",
                "Premium Denim Jeans",
                "Cargo Lowers & Trousers",
                "Streetwear Hoodies",
                "Jackets & Outerwear",
              ].map((cat) => (
                <li key={cat}>
                  <a href="#collection" className="hover:text-amber-300 transition font-medium">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <button
                  onClick={() => openWhatsAppEnquiry()}
                  className="hover:text-emerald-400 text-left transition font-medium"
                >
                  WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}
                </button>
              </li>
              <li className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                <a
                  href={STORE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition font-medium"
                >
                  {STORE_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <a href={`mailto:${STORE_CONFIG.email}`} className="hover:text-amber-300 transition font-medium break-all">
                  {STORE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                <span className="text-zinc-400 font-medium">{STORE_CONFIG.shortLocation}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Editorial Brand Statement Banner */}
        <div className="py-2 my-2 text-center border-y border-zinc-900/60 relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-slate-300 to-zinc-600 uppercase select-none leading-none py-1">
            THE BLACK COLLECTION
          </h2>
        </div>

        {/* Bottom copyright & badges */}
        <div className="pt-3 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
          <p>© 2026 {STORE_CONFIG.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Direct WhatsApp Enquiry Store
            </span>
            <a href="#hero" className="hover:text-white transition font-semibold">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
