"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, MessageCircle, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]
  );

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-black z-10 my-auto max-h-[90vh] flex flex-col lg:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/60 backdrop-blur-md transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Gallery Section */}
          <div className="lg:w-1/2 p-6 bg-zinc-900/40 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col gap-4">
            {/* Main Featured Display Image */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                {product.isNew && <Badge variant="new">NEW DROP</Badge>}
                {product.discount && (
                  <Badge variant="sale">-{product.discount}% OFF</Badge>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-amber-400 scale-105 shadow-md shadow-amber-400/20"
                        : "border-zinc-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} preview ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Detail Content */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              {/* Brand & Category */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">
                  <span>{product.brand}</span>
                  <span className="text-zinc-500">{product.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-zinc-200">
                    {product.rating}
                  </span>
                  <span className="text-xs text-zinc-500">
                    ({product.ratingCount} customer reviews)
                  </span>
                </div>
              </div>

              {/* Price Display */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-zinc-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.discount && (
                  <span className="ml-auto text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                    Save {product.discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Garment Architecture & Description
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Select Size
                    </span>
                    {selectedSize && (
                      <span className="text-xs text-amber-400 font-medium">
                        Selected: {selectedSize}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                          selectedSize === size
                            ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105"
                            : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Color Variant
                    </span>
                    {selectedColor && (
                      <span className="text-xs text-amber-400 font-medium">
                        Selected: {selectedColor}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                          selectedColor === color
                            ? "bg-zinc-100 text-black font-bold shadow-md"
                            : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Quality Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Express Tracked Dispatch</span>
                </div>
              </div>
            </div>

            {/* Bottom WhatsApp Primary CTA */}
            <div className="mt-8 pt-4 border-t border-zinc-800">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full shadow-xl shadow-emerald-950/60"
                icon={<MessageCircle className="w-5 h-5" />}
                onClick={() =>
                  openWhatsAppEnquiry(product, {
                    selectedSize,
                    selectedColor,
                  })
                }
              >
                Enquire & Order on WhatsApp
              </Button>
              <p className="text-[11px] text-center text-zinc-500 mt-2">
                Clicking opens WhatsApp with pre-filled product details.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
