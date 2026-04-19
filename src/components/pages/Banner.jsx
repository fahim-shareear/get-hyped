import React, { useState } from 'react';
import { motion } from 'framer-motion';
import firstVideo from '../../assets/Loop Salontopper.mp4';
import secondVideo from '../../assets/petrolhead-loop.mp4';
import cover from '../../assets/cover.webp';
// import { ArrowDown, ArrowRight } from 'lucide-react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
// import { ArrowRight, ArrowDown } from 'lucide-react';

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardSettings = [
    { initialRotate: -12, xOffset: 20 },
    { initialRotate: -5, xOffset: 0 },
    { initialRotate: 8, xOffset: -20 },
    { initialRotate: 15, xOffset: -40 },
  ];

  return (
    <div className="w-full min-h-screen p-6 md:p-20 font-sans mt-17 relative overflow-x-hidden">
      <div className="max-w-7xl relative z-10">
        <h1 className="text-[14vw] md:text-[9rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-[#1A1A1A] mb-10">
          Get Hyped.
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Get
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Noticed.
          <br className="md:hidden" />
          <span className='md:hidden'></span>
          Get Results.
        </h1>

        <p className="text-[6vw] md:text-4xl font-semibold text-[#1A1A1A] leading-tight max-w-125 md:max-w-none">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>

        {/* Mobile/Tablet Group 1: Poker-style Stacked Cards */}
        <div className="md:hidden relative h-112.5 mt-10 flex justify-end px-10">
          <div className="relative w-64 h-80">
            {/* Card 1 - Bottom of poker stack */}
            <motion.div
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                rotate: hoveredIndex === 0 ? 0 : -15,
                scale: hoveredIndex === 0 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
                zIndex: hoveredIndex === 0 ? 30 : 10,
                x: hoveredIndex === 0 ? -40 : 0,
                y: hoveredIndex === 0 ? -20 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 w-64 h-80 rounded-4xl bg-[#0d8dff] shadow-xl origin-bottom"
            >
              <h1 className="font-bold text-4xl p-4 absolute">10M+</h1>
              <div className="absolute bottom-6 left-4">
                <h1 className="font-bold text-xl mr-5 mb-1">Organische views</h1>
                <hr className="w-full" />
                <h3 className="font-bold text-sm">Groei door slimme content</h3>
              </div>
            </motion.div>

            {/* Card 2 - Top of poker stack */}
            <motion.div
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                rotate: hoveredIndex === 1 ? 0 : 5,
                scale: hoveredIndex === 1 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
                zIndex: hoveredIndex === 1 ? 30 : 11,
                x: hoveredIndex === 1 ? 40 : 0,
                y: hoveredIndex === 1 ? -20 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 w-64 h-80 rounded-4xl overflow-hidden shadow-2xl origin-bottom"
            >
              <video src={firstVideo} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Standard Flex Row */}
      <div className="hidden md:block md:max-w-[95%] mx-auto py-9">
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
            <video src={firstVideo} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
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
            <video src={secondVideo} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
          </motion.div>
        </div>
      </div>

      <div className="w-full min-h-screen relative">
        <h1 className="font-bold text-4xl md:text-7xl py-10 px-7 md:w-[70%] relative z-10">
          Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
        </h1>

        {/* Mobile/Tablet Group 2 */}
        <div className="md:hidden relative h-125">
          {/* Card 3 */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 2 ? 0 : cardSettings[2].initialRotate,
              scale: hoveredIndex === 2 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 2 ? 30 : 10,
              x: hoveredIndex === null ? -20 : (hoveredIndex > 2 ? -20 : 0)
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute left-6 top-10 w-64 h-80 rounded-4xl bg-[#33c791] shrink-0"
          >
            <h1 className="font-bold text-4xl p-4 absolute">30M+</h1>
            <div className="absolute bottom-6 left-4">
              <h1 className="font-bold text-xl mr-5 mb-1">Merken geholpen</h1>
              <hr className="w-full" />
              <h3 className="font-bold text-sm">Van start-up tot multinational</h3>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              rotate: hoveredIndex === 3 ? 0 : cardSettings[3].initialRotate,
              scale: hoveredIndex === 3 ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
              zIndex: hoveredIndex === 3 ? 30 : 11,
              x: hoveredIndex === null ? 20 : (hoveredIndex < 3 ? 20 : 0)
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute left-16 top-24 w-64 h-80 rounded-4xl overflow-hidden shrink-0"
          >
            <video src={secondVideo} autoPlay loop muted playsInline className='w-full h-full object-cover'></video>
          </motion.div>
        </div>


        <div className="w-full min-h-150 bg-[#F9F4EE] px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left: Image Container */}
          <div className="w-full md:w-87.5 aspect-4/5 rounded-3xl overflow-hidden shadow-sm">
            <img
              src={cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center: Text Content */}
          <div className="flex-1 max-w-2xl space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
              Nooit meer content zonder resultaat.
            </h1>

            <button className="flex items-center gap-3 px-6 py-3 border border-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all group">
              Leer ons kennen
              <div className="bg-black text-white rounded-full p-1 group-hover:bg-white group-hover:text-black transition-colors">
                <FaArrowRight size={20} />
              </div>
            </button>
          </div>

          {/* Right: Down Arrow (Sticky/Positioned Bottom Right) */}
          <div className="hidden md:flex items-end h-full">
            <button className="p-4 border border-gray-400 rounded-2xl text-orange-500 hover:border-black transition-colors">
              <FaArrowDown size={24} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;