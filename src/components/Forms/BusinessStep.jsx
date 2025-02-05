import React from 'react';
import { useFormContext } from 'react-hook-form';

const BusinessStep = ({ handleNextStep, handlePreviousStep }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="w-full flex items-center gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="businessName">What is the legal name of your business?</label>
          <input
          type='text'
            {...register("businessName", { required: true })}
            placeholder="Enter business name"
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
          />
          {errors?.businessName && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
          {/* buttton  */}
          <div className='pt-[61px] flex items-center justify-center'>
            <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[170px] rounded-[4px]'>Continue</button>
          </div>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/business.png" alt="business" width={409} height={553} className='w-full' />
        </div>
      </div>
    </>
  );
};

export default BusinessStep;

