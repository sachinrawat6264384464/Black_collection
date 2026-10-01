"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle, Eye } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Toggle image on hover if multiple images available
  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group relative bg-zinc-900/80 border border-zinc-800 hover:border-amber-400/50 rounded-2xl overflow-hidden card-hover-effect flex flex-col justify-between transition-all duration-300"
    >
      {/* Top Image Container */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isNew && <Badge variant="new">NEW DROP</Badge>}
          {product.discount && product.discount > 0 && (
            <Badge variant="sale">-{product.discount}% OFF</Badge>
          )}
          {product.featured && <Badge variant="gold">FEATURED</Badge>}
        </div>

        {/* Quick View Floating Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 z-10 backdrop-blur-[2px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white/90 text-black text-[11px] sm:text-xs font-semibold hover:bg-white shadow-xl flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-2.5 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
            <span className="text-amber-400 font-semibold truncate max-w-[70px] sm:max-w-none">{product.brand}</span>
            <span className="text-zinc-500 truncate max-w-[65px] sm:max-w-[100px]">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(product)}
            className="text-xs sm:text-base font-bold text-white group-hover:text-amber-300 transition duration-200 line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1 sm:mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
              <span className="text-[10px] sm:text-xs font-bold ml-1 text-zinc-100">
                {product.rating}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-zinc-500">
              ({product.ratingCount})
            </span>
          </div>
        </div>

        {/* Price & WhatsApp Action */}
        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-zinc-800/80 flex flex-col gap-2 sm:gap-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs sm:text-lg font-extrabold text-white">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-zinc-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
              In Stock
            </span>
          </div>

          <Button
            variant="whatsapp"
            size="sm"
            className="w-full text-[11px] sm:text-xs py-1.5 sm:py-2"
            icon={<MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            onClick={(e) => {
              e.stopPropagation();
              openWhatsAppEnquiry(product);
            }}
          >
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
