"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { FilterState } from "@/types/product";
import { CATEGORIES } from "@/data/categories";
import { BRANDS } from "@/data/brands";
import { Button } from "@/components/ui/Button";

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalResults: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const priceOptions = [
    { label: "All Prices", value: "all" },
    { label: "Under ₹2,000", value: "0-2000" },
    { label: "₹2,000 - ₹4,000", value: "2000-4000" },
    { label: "₹4,000 - ₹6,000", value: "4000-6000" },
    { label: "₹6,000+", value: "6000-99999" },
  ];

  const sortOptions = [
    { label: "Featured First", value: "featured" },
    { label: "Newest Arrivals", value: "newest" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Highest Rated", value: "rating" },
  ];

  const activeFiltersCount =
    (filters.category !== "All" ? 1 : 0) +
    (filters.brand !== "All" ? 1 : 0) +
    (filters.priceRange !== "all" ? 1 : 0) +
    (filters.rating > 0 ? 1 : 0) +
    (filters.searchQuery !== "" ? 1 : 0);

  return (
    <div className="w-full mb-8">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 bg-black/40 border border-white/20 rounded-2xl backdrop-blur-md shadow-xl">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300" />
          <input
            type="text"
            placeholder="Search styles, brands, fabrics..."
            value={filters.searchQuery}
            onChange={(e) => onChange({ ...filters, searchQuery: e.target.value })}
            className="w-full pl-10 pr-8 py-2 sm:py-2.5 rounded-xl bg-black/50 border border-white/20 text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400 transition"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onChange({ ...filters, searchQuery: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Desktop Dropdowns & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="md:hidden flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-white/20 text-xs font-medium text-white shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-400 text-black font-bold text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Sort Dropdown */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-zinc-200 font-medium">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onChange({ ...filters, sortBy: e.target.value as FilterState["sortBy"] })
              }
              className="bg-black/70 border border-white/20 text-sm text-zinc-100 py-2 px-3 rounded-xl focus:outline-none focus:border-amber-400 font-medium"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-zinc-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters button */}
          {activeFiltersCount > 0 && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:bg-black/40 rounded-xl transition shrink-0"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Scrollable Category Chips */}
      <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1.5 scrollbar-none">
        <button
          onClick={() => onChange({ ...filters, category: "All" })}
          className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition shrink-0 ${
            filters.category === "All"
              ? "bg-amber-400 text-black shadow-md font-bold"
              : "bg-black/40 border border-white/20 text-zinc-200 hover:bg-black/60 hover:text-white"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange({ ...filters, category: cat.name })}
            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition shrink-0 ${
              filters.category === cat.name
                ? "bg-amber-400 text-black shadow-md font-bold"
                : "bg-black/40 border border-white/20 text-zinc-200 hover:bg-black/60 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mt-4 flex items-center justify-between text-xs text-zinc-200 font-medium px-1">
        <span>
          Showing <strong className="text-white font-bold">{totalResults}</strong> curated styles
        </span>
        {activeFiltersCount > 0 && (
          <span className="text-amber-400 font-bold">
            Active filters applied
          </span>
        )}
      </div>

      {/* Mobile Bottom Filter Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-md md:hidden">
          <div className="bg-zinc-950 border-t border-zinc-800 rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-amber-400" />
                Filter Collections
              </h3>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Category Filter Mobile */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onChange({ ...filters, category: "All" })}
                  className={`px-3 py-1.5 rounded-full text-xs ${
                    filters.category === "All"
                      ? "bg-amber-400 text-black font-bold"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => onChange({ ...filters, category: cat.name })}
                    className={`px-3 py-1.5 rounded-full text-xs ${
                      filters.category === cat.name
                        ? "bg-amber-400 text-black font-bold"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Filter Mobile */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Brand
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onChange({ ...filters, brand: "All" })}
                  className={`px-3 py-1.5 rounded-full text-xs ${
                    filters.brand === "All"
                      ? "bg-amber-400 text-black font-bold"
                      : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                  }`}
                >
                  All Brands
                </button>
                {BRANDS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onChange({ ...filters, brand: b.name })}
                    className={`px-3 py-1.5 rounded-full text-xs ${
                      filters.brand === b.name
                        ? "bg-amber-400 text-black font-bold"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Price Range
              </label>
              <div className="flex flex-wrap gap-2">
                {priceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => onChange({ ...filters, priceRange: opt.value })}
                    className={`px-3 py-1.5 rounded-full text-xs ${
                      filters.priceRange === opt.value
                        ? "bg-amber-400 text-black font-bold"
                        : "bg-zinc-900 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions Mobile */}
            <div className="pt-4 border-t border-zinc-800 flex gap-3">
              <Button
                variant="outline"
                className="w-1/2"
                onClick={() => {
                  onReset();
                  setIsMobileDrawerOpen(false);
                }}
              >
                Reset
              </Button>
              <Button
                variant="gold"
                className="w-1/2"
                onClick={() => setIsMobileDrawerOpen(false)}
              >
                Show Results ({totalResults})
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
