"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { STORE_CONFIG } from "@/config/store";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-zinc-950 border-l border-zinc-800 z-50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <span className="font-bold text-lg tracking-widest text-zinc-100">
                  THE BLACK <span className="text-amber-400">2025</span>
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="mt-8 space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-xl text-lg font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-zinc-600" />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Footer CTAs */}
            <div className="space-y-4 pt-6 border-t border-zinc-800">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                icon={<MessageCircle className="w-5 h-5" />}
                onClick={() => {
                  onClose();
                  openWhatsAppEnquiry();
                }}
              >
                Chat on WhatsApp
              </Button>

              <a
                href={STORE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:text-white hover:border-zinc-700 transition"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Follow {STORE_CONFIG.instagramHandle}</span>
              </a>

              <p className="text-center text-xs text-zinc-600 pt-2">
                © 2025 {STORE_CONFIG.name}. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
