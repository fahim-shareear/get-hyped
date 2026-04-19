import React from 'react';
import fire from "../../assets/firelogo.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoMailSharp } from 'react-icons/io5';
import "../../components/css/footer.css"
import GetHyped from '../logo/GetHyped';

const Footer = () => {
    return (
        <div className='w-full h-130'>
            <div className="flex items-center flex-col">
                <h1 className="font-bold text-[8rem] tracking-tighter">Let's Get Hyped!</h1>
                <div className="flex items-center gap-5 mx-auto">
                    
                    <motion.div
                        whileHover={{rotate: -5, scale: 1.05}}>
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

            <div className="w-[80%] mx-auto h-110 mt-10 bg-[#eae4d8] footer rounded-2xl">
                <GetHyped></GetHyped>
            </div>
        </div>
    );
};

export default Footer;