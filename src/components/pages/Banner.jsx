import React, { useState } from 'react';
import { motion } from 'framer-motion';
import firstVideo from '../../assets/Loop Salontopper.mp4';
import secondVideo from '../../assets/petrolhead-loop.mp4';

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Configuration for the messy/rotated look
  const cardSettings = [
    { initialRotate: -12, xOffset: 20 },
    { initialRotate: -5, xOffset: 0 },
    { initialRotate: 8, xOffset: -20 },
    { initialRotate: 15, xOffset: -40 },
  ];

  return (
    <div className="w-full min-h-screen p-6 md:p-20 font-sans mt-17">
      <div className="max-w-7xl">
        {/* - Mobile: text-[14vw] scales to width.
          - Desktop: md:text-[9rem] matches the huge size.
          - Leading: Tight line height to match the brand style.
        */}
        <h1 className="text-[14vw] md:text-[9rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-[#1A1A1A] mb-10">
          {/* Line 1 (Mobile & Desktop) */}
          Get Hyped.

          {/* On Mobile: Break here. On Desktop: Keep "Get" on this line. */}
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Get

          {/* On Desktop: Break here. On Mobile: Keep "Noticed" on this line. */}
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Noticed.

          {/* Always break before "Get Results" to match both screenshots */}
          <br className="md:hidden" />
          <span className='md:hidden'></span>
          Get Results.
        </h1>

        <p className="text-[6vw] md:text-4xl font-semibold text-[#1A1A1A] leading-tight max-w-125 md:max-w-none">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>
      </div>

      <div className="md:max-w-[95%] mx-auto py-9">
        <div className="flex items-center gap-5 mx-4 py-5">

          {/* Card 1 */}
          <motion.div 
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 0 ? 0 : cardSettings[0].initialRotate,
              scale: hoveredIndex === 0 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 0 ? 10 : 1,
              x: hoveredIndex === null ? cardSettings[0].xOffset : (hoveredIndex > 0 ? -30 : 0)
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-95 h-125 rounded-4xl bg-[#0d8dff] relative shrink-0"
          >
            <h1 className="font-bold text-6xl p-5 absolute">10M+</h1>
            <div className="absolute bottom-10 left-5">
              <h1 className="font-bold text-3xl mr-5 mb-2">Organische views</h1>
              <hr className="w-full" />
              <h3 className="font-bold text-xl ">Groei door slimme content</h3>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 1 ? 0 : cardSettings[1].initialRotate,
              scale: hoveredIndex === 1 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 1 ? 10 : 1,
              x: hoveredIndex === null ? cardSettings[1].xOffset : (hoveredIndex < 1 ? 30 : (hoveredIndex > 1 ? -30 : 0))
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-95 h-125 rounded-4xl overflow-hidden relative shrink-0"
          >
            <video src={firstVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover top-0 left-0"></video>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 2 ? 0 : cardSettings[2].initialRotate,
              scale: hoveredIndex === 2 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 2 ? 10 : 1,
              x: hoveredIndex === null ? cardSettings[2].xOffset : (hoveredIndex < 2 ? 30 : (hoveredIndex > 2 ? -30 : 0))
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-95 h-125 rounded-4xl bg-[#33c791] relative shrink-0"
          >
            <h1 className="font-bold text-6xl p-5 absolute">30M+</h1>
            <div className="absolute bottom-10 left-5">
              <h1 className="font-bold text-3xl mr-5 mb-2">Merken geholpen</h1>
              <hr className="w-full" />
              <h3 className="font-bold text-xl ">Van start-up tot multinational</h3>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 3 ? 0 : cardSettings[3].initialRotate,
              scale: hoveredIndex === 3 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 3 ? 10 : 1,
              x: hoveredIndex === null ? cardSettings[3].xOffset : (hoveredIndex < 3 ? 30 : 0)
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-98 h-125 rounded-4xl overflow-hidden relative shrink-0"
          >
            <video src={secondVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover top-0 left-0'
            ></video>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;