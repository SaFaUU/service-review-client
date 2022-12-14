import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className='mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;