import React from 'react';
import fire from "../../assets/firelogo.png";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IoMailSharp } from 'react-icons/io5';
import "../../components/css/footer.css"
import GetHyped from '../logo/GetHyped';
import { li } from 'framer-motion/client';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const { scrollYProgress } = useScroll();
    const menuDiv = ['Expertise', 'Work', 'About', 'Contact'];
    const socialLogo = [
        {id: 1, icon: <RiLinkedinFill /> },
        {id: 2, icon: <FaTiktok /> },
        {id: 3, icon: <FaInstagram /> },
        {id: 4, icon: <FaYoutube /> }
    ]

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className='w-full h-130 relative'>
            <div className="md:flex items-center flex-col hidden">
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

            <div className="w-40 h-40 rounded-full bg-[#fcb8fa] right-65 bottom-25 overflow-visible absolute z-100 md:flex items-center justify-center hidden">

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

            <div className=" md:w-[90%] mx-auto h-auto md:h-110 mt-10 bg-[#eae4d8] footer rounded-2xl flex flex-col md:flex-row md:items-start items-center justify-center relative p-6 md:p-[100px_50px] md:[clip-path:polygon(0_80%,100%_0,100%_100%,0_100%)] rounded-tl-[15px] rounded-tr-[25px] w-80%">

                <div className="z-100 md:absolute md:right-75 md:bottom-10 w-full md:w-auto flex flex-col md:flex-col items-center md:items-start gap-6 md:gap-0">
                    <div className="menu_div max-w-7xl mx-auto md:w-auto">
                        <ul className="flex flex-row md:flex-row items-center md:items-center gap-3 md:gap-6">
                            {menuDiv.map((menu, index)=> (
                                <li key={index} className="font-bold text-sm md:text-[1rem] bg-white rounded-xl p-2 md:p-3 cursor-pointer">
                                    {menu}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mt-6 md:mt-8 w-full md:w-auto">
                        <ul className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                            {
                                socialLogo.map((logo) => (
                                    <li key={logo.id} className="text-lg md:text-2xl cursor-pointer bg-white rounded-full p-2 md:p-3">
                                        {logo.icon}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="md:flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mt-6 md:mt-7 w-full md:w-auto text-center md:text-left hidden">
                        <h1 className="font-bold text-xs md:text-sm text-[#918d86]">&copy; 2025 Get Hyped</h1>
                        <h1 className="hidden md:inline font-bold text-xs md:text-sm text-[#918d86]">&copy; Design by Dylan</h1>
                        <h1 className="md:hidden font-bold text-xs text-[#918d86]">&copy; Design by Dylan</h1>
                    </div>
                </div>

                <div className="z-100 md:absolute md:right-20 md:bottom-10 w-full md:w-auto flex flex-col items-center md:items-start gap-6 md:gap-0 text-center md:text-left mt-5">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-bold text-base md:text-xl mb-2 hidden md:flex ">Contact</h1>
                        <p className='font-bold text-sm md:text-lg'>info@gethyped.nl</p>
                        <p className='font-bold text-sm md:text-lg'>+31 6 1533 7496</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-2 md:mt-6 mt-3">
                        <h1 className="font-bold text-base md:text-xl hidden md:flex">Address</h1>
                        <p className='font-bold text-sm md:text-lg'>Beltrumsestraat 6, <br /> 7141 AL Groenlo</p>
                    </div>

                    <div className="md:flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mt-6 md:mt-7 w-full md:w-auto text-center md:text-left">
                        <h1 className="font-bold text-xs md:text-sm text-[#918d86]">&copy; 2025 Get Hyped</h1>
                        <h1 className="hidden md:inline font-bold text-xs md:text-sm text-[#918d86]">&copy; Design by Dylan</h1>
                        <h1 className="md:hidden font-bold text-xs text-[#918d86] mt-3">&copy; Design by Dylan</h1>
                        <h1 className="font-bold text-xs md:text-sm text-[#918d86] md:mt-5 mt-3">Privacyvoorwaarden</h1>
                    </div>

                    <div>
                        <h1 className="font-bold text-xs md:text-sm text-[#918d86] md:mt-5 hidden md:flex">Privacyvoorwaarden</h1>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Footer;