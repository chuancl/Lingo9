
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
                
                {/* --- 1. Ground Shadow (悬浮投影) --- */}
                {/* 在白色背景下提供深度感 */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-3 bg-slate-900/20 blur-[6px] rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-10 pointer-events-none"></div>

                {/* --- 2. The Bubble Sphere (气泡主体) --- */}
                <div className="relative w-full h-full rounded-full overflow-hidden select-none">
                    
                    {/* Base Tint & Blur (基础色调与模糊) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-blue-400/10 to-blue-600/30 backdrop-blur-[1px]"></div>
                    
                    {/* Inner Rim Shadow (内边缘阴影 - 增加厚度感) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]"></div>
                    
                    {/* Bottom-Right Darker Rim (背光面边缘) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_-4px_-4px_10px_rgba(30,58,138,0.1)]"></div>

                    {/* Outer Glow (外发光 - 区分白色背景) */}
                    <div className="absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(59,130,246,0.15)]"></div>

                    {/* --- 3. Internal Object: Floating Crystal Prism (能量晶体) --- */}
                    <div className="absolute inset-0 flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg opacity-95">
                            {/* Top Face */}
                            <path d="M16 2L2 10L16 18L30 10L16 2Z" fill="url(#prism_top)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5"/>
                            {/* Left Face */}
                            <path d="M2 10L16 18V30L2 20V10Z" fill="url(#prism_left)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                            {/* Right Face */}
                            <path d="M30 10L16 18V30L30 20V10Z" fill="url(#prism_right)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                            
                            <defs>
                                <linearGradient id="prism_top" x1="2" y1="2" x2="30" y2="18" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#93C5FD" /> {/* blue-300 */}
                                    <stop offset="1" stopColor="#3B82F6" /> {/* blue-500 */}
                                </linearGradient>
                                <linearGradient id="prism_left" x1="2" y1="10" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2563EB" /> {/* blue-600 */}
                                    <stop offset="1" stopColor="#1D4ED8" /> {/* blue-700 */}
                                </linearGradient>
                                <linearGradient id="prism_right" x1="16" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3B82F6" /> {/* blue-500 */}
                                    <stop offset="1" stopColor="#60A5FA" /> {/* blue-400 */}
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* --- 4. Specular Highlights (玻璃高光) --- */}
                    
                    {/* Main Top-Left Gloss (大光斑) */}
                    <div className="absolute top-[8%] left-[12%] w-[45%] h-[28%] bg-gradient-to-b from-white to-transparent rounded-[100%] opacity-80 blur-[2px] transform -rotate-45 pointer-events-none"></div>
                    
                    {/* Sharp Specular Dot (锐利高光点) */}
                    <div className="absolute top-[18%] left-[18%] w-[10%] h-[6%] bg-white rounded-full blur-[1px] pointer-events-none"></div>

                    {/* Bottom Reflection (底部反光) */}
                    <div className="absolute bottom-[8%] right-[10%] w-[30%] h-[15%] bg-gradient-to-t from-white/40 to-transparent rounded-[100%] blur-[3px] transform -rotate-12 pointer-events-none"></div>
                    
                    {/* Top Rim Edge (顶部边缘勾勒) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9)] pointer-events-none"></div>

                </div>

                {/* --- 5. Badge (角标) --- */}
                {badgeCount > 0 && (
                    <div className="absolute -top-1 -right-1 flex items-center justify-center z-20">
                        <span className="relative flex h-5 min-w-[20px] px-1 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 min-w-[20px] bg-gradient-to-b from-red-500 to-red-600 border border-white text-[10px] font-bold text-white items-center justify-center shadow-sm leading-none px-1">
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
