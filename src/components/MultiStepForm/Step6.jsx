import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step6 = ({ handleNextStep, handlePreviousStep }) => {
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className=''>
                        <img src='/assets/images/nav_logo.png' alt='logo' width={193} height={44} className='w-[193px] h-[44px] mx-auto' />
                        <h3 className='text-[48px] font-medium leading-[48px] text-secondary-50 text-center pt-[39px]'>Thank You</h3>
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[69px]'>
                        <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Start your Application</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step6.png" alt="step6 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step6;

