import React from 'react';
import GetHypedLogo from '../logo/GetHyped';
import fire from "../../assets/firelogo.png";
import "../css/navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
    const navLinks = ["Expertise", "Work", "About", "Contact"];

    return (
        <div className='w-full px-10'>
            <div className="flex items-center justify-between mx-auto">
                <GetHypedLogo />

                <div className="bg-white p-2 rounded-2xl mt-5 shadow-sm">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link} className="nav-item group">
                                <div className="text-wrapper">
                                    {/* The original text */}
                                    <span className="text-primary">{link}</span>
                                    {/* The white text that rolls up from bottom */}
                                    <span className="text-secondary">{link}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get Result Button remains the same as your previous code */}
                <motion.div whileHover={{ rotate: -5, scale: 1.05 }} className='bg-[#fcb8fa] p-3 rounded-xl cursor-pointer mr-20 mt-5'>
                    <button className="font-bold flex items-center gap-3">
                        Get Result
                        <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center p-1">
                            <img src={fire} className="w-full h-full object-contain" alt="fire" />
                        </div>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;