import React from "react";
import { useFormContext } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step5 = ({handleNextStep, handlePreviousStep}) => {
  const { register, formState: { errors } } = useFormContext();


  const scoreNames = [
    {
      id : 1,
      name : "Excellent (720 +)",
      value : "excellent"
    },
    {
      id : 2,
      name : "Great (680 - 719)",
      value : "great"
    },
    {
      id : 3,
      name : "Average (650 - 679)",
      value : "average"
    },
    {
      id : 4,
      name : "Fair (600 - 649)",
      value : "fair"
    },
    {
      id : 5,
      name : "Not so great (550 - 599)",
      value : "not-so-great"
    },
    {
      id : 6,
      name : "Poor (549 or less)",
      value : "poor"
    },
  ];

  return (
    <>
      <div className="w-full flex items-center gap-[65px]">
        {/* Left Side (Form Fields) */}
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <label htmlFor="score" className="text-2xl font-medium leading-[24px] text-white">
          What is your estimated credit score?
          </label>

          <select
            {...register("score", { required: true })}
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
          >
            <option value="" disabled selected>
              Select One
            </option>
            {scoreNames.map((data) => (
              <option key={data.id} value={data.value}>
                {data.name}
              </option>
            ))}
          </select>

          {errors?.score && (
            <p className="text-sm text-red-500 mt-2">This field is required</p>
          )}
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back</button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-2/5">
          <img src="/assets/images/step5.png" alt="business" width={409} height={553} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Step5;
