import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step3 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    
    return (
        <div className='bg-white rounded-xl p-[32px] mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-8'>
                
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="businessDBA">Business DBA</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("businessDBA", { required: "Business DBA is Required" })}
                        placeholder='Enter Business DBA' /> <br />
                    {errors?.businessDBA && (
                        <span className='text-sm text-red-500'>{errors.businessDBA.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="zipCodeB">Zip Code</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("zipCodeB", { required: "Zip Code is Required" })}
                        placeholder='10001' /> <br />
                    {errors?.zipCodeB && (
                        <span className='text-sm text-red-500'>{errors.zipCodeB.message}</span>
                    )}
                </div>
            </div>
            {/* button  */}
            <div className='flex items-center justify-between pt-[40px]'>
                <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
            </div>
        </div>
    );
};

export default Step3;