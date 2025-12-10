
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // 使用 group 允许外部 hover 控制
    // 将 gap-4 增加到 gap-6，让图标在视觉上往左移动
    <div className={`relative flex items-center gap-6 select-none ${className}`}>
      
      {/* 1. Logo Icon: 复刻版蓝色星球图标 */}
      <div className="relative w-12 h-12 shrink-0 group">
         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl filter transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
            <defs>
                <linearGradient id="logo_blue_gradient" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <filter id="logo_glow_filter" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>

            {/* Background Circle */}
            <circle cx="24" cy="24" r="22" fill="url(#logo_blue_gradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Inner Glow Overlay */}
            <circle cx="24" cy="24" r="20" fill="white" fillOpacity="0.05" style={{mixBlendMode: 'overlay'}} />

            {/* Orbital Ring */}
            <ellipse cx="24" cy="24" rx="16" ry="7" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" transform="rotate(-45 24 24)" />
            
            {/* Orbiting Dots */}
            <circle cx="37" cy="11" r="1.5" fill="white" />
            <circle cx="11" cy="37" r="1.5" fill="white" />

            {/* Central Sparkle (Star) */}
            <path d="M24 14L26 22L34 24L26 26L24 34L22 26L14 24L22 22L24 14Z" fill="white" filter="url(#logo_glow_filter)" />

            {/* '文' Character - Yellow - Top Left */}
            <text x="10" y="19" fill="#fbbf24" fontSize="13" fontWeight="900" fontFamily="serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>文</text>

            {/* 'A' Character - Green - Bottom Right */}
            <text x="30" y="37" fill="#34d399" fontSize="14" fontWeight="900" fontFamily="sans-serif" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>A</text>
         </svg>
      </div>

      {/* 2. Text Logo: 文字部分 - 完全复刻样式 */}
      {withText && (
        <div className={`relative flex items-baseline tracking-tighter cursor-default ${textClassName}`}>
            
            {/* Re: 白色，发光，超粗字体 */}
            <span className="text-4xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] mr-0.5">
            Re
            </span>

            {/* Word: 蓝色，发光，超粗字体 */}
            <span className="text-4xl font-extrabold text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            Word
            </span>

            {/* 易: 青色，强烈发光，左上角点缀，位置校准 */}
            <span className="absolute -top-4 -left-3 text-2xl font-serif font-black text-emerald-400 transform -rotate-12 drop-shadow-[0_0_10px_rgba(52,211,153,1)] z-10 filter contrast-125">
            易
            </span>

            {/* 语: 紫色，强烈发光，底部中间点缀，位置校准 */}
            <span className="absolute -bottom-3 left-[36%] text-2xl font-serif font-black text-fuchsia-400 transform rotate-6 drop-shadow-[0_0_10px_rgba(232,121,249,1)] z-10 filter contrast-125">
            语
            </span>

            {/* 道: 橙色，强烈发光，右上角点缀，位置校准 */}
            <span className="absolute -top-4 -right-4 text-2xl font-serif font-black text-orange-400 transform rotate-12 drop-shadow-[0_0_10px_rgba(251,146,60,1)] z-10 filter contrast-125">
            道
            </span>
            
            {/* 底部环境光晕，增加沉浸感 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
        </div>
      )}
    </div>
  );
};
