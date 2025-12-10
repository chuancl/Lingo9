
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // Reduced gap from gap-7 to gap-3 to bring text closer to icon
    <div className={`relative flex items-center gap-3 select-none ${className}`}>
      
      {/* 1. Logo Icon: Crystal Sphere with Star (Consistent with FloatingBall) */}
      <div className="relative w-12 h-12 shrink-0 group">
         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg filter transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-xl">
            <defs>
                <linearGradient id="logo_sphere_grad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EFF6FF" /> {/* Light Blue/White highlight */}
                    <stop offset="0.4" stopColor="#3B82F6" /> {/* Brand Blue */}
                    <stop offset="1" stopColor="#1D4ED8" /> {/* Dark Blue shadow */}
                </linearGradient>
                <linearGradient id="logo_star_grad" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FCD34D" /> {/* Amber 300 */}
                    <stop offset="1" stopColor="#F59E0B" /> {/* Amber 500 */}
                </linearGradient>
                <filter id="logo_glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Base Sphere */}
            <circle cx="24" cy="24" r="20" fill="url(#logo_sphere_grad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            
            {/* Inner Reflection (Glassy look) */}
            <circle cx="24" cy="24" r="18" fill="white" fillOpacity="0.1" />
            <ellipse cx="24" cy="14" rx="12" ry="6" fill="white" fillOpacity="0.2" filter="blur(2px)" />

            {/* Orbit Ring */}
            <ellipse 
                cx="24" 
                cy="24" 
                rx="16" 
                ry="6" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeOpacity="0.6" 
                strokeLinecap="round"
                transform="rotate(-45 24 24)" 
            />
            
            {/* Small Orbit Particle */}
            <circle cx="36" cy="12" r="1.5" fill="white" className="animate-pulse" />

            {/* Central Star */}
            <path 
                d="M24 15 L26.5 21.5 H33.5 L28 26 L30 32.5 L24 28.5 L18 32.5 L20 26 L14.5 21.5 H21.5 L24 15 Z" 
                fill="url(#logo_star_grad)" 
                stroke="white" 
                strokeWidth="0.5"
                filter="url(#logo_glow)"
                className="drop-shadow-sm"
            />
         </svg>
      </div>

      {/* 2. Text Logo */}
      {withText && (
        <div className={`relative flex items-end font-sans ${textClassName}`}>
            
            {/* R */}
            <span className="text-4xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-none tracking-tight z-10">R</span>
            
            {/* e */}
            <span className="text-4xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-none tracking-tight z-10">e</span>
            
            {/* - (Hyphen, optional, keeping layout compact) */}
            
            {/* W - Close to Re */}
            <span className="text-4xl font-black text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] leading-none tracking-tight z-10">W</span>
            
            {/* o */}
            <span className="text-4xl font-black text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] leading-none tracking-tight z-10">o</span>
            
            {/* r */}
            <span className="text-4xl font-black text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] leading-none tracking-tight z-10">r</span>
            
            {/* d */}
            <span className="text-4xl font-black text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] leading-none tracking-tight z-10">d</span>

            {/* --- Decorative Chinese Characters (Adjusted positions for tighter layout) --- */}

            {/* 易 */}
            <span className="absolute -top-3 left-6 text-xl font-serif font-black text-emerald-400 transform -rotate-12 opacity-80 pointer-events-none">
            易
            </span>

            {/* 语 */}
            <span className="absolute -bottom-2 left-[42%] text-xl font-serif font-black text-fuchsia-400 transform rotate-12 opacity-80 pointer-events-none">
            语
            </span>

            {/* 道 */}
            <span className="absolute -top-3 -right-2 text-xl font-serif font-black text-amber-400 transform rotate-6 opacity-80 pointer-events-none">
            道
            </span>
        </div>
      )}
    </div>
  );
};
