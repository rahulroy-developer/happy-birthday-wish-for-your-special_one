import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';

const VideoSection = ({ onVideoEnter, onVideoLeave }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVideoEnter();
            if (videoRef.current) {
              videoRef.current.play().catch(e => console.log("Video play failed:", e));
            }
          } else {
            onVideoLeave();
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.6 } // Triggers when 60% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [onVideoEnter, onVideoLeave]);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-900 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Soft glowing background effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-pink-500/10 blur-[100px] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-2 md:p-4 border border-white/20 shadow-2xl relative overflow-hidden"
      >
        <video
          ref={videoRef}
          src={video1}
          controls
          controlsList="nodownload"
          className="w-full h-auto max-h-[70vh] object-contain rounded-xl md:rounded-2xl"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-12 text-white/50 text-sm tracking-widest uppercase z-10"
      >
        Scroll Up
      </motion.div>
    </div>
  );
};

export default VideoSection;
