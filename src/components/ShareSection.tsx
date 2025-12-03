import React, { useState } from 'react';
import { SectionId } from '../types';
import { Share2, Link, Check } from 'lucide-react';

export const ShareSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // In a real deployment, you would replace this with your actual domain
  // e.g., const shareUrl = "https://www.MarbleLawClassAction.com";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "I just signed the petition regarding Marble Law. If you've had issues with upfront fees or ghosting, check this out.";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: 'Reddit',
      url: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Petition: Consumer Complaints regarding Marble Law")}`,
      color: 'bg-orange-600 hover:bg-orange-700',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a2.502 2.502 0 011.91 2.459c.252.115.422.368.422.65 0 .098-.019.192-.054.279.035.087.054.182.054.28 0 .414-.335.75-.75.75-.097 0-.191-.019-.279-.053-.087.035-.182.054-.28.054-.367 0-.683-.227-.798-.553-.116.326-.431.553-.798.553-.098 0-.192-.019-.28-.054a.747.747 0 01-.278.054c-.415 0-.75-.336-.75-.75 0-.098.019-.193.054-.28a.754.754 0 01-.054-.28c0-.282.17-.535.422-.649a2.502 2.502 0 011.91-2.46zM12 20c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7 3.86 0 7 3.14 7 7 0 3.86-3.14 7-7 7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Twitter / X',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-black hover:bg-gray-800',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      color: 'bg-green-600 hover:bg-green-700',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.53 1.31 5.02L2.01 22l5.12-1.34C8.59 21.48 10.25 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.57 0-3.05-.44-4.32-1.2l-.31-.19-3.18.83.85-3.1-.2-.32C4.1 14.86 3.65 13.47 3.65 12c0-4.61 3.75-8.35 8.35-8.35 4.61 0 8.35 3.74 8.35 8.35 0 4.61-3.74 8.35-8.35 8.35zm4.56-6.24c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.98-.15.16-.3.18-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.62.13.17 1.77 2.7 4.29 3.79 1.67.72 2.33.78 3.19.65.95-.15 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.16-.48-.28z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id={SectionId.SHARE} className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Share2 className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Strength in Numbers</h2>
          <p className="text-slate-600 mb-10 text-lg">
            The more people who join, the stronger our case becomes. Share this petition on social media groups, Reddit threads, and legal forums.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 rounded-lg text-white font-bold transition shadow-md ${link.color}`}
              >
                <span className="mr-2">{link.icon}</span>
                Share on {link.name}
              </a>
            ))}
            
            <button
              onClick={handleCopyLink}
              className="flex items-center px-6 py-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition shadow-sm"
            >
              {copied ? <Check className="w-5 h-5 mr-2 text-green-600" /> : <Link className="w-5 h-5 mr-2" />}
              {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>
          
          <p className="text-sm text-slate-500 mt-6">
            <strong>Pro Tip:</strong> Posting in Reddit communities like r/LegalAdvice, r/Divorce, or local city subreddits can be very effective.
          </p>
        </div>
      </div>
    </section>
  );
};