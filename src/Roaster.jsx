import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import RoastInput from './components/RoastInput';
import RoastResult from './components/RoastResult';
import Footer from './components/Footer';

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
      
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <Header language={language} />

      <RoastInput 
        question={question} 
        setQuestion={setQuestion} 
        handleRoast={handleRoast} 
        loading={loading} 
        language={language} 
      />

      <RoastResult result={result} language={language} />

      <Footer />

    </div>
  );
}
