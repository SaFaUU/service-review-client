import React from 'react';
import Banner from './Banner';
import HomeTour from './HomeTour';
import SpecialOffers from './SpecialOffers';
import TopDestinations from './TopDestinations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDestinations></TopDestinations>
            <HomeTour></HomeTour>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;