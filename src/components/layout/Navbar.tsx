"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { STORE_CONFIG } from "@/config/store";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Categories", href: "#categories" },
    { name: "Brands", href: "#brands" },
    { name: "Collection", href: "#collection" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="The Black Collection Dabra Logo"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-lg sm:text-xl text-white group-hover:text-amber-300 transition leading-tight">
                THE BLACK
              </span>
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200 transition">
                COLLECTION 2025
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-zinc-950/40 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Page"
              className="p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 transition duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
            </a>

            <Button
              variant="whatsapp"
              size="sm"
              icon={<MessageCircle className="w-4 h-4" />}
              onClick={() => openWhatsAppEnquiry()}
            >
              Enquire
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openWhatsAppEnquiry()}
              className="p-2.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30"
              aria-label="WhatsApp Enquire"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-full text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
