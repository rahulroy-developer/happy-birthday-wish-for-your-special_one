import React from 'react';
import { motion } from 'framer-motion';

const ConclusionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full h-full bg-blush-900 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Sparkles/Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center px-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-script text-white mb-8 drop-shadow-md px-2"
        >
          Your happiness. My favorite thing. ❤️
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-blush-100 font-serif font-light mb-4 tracking-wider px-4">
            Wishing you the most magical birthday.
          </p>

        </motion.div>
      </div>

      {/* Scroll down hint for the final video */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 4, duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em] uppercase font-sans w-full text-center pointer-events-none"
      >
          One Last Surprise
      </motion.div>
    </motion.div>
  );
};

export default ConclusionSection;
