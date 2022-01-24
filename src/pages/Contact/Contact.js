import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class Contact extends Component {
    render() {
        return (
            <div className='bg-gray-200'>
                <div className="container mx-auto py-16 px-5 lg:px-0">
                    <div className="section-title text-center mb-10">
                        <h3 className='text-4xl font-semibold mb-2'>Contact Us</h3>
                        <p>We provies the solution of any it related services and problems.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="contact-box pr-10">
                            <h3 className='text-2xl mb-5 font-semibold'>Contact Information</h3>
                            <p>Please fill up the form to contact with us to grow your business plan.</p>
                            <div className='mt-5'>
                                <p className='mb-1'><i className="fas fa-map-marker-alt text-purple-400 mr-2"></i> California, United States</p>
                                <p className='mb-1'><i className="fas fa-envelope text-purple-400 mr-2"></i> it@solutions.com</p>
                                <p className='mb-1'><i className="fas fa-phone-alt text-purple-400 mr-2"></i> +448030039</p>
                            </div>
                        </div>
                        <div className="contact-form col-span-2 mt-10 lg:mt-0">
                            <label className='inline-block mb-2' htmlFor="name">Full Name</label> <br />
                            <input type="text" className='w-2/3 mb-2 h-12 pl-3 focus:outline-none' placeholder='Enter Name' /> <br />
                            <label className='inline-block my-2' htmlFor="email">Your Email</label> <br />
                            <input type="email" className='w-2/3 mb-2 h-12 pl-3 focus:outline-none' placeholder='Enter Email' /> <br />
                            <label className='inline-block my-2' htmlFor="message">Message</label> <br />
                            <textarea className='w-2/3 h-20 p-3 focus:outline-none' placeholder='Your message'></textarea><br />
                            <button className='bg-purple-500 text-white font-semibold px-10 py-3 mt-5' type='submit'>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="map w-full relative mb-96">
                    <Map
                        google={this.props.google}
                        style={{ width: '100%', height: "350px" }}
                        zoom={10}
                        initialCenter={
                            {
                                lat: 28.704060,
                                lng: 77.102493
                            }
                        }
                    />
                </div>
                <MessengerCustomerChat
                    pageId="1453184084801462"
                    appId="411974633985782"
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD1rvXwtLj39SuYFTNJXQMgjMflD7VwcUk"
})(Contact);