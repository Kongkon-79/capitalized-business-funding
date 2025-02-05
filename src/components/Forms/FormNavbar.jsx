import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const FormNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] py-[15px] md:py-[20px] lg:py-[25px]  roboto_font bg-white sticky top-0 z-50'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div>
                    <Link to='/'>
                        <img src='/assets/images/nav_logo.png' alt='nav logo' width={114} height={35} />
                    </Link>

                </div>
                {/* menu  */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-[32px]'>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Home</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>How it Works</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Funding Option</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Resources</li></NavLink>
                        <NavLink to="/about-us"><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>About Us</li></NavLink>
                    </ul>
                </div>
                {/* button  */}
                <div >
                    <button className='text-xl font-semibold leading-[32px] text-primary'>(603) 555-0123</button>

                </div>

                {/* small device  */}
                <div className='block md:hidden'>
                    {
                        isOpen ? <X onClick={() => setIsOpen(!isOpen)} /> : <Menu onClick={() => setIsOpen(!isOpen)} />
                    }

                </div>

            </div>
            <div className={`${isOpen ? "w-[70%] left-0" : "w-full -left-[100%]"} h-[40%] fixed top-[77px] z-20 bg-white`}>
                {
                    isOpen && <ul className='flex flex-col items-center gap-[32px]'>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer pt-4'>Home</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>How it Works</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Funding Option</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Resources</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>About Us</li>
                    </ul>
                }
            </div>
            {/* small device end  */}
        </div>
    );
};

export default FormNavbar;