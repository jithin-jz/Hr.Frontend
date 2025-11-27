import React from 'react';
import { Coffee } from 'lucide-react';

export default function Header({ language }) {
  return (
    <>
      {/* Header Pill */}
      <div className="bg-white border-2 border-black rounded-full px-8 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12 transform hover:-translate-y-1 transition-transform">
        <Coffee className="w-6 h-6" />
        <div className="flex flex-col leading-none">
          <span className="font-bold text-lg">
            {language === 'malayalam' ? 'താൻ ചോദിച്ചു' : 'YOU QUESTIONED'}
          </span>
          <span className="text-[10px] font-bold tracking-wider text-gray-600">THE UNFILTERED CANDIDATE</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-brand-dark">
          Ask your cringe HR question.
        </h1>
        <h1 className="text-3xl md:text-4xl font-black text-brand-dark">
          {language === 'malayalam' ? 'നമ്മൾ റോസ്റ്റ് ചെയ്യാം.' : 'We will roast it.'}
        </h1>
        <p className="text-gray-400 font-medium mt-4">
          We promise it will be painfully honest.
        </p>
      </div>
    </>
  );
}
