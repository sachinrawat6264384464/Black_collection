"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Frown, RotateCcw } from "lucide-react";
import { Product, FilterState } from "@/types/product";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { ProductModal } from "./ProductModal";
import { Button } from "@/components/ui/Button";

interface ProductGridProps {
  initialCategory?: string;
  initialBrand?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  initialCategory = "All",
  initialBrand = "All",
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    brand: initialBrand,
    priceRange: "all",
    rating: 0,
    sortBy: "featured",
    searchQuery: "",
  });

  // Sync external props if passed
  React.useEffect(() => {
    if (initialCategory !== "All") {
      setFilters((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  React.useEffect(() => {
    if (initialBrand !== "All") {
      setFilters((prev) => ({ ...prev, brand: initialBrand }));
    }
  }, [initialBrand]);

  const resetFilters = () => {
    setFilters({
      category: "All",
      brand: "All",
      priceRange: "all",
      rating: 0,
      sortBy: "featured",
      searchQuery: "",
    });
  };

  // Filter & Sort Computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category
      if (filters.category !== "All" && product.category !== filters.category) {
        return false;
      }
      // Brand
      if (filters.brand !== "All" && product.brand !== filters.brand) {
        return false;
      }
      // Price range
      if (filters.priceRange !== "all") {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (product.price < min || product.price > max) {
          return false;
        }
      }
      // Rating
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }
      // Search
      if (filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "newest") {
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      }
      if (filters.sortBy === "price-asc") {
        return a.price - b.price;
      }
      if (filters.sortBy === "price-desc") {
        return b.price - a.price;
      }
      if (filters.sortBy === "rating") {
        return b.rating - a.rating;
      }
      // featured default
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [filters]);

  return (
    <section id="collection" className="py-20 bg-[#781c0e] text-zinc-100 relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            2025 MASTERPIECES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 uppercase">
            EXPLORE OUR COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 mt-3 font-light">
            Discover styles curated for every mood, moment, and modern statement.
          </p>
        </div>

        {/* Filter Toolbar Component */}
        <ProductFilters
          filters={filters}
          onChange={setFilters}
          onReset={resetFilters}
          totalResults={filteredProducts.length}
        />

        {/* Products 2-Column Mobile Pair Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 text-center bg-black/40 border border-white/20 rounded-3xl p-8 max-w-lg mx-auto my-8 flex flex-col items-center shadow-2xl backdrop-blur-md"
          >
            <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center text-amber-400 mb-4">
              <Frown className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No styles found</h3>
            <p className="text-sm text-zinc-300 mb-6 font-light">
              Try adjusting your active filters or clear search query to discover more garments from our vault.
            </p>
            <Button
              variant="gold"
              onClick={resetFilters}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
