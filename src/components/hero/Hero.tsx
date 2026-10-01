"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface HeroCard {
  id: string;
  title: string;
  category: string;
  image: string;
  rotateDeg: string;
  isCream: boolean;
}

const HERO_CARDS: HeroCard[] = [
  {
    id: "hcard-1",
    title: "Upgrading my daily streetwear style",
    category: "Oversized Tees",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "-rotate-6",
    isCream: true,
  },
  {
    id: "hcard-2",
    title: "Finding the perfect boxy fit shirt",
    category: "Boxy Fits",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "-rotate-3",
    isCream: false,
  },
  {
    id: "hcard-3",
    title: "Rocking premium washed denim jeans",
    category: "Denim Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "rotate-0",
    isCream: true,
  },
  {
    id: "hcard-4",
    title: "Looking sharp for weekend parties",
    category: "Party Fits",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "rotate-3",
    isCream: false,
  },
  {
    id: "hcard-5",
    title: "Tactical lowers for everyday comfort",
    category: "Cargo Lowers",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "rotate-6",
    isCream: true,
  },
  {
    id: "hcard-6",
    title: "Building a versatile monochrome wardrobe",
    category: "Monochrome Fits",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=500&auto=format&fit=crop",
    rotateDeg: "-rotate-2",
    isCream: false,
  },
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-20 pb-6 overflow-hidden bg-zinc-950"
    >
      {/* Background Image: Crystal Clear Top to Center with Smooth Darkness Slope */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center bg-no-repeat filter brightness-105 contrast-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Darkness Slope: Transparent at Top/Center fading into Dark Zinc at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 via-50% to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Hero Header & Title Container (NO Blur Box, Pure White Text) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-4 sm:pt-6">
        {/* Top Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/60 bg-black/70 text-amber-300 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase mb-5 shadow-2xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>THE BLACK COLLECTION 2025 • DABRA</span>
        </motion.div>

        {/* Pure White Short Headline without Blur Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            TRENDING MEN'S WEAR
          </h1>
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase mt-2 block drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            JEANS • SHIRTS • LOWERS
          </span>
          <p className="text-xs sm:text-sm md:text-base text-zinc-200 mt-3 font-medium max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Premium street style, boxy fit shirts, heavy cotton graphic tees & washed denim in Dabra.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-sm sm:max-w-none"
        >
          <a href="#collection" className="w-full sm:w-auto">
            <Button variant="gold" size="lg" className="w-full sm:w-auto shadow-2xl text-sm sm:text-base py-3 px-8 font-bold">
              Explore Collection
            </Button>
          </a>

          <Button
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto shadow-2xl text-sm sm:text-base py-3 px-8 font-bold"
            icon={<MessageCircle className="w-5 h-5" />}
            onClick={() => openWhatsAppEnquiry()}
          >
            Shop on WhatsApp
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 flex items-center justify-center gap-4 text-[11px] sm:text-xs text-zinc-300 font-semibold drop-shadow-md"
        >
          <span className="inline-flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Pan-India Express Shipping
          </span>
          <span className="hidden sm:inline text-amber-400">•</span>
          <span className="inline-flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            Direct WhatsApp Ordering
          </span>
        </motion.div>
      </div>

      {/* Mini Tilted Image Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full pt-4 pb-2 mt-4 overflow-x-auto scrollbar-none"
      >
        <div className="flex items-stretch justify-start sm:justify-center min-w-max gap-2.5 sm:gap-4 px-4 sm:px-8">
          {HERO_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => openWhatsAppEnquiry()}
              className={`relative w-32 sm:w-40 md:w-44 rounded-[16px] overflow-hidden shadow-2xl border-2 border-stone-900 bg-zinc-950 transform hover:rotate-0 hover:scale-105 hover:border-amber-400/80 hover:z-30 transition-all duration-500 cursor-pointer ${card.rotateDeg}`}
            >
              {/* Image Container */}
              <div className="relative h-36 sm:h-44 md:h-48 w-full overflow-hidden bg-zinc-950">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="eager"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-110 transition duration-700"
                />
                {/* Category Pill */}
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-zinc-950/85 text-amber-400 text-[8px] font-bold uppercase tracking-wider backdrop-blur-md border border-zinc-700/80 shadow-md">
                  {card.category}
                </div>
              </div>

              {/* Scalloped Wavy Border Divider */}
              <div className="relative w-full -mt-2 sm:-mt-2.5 z-20 pointer-events-none leading-none">
                <svg
                  viewBox="0 0 1000 70"
                  preserveAspectRatio="none"
                  className={`w-full h-2.5 sm:h-3.5 block fill-current ${
                    card.isCream ? "text-[#f7f5ed]" : "text-[#4a0c13]"
                  }`}
                >
                  <path d="M0,35 Q25,0 50,35 T100,35 T150,35 T200,35 T250,35 T300,35 T350,35 T400,35 T450,35 T500,35 T550,35 T600,35 T650,35 T700,35 T750,35 T800,35 T850,35 T900,35 T950,35 T1000,35 L1000,70 L0,70 Z" />
                </svg>
              </div>

              {/* Bottom Scalloped Card Title Banner */}
              <div
                className={`p-2 pt-0.5 ${
                  card.isCream
                    ? "bg-[#f7f5ed] text-[#4a0c13]"
                    : "bg-[#4a0c13] text-[#f7f5ed]"
                } min-h-[45px] sm:min-h-[50px] flex flex-col justify-center text-center`}
              >
                <p className="text-[9px] sm:text-[10px] font-black uppercase leading-snug tracking-tight">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
