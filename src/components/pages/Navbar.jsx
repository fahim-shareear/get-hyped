import React, { useState } from 'react';
import GetHypedLogo from '../logo/GetHyped';
import fire from "../../assets/firelogo.png";
import "../css/navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const navLinks = ["Expertise", "Work", "About", "Contact"];
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className='w-full px-6 md:px-10 relative'>
            <div className="flex items-center justify-between mx-auto">
                <GetHypedLogo />

                {/* Desktop Nav */}
                <div className="bg-white p-2 rounded-2xl mt-5 shadow-sm hidden md:flex">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link} className="nav-item group">
                                <div className="text-wrapper">
                                    <span className="text-primary">{link}</span>
                                    <span className="text-secondary">{link}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Button */}
                <motion.div whileHover={{ rotate: -5, scale: 1.05 }} className='bg-[#fcb8fa] p-3 rounded-xl cursor-pointer mt-5 hidden md:flex'>
                    <button className="font-bold flex items-center gap-3">
                        Get Result
                        <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center p-1">
                            <img src={fire} className="w-full h-full object-contain" alt="fire" />
                        </div>
                    </button>
                </motion.div>

                {/* Hamburger Button */}
                <div
                    className="bg-[#fcb8fa] rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer md:hidden mt-5 z-50"
                    onClick={handleMenu}
                >
                    {menu ? <IoClose size={24} /> : <GiHamburgerMenu size={20} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menu && (
                    <motion.div 
                        key="mobile-menu" // Added key to ensure clean re-mounts
                        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-100%" }} 
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: 0 }}      
                        exit={{ opacity: 0, scale: 0, x: "-50%", y: "-100%" }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }} 
                        className='absolute top-full left-1/2 w-[90%] max-w-md bg-[#fcb8fa] flex items-center justify-center z-40 h-140 shadow-lg rounded-xl mt-3 origin-top'
                    >
                        <ul className='flex items-center justify-center flex-col gap-2'>
                            {navLinks.map((links) => (
                                <li key={links} className='bg-white rounded-md p-2 font-bold text-2xl'>
                                    {links}
                                </li>
                            ))}
                        </ul>

                        
                        <motion.div 
                            key="bottom-button-anim"
                            initial={{ y: 150, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }}    
                            transition={{ 
                                delay: 0.6,    
                                duration: 0.4,
                                ease: "easeOut" 
                            }}
                            className="absolute bottom-10"
                        >
                            <button className="font-bold flex items-center gap-3 bg-black p-2 rounded-xl text-white text-center">
                                Get Result
                                <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center p-1">
                                    <img src={fire} className="w-full h-full object-contain" alt="fire" />
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;