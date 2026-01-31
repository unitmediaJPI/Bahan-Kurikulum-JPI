
import React, { useState, useEffect, useCallback } from 'react';
import { transliterateToJawi } from '../services/geminiService';
import { JawiResult } from '../types';

const JawiApp: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<JawiResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTransliterate = useCallback(async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await transliterateToJawi(input);
    setResult(res);
    setLoading(false);
  }, [input]);

  // debounce manual effect would be better for UX, but let's use a button for clarity
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTransliterate();
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-black/80 backdrop-blur-xl rounded-3xl border border-green-500 glow-green overflow-hidden transition-all">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center text-black font-bold text-2xl jawi-text">
            ج
          </div>
          <h2 className="text-3xl font-bold text-green-400">Pakar Ejaan Jawi AI</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-sm text-gray-400 uppercase tracking-widest font-bold">Input Rumi</label>
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Contoh: Sekolah Ugama"
              className="w-full bg-gray-900/80 border-2 border-green-900 rounded-2xl p-6 text-xl text-white focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all placeholder:text-gray-700"
            />
            <button
              onClick={handleTransliterate}
              disabled={loading}
              className={`absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 rounded-xl font-bold transition-all ${
                loading ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-green-500 text-black hover:bg-green-400 active:scale-95'
              }`}
            >
              {loading ? 'Memproses...' : 'Eja!'}
            </button>
          </div>
          <p className="text-xs text-gray-500 italic">Tekan Enter atau butang 'Eja' untuk hasil transliterasi.</p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="block text-sm text-gray-400 uppercase tracking-widest font-bold">Hasil Jawi</label>
          <div className="flex-1 bg-black border border-green-900 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] text-center relative overflow-hidden group">
            {loading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-48 bg-green-900/30 rounded-full mb-4"></div>
                <div className="h-4 w-32 bg-green-900/20 rounded-full"></div>
              </div>
            ) : result ? (
              <>
                <div className="jawi-text text-6xl md:text-7xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] leading-relaxed">
                  {result.jawi}
                </div>
                {result.explanation && (
                  <div className="mt-6 p-4 bg-green-950/20 rounded-lg text-xs text-green-300 border border-green-900/30 max-w-xs">
                    <span className="font-bold text-green-400 block mb-1 underline">Hukum Ejaan:</span>
                    {result.explanation}
                  </div>
                )}
              </>
            ) : (
              <div className="text-gray-700 jawi-text text-5xl opacity-30 select-none">
                توليسن جاوي
              </div>
            )}
            
            <div className="absolute inset-0 border-4 border-green-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JawiApp;
