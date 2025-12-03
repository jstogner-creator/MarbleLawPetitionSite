import React, { useEffect, useState } from 'react';
import { Search, ExternalLink, Loader2, Globe } from 'lucide-react';
import { searchPublicEvidence, EvidenceResult } from '../services/geminiService';

export const EvidenceFeed: React.FC = () => {
  const [evidence, setEvidence] = useState<EvidenceResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvidence = async () => {
      const result = await searchPublicEvidence();
      setEvidence(result);
      setLoading(false);
    };

    fetchEvidence();
  }, []);

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                <Globe className="mr-3 h-8 w-8 text-blue-400" />
                Live Investigation Feed
              </h2>
              <p className="text-slate-400 mt-2">
                Real-time scanning of public records, BBB complaints, and consumer reviews.
              </p>
            </div>
            {loading && (
              <div className="flex items-center text-blue-400 mt-4 md:mt-0">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Scanning consumer protection sites...
              </div>
            )}
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl">
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                <div className="h-4 bg-slate-700 rounded w-5/6"></div>
              </div>
            ) : (
              <div>
                <div className="prose prose-invert max-w-none mb-8">
                  <div className="text-lg leading-relaxed text-slate-200 whitespace-pre-wrap">
                    {evidence?.summary}
                  </div>
                </div>

                {evidence?.sources && evidence.sources.length > 0 && (
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Sources & Public Records
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {evidence.sources.map((source, index) => (
                        <a
                          key={index}
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition group"
                        >
                          <Search className="h-4 w-4 text-slate-500 mr-3 group-hover:text-blue-400" />
                          <span className="text-sm text-blue-300 truncate flex-1">
                            {source.title || "Public Record Source"}
                          </span>
                          <ExternalLink className="h-4 w-4 text-slate-500 ml-2 group-hover:text-white" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-4 text-xs text-slate-500 text-center">
            * This feed is generated in real-time using Google Search grounding. The content comes from external public websites and does not reflect the direct opinions of this site's operators.
          </div>
        </div>
      </div>
    </section>
  );
};