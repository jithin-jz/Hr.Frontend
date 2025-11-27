import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export default function RoastResult({ result, language }) {
  if (!result) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-[2rem] p-8 border-2 border-gray-100 shadow-xl animate-fade-in relative overflow-hidden">
      {/* Floating Emojis */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-100">
      </div>

      <h3 className="text-center font-black text-xl mb-6 mt-4 uppercase tracking-wide">
        {language === 'malayalam' ? 'ബുദ്ധി 1%' : 'Brain on 1%'}
      </h3>
      
      <p className="text-lg font-medium text-gray-700 leading-relaxed text-center mb-8">
        {result.roasted_answer}
      </p>

      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
        <div className="flex items-center gap-4">
          <div className="bg-brand-yellow border-2 border-black rounded-full px-6 py-2 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {result.unemployability_score}%
          </div>
          <span className="font-black uppercase tracking-wider text-sm">
            {language === 'malayalam' ? 'ജോലി കിട്ടില്ല' : 'Unhireable'}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-brand-yellow transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-brand-yellow transition-colors">
            <Instagram className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
