import React from 'react';

export default function Header({ language }) {
  return (
    <>
      {/* Header Pill */}
      <div className="bg-[#FFF8E7] rounded-full px-6 py-3 md:px-10 md:py-4 flex items-center justify-center gap-4 mb-8 animate-fade-in border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
        <img src="https://img.icons8.com/bubbles/100/mad-libs.png" alt="Icon" className="w-12 h-12 md:w-14 md:h-14 -ml-2" />
        <div className="flex flex-col items-center leading-none gap-0.5 md:gap-1">
          <span className="text-xl md:text-3xl font-black text-black tracking-tighter uppercase">
            {language === 'malayalam' ? 'താൻ ചോദിച്ചു' : 'You Questioned'}
          </span>
          <span className="text-[9px] md:text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            The Unfiltered Candidate
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center space-y-4 mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Ask your cringe <br className="hidden md:block" />
          <span className="text-gray-400">HR question.</span>
        </h1>
        <p className="text-lg text-gray-500 font-medium">
          {language === 'malayalam' ? 'നമ്മൾ റോസ്റ്റ് ചെയ്യാം.' : 'We will roast it.'}
        </p>
      </div>
    </>
  );
}
