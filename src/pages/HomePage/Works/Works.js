import React from 'react';
import './Works.css'

const Works = () => {
    return (
        <div>
            <div className="container mx-auto py-20 px-5 lg:px-0">
                <div className="section-title mb-10">
                    <h3 className='text-4xl font-semibold mb-2'>Our Works</h3>
                    <span className='block w-28 bg-purple-400 h-1 mb-1'></span>
                    <span className='block w-20 bg-pink-400 h-1 mb-4'></span>
                    <p>We provies the solution of any it related services and problems.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="work-box shadow-xl p-4 rounded">
                        <div className="work-img">
                            <img className='h-52 w-full' src="https://image.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg" alt="" />
                        </div>
                        <div className="work-meta py-5">
                            <h4 className='text-xl font-semibold'>Website Development</h4>
                            <p>If you want to live or you want to develop your own website and want to grow your business.</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="work-box shadow-xl p-4 rounded">
                                <div className="work-img">
                                    <img src="https://image.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page-tiny-people-painting-units-webpage-illustration-website-designers-content-managers-internet-promotion-concept-landing-page_74855-17962.jpg" alt="" />
                                </div>
                                <div className="work-meta py-5">
                                    <h4 className='text-xl font-semibold'>Web Design</h4>
                                    <p>If you want to live or you want to develop your own website and want to grow your business.</p>
                                </div>
                            </div>
                            <div className="work-box shadow-xl p-4 rounded">
                                <div className="work-img">
                                    <img src="https://image.freepik.com/free-vector/domain-registration-banner-concept-website-name-url-address-vector-landing-page-hosting-service-web-sites-with-isometric-illustration-digital-tablet-with-register-form_107791-9229.jpg" alt="" />
                                </div>
                                <div className="work-meta py-5">
                                    <h4 className='text-xl font-semibold'>Graphic Design</h4>
                                    <p>If you want to live or you want to develop your own website and want to grow your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;

/* 
<div className="work-box shadow-xl p-4 rounded">
    <div className="work-img">
        <img src="https://image.freepik.com/free-vector/vector-banner-software-development_107791-3284.jpg" alt="" />
    </div>
    <div className="work-meta py-5">
        <h4 className='text-xl font-semibold'>App Development</h4>
        <p>If you want to live or you want to develop your own website and want to grow your business.</p>
    </div>
</div> */