import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ i, title, description, videoSrc, color, progress, range, targetScale }) => {
  const defaultRange = [0, 1];
  const activeRange = range && range.length === 2 ? range : defaultRange;

  // Staggered rotation: Card 1 tilts left, Card 2 tilts right, etc.
  const initialRotation = i % 2 === 0 ? -2 : 2;

  // ANIMATIONS
  const scale = useTransform(progress, activeRange, [1, targetScale]);
  // The card rotates slightly as it is "pushed" back by the next card
  const rotate = useTransform(progress, activeRange, [initialRotation, 0]);
  const yTranslate = useTransform(progress, activeRange, [0, -40]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-10">
      <motion.div
        style={{
          scale,
          rotate,
          y: yTranslate,
          backgroundColor: color,
          opacity: 1, // Strictly opaque
          top: `calc(5vh + ${i * 28}px)`, // Visual stacking offset
        }}
        className="relative w-full max-w-8xl h-screen rounded-[45px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row overflow-hidden border border-black/5"
      >
        {/* TEXT SECTION: Takes more horizontal space */}
        <div className="flex-[1.5] p-10 md:p-20 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="px-5 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-black/50">
                Expertise
              </span>
              <span className="text-8xl md:text-[12rem] font-bold text-black/3 select-none leading-none absolute top-4 right-10 md:static">
                0{i + 1}
              </span>
            </div>
            
            <h2 className="text-6xl md:text-[7vw] font-bold mt-10 mb-6 tracking-tighter text-[#1A1A1A] leading-[0.9]">
              {title}
            </h2>
          </div>

          <div className="max-w-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1A1A1A]">
              {description.sub}
            </h3>
            <p className="text-lg md:text-xl text-black/60 leading-snug mb-10">
              {description.main}
            </p>
            
            <motion.button 
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="flex items-center gap-4 pl-8 pr-2 py-2 border border-black rounded-full font-bold text-lg bg-transparent text-black hover:bg-black hover:text-white transition-all group"
            >
              Meer over {title.toLowerCase()}
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-white group-hover:text-black overflow-hidden transition-colors">
                <motion.div
                  animate={{ x: [0, 40, -40, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, times: [0, 0.4, 0.41, 1], ease: "easeInOut", repeatDelay: 1 }}
                >
                  <FaArrowRight size={20} />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* VIDEO SECTION: Shaped like a portrait screen/frame */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="relative w-full h-full max-h-137.5 aspect-3/4 md:aspect-auto rounded-[35px] overflow-hidden shadow-2xl ring-8 ring-black/5">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Expertise = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const cards = [
    {
      title: "Social strategy",
      color: "#FFFFFF",
      videoSrc: "https://v.ftcdn.net/05/56/67/39/700_F_556673967_Vn7S4pYwWvA8qHjMvR7UfA9YvL5yqL3w_ST.mp4",
      description: {
        sub: "Slimme strategie. Sterke start.",
        main: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken."
      }
    },
    {
      title: "Content Creation",
      color: "#F9F4EE",
      videoSrc: "https://v.ftcdn.net/04/18/34/06/700_F_418340628_N8Ua6X8XW9H7qKqN7W8UfA9YvL5yqL3w_ST.mp4",
      description: {
        sub: "Beelden die blijven hangen.",
        main: "Onze creatives maken vette beelden die niet alleen mooi zijn, maar ook converteren. Van short-form video tot high-end campagnes."
      }
    },
    {
      title: "Social Ads",
      color: "#FFFFFF",
      videoSrc: "https://v.ftcdn.net/03/24/45/63/700_F_324456381_N8Ua6X8XW9H7qKqN7W8UfA9YvL5yqL3w_ST.mp4",
      description: {
        sub: "Resultaat boven alles.",
        main: "Data liegt niet. We monitoren, testen en optimaliseren continu om het maximale uit jouw budget en content te halen."
      }
    },
    {
      title: "Full Management",
      color: "#F9F4EE",
      videoSrc: "https://v.ftcdn.net/05/12/34/56/700_F_512345678_N8Ua6X8XW9H7qKqN7W8UfA9YvL5yqL3w_ST.mp4", 
      description: {
        sub: "Zorgeloos groeien.",
        main: "Wij nemen de volledige regie over jouw social kanalen. Van community management tot de inzet van creators."
      }
    }
  ];

  return (
    <section ref={container} className="relative bg-[#F9F4EE] py-20">
      <div className="h-[400vh] relative">
        {cards.map((card, i) => {
          const targetScale = 1 - ((cards.length - i) * 0.04);
          const start = i * 0.25;
          const end = 1;

          return (
            <Card
              key={`expert_${i}`}
              i={i}
              {...card}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;