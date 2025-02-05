import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step8 = ({ handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div>
                        <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="firstName">First Name</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("firstName", { required: true })}
                            placeholder='Enter first name' /> <br />
                        {errors?.firstName && (
                            <span className='text-sm text-red-500'>This field is required</span>
                        )}
                    </div>
                    <div className='pt-[40px]'>
                        <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="lastName">Last Name</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("lastName", { required: true })}
                            placeholder='Enter last name' /> <br />
                        {errors?.lastName && (
                            <span className='text-sm text-red-500'>This field is required</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[61px]'>
                        <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step8.png" alt="step8 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step8;

