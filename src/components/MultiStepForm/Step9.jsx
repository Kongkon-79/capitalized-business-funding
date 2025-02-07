import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step9 = ({ handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
                <div className='md:col-span-3  md:pr-[65px] flex flex-col justify-center'>

                    <div>
                        <label className='text-xl md:text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="email">Email Address</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='email' {...register("email", { required: "Email is Required" })}
                            placeholder='Enter Address' /> <br />
                        {errors?.email && (
                            <span className='text-sm text-red-500'>{errors.email.message}</span>
                        )}
                    </div>
                    <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
                        <label className='text-xl md:text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="phoneNumber">Phone Number</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("phoneNumber", { required: "Phone Number is Required" })}
                            placeholder='Enter Phone number' /> <br />
                        {errors?.phoneNumber && (
                            <span className='text-sm text-red-500'>{errors.phoneNumber.message}</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[35px] md:pt-[50px] lg:pt-[61px]'>
                        <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step9.png" alt="step9 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step9;

