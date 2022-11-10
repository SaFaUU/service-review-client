import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner';
import HomeServices from './HomeServices';
import SpecialOffers from './SpecialOffers';
import TopDestinations from './TopDestinations';

const Home = () => {
    const services = useLoaderData();
    // console.log(services)
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <TopDestinations></TopDestinations>
            <HomeServices
                services={services}
            ></HomeServices>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;