import React from 'react';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router';
import Footer from './pages/Footer';
import Banner from './pages/Banner';
import Expertise from './pages/Expertise';
import MediaCard from './pages/MediaCard';
import Brands from './pages/Brands';

const Home = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Banner></Banner>
            <Expertise></Expertise>
            <MediaCard></MediaCard>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;