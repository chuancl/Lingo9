
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // 外层容器：gap-8 显著增加图标与文字距离，让图标显得更靠左
    <div className={`relative flex items-center gap-8 select-none ${className}`}>
      
      {/* 1. Logo Icon: 蓝色星球图标 (尺寸放大至 w-16 h-16) */}
      <div className="relative w-16 h-16 shrink-0 group">
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

      {/* 2. Text Logo: 拆分所有字符，精确复刻布局 */}
      {withText && (
        <div className={`relative flex items-end font-sans ${textClassName} pb-1`}>
            
            {/* R */}
            <div className="text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] leading-none tracking-tighter z-10">R</div>
            
            {/* e */}
            <div className="text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] leading-none tracking-tighter z-10 -ml-0.5">e</div>
            
            {/* W - 稍微增加左间距，区分 Re 和 Word */}
            <div className="text-6xl font-black text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] leading-none tracking-tighter z-10 ml-1.5">W</div>
            
            {/* o */}
            <div className="text-6xl font-black text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] leading-none tracking-tighter z-10">o</div>
            
            {/* r */}
            <div className="text-6xl font-black text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] leading-none tracking-tighter z-10">r</div>
            
            {/* d */}
            <div className="text-6xl font-black text-[#3B82F6] drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] leading-none tracking-tighter z-10">d</div>

            {/* --- 中文装饰字符 (绝对定位) --- */}

            {/* 易: 青色，位于 R 和 e 上方 */}
            <div className="absolute -top-7 left-10 text-4xl font-serif font-black text-[#34d399] transform -rotate-12 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)] z-20 opacity-95">
            易
            </div>

            {/* 语: 紫色，位于 W 和 o 下方 */}
            <div className="absolute -bottom-5 left-[40%] text-4xl font-serif font-black text-[#d946ef] transform rotate-6 drop-shadow-[0_0_12px_rgba(217,70,239,0.9)] z-20 opacity-95">
            语
            </div>

            {/* 道: 橙色，位于 d 上方 */}
            <div className="absolute -top-7 -right-3 text-4xl font-serif font-black text-[#f97316] transform rotate-12 drop-shadow-[0_0_12px_rgba(249,115,22,0.9)] z-20 opacity-95">
            道
            </div>
            
            {/* 底部环境光晕，增加文字立体感 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-blue-500/5 blur-3xl rounded-full -z-10 pointer-events-none"></div>
        </div>
      )}
    </div>
  );
};
