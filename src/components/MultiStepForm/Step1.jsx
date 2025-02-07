import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = ({ handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='flex items-center justify-center pb-[30px] md:pb-[45px] lg:pb-[57px]'>
                <img src='/assets/images/nav_logo.png' alt='logo' width={193} height={44}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0'>
                <div className='md:col-span-2 flex flex-col justify-center'>
                    <div>
                        <h1 className='text-[28px] md:text-[32px] font-semibold leading-[40px] text-primary pb-[18px]'>Small Business Financing</h1>
                        <h5 className='text-xl font-medium leading-[30px] text-primary pb-[12px] '>Immediate approval & next day funding from $2,500 - $250,000.</h5>
                        <p className='text-base font-normal leading-[30px] text-secondary/50 pb-[12px]'>Please complete the basic information below to see how much funding you qualify for.</p>
                        <p className='text-base font-normal leading-[30px] text-secondary/50'>This will not effect your credit.</p>
                    </div>
                    <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
                        <label className='text-xl md:text-2xl font-medium leading-[30px] text-secondary-50' htmlFor="money">How much money are you looking for?</label> <br/>
                        <input className='w-full md:w-[400px] py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1' type='text' {...register("money", { required: "How much money Field is Required" })}
                            placeholder='$2,500' /> <br/>
                        {errors?.money && (
                            <span className='text-sm text-red-500'>{errors.money.message}</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='pt-[29px] flex justify-center md:justify-start items-center'>
                        <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[65px] bg-primary rounded-[8px]'>Get Approved</button>
                    </div>
                </div>
                <div className='md:col-span-1 w-full'>
                    <img src='/assets/images/step1.png' alt='step1' width={262} height={393} className='w-full'/>
                </div>
            </div>
        </div>
    );
};

export default Step1;