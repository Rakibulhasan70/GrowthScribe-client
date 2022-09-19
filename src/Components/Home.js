import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Part1 from './Part1';
import Part2 from './Part2';

const Home = () => {
    return (
        <div >
            <div style={{ backgroundColor: '#111720' }}>
                <Navbar></Navbar>
                <Part1></Part1>
                <Part2></Part2>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;