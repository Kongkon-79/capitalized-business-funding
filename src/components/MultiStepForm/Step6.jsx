import React from 'react';

const Step6 = ({ handleNextStep }) => {
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
                <div className='md:col-span-3 md:pr-[65px] flex flex-col justify-center'>

                    <div className='pt-10 md:pt-0'>
                        <img src='/assets/images/nav_logo.png' alt='logo' width={193} height={44} className='w-[193px] h-[44px] mx-auto ' />
                        <h3 className='text-[48px] font-medium leading-[48px] text-secondary-50 text-center pt-[30px] md:pt-[39px]'>Thank You</h3>
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[35px] md:pt-[50px] lg:pt-[69px]'>
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

