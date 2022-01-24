import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="container mx-auto py-20 px-5 lg:px-0">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className="hero-text pr-10 mb-5 lg:mb-0">
                        <h2 className='text-5xl mb-8 font-medium'>Work with us to grow your Business.</h2>
                        <p className='mb-6'>We are. A digital service company with a passion to design, build and run software for global innovation-driven businesses of various sizes Our Clients Love us · Timely Delivery. We commit a deadline and we meet it.</p>
                        <button className='bg-purple-600 px-14 py-3 text-white font-semibold rounded-full hover:text-purple-600 hover:bg-white border-2 border-transparent hover:border-purple-600 transition-all duration-300'>Get Started</button>
                    </div>
                    <div className="hero-bg">
                        <img className='rounded' src="https://image.freepik.com/free-photo/discussing-video-course_1098-13061.jpg" alt="hero-bg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;