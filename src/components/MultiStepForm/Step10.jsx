import React from 'react';

const Step10 = () => {
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className=''>
                        <h5 className='text-xl font-medium leading-[20px] text-secondary-50 text-left'>Thank you for completing our application. Just click the button below andyou'll be taken to the funding source tha you match with.</h5>
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[40px]'>
                        <button type='submit' className='w-full text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Finish</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step10.png" alt="step10 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step10;

