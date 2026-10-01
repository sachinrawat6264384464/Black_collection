import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "gold" | "sale" | "new" | "outline";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className,
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-colors";

  const variants = {
    default: "bg-zinc-800 text-zinc-300 border border-zinc-700",
    gold: "bg-amber-400/10 text-amber-300 border border-amber-400/30",
    sale: "bg-rose-500/15 text-rose-300 border border-rose-500/30",
    new: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    outline: "border border-zinc-700 text-zinc-400 bg-zinc-900/60",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};
