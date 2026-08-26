import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Importing the images
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import pic4 from '../assets/pic4.jpeg';
import pic5 from '../assets/pic5.jpeg';
import pic6 from '../assets/pic6.jpeg';

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Automatic carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Changes image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  // Calculate layout variables based on screen size
  const cardWidth = isMobile ? 240 : 380;
  const cardHeight = isMobile ? 340 : 500;
  const xOffset = isMobile ? 80 : 200;

  return (
    <div className="w-full h-full bg-blush-50 flex flex-col items-center justify-center py-10 overflow-hidden relative" style={{ perspective: 1200 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-12 z-40 px-4"
      >
        <h2 className="text-4xl md:text-5xl text-center text-blush-800 font-script drop-shadow-sm">
          Your Beautiful Memories
        </h2>
      </motion.div>

      {/* 3D Coverflow Container */}
      <div className="relative w-full h-[70vh] flex items-center justify-center mt-12 transform-style-3d">
        {images.map((src, i) => {
          // Calculate shortest distance offset for infinite loop feel
          let offset = (i - currentIndex) % images.length;
          if (offset < -Math.floor(images.length / 2)) offset += images.length;
          if (offset > Math.floor(images.length / 2)) offset -= images.length;

          const absOffset = Math.abs(offset);
          const isCenter = offset === 0;

          // Hide cards that are too far away to prevent clutter
          const isHidden = absOffset > 2;

          return (
            <motion.div
              key={i}
              className="absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              animate={{
                x: offset * xOffset,
                scale: 1 - absOffset * 0.15,
                opacity: isHidden ? 0 : 1 - absOffset * 0.3,
                rotateY: offset === 0 ? 0 : offset > 0 ? -35 : 35,
                zIndex: 10 - absOffset,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                width: cardWidth,
                height: cardHeight,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={src}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Dark overlay for side images to emphasize the center one */}
              {!isCenter && (
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 flex gap-3 z-40">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-blush-600 scale-125' : 'bg-blush-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;