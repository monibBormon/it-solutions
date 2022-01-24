import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="section-title text-center mb-10">
                    <h3 className='text-4xl font-semibold mb-2'>Latest Blogs</h3>
                    <span className='block w-28 bg-purple-400 h-1 mx-auto mb-1'></span>
                    <span className='block w-20 bg-pink-400 h-1 mx-auto mb-4'></span>
                    <p>We provies the solution of any it related services and problems.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="single-blog-box blog-bg-1 bg-gray-700 bg-opacity-95 bg-blend-overlay flex flex-col justify-end py-8 pl-5 rounded-lg">
                        <div className="blog-meta text-white text-sm mb-3">
                            <span className='mr-5'><i className="fas fa-calendar"></i> 24/02/22</span>
                            <span><i className="fas fa-comment"></i> 5 comments</span>
                        </div>
                        <div className="blog-text z-10">
                            <h2 className='text-white text-3xl'>Be commited to be successfull</h2>
                        </div>
                        <div className="blog-overlay p-8 text-white rounded-lg">
                            <div className="blog-meta text-white text-sm mb-3">
                                <span className='mr-5'><i className="fas fa-calendar"></i> 24/02/22</span>
                                <span><i className="fas fa-comment"></i> 5 comments</span>
                            </div>
                            <h2 className='text-2xl mb-3'>Be commited to be successfull</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas necessitatibus suscipit sequi nesciunt quisquam rem officia ipsam harum aut...</p>
                            <button className='text-xl mt-14'>Continue Reading <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="single-blog-box blog-bg-2 bg-gray-700 bg-opacity-95 bg-blend-overlay flex flex-col justify-end py-8 pl-5 rounded-lg">
                        <div className="blog-meta text-white text-sm mb-3">
                            <span className='mr-5'><i className="fas fa-calendar"></i> 24/02/22</span>
                            <span><i className="fas fa-comment"></i> 3 comments</span>
                        </div>
                        <div className="blog-text z-10">
                            <h2 className='text-white text-3xl'>Want to shine your future?</h2>
                        </div>
                        <div className="blog-overlay p-8 text-white rounded-lg">
                            <div className="blog-meta text-white text-sm mb-3">
                                <span className='mr-5'><i className="fas fa-calendar"></i> 24/02/22</span>
                                <span><i className="fas fa-comment"></i> 3 comments</span>
                            </div>
                            <h2 className='text-2xl mb-3'>Want to shine your future?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas necessitatibus suscipit sequi nesciunt quisquam rem officia ipsam harum aut...</p>
                            <button className='text-xl mt-14'>Continue Reading <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="single-blog-box blog-bg-3 bg-gray-700 bg-opacity-95 bg-blend-overlay flex flex-col justify-end py-8 pl-5 rounded-lg">
                        <div className="blog-meta text-white text-sm mb-3">
                            <span className='mr-5'><i className="fas fa-calendar"></i> 01/11/22</span>
                            <span><i className="fas fa-comment"></i> 10 comments</span>
                        </div>
                        <div className="blog-text z-10">
                            <h2 className='text-white text-3xl'>Team is very important for a business.</h2>
                        </div>
                        <div className="blog-overlay p-8 text-white rounded-lg">
                            <div className="blog-meta text-white text-sm mb-3">
                                <span className='mr-5'><i className="fas fa-calendar"></i> 01/11/22</span>
                                <span><i className="fas fa-comment"></i>10 comments</span>
                            </div>
                            <h2 className='text-2xl mb-3'>Team is very important for a business.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas necessitatibus suscipit sequi nesciunt quisquam rem officia ipsam harum aut...</p>
                            <button className='text-xl mt-14'>Continue Reading <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;