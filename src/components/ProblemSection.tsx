import React from 'react';
import { SectionId } from '../types';
import { AlertTriangle, FileWarning, DollarSign, Users, Scale } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id={SectionId.EVIDENCE} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How Marble Law’s Practices Harm Consumers in Crisis
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Many consumers seeking help from Marble Law report that they were facing urgent and stressful legal situations. These include custody disputes, divorce, domestic issues, and emergency family conflicts. According to hundreds of publicly available reviews and official complaints, a disturbing pattern has emerged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Upfront Payments, Delayed Service</h3>
                <p className="text-slate-600">
                  Clients are often asked to pay thousands of dollars upfront. Many report that after payment, they received little follow-up, no filings, and no guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ghosted by Attorneys</h3>
                <p className="text-slate-600">
                  Marble assigned attorneys who, in many reported cases, did not provide meaningful legal services. Some did not draft filings, respond to communications, or take action on cases.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Refunds Denied or Delayed</h3>
                <p className="text-slate-600">
                  Refund requests were often delayed for weeks or months, even when no work was performed, leaving clients financially drained and unable to hire new counsel.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <FileWarning className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Debt for Undelivered Services</h3>
                <p className="text-slate-600">
                  Some consumers reported going into debt through financing partners (like ClarityPay) for services they say Marble never delivered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id={SectionId.IMPACT} className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-800 flex items-center">
              <Scale className="mr-3 h-6 w-6" />
              Why this matters
            </h3>
            <p className="text-lg text-slate-800 italic">
              "These patterns suggest that Marble’s business model may disproportionately harm people who are already vulnerable, emotionally overwhelmed, or in urgent need of legal representation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};