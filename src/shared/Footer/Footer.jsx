import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='container flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 border-t border-primary/50 pt-[27px]'>
                <div>
                    <p className='text-base font-normal leading-[30px] md:leading-[45px] lg:leading-[55px] text-primary/50'>@ 2025 Business Funding, All eights Reseerved</p>
                </div>
                <div className='flex items-center gap-[22px]'>
                <Facebook className='w-[14px] h-[14px] text-primary'/>
                <Linkedin className='w-[14px] h-[14px] text-primary'/>
                <Instagram className='w-[14px] h-[14px] text-primary'/>
                </div>
                <div className='flex items-center gap-[48px]'>
                    <span className='text-base font-normal leading-[28px] text-primary/50'>Privacy Policy</span>
                    <span className='text-base font-normal leading-[28px] text-primary/50'>Privacy Policy</span>
                </div>

            </div>
        </div>
    );
};

export default Footer;