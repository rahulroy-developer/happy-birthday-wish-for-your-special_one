import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  "The way your eyes light up when you smile.",
  "How safe and completely myself I feel when I'm with you.",
  "Your boundless kindness and the warmth of your heart.",
  "You are my favorite person and my greatest adventure."
];

const LoveLetterSection = () => {
  return (
    <div className="relative w-full h-full bg-blush-900 flex flex-col items-center justify-center px-6 md:px-8 overflow-hidden">
      {/* Subtle heartbeat animation in background */}
      <motion.div
        className="absolute w-96 h-96 bg-blush-700/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl text-blush-100 font-script mb-12"
        >
          Reasons Why You Are Most Beautiful 😍
        </motion.h2>

        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-blush-50 font-serif font-light tracking-wide leading-relaxed"
            >
              "{reason}"
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          viewport={{ once: true }}
          className="mt-16 text-lg text-blush-200 font-serif italic"
        >
          ...and a million reasons more.
        </motion.p>
      </div>
    </div>
  );
};

export default LoveLetterSection;
