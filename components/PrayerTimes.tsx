
import React from 'react';

const PrayerTimes: React.FC = () => {
  /**
   * Official Brunei Prayer Times (Zone: Bandar Seri Begawan)
   * Values updated based on provided real-time data:
   * 05:24 AM, 06:35 AM, 12:33 PM, 03:56 PM, 06:31 PM, 07:39 PM
   */
  const times = [
    { name: 'صبح', time: '05:24', en: 'Subuh' },
    { name: 'شروق', time: '06:35', en: 'Syuruk' },
    { name: 'ظهر', time: '12:33', en: 'Zohor' },
    { name: 'عصر', time: '15:56', en: 'Asar' },
    { name: 'مغرب', time: '18:31', en: 'Maghrib' },
    { name: 'عشاء', time: '19:39', en: 'Isyak' },
  ];

  return (
    <div className="w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
      <div className="bg-black/40 backdrop-blur-xl p-3 md:p-4 rounded-[2.5rem] border border-cyan-500/20 glow-blue shadow-2xl">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 w-full" dir="rtl">
          {times.map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center gap-1 px-1 py-2 md:py-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group cursor-default"
            >
              <span className="jawi-text text-base md:text-xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                {p.name}
              </span>
              <span className="font-mono text-xs md:text-lg text-white font-bold tracking-tight">
                {p.time}
              </span>
            </div>
          ))}
        </div>
        
        {/* Subtle Location Indicator */}
        <div className="mt-2 text-center flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/30"></div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400/60 font-bold">
            وقتو صلاة بروني دارالسلام
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500/30"></div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
