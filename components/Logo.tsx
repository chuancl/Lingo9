
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // 使用 group 允许外部 hover 控制
    // 增加 gap-7 让图标更靠左
    <div className={`relative flex items-center gap-7 select-none ${className}`}>
      
      {/* 1. Logo Icon: 复刻版蓝色星球图标 */}
      <div className="relative w-14 h-14 shrink-0 group">
         <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl filter transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
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

      {/* 2. Text Logo: 完全拆分的字符布局 */}
      {withText && (
        <div className={`relative flex items-end font-sans ${textClassName}`}>
            
            {/* R */}
            <span className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] leading-none tracking-[-0.05em] z-10">R</span>
            
            {/* e */}
            <span className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] leading-none tracking-[-0.05em] z-10">e</span>
            
            {/* W - 稍微增加左边距，与Re分开一点点 */}
            <span className="text-5xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] leading-none tracking-[-0.05em] ml-1 z-10">W</span>
            
            {/* o */}
            <span className="text-5xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] leading-none tracking-[-0.05em] z-10">o</span>
            
            {/* r */}
            <span className="text-5xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] leading-none tracking-[-0.05em] z-10">r</span>
            
            {/* d */}
            <span className="text-5xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] leading-none tracking-[-0.05em] z-10">d</span>

            {/* --- 中文装饰字符 (绝对定位) --- */}

            {/* 易: 青色，位于 R 和 e 之间上方 */}
            <span className="absolute -top-5 left-8 text-3xl font-serif font-black text-emerald-400 transform -rotate-12 drop-shadow-[0_0_8px_rgba(52,211,153,1)] z-20 filter contrast-125 opacity-90">
            易
            </span>

            {/* 语: 紫色，位于 W 和 o 之间下方 */}
            <span className="absolute -bottom-3 left-[46%] text-3xl font-serif font-black text-fuchsia-400 transform rotate-12 drop-shadow-[0_0_8px_rgba(232,121,249,1)] z-20 filter contrast-125 opacity-90">
            语
            </span>

            {/* 道: 橙色，位于 d 的右上方 */}
            <span className="absolute -top-5 -right-3 text-3xl font-serif font-black text-orange-400 transform rotate-6 drop-shadow-[0_0_8px_rgba(251,146,60,1)] z-20 filter contrast-125 opacity-90">
            道
            </span>
            
            {/* 底部环境光晕 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[160%] bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
        </div>
      )}
    </div>
  );
};
