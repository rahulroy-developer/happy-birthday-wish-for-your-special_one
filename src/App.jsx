import React, { useState, useRef } from 'react';
import WelcomeSection from './components/WelcomeSection';
import GallerySection from './components/GallerySection';
import LoveLetterSection from './components/LoveLetterSection';
import BirthdaySection from './components/BirthdaySection';
import VideoSection from './components/VideoSection';
import ProposalSection from './components/ProposalSection';
import ConclusionSection from './components/ConclusionSection';

// Import local background music
import bgMusic from './assets/Bayaan & Sherazam - Safar (Lyrics) - (256 Kbps).mp3';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [proposalAnswered, setProposalAnswered] = useState(false);

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const handleStart = () => {
    setHasStarted(true);
    if (audio1Ref.current) {
      audio1Ref.current.volume = 0.5;
      audio1Ref.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleVideoEnter = () => {
    if (audio1Ref.current) {
      // Smoothly fade out or just pause (pausing is immediate and reliable)
      audio1Ref.current.pause();
    }
  };

  const handleVideoLeave = () => {
    if (audio1Ref.current && hasStarted) {
      // Resume background music when leaving the video section
      audio1Ref.current.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleProposalYes = () => {
    setProposalAnswered(true);
  };

  return (
    <div className={`w-full ${hasStarted ? 'snap-y snap-mandatory overflow-y-scroll h-screen' : 'h-screen overflow-hidden'}`}>
      <audio ref={audio1Ref} loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      <div className="snap-start h-screen">
        <WelcomeSection onStart={handleStart} hasStarted={hasStarted} />
      </div>

      {hasStarted && (
        <>
          <div className="snap-start h-screen">
            <GallerySection />
          </div>
          <div className="snap-start h-screen">
            <LoveLetterSection />
          </div>
          <div className="snap-start h-screen">
            <BirthdaySection name="John" />
          </div>
          <div className="snap-start h-screen relative">
            <ProposalSection onYes={handleProposalYes} />
            {proposalAnswered && (
              <div className="absolute inset-0 z-50">
                <ConclusionSection />
              </div>
            )}
          </div>

          {/* If there is any specific video you would like to add you can add here */}
          {/* {proposalAnswered && (
            <div className="snap-start h-screen">
              <VideoSection onVideoEnter={handleVideoEnter} onVideoLeave={handleVideoLeave} />
            </div>
          )} */}
        </>
      )}
    </div>
  );
}

export default App;