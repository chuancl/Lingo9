
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
                
                {/* --- 1. Drop Shadow (地面投影) --- */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-black/30 blur-md rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-20 pointer-events-none"></div>

                {/* --- 2. Glass Bubble Body (玻璃球体) --- */}
                {/* 
                    backdrop-blur: 模糊背景，增加玻璃厚度感
                    bg-gradient: 模拟球体本身的半透明材质颜色
                    border: 边缘的一圈亮光
                    shadow: 外部柔和阴影 + 内部边缘反光
                */}
                <div className="relative w-full h-full rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.4)] bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-blue-600/20 backdrop-blur-[1.5px] overflow-hidden border border-white/30">
                    
                    {/* --- 3. Inner Object: The Logo (悬浮在内部的物体) --- */}
                    {/* 稍微缩小(inset-1.5)以体现被玻璃包裹 */}
                    <div className="absolute inset-1.5 rounded-full flex items-center justify-center">
                         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md opacity-95">
                            <defs>
                                <linearGradient id="inner_gradient" x1="10" y1="0" x2="38" y2="48" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3B82F6" />
                                    <stop offset="1" stopColor="#2563EB" />
                                </linearGradient>
                            </defs>
                            
                            {/* Inner Planet Surface (实心球体) */}
                            <circle cx="24" cy="24" r="20" fill="url(#inner_gradient)" />
                            
                            {/* Orbit Ring (轨道) */}
                            <ellipse cx="24" cy="24" rx="16" ry="7" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" transform="rotate(-45 24 24)" />
                            
                            {/* Stars / Dots (星星) */}
                            <circle cx="36" cy="12" r="1.5" fill="white" fillOpacity="0.9" />
                            <circle cx="12" cy="36" r="1.5" fill="white" fillOpacity="0.9" />
                            
                            {/* Central Sparkle (中心闪光) */}
                            <path d="M24 13L26 21L34 24L26 27L24 35L22 27L14 24L22 21L24 13Z" fill="white" />

                            {/* Characters "文" and "A" */}
                            <text x="8" y="20" fill="#FCD34D" fontSize="13" fontWeight="900" fontFamily="serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>文</text>
                            <text x="31" y="37" fill="#6EE7B7" fontSize="13" fontWeight="900" fontFamily="sans-serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>A</text>
                         </svg>
                    </div>

                    {/* --- 4. Glass Reflections (Overlay Layers - 位于物体之上) --- */}
                    
                    {/* Top Large Gloss (顶部大面积光泽) */}
                    <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-white/70 to-transparent rounded-t-full opacity-90 pointer-events-none"></div>
                    
                    {/* Sharp Specular Highlight (左上角强高光点) */}
                    <div className="absolute top-[12%] left-[15%] w-[35%] h-[25%] bg-gradient-to-br from-white to-transparent rounded-[100%] blur-[3px] opacity-90 transform -rotate-45 pointer-events-none"></div>

                    {/* Bottom Rim Light (底部环境反光) */}
                    <div className="absolute bottom-1 right-2 w-[50%] h-[30%] bg-gradient-to-t from-blue-200/40 to-transparent rounded-full blur-[5px] transform -rotate-12 opacity-60 pointer-events-none"></div>
                    
                    {/* Inner Rim Shadow (内部立体阴影) */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5)] pointer-events-none"></div>
                </div>

                {/* --- 5. Badge (红点角标) --- */}
                {badgeCount > 0 && (
                    <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center z-20">
                        <span className="relative flex h-5 min-w-[20px] px-1 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 min-w-[20px] bg-red-500 border-2 border-white text-[10px] font-bold text-white items-center justify-center shadow-lg leading-none px-1">
                                {badgeCount > 99 ? '99+' : badgeCount}
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
