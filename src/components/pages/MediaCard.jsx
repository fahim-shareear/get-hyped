import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Bullit01 from '../../assets/Bullit _ Loop_01.mp4';
import Roasta02 from '../../assets/roasta-loop_02.mp4';
import Loco03 from '../../assets/loco-bites-loop_03.mp4';

const MediaCard = ({ card, index, isHovered, setHoveredIndex, className = '' }) => {
  const videoRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const checkResponsive = () => {
      setIsResponsive(window.innerWidth < 768);
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch((error) => console.log("Video play failed:", error));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    // Individual portfolio media card with hover animation and video playback
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ rotate: card.initialRotate }}
      animate={{
        rotate: isHovered ? 0 : card.initialRotate,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 50 : 10,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`w-full max-w-82.5 h-117.5 rounded-[36px] overflow-hidden border-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] cursor-pointer bg-black ${card.offsetClass} ${className}`}
      style={{ borderColor: card.accentColor }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={card.videoSrc}
          muted
          loop
          playsInline
          autoPlay={isResponsive}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="absolute left-5 right-5 bottom-5 rounded-[30px] p-6 text-white shadow-2xl"
        style={{
          backgroundColor: card.accentColor,
          clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold leading-tight">
              {card.title}
            </h3>
            <span className="mt-4 inline-block rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] font-semibold">
              {card.tag}
            </span>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const card1 = {
    title: "Van nul naar vol, binnen 3 weken",
    tag: "Bullit",
    accentColor: "#f05523",
    initialRotate: 0,
    videoSrc: Bullit01,
    offsetClass: "transform -translate-y-4"
  };

  const card2 = {
    title: "Zacht in smaak, sterk in beeld",
    tag: "Roasta",
    accentColor: "#2196f3",
    initialRotate: 0,
    videoSrc: Roasta02,
    offsetClass: "transform translate-y-2"
  };

  const card3 = {
    title: "Content die écht smaakt (en raakt)",
    tag: "Loco",
    accentColor: "#33c791",
    initialRotate: 0,
    videoSrc: Loco03,
    offsetClass: "transform translate-y-6"
  };

  return (
    <section className="w-full min-h-screen bg-[#fcf8f3] py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h1 className="text-8xl font-bold text-[#1a1a1a] tracking-tighter mb-6 leading-none">
            Content <br /> dat scoort.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep.
            Met creatieve content die werkt en het verschil maakt.
          </p>
          <button className="mt-8 flex items-center gap-2 bg-transparent border border-black px-6 py-2.5 rounded-full font-bold hover:bg-black hover:text-white transition-all group">
            Bekijk al ons werk
            <div className="bg-black text-white rounded-full p-1 group-hover:bg-white group-hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        
        <div className="flex flex-col gap-0 mt-10 md:relative md:h-150">
          <MediaCard
            card={card1}
            index={0}
            isHovered={hoveredIndex === 0}
            setHoveredIndex={setHoveredIndex}
            className="md:absolute md:left-50 md:top-0"
          />
          <MediaCard
            card={card2}
            index={1}
            isHovered={hoveredIndex === 1}
            setHoveredIndex={setHoveredIndex}
            className="md:absolute md:right-50 md:bottom-70 md:transform md:-translate-x-1/2"
          />
          <MediaCard
            card={card3}
            index={2}
            isHovered={hoveredIndex === 2}
            setHoveredIndex={setHoveredIndex}
            className="md:absolute md:right-0 md:bottom-110"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;