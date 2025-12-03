import React from 'react';
import { SectionId } from '../types';
import { Download, Mail, Building, Scale, AlertOctagon, ArrowRight, MapPin, Phone, AtSign, ExternalLink } from 'lucide-react';

interface ActionGuideProps {
  onNavigateToResources: () => void;
}

export const ActionGuide: React.FC<ActionGuideProps> = ({ onNavigateToResources }) => {
  return (
    <section id={SectionId.GUIDE} className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Steps to Protect Your Rights</h2>
          <p className="text-lg text-slate-600">
            While waiting for a class action, taking these steps <strong>immediately</strong> can help preserve your potential claim and creates an official record of your experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Download className="w-24 h-24 text-blue-600" />
            </div>
            <div className="relative z-10">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-center leading-8 mb-4">1</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Download Your Case File Immediately</h3>
              <p className="text-slate-600 mb-4">
                If you still have access to the Marble portal, download <strong>everything</strong>. In many disputes, clients lose access to the platform.
              </p>
              <ul className="text-sm text-slate-500 list-disc list-inside space-y-1 mb-4">
                <li>Download all uploaded documents</li>
                <li>Screenshot chat logs with the support team</li>
                <li>Save copies of your fee agreement</li>
              </ul>
              <a 
                href="https://marble.law/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline"
              >
                Log in to Marble Portal <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Mail className="w-24 h-24 text-blue-600" />
            </div>
            <div className="relative z-10">
              <span className="inline-block w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-center leading-8 mb-4">2</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Send a Formal Demand Letter</h3>
              <p className="text-slate-600 mb-4">
                You must create a paper trail proving you requested a refund or specific services that were not delivered.
              </p>
              <ul className="text-sm text-slate-500 list-disc list-inside space-y-1">
                <li>Send via Certified Mail (USPS) if possible</li>
                <li>Clearly state "I paid $X on [Date] and received no filings"</li>
                <li>Set a specific deadline for response (e.g., 10 days)</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Scale className="w-24 h-24 text-red-600" />
            </div>
            <div className="relative z-10">
              <span className="inline-block w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-center leading-8 mb-4">3</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">File a State Bar Complaint</h3>
              <p className="text-slate-600 mb-4">
                Lawyers are regulated by the State Bar, not the BBB. If an attorney was assigned to your case and ghosted you, this is an ethical violation.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Building className="w-24 h-24 text-red-600" />
            </div>
            <div className="relative z-10">
              <span className="inline-block w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-center leading-8 mb-4">4</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Alert Consumer Authorities</h3>
              <p className="text-slate-600 mb-4">
                Because financing is involved (ClarityPay/Affirm), federal consumer protection laws may apply.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Contact Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden">
            <div className="bg-slate-800 px-6 py-4 flex justify-between items-center">
              <h3 className="font-bold text-white flex items-center">
                <Building className="w-5 h-5 mr-2 text-slate-300" />
                Marble Law Contact Information
              </h3>
              <span className="text-xs font-bold bg-yellow-500 text-slate-900 px-2 py-1 rounded">For Demand Letters</span>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-red-600 mr-2" />
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Mailing Address (Headquarters)</p>
                </div>
                <div className="pl-6">
                  <p className="text-slate-900 font-bold text-lg">Marble Law</p>
                  <p className="text-slate-700">350 10th Ave, Suite 1000</p>
                  <p className="text-slate-700">San Diego, CA 92101</p>
                  <p className="text-xs text-slate-400 mt-2 italic">
                    *Tip: Send all correspondence via <span className="font-semibold text-slate-600">USPS Certified Mail</span> to generate a legal receipt.
                  </p>
                </div>
              </div>
              
              <div className="border-t md:border-t-0 md:border-l border-slate-100 md:pl-8 pt-6 md:pt-0">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <AtSign className="w-4 h-4 text-blue-600 mr-2" />
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Support Email</p>
                  </div>
                  <p className="text-slate-800 pl-6 font-medium">support@themarbleway.com</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 text-green-600 mr-2" />
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Phone</p>
                  </div>
                  <p className="text-slate-800 pl-6 font-medium">(855) 374-0559</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
            <button 
                onClick={onNavigateToResources}
                className="group flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-lg shadow-lg transition"
            >
                View Detailed Filing Instructions & Links
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-3xl mx-auto flex items-start">
          <AlertOctagon className="h-6 w-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-800 mb-1">A Note on Arbitration Clauses</h4>
            <p className="text-sm text-amber-700">
              Many tech-legal companies include "Arbitration Clauses" in their terms to prevent class actions. However, <strong>mass arbitration</strong> and regulatory investigations can still succeed. By gathering numbers here, we make the case harder to ignore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};