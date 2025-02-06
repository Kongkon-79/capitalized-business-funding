import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeAllComponents = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center container bg-white rounded-xl p-[32px] my-52'>
            <div className='flex justify-center items-center pb-10'>
                <img src="/assets/images/nav_logo.png" alt='nav logo' width={193} height={44} />
            </div>
            <h2 className='text-6xl font-bold leading-[40px] text-secondary-100 text-center pb-10'>Great Job!</h2>
            <p className='text-lg font-normal text-secondary leading-[32p]x text-center'>Our Funding Specialists are working on your funding terms and will touch base shortly.</p>
            <div className='flex items-center justify-center pt-10'>
                <NavLink to="/">
                    <button className='text-lg font-normal text-primary border border-primary py-[10px] px-[24px] rounded-lg'>Back</button>
                </NavLink>
            </div>
        </div>
    );
};

export default HomeAllComponents;