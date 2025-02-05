import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step7 = ({ handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[40px]'>
                        <label className='text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="business">What is legal name of your business?</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1' type='text' {...register("business", { required: true })}
                            placeholder='Enter business name' /> <br />
                        {errors?.business && (
                            <span className='text-sm text-red-500'>This field is required</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[61px]'>
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

