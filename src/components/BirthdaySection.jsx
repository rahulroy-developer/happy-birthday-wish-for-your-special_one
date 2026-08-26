import React from "react";
import { motion } from "framer-motion";
import BirthdayPic from "../assets/Birthdaypic.jpeg";

const BirthdaySection = ({ name = "John" }) => {
  return (
    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Party Popper Confetti Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-8 rounded-full ${
              [
                "bg-yellow-400",
                "bg-pink-500",
                "bg-blue-400",
                "bg-green-400",
                "bg-purple-500",
              ][i % 5]
            }`}
            initial={{
              top: "-10%",
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              top: "120%",
              rotate: Math.random() * 720,
              left: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6, duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="z-10 bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden flex flex-col justify-end w-[95%] max-w-xl h-[85vh] max-h-[900px]"
        style={{
          backgroundImage: `url(${BirthdayPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay: transparent at top for the face, dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent z-0"></div>

        {/* Content Wrapper pushed to the bottom */}
        <div className="relative z-10 text-center mt-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-script text-white mb-4 drop-shadow-md">
            Happy Birthday TMP
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-pink-200 font-serif italic mb-6 leading-relaxed drop-shadow-sm"
          >
            "Today the universe celebrates the birthday of the most beautiful
            star✨"
          </motion.p>

          <p className="text-base md:text-lg text-slate-200 font-serif font-light tracking-widest">
            But wait... there is one more thing to ask you.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 text-white/50 text-xs tracking-widest uppercase"
          >
            Scroll Down
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BirthdaySection;
