"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

interface CardItem {
  id: string;
  title: string;
  category: string;
  image: string;
  bgColor: string;
  textColor: string;
  rotateDeg: string;
}

const SHOWCASE_CARDS: CardItem[] = [
  {
    id: "card-1",
    title: "Upgrading my daily streetwear style",
    category: "Oversized Tees",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-stone-100",
    textColor: "text-stone-900",
    rotateDeg: "-rotate-6",
  },
  {
    id: "card-2",
    title: "Finding the perfect boxy fit shirt",
    category: "Boxy Fits",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-[#4a0c13]",
    textColor: "text-amber-100",
    rotateDeg: "-rotate-3",
  },
  {
    id: "card-3",
    title: "Rocking premium washed denim jeans",
    category: "Denim Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-stone-100",
    textColor: "text-stone-900",
    rotateDeg: "rotate-0",
  },
  {
    id: "card-4",
    title: "Looking sharp for weekend parties",
    category: "Party Fits",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-[#4a0c13]",
    textColor: "text-amber-100",
    rotateDeg: "rotate-3",
  },
  {
    id: "card-5",
    title: "Selling my work, not just making it",
    category: "Cargo Lowers",
    image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-stone-100",
    textColor: "text-stone-900",
    rotateDeg: "rotate-6",
  },
  {
    id: "card-6",
    title: "Refining my personal brand",
    category: "Monochrome Fits",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-[#4a0c13]",
    textColor: "text-amber-100",
    rotateDeg: "-rotate-2",
  },
];

export const InteractiveCardShowcase: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f6f5f0] text-stone-900 relative overflow-hidden border-b border-amber-900/20">
      {/* Full Width Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto">
        {/* Header Title Section matching image reference */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            THE BLACK COLLECTION EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-stone-950 leading-[0.95]"
          >
            IN DABRA STREETWEAR FASHION
          </motion.h2>

          {/* Action Button matching green/yellow waitlist pill button from image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <button
              onClick={() => openWhatsAppEnquiry()}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#a6ff00] text-stone-950 font-black text-sm uppercase tracking-wider border-2 border-stone-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
            >
              <span>EXPLORE LOOKBOOK</span>
              <div className="w-6 h-6 rounded-full bg-stone-950 text-[#a6ff00] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Full Width Horizontal Fan/Scroll Cards Row */}
        <div className="w-full pt-4 pb-12 overflow-x-auto scrollbar-none">
          <div className="flex items-stretch justify-center min-w-max gap-3 sm:gap-6 px-4">
            {SHOWCASE_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative w-72 sm:w-[340px] rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-950 transform hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-500 cursor-pointer ${card.rotateDeg}`}
                onClick={() => openWhatsAppEnquiry()}
              >
                {/* Image Container */}
                <div className="relative h-80 sm:h-[420px] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover object-center filter brightness-95 contrast-105 hover:scale-110 transition duration-700"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-950/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-stone-700">
                    {card.category}
                  </div>
                </div>

                {/* Scalloped / Wavy Card Bottom Label (Matching image 2 card banners) */}
                <div className={`p-4 sm:p-5 ${card.bgColor} ${card.textColor} border-t-2 border-stone-950 min-h-[90px] flex flex-col justify-center`}>
                  <p className="text-xs sm:text-sm font-extrabold leading-snug tracking-tight text-center uppercase">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
