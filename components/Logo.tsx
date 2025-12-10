
import React from 'react';

export const Logo: React.FC<{ className?: string, withText?: boolean, textClassName?: string }> = ({ className, withText = true, textClassName }) => {
  return (
    // 使用 group 允许外部 hover 控制
    <div className={`relative flex items-center gap-3.5 select-none ${className}`}>
      
      {/* 1. Logo Icon: 左侧图形图标 */}
      <div className="relative w-11 h-11 shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-900/30 border border-white/10 group overflow-hidden">
         {/* Glossy Reflection */}
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
         
         {/* Main Icon: Book */}
         <svg className="w-6 h-6 text-white drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
             <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" className="opacity-50" />
         </svg>
         
         {/* Badge: Recycle/Re Arrow */}
         <div className="absolute bottom-1 right-1 bg-white text-blue-600 rounded-full p-[2px] shadow-sm border border-blue-100 z-10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
               <path d="M3 3v5h5" />
            </svg>
         </div>
      </div>

      {/* 2. Text Logo: 文字部分 */}
      {withText && (
        <div className={`relative flex items-baseline tracking-tighter cursor-default ${textClassName}`}>
            
            {/* Re: 白色，发光，粗字体 */}
            <span className="text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mr-[1px]">
            Re
            </span>

            {/* Word: 蓝色，发光，粗字体 */}
            <span className="text-3xl font-extrabold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
            Word
            </span>

            {/* 易: 青色，强烈发光，左上角点缀，微倾斜 */}
            <span className="absolute -top-3 -left-2 text-xl font-serif font-black text-emerald-400 transform -rotate-12 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)] z-10 opacity-95 filter contrast-125">
            易
            </span>

            {/* 语: 紫色，强烈发光，底部中间点缀，微倾斜 */}
            <span className="absolute -bottom-2 left-[38%] text-xl font-serif font-black text-fuchsia-400 transform rotate-6 drop-shadow-[0_0_10px_rgba(232,121,249,0.9)] z-10 opacity-95 filter contrast-125">
            语
            </span>

            {/* 道: 橙色，强烈发光，右上角点缀，微倾斜 */}
            <span className="absolute -top-3 -right-3 text-xl font-serif font-black text-orange-400 transform rotate-12 drop-shadow-[0_0_10px_rgba(251,146,60,0.9)] z-10 opacity-95 filter contrast-125">
            道
            </span>
            
            {/* 底部环境光晕，增加沉浸感 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-2xl rounded-full -z-10"></div>
        </div>
      )}
    </div>
  );
};
