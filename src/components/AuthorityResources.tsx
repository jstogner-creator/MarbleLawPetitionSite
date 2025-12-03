import React from 'react';
import { ArrowLeft, ExternalLink, Scale, Building, ShieldAlert, FileText, Landmark } from 'lucide-react';

interface AuthorityResourcesProps {
  onBack: () => void;
}

export const AuthorityResources: React.FC<AuthorityResourcesProps> = ({ onBack }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-blue-600 font-medium mb-8 transition group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition" />
          Back to Main Site
        </button>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
          <div className="bg-slate-900 p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Official Complaint Channels</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Filing formal complaints with regulatory bodies is the most effective way to trigger an investigation. Use the direct links and guides below.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* SECTION 1: STATE BAR */}
            <section className="border-b border-slate-100 pb-12">
              <div className="flex items-start mb-6">
                <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Scale className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">1. The State Bar Association</h2>
                  <div className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Highest Impact</div>
                  <p className="text-slate-600 leading-relaxed">
                    Attorneys are licensed and regulated by their State Bar. If an attorney was assigned to your case and failed to communicate ("ghosted") or perform work, this is a potential ethical violation.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-800 mb-3">What to include in your complaint:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  <li><strong>Attorney Name:</strong> If known, name the specific attorney assigned to you.</li>
                  <li><strong>Lack of Communication:</strong> State clearly: "Attorney failed to respond to emails/calls for [X] weeks."</li>
                  <li><strong>Unearned Fees:</strong> "I paid [Amount] and no filing/work was produced."</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://www.calbar.ca.gov/Public/Complaints-Claims" target="_blank" rel="noopener" className="flex items-center justify-between p-4 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition group">
                  <span className="font-semibold text-slate-700">California State Bar Complaint</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </a>
                <a href="https://www.texasbar.com/" target="_blank" rel="noopener" className="flex items-center justify-between p-4 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition group">
                  <span className="font-semibold text-slate-700">Texas State Bar</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </a>
                <a href="https://www.floridabar.org/public/attorney-discipline/" target="_blank" rel="noopener" className="flex items-center justify-between p-4 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition group">
                  <span className="font-semibold text-slate-700">Florida Bar Complaint</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </a>
                <a href="https://www.americanbar.org/groups/legal_services/flh-home/flh-bar-directories-and-lawyer-finders/" target="_blank" rel="noopener" className="flex items-center justify-between p-4 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition group">
                  <span className="font-semibold text-slate-700">Find Your State's Bar (ABA Directory)</span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                </a>
              </div>
            </section>

            {/* SECTION 2: CFPB */}
            <section className="border-b border-slate-100 pb-12">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Landmark className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">2. Consumer Financial Protection Bureau (CFPB)</h2>
                  <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">For Financing Issues</div>
                  <p className="text-slate-600 leading-relaxed">
                    If you used <strong>ClarityPay, Affirm, or other financing</strong> offered by Marble and are being charged for services not received, this falls under federal financial protection laws.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
                 <p className="text-blue-900 font-medium mb-2">Why this works:</p>
                 <p className="text-blue-800 text-sm">The CFPB is a federal agency. When they send a complaint to a company, the company <strong>must</strong> respond usually within 15 days. It is very effective for stopping debt collection on disputed services.</p>
              </div>

              <a href="https://www.consumerfinance.gov/complaint/" target="_blank" rel="noopener" className="inline-flex items-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition">
                Start a CFPB Complaint <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </section>

             {/* SECTION 3: FTC */}
             <section>
              <div className="flex items-start mb-6">
                <div className="bg-slate-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <ShieldAlert className="h-8 w-8 text-slate-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">3. Federal Trade Commission (FTC)</h2>
                  <div className="inline-block bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">For Deceptive Practices</div>
                  <p className="text-slate-600 leading-relaxed">
                    Report "Unfair or Deceptive Business Practices." While the FTC does not resolve individual refunds, they investigate companies that systemically mislead consumers.
                  </p>
                </div>
              </div>

              <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener" className="inline-flex items-center px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition">
                Report Fraud to FTC <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};