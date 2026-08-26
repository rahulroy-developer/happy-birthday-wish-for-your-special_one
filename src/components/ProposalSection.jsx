import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    q: "Who is the most beautiful person in the world?",
    a: "You"
  },
  {
    q: "Who makes me the happiest?",
    a: "You do"
  },
  {
    q: "Are we meant to be?",
    a: "Absolutely"
  }
];

const ProposalSection = ({ onYes }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      // Trigger the conclusion section when the last question is answered
      onYes();
    }
  };

  return (
    <div className="w-full h-full bg-blush-50 flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center h-96 relative flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-blush-800 font-serif mb-12 leading-relaxed px-2">
              {questions[currentStep].q}
            </h2>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-blush-500 text-white rounded-full font-sans text-lg md:text-xl shadow-lg hover:bg-blush-600 transition-colors"
            >
              {questions[currentStep].a}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProposalSection;
