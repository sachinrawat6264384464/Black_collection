"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

interface CategorySectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-24 bg-transparent relative overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
              CURATED SELECTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mt-1">
              EXPLORE BY CATEGORY
            </h2>
          </div>
          <p className="text-sm text-zinc-700 max-w-md font-medium">
            From heavy-knit hoodies to tailored bespoke coats, browse luxury silhouettes tailored for your distinct aesthetic.
          </p>
        </div>

        {/* Categories 2-Column Mobile Pair Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#collection"
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
              className="group relative h-56 sm:h-80 rounded-2xl overflow-hidden border border-zinc-300/80 bg-zinc-950 block cursor-pointer transition-transform duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent group-hover:via-zinc-950/60 transition duration-300" />

              {/* Card Content */}
              <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-zinc-950/80 text-zinc-300 border border-zinc-700/60 backdrop-blur-md">
                    {cat.itemCount} Items
                  </span>
                  <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-zinc-950/60 border border-zinc-700/80 text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-xl font-bold text-white group-hover:text-amber-300 transition duration-300 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-zinc-300 mt-1 line-clamp-1 sm:line-clamp-2 opacity-90 group-hover:opacity-100 transition">
                    {cat.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
