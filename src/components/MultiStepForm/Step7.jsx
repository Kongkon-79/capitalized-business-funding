import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step7 = ({ handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
                <div className='md:col-span-3 md:pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
                        <label className='text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="businessName">What is legal name of your business?</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1' type='text' {...register("businessName", { required: "Business name is Required" })}
                            placeholder='Enter business name' /> <br />
                        {errors?.businessName && (
                            <span className='text-sm text-red-500'>{errors.businessName.message}</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[35px] md:pt-[50px] lg:pt-[61px]'>
                        <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step7.png" alt="step7 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step7;

