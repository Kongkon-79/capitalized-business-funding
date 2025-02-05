import React from 'react';

const Step6 = ({handleNextStep, handlePreviousStep}) => {
    return (
        <div>
            <div className="w-full flex items-center justify-between gap-[65px]">
                <div className="w-3/5 pl-[47px] pr-[65px]">
                    <div className='w-full flex justify-center items-center pb-[48px]'>
                        <img src="/assets/images/step1_logo.png" alt='logo' width={114} height={35} />
                    </div>
                    <h4 className='text-[48px] font-medium leading-[48px] text-white text-center'>
                        Thank You
                    </h4>
                    {/* buttton  */}
                    <div className='pt-[69px] flex items-center justify-center'>
                        <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[150px] rounded-[4px]'>Start your Application</button>
                    </div>
                </div>
                <div className="w-2/5 ">
                    <img src="/assets/images/step6.png" alt="document and finish" width={412} height={553} className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Step6;


