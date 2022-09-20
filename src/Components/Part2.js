import React from 'react';
import bodyImage from '../images/picku service.png'

const Part2 = () => {

    return (
        <div style={{ backgroundColor: '#10141b' }} className='pl-8 pr-8 lg:px-20 '>
            <div className='  lg:pt-24 pb-24'>
                <div className='flex lg:flex-row flex-col-reverse'>
                    <div >
                        <img className=' lg:w-9/12 ' style={{ borderRadius: '10px' }} src={bodyImage} alt="" />
                    </div>
                    <div className='text-white mt-0 lg:mt-12 ' >
                        <h2 className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-normal text-gray-300 mt-8 text-center lg:text-start lg:w-64'>Focused on Time Saving</h2>
                        {/* <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300 text-center lg:text-start'>Time Saving</p> */}
                        <p className='mt-7 lg:leading-relaxed text-gray-500 text-md text-center lg:text-start leading-loose '>Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever seen the 1500s, when an unknown printertook a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leep into elctronic typesetting, remaining essentially unchanged. it was?</p>
                        <button className="border-2 ml-8 lg:ml-0 border-gray-500 text-sm text-gray-400 font-semibold rounded-3xl py-3 px-6 mt-10 mb-10 lg:mb-0">Download the mobile app</button>
                    </div>

                </div >
            </div>
            <hr style={{ border: '1px solid #263238' }} />
        </div >
    );
};

export default Part2;