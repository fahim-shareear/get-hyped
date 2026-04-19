import React from 'react';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router';
import Footer from './pages/Footer';
import Banner from './pages/Banner';
import Expertise from './pages/Expertise';
import MediaCard from './pages/MediaCard';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Expertise></Expertise>
            <MediaCard></MediaCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;