import React from 'react';
import { MdPhone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
const Navbar = () => {
    return (
        <div style={{ backgroundColor: '#111720' }} className="navbar bg-base-100 py-2 pl-8 lg:px-20 lg:pt-8">
            <div className="navbar-start">
                <div className="dropdown">
                </div>
                <a className=" normal-case text-2xl font-semibold text-white  leading-9">OPENAUTO</a>
            </div>
            <div className="navbar-end text-slate-300 invisible lg:visible">
                <h2 className='flex items-center mr-8 text-sm text-gray-400'><MdPhone className='mr-2'></MdPhone>+769 586 4558</h2>
                <h2 className='flex items-center mr-8 text-sm text-gray-400'><AiOutlineMail className='mr-2'></AiOutlineMail>service@openauto.ca</h2>
                <button className="border-2 border-gray-500 text-gray-400 text-xs rounded-3xl py-2 px-2">Download the mobile app</button>
            </div>
        </div>
    );
};

export default Navbar;