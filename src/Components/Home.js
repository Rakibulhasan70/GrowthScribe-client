import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Part1 from './Part1';
import Part2 from './Part2';
import ScrollToTop from 'react-scroll-to-top';
import './Part1.css'


const Home = () => {
    return (
        <div >
            <div style={{ backgroundColor: '#111720' }}>
                <ScrollToTop smooth color="white" />
                <Navbar></Navbar>
                <Part1></Part1>
                <Part2></Part2>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;