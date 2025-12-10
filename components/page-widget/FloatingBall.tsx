
import React from 'react';
import { PageWidgetConfig } from '../../types';

interface FloatingBallProps {
    config: PageWidgetConfig;
    badgeCount: number;
    isDragging: boolean;
    onMouseDown: (e: React.MouseEvent) => void;
    onClick: (e: React.MouseEvent) => void;
}

export const FloatingBall: React.FC<FloatingBallProps> = ({ config, badgeCount, isDragging, onMouseDown, onClick }) => {
    return (
        <div 
            className={`fixed z-[2147483647] cursor-move select-none group touch-none`}
            style={{ 
                left: config.x, 
                top: config.y,
                pointerEvents: 'auto'
            }}
            onMouseDown={onMouseDown}
            onClick={(e) => {
                if (!isDragging) onClick(e);
            }}
        >
            <div className={`relative w-16 h-16 transition-transform duration-300 ease-out ${isDragging ? 'scale-95 cursor-grabbing' : 'hover:scale-110'}`}>
                
                {/* --- 1. Inner Logo Icon (The Core) --- */}
                <div className="absolute inset-1 bg-blue-500 rounded-full shadow-inner overflow-hidden">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                            <linearGradient id="ball_gradient" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3B82F6" />
                                <stop offset="1" stopColor="#1d4ed8" />
                            </linearGradient>
                            <filter id="ball_glow" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>

                        {/* Base Sphere */}
                        <circle cx="24" cy="24" r="24" fill="url(#ball_gradient)" />
                        
                        {/* Orbital Ring */}
                        <ellipse cx="24" cy="24" rx="18" ry="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" transform="rotate(-45 24 24)" />
                        
                        {/* Orbiting Dots */}
                        <circle cx="38" cy="10" r="1.5" fill="white" fillOpacity="0.9" />
                        <circle cx="10" cy="38" r="1.5" fill="white" fillOpacity="0.9" />

                        {/* Central Sparkle (Star) */}
                        <path d="M24 13L26.5 21.5L35 24L26.5 26.5L24 35L21.5 26.5L13 24L21.5 21.5L24 13Z" fill="white" filter="url(#ball_glow)" />

                        {/* '文' Character - Left */}
                        <text x="8" y="20" fill="#fcd34d" fontSize="14" fontWeight="900" fontFamily="serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>文</text>

                        {/* 'A' Character - Right */}
                        <text x="31" y="38" fill="#6ee7b7" fontSize="15" fontWeight="900" fontFamily="sans-serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>A</text>
                    </svg>
                </div>

                {/* --- 2. Bubble Glass Effect Overlay --- */}
                <div className="absolute inset-0 rounded-full pointer-events-none z-10">
                    {/* Top Highlight (Gloss) */}
                    <div className="absolute top-2 left-3 w-6 h-3 bg-gradient-to-b from-white/90 to-transparent rounded-full blur-[1px] transform -rotate-45 opacity-80"></div>
                    
                    {/* Bottom Reflection (Ambient Light) */}
                    <div className="absolute bottom-1 right-2 w-8 h-4 bg-gradient-to-t from-blue-300/40 to-transparent rounded-full blur-[2px] transform -rotate-12"></div>
                    
                    {/* Outer Rim (Glass Edge) */}
                    <div className="absolute inset-0 rounded-full border border-white/30 shadow-[inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
                    
                    {/* Soft Glow around */}
                    <div className="absolute inset-0 rounded-full bg-blue-400/10 mix-blend-overlay"></div>
                </div>

                {/* --- 3. Shadow underneath --- */}
                <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/20 blur-md rounded-full -z-10"></div>

                {/* --- 4. Badge --- */}
                {badgeCount > 0 && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center z-20">
                        <span className="relative flex h-5 min-w-[20px] px-1.5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 min-w-[20px] bg-red-500 border-2 border-white text-[10px] font-bold text-white items-center justify-center shadow-sm leading-none px-1">
                                {badgeCount > 99 ? '99+' : badgeCount}
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
