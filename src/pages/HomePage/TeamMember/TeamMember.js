import React from 'react';
import './TeamMember.css';

const TeamMember = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="section-title text-center mb-10">
                    <h3 className='text-4xl font-semibold mb-2'>Our Expert Team</h3>
                    <span className='block w-28 bg-purple-400 h-1 mx-auto mb-1'></span>
                    <span className='block w-20 bg-pink-400 h-1 mx-auto mb-4'></span>
                    <p>We provies the solution of any it related services and problems.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="team-box text-center shadow">
                        <div className="team-img">
                            <img className='rounded-t-xl' src="https://i.ibb.co/G7CD0bz/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spir.jpg" alt="team" />
                        </div>
                        <div className="team-meta py-3">
                            <h4 className='text-3xl font-semibold'>Monib Bormon</h4>
                            <p>Web Developer</p>
                        </div>
                        <div className="team-social cursor-pointer pb-5">
                            <i class="fab fa-facebook text-2xl text-black mr-2"></i>
                            <i class="fab fa-twitter text-2xl text-black mr-2"></i>
                            <i class="fab fa-youtube text-2xl text-black mr-2"></i>
                        </div>
                    </div>
                    <div className="team-box shadow text-center">
                        <div className="team-img">
                            <img className='rounded-t-xl' src="https://i.ibb.co/hBMbQQP/happy-man-with-long-thick-ginger-beard-has-friendly-smile-273609-16616.jpg" alt="team" />
                        </div>
                        <div className="team-meta py-3">
                            <h4 className='text-3xl font-semibold'>Anamul Haque</h4>
                            <p>App Developer</p>
                        </div>
                        <div className="team-social cursor-pointer pb-5">
                            <i class="fab fa-facebook text-2xl text-black mr-2"></i>
                            <i class="fab fa-twitter text-2xl text-black mr-2"></i>
                            <i class="fab fa-youtube text-2xl text-black mr-2"></i>
                        </div>
                    </div>
                    <div className="team-box shadow text-center">
                        <div className="team-img">
                            <img className='rounded-t-xl' src="https://i.ibb.co/JvLP949/happy-asian-man-standing-with-arms-crossed-grey-wall-171337-10467.jpg" alt="team" />
                        </div>
                        <div className="team-meta py-3">
                            <h4 className='text-3xl font-semibold'>Alex Akash</h4>
                            <p>Graphic Designer</p>
                        </div>
                        <div className="team-social cursor-pointer pb-5">
                            <i class="fab fa-facebook text-2xl text-black mr-2"></i>
                            <i class="fab fa-twitter text-2xl text-black mr-2"></i>
                            <i class="fab fa-youtube text-2xl text-black mr-2"></i>
                        </div>
                    </div>
                    <div className="team-box shadow text-center">
                        <div className="team-img">
                            <img className='rounded-t-xl' src="https://i.ibb.co/x822wkJ/portrait-young-blonde-woman-wearing-denim-overalls-273609-10495.jpg" alt="team" />
                        </div>
                        <div className="team-meta py-3">
                            <h4 className='text-3xl font-semibold'>Maria</h4>
                            <p>Web Developer</p>
                        </div>
                        <div className="team-social cursor-pointer pb-5">
                            <i class="fab fa-facebook text-2xl text-black mr-2"></i>
                            <i class="fab fa-twitter text-2xl text-black mr-2"></i>
                            <i class="fab fa-youtube text-2xl text-black mr-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;