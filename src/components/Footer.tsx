import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">About This Consumer Initiative</h4>
            <p className="text-sm leading-relaxed max-w-md mb-4">
              This is an independent, consumer-run website. It acts as a collective resource for individuals to share their experiences and organize for potential legal action. 
            </p>
            <p className="text-sm leading-relaxed max-w-md mb-4">
              <strong>We are not a law firm.</strong> We do not provide legal advice, representation, or counsel. Nothing on this website establishes an attorney-client relationship.
            </p>
            <p className="text-sm leading-relaxed max-w-md">
              Our goal is to aggregate data to help consumer protection agencies and class-action attorneys investigate the business practices of Marble Law.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-900">
               <a href="mailto:press@consumerjustice-marble.org" className="text-sm text-blue-500 hover:text-blue-400 font-medium transition flex items-center">
                 Media Inquiries & Press Contact &rarr;
               </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Important Legal Disclaimer</h4>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
              <p className="text-xs leading-relaxed text-slate-400 mb-2">
                <strong>Protected Speech:</strong> References to "malpractice," "harm," "scam," or "fraud" on this site reflect the <em>opinions</em> and personal experiences of consumers as reported in public reviews (BBB, Trustpilot, etc.). These allegations have not been proven in a court of law. Marble Law is innocent until proven otherwise. 
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
                <strong>Not Affiliated:</strong> This website is not associated with, endorsed by, or connected to Marble Law (The Marble Way, Inc.). All trademarks remain the property of their respective owners and are used here for nominative / fair use purposes only.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Consumer Justice Initiative. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};