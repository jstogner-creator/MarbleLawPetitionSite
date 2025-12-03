import React, { useState } from 'react';
import { SectionId } from '../types';
import { generateFormalComplaint } from '../services/geminiService';
import { Wand2, Copy, Check, AlertCircle, AlertTriangle, Download } from 'lucide-react';

export const ComplaintGenerator: React.FC = () => {
  const [details, setDetails] = useState('');
  const [generatedComplaint, setGeneratedComplaint] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!details.trim()) return;
    
    setIsLoading(true);
    const result = await generateFormalComplaint(details);
    setGeneratedComplaint(result);
    setIsLoading(false);
    setIsCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedComplaint);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedComplaint], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Formal_Complaint_Letter.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id={SectionId.GENERATOR} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-4">
              AI Powered Tool
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Draft Your Formal Complaint</h2>
            <p className="text-slate-600">
              Struggling to find the words? Enter your experience below, and our tool will generate a professional, formal letter you can send to the BBB, State Bar, or Attorney General.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col h-full">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Experience (Be specific about dates and payments)
              </label>
              <textarea
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[300px] bg-slate-50"
                placeholder="Example: I paid $2,500 on March 1st for a custody case. I was promised a lawyer immediately. It has been 3 weeks, and I have not spoken to anyone. When I ask for a refund, they say..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading || !details.trim()}
                className={`mt-4 w-full py-3 px-6 rounded-lg font-bold text-white flex items-center justify-center transition ${
                  isLoading || !details.trim()
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">Generating...</span>
                ) : (
                  <span className="flex items-center"><Wand2 className="mr-2 h-5 w-5" /> Generate Formal Complaint</span>
                )}
              </button>
            </div>

            <div className="flex flex-col h-full relative">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Formal Letter Preview
              </label>
              <div className="flex-grow p-6 bg-slate-100 border border-slate-200 rounded-lg min-h-[300px] overflow-y-auto whitespace-pre-wrap text-sm text-slate-800 font-mono relative">
                {generatedComplaint ? (
                  generatedComplaint
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400">
                    <AlertCircle className="h-10 w-10 mb-2 opacity-50" />
                    <p>Your generated letter will appear here.</p>
                  </div>
                )}
                
                {generatedComplaint && (
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={handleDownload}
                      className="p-2 bg-white rounded-md shadow-sm border border-slate-200 hover:bg-slate-50 transition"
                      title="Download as Text File"
                    >
                      <Download className="h-5 w-5 text-slate-600" />
                    </button>
                    <button
                      onClick={handleCopy}
                      className="p-2 bg-white rounded-md shadow-sm border border-slate-200 hover:bg-slate-50 transition"
                      title="Copy to clipboard"
                    >
                      {isCopied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5 text-slate-600" />}
                    </button>
                  </div>
                )}
              </div>

              {/* Prominent Disclaimer */}
              <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <span className="font-bold block mb-1">IMPORTANT LEGAL DISCLAIMER:</span> 
                    This letter is drafted by an AI assistant based on your input. It does <strong>not</strong> constitute legal advice. You must carefully review the text, verify all facts and dates, and assume full responsibility for the content before sending it to any authority.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};