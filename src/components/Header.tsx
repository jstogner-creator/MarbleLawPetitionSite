import React, { useState } from 'react';
import { Scale, Menu, X, ArrowLeft, Share2, AlertCircle } from 'lucide-react';
import { SectionId, ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: SectionId) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // Timeout to allow re-render of home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    onNavigate('home');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Legal Disclaimer Banner - Crucial for Trademark Protection */}
      <div className="bg-slate-800 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-700">
        <div className="container mx-auto flex items-center justify-center">
            <AlertCircle className="w-3 h-3 mr-2 text-yellow-500" />
            <span className="font-semibold text-yellow-500 mr-1">DISCLAIMER:</span>
            <span>This is an independent consumer resource. We are <strong>NOT</strong> affiliated with, funded by, or associated with Marble Law.</span>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHomeClick}>
              <Scale className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl tracking-tight">Consumer<span className="text-red-500">Justice</span></span>
            </div>

            {currentView === 'resources' ? (
               <div className="flex items-center">
                  <button onClick={handleHomeClick} className="flex items-center text-sm font-medium hover:text-red-400 transition">
                      <ArrowLeft className="h-4 w-4 mr-1" /> Return to Home
                  </button>
               </div>
            ) : (
              <>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                  <button onClick={() => scrollTo(SectionId.EVIDENCE)} className="hover:text-red-400 transition text-sm font-medium">The Evidence</button>
                  <button onClick={() => scrollTo(SectionId.GENERATOR)} className="hover:text-red-400 transition text-sm font-medium">Draft Complaint</button>
                  <button onClick={() => scrollTo(SectionId.ATTORNEYS)} className="hover:text-yellow-400 transition text-sm font-medium text-yellow-500/80">For Attorneys</button>
                  
                  <button 
                    onClick={() => scrollTo(SectionId.SHARE)} 
                    className="flex items-center hover:text-blue-400 transition text-sm font-medium"
                  >
                     <Share2 className="w-4 h-4 mr-1.5" />
                     Share
                  </button>

                  <button 
                    onClick={() => scrollTo(SectionId.PETITION)} 
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold transition shadow-md text-sm"
                  >
                    Join the Petition
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && currentView === 'home' && (
          <div className="md:hidden bg-slate-800 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollTo(SectionId.EVIDENCE)} className="text-left hover:text-red-400">The Evidence</button>
              <button onClick={() => scrollTo(SectionId.GENERATOR)} className="text-left hover:text-red-400">Draft Complaint</button>
              <button onClick={() => scrollTo(SectionId.ATTORNEYS)} className="text-left text-yellow-500 font-medium">For Attorneys</button>
              <button onClick={() => scrollTo(SectionId.SHARE)} className="text-left hover:text-blue-400 flex items-center">
                 <Share2 className="w-4 h-4 mr-2" /> Share
              </button>
              <button 
                onClick={() => scrollTo(SectionId.PETITION)} 
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold w-full"
              >
                Join the Petition
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};