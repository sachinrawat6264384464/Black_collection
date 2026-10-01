"use client";

import React from "react";
import Image from "next/image";
import { BRANDS } from "@/data/brands";
import { Sparkles, ArrowUpRight, Crown, ShieldCheck } from "lucide-react";

interface BrandSectionProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ onSelectBrand }) => {
  // Helper to extract brand monogram initials (e.g. "Obsidian Studio" -> "OS")
  const getMonogram = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section id="brands" className="py-24 bg-transparent border-t border-zinc-300/60 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-zinc-300/70">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-800 uppercase inline-flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5" />
              HAUTE COUTURE HOUSES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight mt-2 uppercase">
              BRANDS WE CURATE
            </h2>
          </div>
          <p className="text-sm text-zinc-700 max-w-md font-medium leading-relaxed">
            Discover curated fashion drops from iconic luxury houses, independent monochrome ateliers, and modern streetwear design studios.
          </p>
        </div>

        {/* Premium 2-Column Mobile Pair Brand Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {BRANDS.map((brand) => (
            <a
              key={brand.id}
              href="#collection"
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="group relative h-64 sm:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-300 bg-zinc-950 flex flex-col justify-between p-3.5 sm:p-6 transition-all duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  unoptimized
                  className="object-cover object-center filter brightness-60 contrast-110 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40 group-hover:via-zinc-950/80 transition duration-300" />
              </div>

              {/* Card Top: Monogram & Product Count */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-zinc-950/80 border border-zinc-700/80 backdrop-blur-md text-amber-400 font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-lg group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition duration-300">
                  {getMonogram(brand.name)}
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold text-zinc-300 bg-zinc-950/80 border border-zinc-700/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-md">
                  {brand.productCount} Items
                </span>
              </div>

              {/* Card Bottom: Brand Name, Tagline & Action Button */}
              <div className="relative z-10 space-y-1.5 sm:space-y-3">
                <h3 className="text-xs sm:text-xl font-extrabold text-white tracking-wide group-hover:text-amber-300 transition duration-300 leading-snug">
                  {brand.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-300 font-light leading-relaxed line-clamp-2 sm:line-clamp-3 opacity-90 group-hover:opacity-100 transition">
                  {brand.tagline}
                </p>

                <div className="pt-1 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition">
                  <span className="tracking-wider uppercase text-[9px] sm:text-[11px]">Explore</span>
                  <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition duration-300">
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-zinc-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-700 shadow-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>All curated brands undergo 100% fabric density & authenticity checks before listing.</span>
          </div>
          <a
            href="#collection"
            className="text-amber-800 font-bold hover:text-amber-900 transition shrink-0"
          >
            Browse All Curations →
          </a>
        </div>
      </div>
    </section>
  );
};
