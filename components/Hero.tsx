import React from 'react';
import { SectionId } from '../types';
import { ShieldAlert, ArrowRight, Scale, Users, Share2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToPetition = () => {
    document.getElementById(SectionId.PETITION)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAttorneys = () => {
    document.getElementById(SectionId.ATTORNEYS)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToShare = () => {
    document.getElementById(SectionId.SHARE)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id={SectionId.HERO} className="relative bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-45 -left-40 -top-40 w-96 h-96 bg-red-600 blur-[100px] rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-900 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-900/30 border border-red-800 text-red-400 font-medium text-sm">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Active Investigation
            </div>
            <button 
              onClick={scrollToAttorneys}
              className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-900/20 border border-yellow-600/50 text-yellow-500 font-medium text-sm hover:bg-yellow-900/40 transition cursor-pointer"
            >
              <Scale className="w-4 h-4 mr-2" />
              Attorneys: We Are Seeking Representation
            </button>
            <button 
              onClick={scrollToShare}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-600/50 text-blue-400 font-medium text-sm hover:bg-blue-900/40 transition cursor-pointer"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Petition
            </button>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Left Unrepresented? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Demand Accountability from Marble Law.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Hundreds of families report paying thousands upfront, only to receive silence, delays, and no legal work when they needed it most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              onClick={scrollToPetition}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-red-900/50 transition flex items-center"
            >
              Join the Class Action Petition <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.EVIDENCE)?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg font-semibold text-lg transition"
            >
              Read the Evidence
            </button>
          </div>

          {/* 
            NOTE: Signature counter removed to ensure legal accuracy. 
            Do not display specific numbers unless backed by real database counts.
            False social proof can be considered deceptive advertising.
          */}
          <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 backdrop-blur-sm">
             <div className="flex -space-x-2 mr-4 opacity-50">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-600 flex items-center justify-center">
                        <Users className="w-4 h-4 text-slate-400" />
                    </div>
                ))}
             </div>
             <div className="text-left">
                <div className="text-white font-bold text-sm">
                    Petition Active
                </div>
                <div className="text-xs text-slate-400">Sign now to help build the case</div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};