import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge' | 'card';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  const blue = '#0974ba';
  const gold = '#b88956';

  if (variant === 'card') {
    return (
      <div className={`inline-flex items-center justify-center p-3 sm:p-4 rounded-md bg-white shadow-xl ${className}`}>
        <Logo variant="full" size={size} showSubtitle={showSubtitle} />
      </div>
    );
  }

  if (variant === 'icon' || variant === 'badge') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} w-auto ${className}`}
        aria-label="ImmaDjinn Logo Icon"
      >
        {variant === 'badge' && (
          <rect width="120" height="120" rx="16" fill="#0b121c" stroke="#c5a059" strokeWidth="1.5" strokeOpacity="0.4" />
        )}
        
        {/* Roofline */}
        <path
          d="M 25 55 L 60 20 L 95 55"
          stroke={blue}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4 Window Panes */}
        <rect x="52" y="32" width="6.5" height="6.5" fill={gold} rx="0.5" />
        <rect x="61.5" y="32" width="6.5" height="6.5" fill={gold} rx="0.5" />
        <rect x="52" y="41.5" width="6.5" height="6.5" fill={gold} rx="0.5" />
        <rect x="61.5" y="41.5" width="6.5" height="6.5" fill={gold} rx="0.5" />

        {/* Genie Lamp */}
        <g transform="translate(18, 55) scale(0.85)">
          {/* Base & Body */}
          <path
            d="M 22 34 C 16 34 14 38 20 41 C 28 44 52 44 60 38 C 66 34 64 30 54 30 C 42 30 36 27 34 24 C 32 21 36 20 39 20 C 45 20 51 24 57 24 C 65 24 74 17 78 15 C 75 19 70 24 66 28 C 72 31 70 38 60 42 C 49 46 24 46 14 40 C 6 36 9 30 17 28 C 22 26 27 28 22 34 Z"
            fill={blue}
          />
          {/* Handle */}
          <path
            d="M 18 31 C 8 26 8 16 20 20 C 24 21 24 25 18 31 Z"
            stroke={blue}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Vapor wisps */}
          <path
            d="M 76 13 C 80 10 86 10 88 5 M 81 16 C 85 14 91 15 93 10"
            stroke={blue}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }

  // Exact 1:1 vector reconstruction of the uploaded brand logo
  return (
    <svg
      viewBox="0 0 540 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} w-auto max-w-full ${className}`}
      aria-label="ImmaDjinn Real Estate"
    >
      {/* 1. GABLED ROOF (BLUE) */}
      <path
        d="M 276 72 L 310 32 L 402 110"
        stroke={blue}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. 4-PANE WINDOW (GOLD) UNDER ROOF PEAK */}
      <rect x="303" y="47" width="6.5" height="6.5" fill={gold} rx="0.5" />
      <rect x="312.5" y="47" width="6.5" height="6.5" fill={gold} rx="0.5" />
      <rect x="303" y="56.5" width="6.5" height="6.5" fill={gold} rx="0.5" />
      <rect x="312.5" y="56.5" width="6.5" height="6.5" fill={gold} rx="0.5" />

      {/* 3. WORDMARK "IMMA" IN ROYAL BLUE */}
      {/* Letter 'I' */}
      <path d="M 88 74 L 97 74 L 97 122 L 88 122 Z" fill={blue} />

      {/* First Letter 'M' */}
      <path
        d="M 104 122 L 104 74 L 114 74 L 126.5 106 L 139 74 L 149 74 L 149 122 L 140 122 L 140 88 L 129.5 115 L 123.5 115 L 113 88 L 113 122 Z"
        fill={blue}
      />

      {/* Second Letter 'M' */}
      <path
        d="M 156 122 L 156 74 L 166 74 L 178.5 106 L 191 74 L 201 74 L 201 122 L 192 122 L 192 88 L 181.5 115 L 175.5 115 L 165 88 L 165 122 Z"
        fill={blue}
      />

      {/* Letter 'A' */}
      <path
        d="M 207 122 L 222 74 L 234 74 L 249 122 L 239 122 L 234.5 107 L 221.5 107 L 217 122 Z M 224 99 L 232 99 L 228 85.5 Z"
        fill={blue}
      />

      {/* 4. WORDMARK "DJINN" IN WARM GOLD / BRONZE */}
      {/* Letter 'D' with custom cutout for Genie Lamp */}
      <path
        d="M 260 74 L 280 74 C 298 74 308 84 308 98 C 308 112 298 122 280 122 L 260 122 Z M 270 82.5 L 270 113.5 L 279 113.5 C 291 113.5 297.5 107 297.5 98 C 297.5 89 291 82.5 279 82.5 Z"
        fill={gold}
      />

      {/* MAGIC GENIE LAMP (BLUE) EMBEDDED IN / OVER 'D' */}
      <g transform="translate(250, 78) scale(0.68)">
        {/* Lamp Base & Bowl */}
        <path
          d="M 16 28 C 10 28 8 32 14 35 C 22 38 46 38 54 33 C 60 29 58 25 48 25 C 36 25 30 22 28 19 C 26 16 30 15 34 15 C 40 15 46 19 52 19 C 60 19 68 13 72 11 C 69 15 64 20 60 24 C 66 27 64 34 54 37 C 44 40 21 40 11 35 C 4 31 7 25 14 23 C 19 21 24 23 16 28 Z"
          fill={blue}
        />
        {/* Lamp Handle on the left */}
        <path
          d="M 13 26 C 3 21 3 11 15 15 C 19 16 19 20 13 26 Z"
          stroke={blue}
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Steam / smoke plumes on top right */}
        <path
          d="M 70 10 C 74 7 79 6 81 2 M 74 12 C 78 10 83 11 85 7"
          stroke={blue}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      {/* Letter 'J' */}
      <path
        d="M 324 74 L 333.5 74 L 333.5 111 C 333.5 118 328.5 123 318 123 C 310 123 306 119 306 114 L 314 114 C 314 116.5 315.5 117.5 318 117.5 C 322 117.5 324 115 324 110.5 Z"
        fill={gold}
      />

      {/* Letter 'I' */}
      <path d="M 342 74 L 351 74 L 351 122 L 342 122 Z" fill={gold} />

      {/* First Letter 'N' */}
      <path
        d="M 359 122 L 359 74 L 368.5 74 L 387 106 L 387 74 L 396 74 L 396 122 L 386.5 122 L 368 90 L 368 122 Z"
        fill={gold}
      />

      {/* Second Letter 'N' */}
      <path
        d="M 404 122 L 404 74 L 413.5 74 L 432 106 L 432 74 L 441 74 L 441 122 L 431.5 122 L 413 90 L 413 122 Z"
        fill={gold}
      />

      {/* 5. SUBTITLE & FRAMING LINES "────── REAL ESTATE ──────" */}
      {showSubtitle && (
        <g>
          {/* Left Line */}
          <line
            x1="88"
            y1="144"
            x2="182"
            y2="144"
            stroke={gold}
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* "REAL ESTATE" Text */}
          <text
            x="264"
            y="149"
            textAnchor="middle"
            fill={gold}
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="5.5px"
          >
            REAL ESTATE
          </text>

          {/* Right Line */}
          <line
            x1="346"
            y1="144"
            x2="441"
            y2="144"
            stroke={gold}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  );
};
