import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide focus:outline-none focus:ring-2 focus:ring-amber-400/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-white text-black hover:bg-neutral-200 shadow-md hover:shadow-lg shadow-white/10",
      secondary:
        "bg-zinc-800/80 text-zinc-100 hover:bg-zinc-700 border border-zinc-700/60",
      outline:
        "bg-transparent text-zinc-100 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800/40",
      ghost:
        "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/50",
      gold:
        "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 font-semibold hover:brightness-110 shadow-lg shadow-amber-500/20",
      whatsapp:
        "bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/30",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs gap-1.5",
      md: "px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm gap-1.5 sm:gap-2",
      lg: "px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base gap-2 sm:gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && <span className="inline-block shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
