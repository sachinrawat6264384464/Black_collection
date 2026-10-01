"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { CategorySection } from "@/components/categories/CategorySection";
import { BrandSection } from "@/components/brands/BrandSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ScallopedSectionDivider } from "@/components/ui/ScallopedSectionDivider";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");

  const handleSelectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleSelectBrand = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section (Dark Zinc) */}
        <Hero />

        {/* Hero to Category Section Divider (Dark -> Cream) */}
        <ScallopedSectionDivider topColor="#09090b" fillColor="#FAF9F5" />

        {/* Category Section (Light Cream #FAF9F5) */}
        <div className="bg-[#FAF9F5] text-zinc-900 relative">
          <CategorySection onSelectCategory={handleSelectCategory} />
        </div>

        {/* Category Section to Product Grid Divider (Cream -> Rust Red #781c0e) */}
        <ScallopedSectionDivider topColor="#FAF9F5" fillColor="#781c0e" />

        {/* Product Grid Section (Rust Red #781c0e) */}
        <ProductGrid
          initialCategory={selectedCategory}
          initialBrand={selectedBrand}
        />

        {/* Product Grid to About Section Divider (Rust Red #781c0e -> Cream #FAF9F5) */}
        <ScallopedSectionDivider topColor="#781c0e" fillColor="#FAF9F5" />

        {/* About, Contact & Brand Sections (Light Cream #FAF9F5) */}
        <div className="bg-[#FAF9F5] text-zinc-900 relative">
          <AboutSection />
          <ContactSection />
          <BrandSection onSelectBrand={handleSelectBrand} />
        </div>

        {/* Brand Section to Footer Divider (Cream #FAF9F5 -> Dark Zinc) */}
        <ScallopedSectionDivider topColor="#FAF9F5" fillColor="#09090b" />
      </main>

      {/* Footer (Dark Zinc) */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
