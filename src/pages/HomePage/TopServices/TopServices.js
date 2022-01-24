import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TopServices.css'

const TopServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='bg-gray-100'>
            <div className="container mx-auto py-16 px-5 lg:px-0">
                <div className="section-title text-center mb-10">
                    <h3 className='text-4xl font-semibold mb-2'>Our Awesome Services</h3>
                    <span className='block w-28 bg-purple-400 h-1 mx-auto mb-1'></span>
                    <span className='block w-20 bg-pink-400 h-1 mx-auto mb-4'></span>
                    <p>We provies the solution of any it related services and problems.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        services.map(service => <div key={service.id} className={`service-box ${service.bgClass} bg-white py-10 px-8 rounded-lg shadow-xl`}>
                            <div className="icon">
                                <i class={`${service.icon} text-5xl mb-5 ${service.iconColor}`}></i>
                            </div>
                            <div className="service-text">
                                <h3 className='text-2xl mb-4 font-semibold'>{service.title}</h3>
                                <p className='mb-5'>{service.text}</p>
                                <Link to={`/service/${service.title}`}>
                                    <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopServices;

/* 
<div className="service-box service-bg2 bg-white py-10 px-8 rounded-lg shadow-xl">
                        <div className="icon">
                            <i class="far fa-edit text-5xl mb-5 text-blue-500"></i>
                        </div>
                        <div className="service-text">
                            <h3 className='text-2xl mb-4 font-semibold'>Graphic Design</h3>
                            <p className='mb-5'>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>
                            <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div className="service-box service-bg3 bg-white py-10 px-8 rounded-lg shadow-xl">
                        <div className="icon">
                            <i class="fas fa-lightbulb text-5xl mb-5 text-pink-500"></i>
                        </div>
                        <div className="service-text">
                            <h3 className='text-2xl mb-4 font-semibold'>Digital Marketing</h3>
                            <p className='mb-5'>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>
                            <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div className="service-box service-bg4 bg-white py-10 px-8 rounded-lg shadow-xl">
                        <div className="icon">
                            <i class="fas fa-laptop-code text-5xl mb-5 text-yellow-400"></i>
                        </div>
                        <div className="service-text">
                            <h3 className='text-2xl mb-4 font-semibold'>App Development</h3>
                            <p className='mb-5'>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>
                            <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div className="service-box service-bg5 bg-white py-10 px-8 rounded-lg shadow-xl">
                        <div className="icon">
                            <i class="far fa-chart-bar text-5xl mb-5 text-red-500"></i>
                        </div>
                        <div className="service-text">
                            <h3 className='text-2xl mb-4 font-semibold'>SEO</h3>
                            <p className='mb-5'>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>
                            <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div>
                    <div className="service-box service-bg6 bg-white py-10 px-8 rounded-lg shadow-xl">
                        <div className="icon">
                            <i class="far fa-images text-5xl mb-5 text-green-500"></i>
                        </div>
                        <div className="service-text">
                            <h3 className='text-2xl mb-4 font-semibold'>UI/UX Design</h3>
                            <p className='mb-5'>Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development.</p>
                            <button className='text-purple-600 text-lg font-semibold'>See Details <i class="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                    </div> */