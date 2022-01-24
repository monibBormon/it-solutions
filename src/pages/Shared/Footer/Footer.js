import React from 'react';

const Footer = () => {
    return (
        <div className='border-t-2 border-purple-200'>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
                    <div className="footer-box pr-10">
                        <h4 className='text-2xl mb-4 font-semibold'>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo asperiores quaerat enim excepturi earum hic deleniti quas autem beatae!</p>
                    </div>
                    <div className="footer-box">
                        <h4 className='text-2xl mb-4 font-semibold'>Quick Links</h4>
                        <p className='cursor-pointer mb-1 hover:underline'>About Us</p>
                        <p className='cursor-pointer mb-1 hover:underline'>Contact Us</p>
                        <p className='cursor-pointer mb-1 hover:underline'>Privacy & Policy</p>
                        <p className='cursor-pointer mb-1 hover:underline'>Terms & conditions</p>
                    </div>
                    <div className="footer-box">
                        <h4 className='text-2xl mb-4 font-semibold'>Office Info</h4>
                        <p className='mb-2'><i className="fas fa-map-marker-alt text-purple-400 mr-2"></i> California, United States</p>
                        <p className='mb-2'><i className="fas fa-envelope text-purple-400 mr-2"></i> it@solutions.com</p>
                        <p className='mb-2'><i className="fas fa-phone-alt text-purple-400 mr-2"></i> +448030039</p>
                    </div>
                    <div className="footer-box">
                        <h4 className='text-2xl mb-6 font-semibold'>Subscribe Now</h4>
                        <input type="text" className='border-b-2 py-1 pl-2 rounded-lg border-purple-600 w-3/4 focus:outline-none pr-8' placeholder='Enter you Email' />
                        <button className='-ml-6 text-purple-500'><i className="fas fa-paper-plane text-xl"></i></button>
                    </div>
                </div>
                <p className='text-center pt-5 pb-10 font-semibold'>All right reserved to IT-Solutions &copy; 2022</p>
            </div>
        </div>
    );
};

export default Footer;