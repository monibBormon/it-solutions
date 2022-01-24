import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter'>
            <div className="container mx-auto py-20 px-5 lg:px-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="counter-box flex items-center pl-5 border-l-4 border-purple-300">
                        <div className="counter-text text-center">
                            <h3 className='text-6xl font-semibold mb-3'>200</h3>
                            <p className='text-2xl'>Happy Clients</p>
                        </div>
                        <div className="counter-icon ml-5">
                            <i className="fas fa-users-cog text-4xl text-purple-500"></i>
                        </div>
                    </div>
                    <div className="counter-box flex items-center pl-5 border-l-4 border-purple-300">
                        <div className="counter-text text-center">
                            <h3 className='text-6xl font-semibold mb-3'>50</h3>
                            <p className='text-2xl'>Countries</p>
                        </div>
                        <div className="counter-icon ml-5">
                            <i className="fas fa-globe-asia text-4xl text-purple-500"></i>
                        </div>
                    </div>
                    <div className="counter-box flex items-center pl-5 border-l-4 border-purple-300">
                        <div className="counter-text text-center">
                            <h3 className='text-6xl font-semibold mb-3'>20</h3>
                            <p className='text-2xl'>Awards</p>
                        </div>
                        <div className="counter-icon ml-5">
                            <i className="fas fa-award text-4xl text-purple-500"></i>
                        </div>
                    </div>
                    <div className="counter-box flex items-center pl-5 border-l-4 border-purple-300">
                        <div className="counter-text text-center">
                            <h3 className='text-6xl font-semibold mb-3'>100</h3>
                            <p className='text-2xl'>Reviews</p>
                        </div>
                        <div className="counter-icon ml-5">
                            <i className="fas fa-star text-4xl text-purple-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;