
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // 使用 group 允许外部 hover 控制（如果需要），select-none 防止文字被选中
    <div className={`relative flex items-center select-none ${className}`}>
      <div className="relative flex items-baseline tracking-tighter cursor-default">
        
        {/* Re: 白色，发光，极粗字体 */}
        <span className="text-4xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mr-[1px]">
          Re
        </span>

        {/* Word: 蓝色，发光，极粗字体 */}
        <span className="text-4xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
          Word
        </span>

        {/* 易: 青色，强烈发光，左上角点缀，微倾斜 */}
        <span className="absolute -top-4 -left-3 text-2xl font-serif font-black text-emerald-400 transform -rotate-12 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)] z-10 opacity-95 filter contrast-125">
          易
        </span>

        {/* 语: 紫色，强烈发光，底部中间点缀，微倾斜 */}
        <span className="absolute -bottom-3 left-[38%] text-2xl font-serif font-black text-fuchsia-400 transform rotate-6 drop-shadow-[0_0_10px_rgba(232,121,249,0.9)] z-10 opacity-95 filter contrast-125">
          语
        </span>

        {/* 道: 橙色，强烈发光，右上角点缀，微倾斜 */}
        <span className="absolute -top-4 -right-4 text-2xl font-serif font-black text-orange-400 transform rotate-12 drop-shadow-[0_0_10px_rgba(251,146,60,0.9)] z-10 opacity-95 filter contrast-125">
          道
        </span>
        
        {/* 底部环境光晕，增加沉浸感 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-2xl rounded-full -z-10"></div>
      </div>
    </div>
  );
};
