
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
                
                {/* --- 1. Ground Shadow (投影) --- */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-2 bg-blue-900/30 blur-[6px] rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-20 pointer-events-none"></div>

                {/* --- 2. The 3D Crystal Sphere (透明水晶球) --- */}
                <div className="relative w-full h-full rounded-full select-none animate-[float_6s_ease-in-out_infinite]">
                    
                    {/* Glass Body & Boundary Texture (玻璃体与边界纹路) */}
                    {/* 
                       background: 极淡的渐变，保证通透
                       border: 外部锐利边缘
                       shadow: 内部厚度感与环境光反射
                    */}
                    <div className="absolute inset-0 rounded-full 
                        bg-gradient-to-br from-white/10 via-white/5 to-blue-50/10
                        backdrop-blur-[0.5px]
                        border-[1.5px] border-white/50
                        shadow-[inset_0_0_6px_2px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(59,130,246,0.2),0_4px_12px_rgba(0,0,0,0.1)]">
                    </div>

                    {/* Iridescent Surface Texture (表面七彩纹理) */}
                    {/* 模拟样图中球体表面的微妙色彩反光 */}
                    <div className="absolute inset-0 rounded-full opacity-50 mix-blend-overlay bg-[conic-gradient(from_20deg,transparent_0%,rgba(236,72,153,0.15)_30%,rgba(59,130,246,0.15)_60%,transparent_90%)]"></div>

                    {/* --- 3. Internal Content: Star & Orbit (星星与环绕) --- */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="42" height="42" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                            <defs>
                                <linearGradient id="starGold" x1="32" y1="10" x2="32" y2="54" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FCD34D" /> {/* Amber 300 */}
                                    <stop offset="1" stopColor="#F59E0B" /> {/* Amber 500 */}
                                </linearGradient>
                                {/* Orbit Gradient: Blue to Purple fade */}
                                <linearGradient id="orbitGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                                    <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* The Orbit Ring (环绕光轨) */}
                            {/* Ellipse rotated to go from Top-Right area to Bottom-Left area */}
                            <ellipse 
                                cx="32" 
                                cy="32" 
                                rx="26" 
                                ry="8" 
                                stroke="url(#orbitGrad)" 
                                strokeWidth="2.5" 
                                strokeLinecap="round"
                                fill="none"
                                transform="rotate(-45 32 32)"
                                className="opacity-90"
                            />
                            
                            {/* The Star (星星) */}
                            <path 
                                d="M32 12 L37 23.5 H49.5 L40 31.5 L43.5 44 L32 36.5 L20.5 44 L24 31.5 L14.5 23.5 H27 L32 12 Z" 
                                fill="url(#starGold)" 
                                stroke="#FFFBEB" 
                                strokeWidth="1"
                                strokeLinejoin="round"
                                filter="url(#glow)"
                                className="animate-[pulse_4s_ease-in-out_infinite]"
                            />
                            
                            {/* Small sparkle on the orbit */}
                            <circle cx="50" cy="14" r="1.5" fill="white" className="animate-ping opacity-80" />
                        </svg>
                    </div>

                    {/* --- 4. Surface Highlights (高光细节) --- */}
                    
                    {/* Top Right Specular (主高光 - 锐利) */}
                    <div className="absolute top-[15%] right-[22%] w-[15%] h-[10%] bg-white rounded-[100%] blur-[2px] opacity-90 transform rotate-45 pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    
                    {/* Bottom Left Rim Reflection (反光 - 柔和) */}
                    <div className="absolute bottom-[10%] left-[15%] w-[40%] h-[25%] bg-gradient-to-t from-white/30 to-transparent rounded-[100%] blur-[4px] transform -rotate-12 pointer-events-none"></div>

                </div>

                {/* --- 5. Badge (角标) --- */}
                {badgeCount > 0 && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center z-20 pointer-events-none">
                        <span className="relative flex h-5 min-w-[20px] px-1 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 min-w-[20px] bg-gradient-to-br from-red-500 to-rose-600 border border-white/90 text-[10px] font-bold text-white items-center justify-center shadow-sm leading-none px-1">
                                {badgeCount > 99 ? '99+' : badgeCount}
                            </span>
                        </span>
                    </div>
                )}
            </div>
            
            {/* Inject Animation Styles */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-4px); }
                }
            `}</style>
        </div>
    );
};
