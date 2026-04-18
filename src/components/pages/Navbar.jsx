import React from 'react';
import GetHypedLogo from '../logo/GetHyped';
import fire from "../../assets/firelogo.png";
// import "../css/navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className="flex items-center justify-between mx-auto">
                <GetHypedLogo></GetHypedLogo>
                <div className="bg-white p-4 rounded-xl mt-5">
                    <ul className="flex items-center gap-8">
                        <li className="font-bold cursor-pointer">Expertise</li>
                        <li className="font-bold cursor-pointer">Work</li>
                        <li className="font-bold cursor-pointer">About</li>
                        <li className="font-bold cursor-pointer">Contact</li>
                    </ul>
                </div>
                <motion.div
                    whileHover={{ rotate: -5, scale: 1.05 }} // Rotates 5 degrees left and grows slightly
                    className='bg-[#fcb8fa] p-3 rounded-xl cursor-pointer mr-20'
                >
                    <button className="font-bold flex items-center gap-2">
                        Get Result
                        <div className="bg-white w-8 h-8 rounded-md">
                            <img src={fire} className="w-8" alt="fire" />
                        </div>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;