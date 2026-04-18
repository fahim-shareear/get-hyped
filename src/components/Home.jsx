import React from 'react';
import Navbar from './pages/Navbar';
import { Outlet } from 'react-router';
import Footer from './pages/Footer';
import Banner from './pages/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;