
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // Reduced gap to gap-2.5 to bring text closer to icon
    <div className={`relative flex items-center gap-2.5 select-none ${className}`}>
      
      {/* Logo Icon: Blue Sphere with Star and '文/A' Watermark */}
      <div className="relative w-11 h-11 shrink-0">
         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-md transition-transform duration-300 hover:scale-105">
            <defs>
                <linearGradient id="logo_bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" />   {/* Blue 500 */}
                    <stop offset="100%" stopColor="#1D4ED8" /> {/* Blue 700 */}
                </linearGradient>
            </defs>

            {/* 1. Background Sphere */}
            <circle cx="24" cy="24" r="22" fill="url(#logo_bg)" />
            
            {/* 2. Watermarks (文 / A) - Faint background elements */}
            <text x="10" y="17" fill="white" fillOpacity="0.15" fontSize="10" fontWeight="bold" fontFamily="serif" transform="rotate(-15 10 17)">文</text>
            <text x="33" y="37" fill="white" fillOpacity="0.15" fontSize="10" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-15 33 37)">A</text>

            {/* 3. Orbit Arcs */}
            {/* Top-Right arc */}
            <path d="M30 6 A 22 22 0 0 1 42 18" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
            {/* Bottom-Left arc */}
            <path d="M18 42 A 22 22 0 0 1 6 30" stroke="white" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />

            {/* 4. Central Sparkle (Star) */}
            <path 
                d="M24 10 C24 10 27 20 27 20 C27 20 38 24 38 24 C38 24 27 28 27 28 C27 28 24 38 24 38 C24 38 21 28 21 28 C21 28 10 24 10 24 C10 24 21 20 21 20 C21 20 24 10 24 10 Z" 
                fill="white" 
                className="drop-shadow-sm"
            />
            
            {/* 5. Accents */}
            <circle cx="36" cy="14" r="1.5" fill="white" fillOpacity="0.9" className="animate-pulse" />
            <circle cx="12" cy="36" r="1" fill="white" fillOpacity="0.7" />
         </svg>
      </div>

      {/* Text Logo: Stacked Layout */}
      {withText && (
        <div className={`flex flex-col justify-center ${textClassName}`}>
            <div className="flex items-center leading-none -ml-0.5">
                <span className="text-[26px] font-bold text-white tracking-tighter drop-shadow-sm">Re</span>
                <span className="text-[26px] font-bold text-blue-500 tracking-tighter drop-shadow-sm">Word</span>
                {/* Decorative dot from reference image */}
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-1 self-start mt-1.5 opacity-80"></div>
            </div>
            <div className="text-[12px] text-slate-400 font-medium tracking-[0.4em] pl-0.5 mt-0.5 transform scale-x-90 origin-left">
                易 语 道
            </div>
        </div>
      )}
    </div>
  );
};
