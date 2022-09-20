import React from 'react';
import bannerImage from '../images/Pickup_Illustration.png'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Part1 = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const review = {
            email: data?.email,
            Name: data?.name,

        }
        fetch('https://growscribe-server.onrender.com/input', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Submited!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Faild to Post!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                }
            })
    };
    return (
        <div className='pl-8 pr-8 lg:px-20 pt-10 lg:pt-0'>
            <div className='mb-16 lg:mt-36'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                    <div className='text-white' >
                        <h2 className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>Vehicle Maintenance</h2>
                        <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300'>From The Comfort of</p>
                        <p className='font-bold mb-3 text-3xl lg:text-4xl lg:leading-10 text-gray-300 text-center lg:text-start'>Your Home</p>
                        <p className='text-sm my-10 lg:w-4/5 text-gray-500 text-center lg:text-start leading-loose lg:leading-7 '>Open Auto Soothes the hassle of maintaining your vehicle and helps
                            you deal with unexpected repairs worry-free </p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} type="text" placeholder="Enter Your Name" class="input w-full max-w-xs rounded-3xl border-gray-500 mb-5 p-6 bg-[#111720]" required />
                            <br />
                            <input {...register("email")} type="email" placeholder="Enter Your Email" class="input w-full max-w-xs rounded-3xl border-gray-500 mb-5 p-6 bg-[#111720]" required />
                            <br />
                            <input type="submit" value='Submit' class="input w-full max-w-xs rounded-3xl border-gray-500  text-lg bg-[#111720] hover:bg-[#a809cc] lg:mb-0 mb-16" />
                        </form>

                    </div>
                    <div className='w-84 lg:w-full '>
                        <img className=' lg:w-full ' style={{ borderRadius: '10px' }} src={bannerImage} alt="" />
                        <div className='flex items-center lg:justify-end justify-center  text-center mt-10 lg:mt-10 mx-2  '>
                            <BsFacebook className='text-white ' />
                            <BsTwitter className='text-white lg:ml-5 ml-8' />
                            <BsYoutube className='text-white lg:ml-5 ml-8' />
                            <BsLinkedin className='text-white lg:ml-5 ml-8' />
                            <BsInstagram className='text-white lg:ml-5 ml-8' />
                        </div>
                    </div>

                </div >
            </div>
        </div >
    );
};

export default Part1;