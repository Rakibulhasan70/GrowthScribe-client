import React from 'react';
import bannerImage from '../images/Pickup_Illustration.png'

const Part1 = () => {
    return (
        <div className='pl-8 pr-8 lg:px-20'>
            <div className='mb-16 lg:mt-36'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                    <div className='text-white' >
                        <h2 className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>Vehicle Maintenance</h2>
                        <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>From The Comfort of</p>
                        <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>Your Home</p>
                        <p className='text-md my-10 text-gray-500'>Open Auto Soothes the hassle of maintaining your vehicle and helps
                            <br />
                            you deal with unexpected repairs worry-free </p>

                        <form>
                            <input style={{ backgroundColor: '#111720' }} type="text" placeholder="Enter Your Name" class="input w-full max-w-xs rounded-3xl border-gray-500 mb-5 p-6" />
                            <br />
                            <input style={{ backgroundColor: '#111720' }} type="email" placeholder="Enter Your Email" class="input w-full max-w-xs rounded-3xl border-gray-500 mb-5 p-6" />
                            <br />
                            <input style={{ backgroundColor: '#111720' }} type="number" placeholder="Phone Number" class="input w-full max-w-xs rounded-3xl border-gray-500 mb-5 p-6" />
                            <br />
                            <input style={{ backgroundColor: '#111720' }} type="submit" value='Submit' class="input w-full max-w-xs rounded-3xl border-gray-500  text-lg hover:text-[#a809cc] lg:mb-0 mb-16" />
                        </form>

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