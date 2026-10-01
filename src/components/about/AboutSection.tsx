"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { STORE_CONFIG } from "@/config/store";
import { CheckCircle2, Sparkles, Award } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden border-t border-zinc-300/60">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-600/30 bg-amber-500/10 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>THE BRAND PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight uppercase">
              {STORE_CONFIG.about.heading}
            </h2>

            <blockquote className="text-lg sm:text-xl font-medium text-amber-900 italic border-l-3 border-amber-600 pl-4 py-1 leading-relaxed">
              "{STORE_CONFIG.about.quote}"
            </blockquote>

            <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed">
              {STORE_CONFIG.about.story}
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Trending Jeans, Shirts, Boxy Fits & Lowers",
                "Direct WhatsApp Online Ordering & Size Consultation",
                "Rigorous Fabric & Stitch Quality Inspection",
                "Pan-India Express Doorstep Shipping",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-zinc-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-300">
              {STORE_CONFIG.about.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white border border-zinc-200/90 text-center shadow-md">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-950 block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-zinc-600 font-semibold mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Showcase Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-zinc-300 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                alt="The Black Collection Dabra Menswear Showcase"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/85 border border-zinc-700 backdrop-blur-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Men's Wear Hub | Dabra</h4>
                  <p className="text-xs text-zinc-300">Trending jeans, boxy shirts & lowers with Pan-India delivery.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
