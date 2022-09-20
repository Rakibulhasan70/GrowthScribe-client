import React from 'react';
import { MdPhone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#10141b' }} className='pl-4 pr-4 lg:px-20 pb-10 pt-10'>
            <div className='lg:flex justify-between text-center'>
                <h2 className=' normal-case text-2xl font-semibold text-white leading-9'>OPENAUTO</h2>
                <div className='flex justify-between mt-10 lg:mt-0'>
                    <h2 className='flex items-center text-sm pl-2 lg:pl-0 lg:mr-16 lg:text-md text-gray-400'><MdPhone className='mr-2'></MdPhone>+769 586 4558</h2>
                    <h2 className='flex items-center text-sm pr-2 lg:pr-0 lg:mr-16 lg:text-md text-gray-400'><AiOutlineMail className='mr-2'></AiOutlineMail>service@openauto.ca</h2>
                </div>
            </div>

            <div className='lg:flex justify-between text-center mt-10 mx-2'>
                <h2 className=' text-sm lg:mr-16 lg:text-md text-gray-400 text-center'> Open Auto @ all rights reserved</h2>
                <div className='flex justify-between lg:hidden mt-10 lg:mt-0'>
                    <h2 className='flex items-center text-sm lg:mr-16 lg:text-md text-gray-400'>Privacy policy</h2>
                    <h2 className='flex items-center text-sm lg:mr-16 lg:text-md text-gray-400'>Terms of use</h2>
                    <h2 className='flex items-center text-sm lg:mr-16 lg:text-md text-gray-400'>Cookie Policy</h2>

                </div>
                <div className='flex justify-between items-center text-center mt-10 lg:mt-0 mx-2 lg:mr-6 '>
                    <BsFacebook className='text-white lg:mr-8 hover:cursor-pointer' />
                    <BsTwitter className='text-white lg:mr-8 hover:cursor-pointer' />
                    <BsYoutube className='text-white lg:mr-8 hover:cursor-pointer' />
                    <BsLinkedin className='text-white lg:mr-8 hover:cursor-pointer' />
                    <BsInstagram className='text-white lg:mr-8 hover:cursor-pointer' />
                </div>

            </div>
        </div>
    );
};

export default Footer;