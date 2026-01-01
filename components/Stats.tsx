
import React from 'react';
import { STATS } from '../constants.ts';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center group">
            <p className="text-5xl font-black text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </p>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
