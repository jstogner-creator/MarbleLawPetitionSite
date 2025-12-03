import React from 'react';
import { SectionId } from '../types';
import { Users, Search, FileText, Gavel, CheckCircle } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "1. Mobilization",
      status: "current",
      description: "We are currently aggregating hundreds of consumer complaints to demonstrate a systemic pattern of behavior.",
      color: "bg-red-600"
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "2. Attorney Review",
      status: "pending",
      description: "Partner law firms will review the collected dataset to identify the strongest potential claims (e.g., TILA violations, breach of contract).",
      color: "bg-slate-400"
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "3. Legal Filing",
      status: "pending",
      description: "Attorneys file a class action complaint or mass arbitration demands on behalf of the group.",
      color: "bg-slate-400"
    },
    {
      icon: <Gavel className="w-6 h-6 text-white" />,
      title: "4. Resolution",
      status: "pending",
      description: "The goal: Secure refunds, debt cancellation, and accountability for all affected consumers.",
      color: "bg-slate-400"
    }
  ];

  return (
    <section id={SectionId.ROADMAP} className="py-20 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Path Forward</span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Roadmap to Justice</h2>
          <p className="text-slate-600 text-lg">
            Taking on a large company takes time and organization. Here is how your signature contributes to the larger legal strategy.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white ${step.status === 'current' ? 'bg-red-600 scale-110 ring-4 ring-red-100' : 'bg-slate-300'}`}>
                  {step.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${step.status === 'current' ? 'text-red-700' : 'text-slate-700'}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed px-2">
                  {step.description}
                </p>
                {step.status === 'current' && (
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold animate-pulse">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    Active Phase
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};