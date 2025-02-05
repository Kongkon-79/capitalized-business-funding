import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step3 = ({ handleNextStep, handlePreviousStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[40px]'>
                        <label className='text-2xl font-medium leading-[30px] text-secondary-50' htmlFor="revenue">What is your average monthly revenue?</label> <br />
                        <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1' type='text' {...register("revenue", { required: "Average Monthly Revenue is Required" })}
                            placeholder='$25,000' /> <br />
                        {errors?.revenue && (
                            <span className='text-sm text-red-500'>{errors.revenue.message}</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[61px]'>
                        <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                        <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <img src="/assets/images/step3.png" alt="step3 " width={409} height={553} className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default Step3;

