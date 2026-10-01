import React from "react";

interface ScallopedSectionDividerProps {
  fillColor?: string;
  topColor?: string;
  dotColor?: string;
  className?: string;
  flip?: boolean;
  showDots?: boolean;
}

export const ScallopedSectionDivider: React.FC<ScallopedSectionDividerProps> = ({
  fillColor = "#781c0e",
  topColor = "#FAF9F5",
  dotColor = "#000000",
  className = "",
  flip = false,
  showDots = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none z-20 ${
        flip ? "rotate-180 -mb-1" : "-mt-1"
      } ${className}`}
      style={{ backgroundColor: topColor }}
    >
      <svg
        className="w-full h-8 sm:h-12 md:h-16 block"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Dot Matrix Pattern */}
          <pattern
            id={`scallop-dot-${fillColor.replace("#", "")}`}
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.5" fill={dotColor} opacity="0.12" />
          </pattern>
        </defs>

        {/* Optional Dotted Overlay Layer */}
        {showDots && (
          <rect
            width="100%"
            height="48"
            fill={`url(#scallop-dot-${fillColor.replace("#", "")})`}
          />
        )}

        {/* 30 Exact Semicircular Scalloped Arches */}
        <path
          fill={fillColor}
          d="M 0,0 A 20,20 0 0,0 40,0 A 20,20 0 0,0 80,0 A 20,20 0 0,0 120,0 A 20,20 0 0,0 160,0 A 20,20 0 0,0 200,0 A 20,20 0 0,0 240,0 A 20,20 0 0,0 280,0 A 20,20 0 0,0 320,0 A 20,20 0 0,0 360,0 A 20,20 0 0,0 400,0 A 20,20 0 0,0 440,0 A 20,20 0 0,0 480,0 A 20,20 0 0,0 520,0 A 20,20 0 0,0 560,0 A 20,20 0 0,0 600,0 A 20,20 0 0,0 640,0 A 20,20 0 0,0 680,0 A 20,20 0 0,0 720,0 A 20,20 0 0,0 760,0 A 20,20 0 0,0 800,0 A 20,20 0 0,0 840,0 A 20,20 0 0,0 880,0 A 20,20 0 0,0 920,0 A 20,20 0 0,0 960,0 A 20,20 0 0,0 1000,0 A 20,20 0 0,0 1040,0 A 20,20 0 0,0 1080,0 A 20,20 0 0,0 1120,0 A 20,20 0 0,0 1160,0 A 20,20 0 0,0 1200,0 L 1200,48 L 0,48 Z"
        />
      </svg>
    </div>
  );
};
