import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import AboutHome from '../AboutHome/AboutHome';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import Hero from '../Hero/Hero';
import TeamMember from '../TeamMember/TeamMember';
import TopServices from '../TopServices/TopServices';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Hero />
            <TopServices />
            <AboutHome />
            <Counter />
            <Works />
            <TeamMember />
            <Blogs />
            <MessengerCustomerChat
                pageId="1453184084801462"
                appId="411974633985782"
            />
        </div>
    );
};

export default Home;