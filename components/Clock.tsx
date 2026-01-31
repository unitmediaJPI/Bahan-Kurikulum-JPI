
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ms-BN', { hour12: false });
  };

  const masihiDate = time.toLocaleDateString('ms-BN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Calculation for Hijri transition at Maghrib (18:31 Brunei Time)
  const currentMinutes = time.getHours() * 60 + time.getMinutes();
  const maghribMinutes = 18 * 60 + 31;
  
  // Base day is 10 Syabaan 1447H as requested
  const isAfterMaghrib = currentMinutes >= maghribMinutes;
  const hijriDay = isAfterMaghrib ? "١١" : "١٠";
  const hijriDateJawi = `${hijriDay} شعبان ١٤٤٧ھ`;

  return (
    <div className="flex flex-col items-center animate-in fade-in duration-1000">
      <div className="bg-black/60 backdrop-blur-md px-8 py-4 rounded-full border-2 border-cyan-500/50 glow-blue transition-all duration-500 hover:scale-105">
        <div className="text-4xl md:text-6xl font-mono font-bold text-cyan-400 tracking-wider">
          {formatTime(time)}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4 items-center uppercase tracking-widest font-semibold">
        <span className="text-gray-300 text-sm">{masihiDate}</span>
        <span className="text-yellow-500 font-bold">|</span>
        <span className="text-yellow-400 jawi-text text-2xl" dir="rtl">{hijriDateJawi}</span>
      </div>
      {isAfterMaghrib && (
        <div className="text-[10px] text-yellow-500/50 mt-1 font-bold tracking-tighter uppercase">
          * Masuk Waktu Maghrib: Tarikh Hijri Bertukar
        </div>
      )}
    </div>
  );
};

export default Clock;
