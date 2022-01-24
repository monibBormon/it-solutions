import React from 'react';
import Counter from '../HomePage/Counter/Counter';

const About = () => {
    return (
        <div>
            <div className="container mx-auto py-14 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="about-text shadow-xl p-5">
                        <h4 className='text-4xl mb-5'>We are here to help you.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed necessitatibus pariatur illo ratione, laudantium iure inventore harum dolorem, delectus accusamus itaque minima vero, quidem quasi? Rerum perferendis omnis recusandae ratione laboriosam pariatur officia? Nemo dolores esse quae excepturi ullam. Quidem dignissimos quibusdam provident facere aliquid architecto mollitia modi facilis atque.</p>
                    </div>
                    <div className="about-img">
                        <img src="https://image.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Counter />
        </div>
    );
};

export default About;