import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div className='py-[24px] md:py-[30px] lg:py-[36px]'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;