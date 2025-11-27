import { useState } from 'react';
import { Coffee, Megaphone, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Roaster() {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState('english');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleRoast = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/roast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, language }),
      });

      if (!response.ok) throw new Error('Failed');
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 font-sans relative">
      
      {/* Language Switcher */}
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

      {/* Input Area */}
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

      {/* Result Card */}
      {result && (
        <div className="w-full max-w-2xl bg-white rounded-[2rem] p-8 border-2 border-gray-100 shadow-xl animate-fade-in relative overflow-hidden">
          {/* Floating Emojis */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-4 py-1 rounded-full shadow-sm border border-gray-100">
          </div>

          <h3 className="text-center font-black text-xl mb-6 mt-4 uppercase tracking-wide">Brain on 1%</h3>
          
          <p className="text-lg font-medium text-gray-700 leading-relaxed text-center mb-8">
            {result.roasted_answer}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-brand-yellow border-2 border-black rounded-full px-6 py-2 font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {result.unemployability_score}%
              </div>
              <span className="font-black uppercase tracking-wider text-sm">Unhireable</span>
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
      )}

      {/* Footer */}
{/* Footer */}
<footer className="mt-auto pt-12 text-sm font-medium text-gray-500">

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

    <h1 className="text-center sm:text-left">
      “സമയം കളയാൻ വേണ്ടി മാത്രം നിർമ്മിച്ചത്”
    </h1>

    <span className="text-center sm:text-left">
      Made by Jithin
    </span>

    {/* Social Icons */}
    <div className="flex justify-center sm:justify-end items-center gap-6 text-lg">

      {/* LinkedIn - Black */}
      <a
        href="https://www.linkedin.com/in/jithin-kr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM.22 8.13H4.7V23.02H.22V8.13ZM8.34 8.13H12.63V10.02H12.69C13.29 8.92 14.75 7.76 17.01 7.76C22.07 7.76 23 10.96 23 15.25V23.02H18.52V15.98C18.52 14.05 18.47 11.61 15.89 11.61C13.27 11.61 12.88 13.72 12.88 15.84V23.02H8.4L8.34 8.13Z"/>
        </svg>
      </a>

      {/* GitHub - Black */}
      <a
        href="https://github.com/jithin-jz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="black">
          <path d="M12 .5C5.65.5.5 5.65.5 12C.5 17.1 3.8 21.4 8.4 22.9C9 23 9.2 22.6 9.2 22.3V20.3C6 21 5.3 18.9 5.3 18.9C4.8 17.7 4.2 17.4 4.2 17.4C3.3 16.8 4.3 16.8 4.3 16.8C5.3 16.9 5.9 17.8 5.9 17.8C6.8 19.4 8.3 18.9 8.9 18.6C9 17.9 9.3 17.5 9.6 17.2C7 16.9 4.3 15.9 4.3 11.3C4.3 10 4.8 8.9 5.5 8.1C5.4 7.8 5 6.6 5.6 5C5.6 5 6.6 4.7 8.9 6.2C11.2 5.4 13.6 5.4 15.9 6.2C18.2 4.7 19.2 5 19.2 5C19.8 6.6 19.4 7.8 19.3 8.1C20 8.9 20.5 10 20.5 11.3C20.5 15.9 17.8 16.9 15.2 17.2C15.6 17.6 16 18.3 16 19.5V22.4C16 22.7 16.2 23.1 16.8 23C21.4 21.4 24.7 17.1 24.7 12C24.7 5.65 19.35.5 12 .5Z"/>
        </svg>
      </a>

      {/* Instagram - Black Outline */}
      <a
        href="https://instagram.com/jithin.jz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="black">
          <path d="M7 2H17C20 2 22 4 22 7V17C22 20 20 22 17 22H7C4 22 2 20 2 17V7C2 4 4 2 7 2ZM12 7.3A4.7 4.7 0 1 0 16.7 12A4.7 4.7 0 0 0 12 7.3ZM12 15A3 3 0 1 1 15 12A3 3 0 0 1 12 15ZM17.1 7.2A1.1 1.1 0 1 1 16 8.3A1.1 1.1 0 0 1 17.1 7.2Z"/>
        </svg>
      </a>

    </div>
  </div>

</footer>



      </div>
  );
}
