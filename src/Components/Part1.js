import React from 'react';
import bannerImage from '../images/Pickup_Illustration.png'

const Part1 = () => {
    return (
        <div className='pl-8 lg:px-10'>
            <div className='my-28'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                    <div className='text-white' >
                        <h2 className='font-bold mb-3  text-4xl leading-10 text-gray-300'>Vehicle Maintenance</h2>
                        <p className='font-bold mb-3 text-4xl leading-10 text-gray-300'>From The Comfort of</p>
                        <p className='font-bold mb-3 text-4xl leading-10 text-gray-300'>Your Home</p>
                        <p className='text-md my-10 text-gray-500'>Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free </p>

                    </div>
                    <div className='w-84 lg:w-full '>
                        <img className=' lg:w-full ' style={{ borderRadius: '10px' }} src={bannerImage} alt="" />
                    </div>
                </div >
            </div>
        </div >
    );
};

export default Part1;