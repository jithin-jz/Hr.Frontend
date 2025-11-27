import React from 'react';

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 flex gap-2 bg-white p-1 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setLanguage('english')}
        className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
          language === 'english' 
            ? 'bg-brand-yellow border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -translate-y-1' 
            : 'hover:bg-gray-100 text-gray-500'
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => setLanguage('malayalam')}
        className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
          language === 'malayalam' 
            ? 'bg-brand-yellow border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -translate-y-1' 
            : 'hover:bg-gray-100 text-gray-500'
        }`}
      >
        MAL
      </button>
    </div>
  );
}
