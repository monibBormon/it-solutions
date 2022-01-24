import React from 'react';
import './AboutHome.css'

const AboutHome = () => {
    return (
        <div>
            <div className="container mx-auto pt-20 pb-32 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="about-bg overflow-hidden">
                        <div className='one'></div>
                        <div className="two"></div>
                    </div>
                    <div className="about-text p-5">
                        <h3 className='text-6xl font-semibold mb-3'>About Us</h3>
                        <h4 className='text-3xl mb-5'>We are the finest agency whom you are looking for.</h4>
                        <p className='mb-10'> We are. A digital service company with a passion to design, build and run software for global innovation-driven businesses of various sizes Our Clients Love us · Timely Delivery. We commit a deadline and we meet it.</p>
                        <button className='bg-purple-600 px-14 py-3 text-white font-semibold rounded-full hover:text-purple-600 hover:bg-white border-2 border-transparent hover:border-purple-600 transition-all duration-300'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;