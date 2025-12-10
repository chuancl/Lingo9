
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
                
                {/* --- 1. Ground Shadow (彩色投影) --- */}
                {/* 投影带有气泡的幻彩颜色，增加真实感 */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-[8px] rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-30 pointer-events-none"></div>

                {/* --- 2. The Iridescent Soap Bubble (五彩斑斓的肥皂泡) --- */}
                <div className="relative w-full h-full rounded-full select-none animate-[breathe_6s_ease-in-out_infinite]">
                    
                    {/* Thin Film Interference Texture (薄膜干涉纹理) */}
                    {/* 关键层：使用 conic-gradient 模拟阳光下的彩虹色油膜效果，mix-blend-mode 保证通透 */}
                    <div className="absolute inset-0 rounded-full opacity-60 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,182,193,0.1)_0deg,rgba(135,206,235,0.2)_60deg,rgba(255,255,224,0.1)_120deg,rgba(221,160,221,0.2)_180deg,rgba(135,206,235,0.2)_240deg,rgba(255,192,203,0.2)_300deg,rgba(255,182,193,0.1)_360deg)] border border-white/40 backdrop-blur-[0.5px]"></div>
                    
                    {/* Structural Volume & Colored Rims (体积感与彩色边缘) */}
                    {/* 内阴影叠加：白色高光边缘 + 青色/粉色环境光边缘，让气泡在白底上也能看清轮廓 */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.6),inset_2px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_12px_rgba(56,189,248,0.3),inset_4px_-6px_12px_rgba(236,72,153,0.2)]"></div>

                    {/* --- 3. Internal Object: Orbiting Star (星轨原子 - 回归) --- */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] opacity-95">
                            {/* Core Sphere */}
                            <circle cx="24" cy="24" r="7" fill="url(#core_grad)" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" />
                            
                            {/* Orbit 1 - Horizontalish */}
                            <ellipse cx="24" cy="24" rx="19" ry="6" stroke="url(#orbit_grad)" strokeWidth="1.5" transform="rotate(-30 24 24)" className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: 'center' }}/>
                            {/* Particle on Orbit 1 */}
                            <circle cx="43" cy="24" r="2.5" fill="white" transform="rotate(-30 24 24)">
                                <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="8s" repeatCount="indefinite" />
                            </circle>

                            {/* Orbit 2 - Verticalish */}
                            <ellipse cx="24" cy="24" rx="19" ry="6" stroke="url(#orbit_grad)" strokeWidth="1.5" transform="rotate(60 24 24)" className="animate-[spin_10s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }}/>
                            
                            <defs>
                                <radialGradient id="core_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(45) scale(12)">
                                    <stop stopColor="#FFFFFF" />
                                    <stop offset="1" stopColor="#BAE6FD" /> {/* Sky blue tint */}
                                </radialGradient>
                                <linearGradient id="orbit_grad" x1="5" y1="24" x2="43" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.1" />
                                    <stop offset="0.5" stopColor="white" stopOpacity="0.9" />
                                    <stop offset="1" stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* --- 4. Surface Highlights (表面高光细节) --- */}
                    
                    {/* Main Reflection (Window/Sun Reflection) */}
                    <div className="absolute top-[12%] left-[14%] w-[40%] h-[22%] bg-gradient-to-b from-white to-transparent rounded-[100%] blur-[1.5px] opacity-90 transform -rotate-45 pointer-events-none"></div>
                    
                    {/* Sharp Specular Dot (Point Light) */}
                    <div className="absolute top-[18%] left-[18%] w-[5px] h-[5px] bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,1)] pointer-events-none"></div>

                    {/* Bottom Rim Reflection (Environment Bounce) */}
                    <div className="absolute bottom-[8%] right-[10%] w-[45%] h-[20%] bg-gradient-to-t from-white/40 via-purple-100/10 to-transparent rounded-[100%] blur-[2px] transform -rotate-12 pointer-events-none"></div>

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
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.04); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
