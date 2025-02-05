import React from 'react';
import { useFormContext } from 'react-hook-form';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step3 = ({handleNextStep, handlePreviousStep}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="w-full flex items-center gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="revenue">What is your average monthly revenue?</label>
          <input
            {...register("revenue", { required: true })}
            type='number'
            placeholder="$25,000"
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
          />
          {errors?.revenue && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back</button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/step3.png" alt="step 3" width={409} height={553} className='w-full'/>
        </div>
      </div>
    </>
  );
};

export default Step3;

