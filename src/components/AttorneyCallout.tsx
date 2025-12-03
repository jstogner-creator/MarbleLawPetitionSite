import React from 'react';
import { SectionId } from '../types';
import { Briefcase, FileText, TrendingUp, Scale, Megaphone } from 'lucide-react';

export const AttorneyCallout: React.FC = () => {
  return (
    <section id={SectionId.ATTORNEYS} className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500/20 p-2 rounded-lg mr-4">
                <Megaphone className="h-6 w-6 text-yellow-500" />
              </div>
              <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase">
                Call for Counsel
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              We Are Seeking Representation
            </h3>
            
            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl">
              This website represents a growing collective of consumers who allege financial harm by Marble Law. We are actively looking for a plaintiff's law firm to evaluate this data, champion our cause, and file a class action lawsuit.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/30 transition">
                <TrendingUp className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">High Volume</h4>
                <p className="text-sm text-slate-400">Consistent fact patterns across multiple states involving upfront fees, "ghosting," and refusal of refunds.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/30 transition">
                <FileText className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">Pre-Packaged Evidence</h4>
                <p className="text-sm text-slate-400">We are instructing consumers to download case files, fee agreements, and chat logs to preserve evidence.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/30 transition">
                <Scale className="h-8 w-8 text-blue-400 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-white">TILA Violations?</h4>
                <p className="text-sm text-slate-400">Potential Truth in Lending Act violations regarding financing structures (ClarityPay/Affirm) for services not rendered.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center bg-slate-900 rounded-lg p-6 border border-slate-700">
              <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                <h5 className="text-xl font-bold text-white mb-2">Are you a Class Action Attorney?</h5>
                <p className="text-slate-400">
                  Contact us to review the aggregated complaint data and discuss representation.
                </p>
              </div>
              <a 
                href="mailto:counsel@consumerjustice-marble.org?subject=Representation Inquiry - Marble Law Class Action" 
                className="whitespace-nowrap bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition shadow-lg flex items-center"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Inquire About This Case
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};