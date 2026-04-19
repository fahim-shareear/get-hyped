import React from 'react';
import fire from "../../assets/firelogo.png";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IoMailSharp } from 'react-icons/io5';
import "../../components/css/footer.css"
import GetHyped from '../logo/GetHyped';

const Footer = () => {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className='w-full h-130 relative'>
            <div className="flex items-center flex-col">
                <h1 className="font-bold text-[8rem] tracking-tighter">Let's Get Hyped!</h1>
                <div className="flex items-center gap-5 mx-auto">

                    <motion.div
                        whileHover={{ rotate: -5, scale: 1.05 }}>
                        <div className="flex items-center gap-4 border-2 p-1 rounded-xl cursor-pointer">
                            <button className="font-bold text-lg">Mail ons direct</button>
                            <div className='bg-black rounded-xl p-3'>
                                <IoMailSharp className="text-white w-5 h-5" />
                            </div>
                        </div>
                    </motion.div>




                    <motion.div whileHover={{ rotate: -5, scale: 1.05 }} className='bg-[#fcb8fa] p-3 rounded-xl cursor-pointer hidden md:flex'>
                        <button className="font-bold flex items-center gap-3">
                            Get Result
                            <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center p-1">
                                <img src={fire} className="w-full h-full object-contain" alt="fire" />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="w-40 h-40 rounded-full bg-[#fcb8fa] right-65 bottom-25 overflow-visible absolute z-100 flex items-center justify-center">

                {/* 3. The Rotating Layer */}
                <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute w-full h-full"
                    style={{ rotate }} // Framer Motion handles the 'deg' units automatically
                >
                    <defs>
                        <path
                            id="textCircle"
                            d="M 50, 50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                        />
                    </defs>
                    <text className="text-[7px] font-bold uppercase tracking-widest fill-black">
                        <textPath xlinkHref="#textCircle">
                            • GET HYPED • GET NOTICED • GET RESULTS
                        </textPath>
                    </text>
                </motion.svg>

                {/* 4. Static Center Logo */}
                <h1 className="font-bold text-5xl italic -rotate-12 select-none">GH</h1>
            </div>

            <div className="md:w-[90%] mx-auto h-110 mt-10 bg-[#eae4d8] footer rounded-2xl flex items-start relative p-[100px_50px] md:[clip-path:polygon(0_80%,100%_0,100%_100%,0_100%)] rounded-tl-[15px] rounded-tr-[25px]">
            </div>
        </div>
    );
};

export default Footer;