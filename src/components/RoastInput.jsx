import React from 'react';
import { Megaphone } from 'lucide-react';

export default function RoastInput({ question, setQuestion, handleRoast, loading, language }) {
  return (
    <>
      <div className="w-full max-w-2xl relative mb-12">
        <div className="border-2 border-dashed border-gray-400 rounded-[2rem] p-8 bg-transparent flex items-start gap-6 min-h-[160px] group focus-within:border-black focus-within:bg-white transition-all">
          <Megaphone className="w-8 h-8 text-brand-dark flex-shrink-0 transform -rotate-12" />
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={language === 'malayalam' ? "ചോദ്യമുണ്ടോ, ഇവിടെ പേസ്റ്റ് ചെയ്യ്…" : "Paste your HR question here..."}
            className="w-full h-full bg-transparent border-none outline-none text-xl font-medium placeholder-gray-300 resize-none mt-1"
            rows={3}
          />
        </div>
        
        {/* Helper Text */}
        <div className="absolute -right-4 -bottom-8 text-xs text-gray-500 font-medium rotate-1">
          {language === 'malayalam' 
            ? <>Oru nimisham...<br/>🍳 undadskunnu.</>
            : <>One moment...<br/>cooking up a 🍳</>
          }
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleRoast}
        disabled={loading}
        className="bg-brand-yellow border-2 border-black rounded-full px-12 py-4 flex items-center gap-3 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-16"
      >
        {loading ? (
          <span>{language === 'malayalam' ? 'Roasting...' : 'Cooking...'}</span>
        ) : (
          <>
            <Megaphone className="w-6 h-6 fill-black" />
            <span>{language === 'malayalam' ? 'ശരി, പറയ്…' : 'SPILL, BRUH...'}</span>
          </>
        )}
      </button>
    </>
  );
}
