"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { STORE_CONFIG } from "@/config/store";

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 pointer-events-auto">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-zinc-900/90 text-zinc-100 text-xs py-2 px-3.5 rounded-full border border-zinc-700/80 shadow-xl backdrop-blur-md transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-medium">Chat on WhatsApp</span>
      </div>

      {/* Button */}
      <button
        onClick={() => openWhatsAppEnquiry()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contact on WhatsApp"
        className="relative group flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none group-hover:opacity-0" />

        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 relative z-10 transition-transform group-hover:scale-110" />
      </button>
    </div>
  );
};
