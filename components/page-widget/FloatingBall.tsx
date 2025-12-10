
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
                {/* 投影也带一点气泡的彩色，增加真实感 */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-[6px] rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-20 pointer-events-none"></div>

                {/* --- 2. The Soap Bubble (肥皂泡主体) --- */}
                <div className="relative w-full h-full rounded-full select-none animate-[breathe_4s_ease-in-out_infinite]">
                    
                    {/* Iridescent Shell (彩虹薄膜层) */}
                    {/* 使用 conic-gradient 模拟表面油膜的色彩流动 */}
                    <div className="absolute inset-0 rounded-full opacity-40 bg-[conic-gradient(from_45deg,transparent_0%,rgba(255,192,203,0.3)_15%,rgba(0,255,255,0.3)_30%,transparent_50%,rgba(255,255,0,0.2)_70%,rgba(255,0,255,0.3)_85%,transparent_100%)] mix-blend-overlay blur-[0.5px]"></div>
                    
                    {/* Base Tint (基础通透感) */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-blue-100/5 to-purple-100/10 backdrop-blur-[0.5px] border border-white/20"></div>

                    {/* Inner Glows (内发光 - 模拟厚度与折射) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.6),inset_-4px_-6px_10px_rgba(100,200,255,0.2),inset_4px_6px_10px_rgba(255,100,255,0.2)]"></div>

                    {/* --- 3. Internal Object: Orbiting Star (星轨原子) --- */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-90">
                            {/* Core Sphere (核心) */}
                            <circle cx="24" cy="24" r="8" fill="url(#core_grad)" />
                            
                            {/* Orbit 1 (Horizontalish) */}
                            <ellipse cx="24" cy="24" rx="20" ry="6" stroke="url(#orbit_grad_1)" strokeWidth="1.5" transform="rotate(-15 24 24)" fill="none" className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: 'center' }}/>
                            {/* Star on Orbit 1 */}
                            <circle cx="44" cy="24" r="2" fill="white" transform="rotate(-15 24 24)"/>

                            {/* Orbit 2 (Verticalish) */}
                            <ellipse cx="24" cy="24" rx="20" ry="6" stroke="url(#orbit_grad_2)" strokeWidth="1.5" transform="rotate(60 24 24)" fill="none" className="animate-[spin_10s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }}/>
                            
                            <defs>
                                <radialGradient id="core_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(45) scale(12)">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#A5F3FC" stopOpacity="0.8" />
                                </radialGradient>
                                <linearGradient id="orbit_grad_1" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.1" />
                                    <stop offset="0.5" stopColor="white" stopOpacity="0.9" />
                                    <stop offset="1" stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="orbit_grad_2" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.1" />
                                    <stop offset="0.5" stopColor="#E0F2FE" stopOpacity="0.9" />
                                    <stop offset="1" stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* --- 4. Surface Reflections (表面高光) --- */}
                    
                    {/* Top-Right Sun Reflection (强光源) */}
                    <div className="absolute top-[12%] right-[15%] w-[30%] h-[18%] bg-gradient-to-b from-white to-transparent rounded-[100%] blur-[2px] opacity-90 transform rotate-45"></div>
                    
                    {/* Tiny Sharp Specular (太阳点) */}
                    <div className="absolute top-[18%] right-[22%] w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_4px_white]"></div>

                    {/* Bottom-Left Environmental Reflection (反光) */}
                    <div className="absolute bottom-[10%] left-[12%] w-[40%] h-[20%] bg-gradient-to-t from-white/40 to-transparent rounded-[100%] blur-[4px] transform -rotate-12"></div>
                    
                    {/* Colorful Edge Glint (边缘色散) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_4px_rgba(255,200,255,0.4),inset_-2px_-2px_4px_rgba(200,255,255,0.4)] pointer-events-none"></div>

                </div>

                {/* --- 5. Badge (角标) --- */}
                {badgeCount > 0 && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center z-20 pointer-events-none">
                        <span className="relative flex h-5 min-w-[20px] px-1 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 min-w-[20px] bg-gradient-to-br from-red-500 to-rose-600 border border-white/80 text-[10px] font-bold text-white items-center justify-center shadow-sm leading-none px-1">
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
                    50% { transform: scale(1.02); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};
