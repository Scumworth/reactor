// components/LandingPage.js

import React from 'react';
import Header from './Header';
import Mission from './Mission';
import Features from './Features';
import Gallery from './Gallery';
import SubscribeContainer from './../containers/SubscribeContainer';
import Footer from './Footer';

const LandingPage = ({ handleClick }) => (
    <div>
        <Header handleClick = { handleClick }/>
        <Mission />
        <Features />
        <Gallery />
        <SubscribeContainer />
        <Footer />
    </div>
);

export default LandingPage;
