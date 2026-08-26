import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = ({ onStart, hasStarted }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-blush-100 to-pink-100 overflow-hidden">
      {/* Animated glowing orbs background for a magical feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[10%] right-[10%] w-80 h-80 md:w-[30rem] md:h-[30rem] bg-blush-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
      </div>

      {/* Glassmorphic Container to anchor the sparse text and make it look intentional and premium */}
      <motion.div
        className="z-10 text-center px-8 py-16 md:py-24 md:px-20 max-w-3xl w-[90%] bg-white/40 backdrop-blur-lg rounded-[3rem] border border-white/60 shadow-[0_8px_32px_0_rgba(244,143,177,0.2)] relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-blush-400 to-transparent opacity-70" />

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl text-blush-800 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          HEY TMP
        </motion.h1>

        {/* Elegant Animated Divider */}
        <motion.div
          className="w-24 h-[1px] bg-blush-400 my-8 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        />

        {/* Subtitle */}
        <motion.div
          className="text-blush-700 font-serif italic text-lg md:text-2xl tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <p>A Small World Of Yours</p>
        </motion.div>

        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-14"
          >
            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white rounded-full font-serif text-lg md:text-xl tracking-widest shadow-xl transition-colors duration-300 relative overflow-hidden group border border-blush-400/50"
            >
              <span className="relative z-10">Begin Journey</span>

              {/* Gentle ambient pulse effect behind the text */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default WelcomeSection;
