import React from 'react';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router';
import Footer from './pages/Footer';
import Banner from './pages/Banner';
import Expertise from './pages/Expertise';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Expertise></Expertise>
            <Footer></Footer>
        </div>
    );
};

export default Home;