import React from 'react';
import Navbar from './Navbar';
import Part1 from './Part1';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#111720' }}>
            <div>
                <Navbar></Navbar>
                <Part1></Part1>
            </div>
            <div></div>
        </div>
    );
};

export default Home;