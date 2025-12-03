import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Roadmap } from './components/Roadmap';
import { EvidenceFeed } from './components/EvidenceFeed';
import { ComplaintGenerator } from './components/ComplaintGenerator';
import { ActionGuide } from './components/ActionGuide';
import { PetitionForm } from './components/PetitionForm';
import { RequestRepresentation } from './components/RequestRepresentation';
import { AttorneyCallout } from './components/AttorneyCallout';
import { ShareSection } from './components/ShareSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AuthorityResources } from './components/AuthorityResources';
import { ViewType, PetitionData } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  
  // Shared state to allow data to flow from Petition Form to Email Drafter
  const [sharedPetitionData, setSharedPetitionData] = useState<PetitionData>({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    caseType: '',
    amountPaid: '',
    experience: '',
    consent: false
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentView={view} onNavigate={setView} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <ProblemSection />
            <Roadmap />
            <EvidenceFeed />
            <ShareSection />
            <ActionGuide onNavigateToResources={() => {
              setView('resources');
              window.scrollTo(0, 0);
            }} />
            <ComplaintGenerator />
            <PetitionForm onDataChange={setSharedPetitionData} />
            <RequestRepresentation userData={sharedPetitionData} />
            <AttorneyCallout />
            <FAQ />
          </>
        ) : (
          <AuthorityResources onBack={() => {
            setView('home');
            window.scrollTo(0, 0);
          }} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;