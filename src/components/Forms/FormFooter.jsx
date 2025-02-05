import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const FormFooter = () => {
    return (
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px]'>
            <div className='flex items-center justify-between pt-[27px] pb-[36px] border-t-[1px] border-primary/50 mt-[27px]'>
            <p className='text-base font-normal leading-[55px] text-primary/50'>@ 2025 Business Funding, All eights Reseerved</p>
            <div className='flex items-center gap-[18px] pt-[16px]'>
                <Linkedin className='w-[14px] h-[14px text-primary' />
                <Facebook className='w-[14px] h-[14px text-primary' />
                <Instagram className='w-[14px] h-[14px text-primary' />
            </div>
            <p className='flex items-center gap-[48px]'>
                <span className='text-base font-normal leading-[28px] text-primary/50'>Privacy Policy</span>
                <span className='text-base font-normal leading-[28px] text-primary/50'>Terms & Condition</span>
            </p>
            </div>
        </div>
    );
};

export default FormFooter;