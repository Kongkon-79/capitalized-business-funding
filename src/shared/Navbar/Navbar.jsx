import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='flex items-center justify-between py-[16px] px-[24px] bg-white rounded-[24px] border border-white shadow-[0px_-4px_12px_0px_rgba(61,110,234,0.15),0px_4px_12px_0px_rgba(1,32,69,0.15)]'>
                {/* logo  */}
                <div>
                    <NavLink to="/">
                        <img src='/assets/images/nav_logo.png' alt='nav logo' width={193} height={44} />
                    </NavLink>

                </div>
                {/* menu  */}
                <div>
                    <ul className='flex items-center gap-[32px]'>
                        <NavLink to="/second-step">
                            <li className='text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100'>Home</li>
                        </NavLink>
                        <li className='text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100'>How it work</li>
                        <li className='text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100'>Why Capitalized?</li>
                        <li className='text-base font-normal leading-[28px] text-secondary-200 hover:text-secondary-100'>Become a partner</li>
                    </ul>
                </div>
                {/* button  */}
                <div>
                    <button className='text-xs font-semibold leading-[28px] text-primary py-[8px] px-[20px] rounded-[8px] border border-primary bg-white/15 shadow-md shadow-[#587DFF59]'>Admin Panel</button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;