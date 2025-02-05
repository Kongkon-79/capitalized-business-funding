import React from 'react';
import { useFormContext } from 'react-hook-form';

const OwnerStep = ({ handleNextStep, handlePreviousStep }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="w-full flex items-center gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <div>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="firstName">First Name</label>
            <input
            type='text'
              {...register("firstName", { required: true })}
              placeholder="Enter first name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.firstName && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
          <div className='pt-[40px]'>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="lastName">Last Name</label>
            <input
            type='text'
              {...register("lastName", { required: true })}
              placeholder="Enter last name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.lastName && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
            {/* buttton  */}
            <div className='pt-[61px] flex items-center justify-center'>
              <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[170px] rounded-[4px]'>Continue</button>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/owner.png" alt="owner" width={409} height={551} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default OwnerStep;



