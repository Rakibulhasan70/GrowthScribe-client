import React from 'react';
import bodyImage from '../images/picku service.png'

const Part2 = () => {
    return (
        <div style={{ backgroundColor: '#10141b' }} className='pl-8 pr-8 lg:px-10 pb-32'>
            <div className='my-0 pt-10 lg:pt-24'>
                <div className='flex lg:flex-row flex-col-reverse '>
                    <div >
                        <img className=' lg:w-9/12 ' style={{ borderRadius: '10px' }} src={bodyImage} alt="" />
                    </div>
                    <div className='text-white mt-0 lg:mt-20 ' >
                        <h2 className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300 mt-8'>Focused on</h2>
                        <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>Time Saving</p>
                        <p className='mt-7 leading-7 text-gray-400 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam fugiat asperiores exercitationem doloribus rerum et laudantium dolore consequatur officia alias ullam corporis blanditiis saepe enim, ea quas doloremque debitis at eaque ipsum quae cupiditate porro dignissimos? Sapiente, nemo temporibus?</p>
                        <button className="border-2 border-gray-500 text-gray-400 font-semibold rounded-3xl py-3 px-6 mt-10 mb-10 lg:mb-0">Download the mobile app</button>
                    </div>
                </div >
            </div>
        </div >
    );
};

export default Part2;