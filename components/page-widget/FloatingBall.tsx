
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
                
                {/* --- 1. Ground Shadow (地面投影) --- */}
                {/* 投影带一点点环境色，随距离变化 */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-slate-400/20 blur-[4px] rounded-[100%] transition-all duration-300 group-hover:scale-75 group-hover:opacity-10 pointer-events-none"></div>

                {/* --- 2. The Glass Bubble (玻璃气泡主体) --- */}
                <div className="relative w-full h-full rounded-full select-none">
                    
                    {/* Glass Body & Subtle Dispersion (玻璃体与微妙色散) */}
                    {/* 
                        background: 极淡的白色渐变，保证通透
                        shadow: 
                          1. inset white: 顶部高光
                          2. inset blue/purple: 边缘的微妙彩色折射 (关键修改点)
                          3. drop shadow: 外部柔和阴影
                    */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-[0.5px] border border-white/20 
                        shadow-[inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-2px_-2px_6px_rgba(165,180,252,0.2),inset_2px_-2px_6px_rgba(110,231,183,0.1),0_8px_20px_rgba(0,0,0,0.05)]">
                    </div>

                    {/* --- 3. Internal Object: Levitating Prism (悬浮棱镜) --- */}
                    <div className="absolute inset-0 flex items-center justify-center animate-[float_4s_ease-in-out_infinite] pointer-events-none">
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg opacity-90">
                            {/* Octahedron / Diamond Shape */}
                            {/* Top Left Face */}
                            <path d="M16 2 L2 14 L16 20 L16 2 Z" fill="url(#gem_grad_1)" stroke="white" strokeWidth="0.2" strokeOpacity="0.5"/>
                            {/* Top Right Face */}
                            <path d="M16 2 L30 14 L16 20 L16 2 Z" fill="url(#gem_grad_2)" stroke="white" strokeWidth="0.2" strokeOpacity="0.5"/>
                            {/* Bottom Left Face */}
                            <path d="M16 30 L2 14 L16 20 L16 30 Z" fill="url(#gem_grad_3)" stroke="white" strokeWidth="0.2" strokeOpacity="0.5"/>
                            {/* Bottom Right Face */}
                            <path d="M16 30 L30 14 L16 20 L16 30 Z" fill="url(#gem_grad_4)" stroke="white" strokeWidth="0.2" strokeOpacity="0.5"/>
                            
                            <defs>
                                <linearGradient id="gem_grad_1" x1="2" y1="2" x2="16" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#60A5FA" /> {/* blue-400 */}
                                    <stop offset="1" stopColor="#3B82F6" /> {/* blue-500 */}
                                </linearGradient>
                                <linearGradient id="gem_grad_2" x1="16" y1="2" x2="30" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#93C5FD" /> {/* blue-300 */}
                                    <stop offset="1" stopColor="#60A5FA" /> {/* blue-400 */}
                                </linearGradient>
                                <linearGradient id="gem_grad_3" x1="2" y1="14" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#2563EB" /> {/* blue-600 */}
                                    <stop offset="1" stopColor="#1D4ED8" /> {/* blue-700 */}
                                </linearGradient>
                                <linearGradient id="gem_grad_4" x1="16" y1="14" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3B82F6" /> {/* blue-500 */}
                                    <stop offset="1" stopColor="#1E40AF" /> {/* blue-800 */}
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* --- 4. Surface Highlights (表面高光细节) --- */}
                    
                    {/* Main Specular Gloss (主高光 - 模拟光滑表面) */}
                    <div className="absolute top-[10%] left-[15%] w-[40%] h-[25%] bg-gradient-to-b from-white to-transparent rounded-[100%] opacity-70 blur-[1px] transform -rotate-45 pointer-events-none"></div>
                    
                    {/* Sharp Reflection Dot (锐利反光点 - 增加质感) */}
                    <div className="absolute top-[18%] left-[20%] w-[6%] h-[6%] bg-white rounded-full shadow-[0_0_4px_white] pointer-events-none"></div>

                    {/* Bottom Rim Light (底部反光 - 增加立体感) */}
                    <div className="absolute bottom-[8%] right-[12%] w-[45%] h-[20%] bg-gradient-to-t from-white/30 to-transparent rounded-[100%] blur-[2px] transform -rotate-12 pointer-events-none"></div>

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
                    50% { transform: translateY(-3px); }
                }
            `}</style>
        </div>
    );
};
