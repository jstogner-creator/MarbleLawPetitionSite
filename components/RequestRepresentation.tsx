import React, { useState, useEffect } from 'react';
import { Gavel, Mail, Search, ExternalLink, RefreshCw } from 'lucide-react';
import { PetitionData } from '../types';

interface Firm {
  name: string;
  location: string;
  website: string;
}

interface RequestRepresentationProps {
  userData?: PetitionData;
}

// Pre-defined directory of resources/firms. 
// In a real application, this would likely be populated with specific partner firms.
const ATTORNEY_DIRECTORY: Record<string, Firm[]> = {
  'california': [
    { name: "Public Justice P.C.", location: "Oakland, CA", website: "https://www.publicjustice.net/" },
    { name: "Consumer Watchdog", location: "Los Angeles, CA", website: "https://www.consumerwatchdog.org/" },
    { name: "California State Bar Referral", location: "Statewide", website: "https://www.calbar.ca.gov/Public/Need-Legal-Help/Lawyer-Referral-Services" }
  ],
  'new york': [
    { name: "Legal Services NYC", location: "New York, NY", website: "https://www.legalservicesnyc.org/" },
    { name: "New York City Bar Referral", location: "New York, NY", website: "https://www.nycbar.org/get-legal-help/" }
  ],
  'texas': [
    { name: "Texas Law Help", location: "Austin, TX", website: "https://texaslawhelp.org/" },
    { name: "State Bar of Texas Referral", location: "Statewide", website: "https://www.texasbar.com/" }
  ],
  'florida': [
    { name: "Florida Bar Lawyer Referral", location: "Statewide", website: "https://lrs.floridabar.org/" }
  ]
};

export const RequestRepresentation: React.FC<RequestRepresentationProps> = ({ userData }) => {
  const [userState, setUserState] = useState('');
  const [foundFirms, setFoundFirms] = useState<Firm[] | null>(null);

  // Auto-fill state from props if available
  useEffect(() => {
    if (userData?.state) {
      setUserState(userData.state);
    }
  }, [userData?.state]);

  const handleEmailClick = () => {
    // Get the current URL safely
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'consumer-justice-marble.org';
    
    // Use userData if available, otherwise use placeholders
    const name = userData?.fullName || "[Insert Your Name]";
    const state = userData?.state || "[Insert Your State]";
    const loss = userData?.amountPaid || "[Insert Amount]";
    const phone = userData?.phone || "[Your Phone Number]";
    const story = userData?.experience 
      ? `Summary of Experience:\n${userData.experience}` 
      : `Summary of Experience:\n[Briefly describe your situation here: e.g., "I paid $3000 for a divorce case, was assigned an attorney who never filed paperwork, and have been refused a refund."]`;

    const subject = encodeURIComponent("URGENT: Request for Class Action Representation - Marble Law Claims");
    const body = encodeURIComponent(`To the Class Action Intake Department:

I am writing to formally request a legal evaluation of my potential claims against Marble Law and to inquire about potential class action representation.

I have joined the Consumer Justice Initiative (found at ${currentUrl}), a platform organizing consumers with similar complaints to facilitate a class action investigation.

I believe I am a victim of unfair business practices, including but not limited to:
- Collection of upfront fees without providing agreed-upon legal services.
- Systemic lack of communication and abandonment by assigned counsel.
- Refusal to issue refunds for unearned fees.
- Potential violations of consumer protection statutes and Truth in Lending Act (TILA) regarding financing.

My Details:
Name: ${name}
State: ${state}
Approximate Financial Loss: ${loss}

${story}

I understand that hundreds of other consumers have reported identical experiences. I am seeking counsel who can evaluate this matter for a potential mass tort or class action lawsuit.

Please contact me at your earliest convenience.

Sincerely,
${name}
${phone}`);

    // Opens the user's default email client
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!userState.trim()) {
        alert("Please enter your state to find local attorneys.");
        return;
    }

    const normalizedState = userState.toLowerCase().trim();
    const directoryMatches = ATTORNEY_DIRECTORY[normalizedState];

    if (directoryMatches && directoryMatches.length > 0) {
      // If we have matches in our directory, show them
      setFoundFirms(directoryMatches);
    } else {
      // Fallback to Google Search
      setFoundFirms(null);
      const query = encodeURIComponent(`Consumer Class Action Attorney ${userState} Marble Law`);
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  };

  const resetSearch = () => {
    setFoundFirms(null);
    setUserState('');
  };

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Gavel className="h-10 w-10 text-red-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Don't Just Wait. <span className="text-red-600">Request a Lawsuit.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Signing the petition is the first step. However, contacting class action firms <strong>directly</strong> creates immediate pressure. We have prepared a formal legal request template that you can send to consumer protection law firms in your state.
        </p>
        
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            
            <h3 className="font-bold text-2xl mb-6 text-slate-800 border-b border-slate-100 pb-4">
              How to Request Representation
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Search className="h-5 w-5 text-blue-600"/>
                        </div>
                        <p className="font-bold text-slate-900">1. Find a Firm</p>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                        Lawyers are licensed by state. Enter your state below to find relevant consumer law resources.
                    </p>
                    <div className="mt-auto">
                        {!foundFirms ? (
                          <form onSubmit={handleSearch} className="flex gap-2 w-full">
                              <input 
                                  type="text" 
                                  placeholder="Your State (e.g. California)" 
                                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                                  value={userState}
                                  onChange={(e) => setUserState(e.target.value)}
                              />
                              <button 
                                  type="submit"
                                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition flex-shrink-0"
                                  title="Find Attorneys"
                              >
                                  <Search className="h-4 w-4" />
                              </button>
                          </form>
                        ) : (
                          <div className="animate-in fade-in slide-in-from-bottom-2">
                             <div className="mb-3 text-sm font-semibold text-green-700 flex items-center bg-green-50 p-2 rounded border border-green-100">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                Resources found in {userState}:
                             </div>
                             <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-1">
                                {foundFirms.map((firm, idx) => (
                                    <a 
                                      key={idx} 
                                      href={firm.website} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="block p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition group"
                                    >
                                        <div className="font-bold text-slate-800 flex justify-between items-start text-sm">
                                            {firm.name}
                                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-500 mt-1 flex-shrink-0 ml-2"/>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1">{firm.location}</div>
                                    </a>
                                ))}
                             </div>
                             <button 
                                onClick={resetSearch} 
                                className="text-xs text-slate-500 hover:text-slate-800 flex items-center justify-center w-full py-2 hover:bg-slate-100 rounded transition"
                             >
                                <RefreshCw className="w-3 h-3 mr-1" /> Search a different state
                             </button>
                          </div>
                        )}
                    </div>
                </div>

                 <div className="flex flex-col p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Mail className="h-5 w-5 text-blue-600"/>
                        </div>
                        <p className="font-bold text-slate-900">2. Send the Request</p>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                        We've written the legal request for you. Click the button below to open your email app, paste the firm's contact info, and hit send.
                    </p>
                    <div className="mt-auto">
                        <button 
                          onClick={handleEmailClick}
                          className="w-full py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg text-sm flex items-center justify-center transition"
                        >
                            <Mail className="mr-2 h-4 w-4" /> Draft Email Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-500 mb-0 flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <strong>Tip:</strong> Send this email to at least 3 different firms for the best chance of a response.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};