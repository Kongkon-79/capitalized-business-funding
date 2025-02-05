import React from "react";
import { useFormContext } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step2 = ({ handleNextStep, handlePreviousStep }) => {
  const { register, formState: { errors } } = useFormContext();

  // Generate years dynamically (from 2000 to current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2010 }, (_, i) => 2011 + i);

  return (
    <div>
      <div className="w-full flex items-center gap-[65px]">
        {/* Left Side (Form Fields) */}
        <div className="w-3/5 pl-[47px] pr-[65px]">
          {/* Business Start Month */}
          <div>
            <label className="text-2xl font-medium leading-[24px] text-white" htmlFor="month">
              Business Start Month
            </label>
            <select
              {...register("month", { required: true })}
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            >
              <option value="">Select Month</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            {errors?.month && <p className="text-sm text-red-500">This field is required</p>}
          </div>

          {/* Business Start Year */}
          <div className="pt-[40px]">
            <label className="text-2xl font-medium leading-[24px] text-white" htmlFor="lastYear">
              Business Start Year
            </label>
            <select
              {...register("lastYear", { required: true })}
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] "
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors?.lastYear && <p className="text-sm text-red-500">This field is required</p>}
          </div>
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back </button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>

        </div>

        {/* Right Side (Image) */}
        <div className="w-2/5">
          <img src="/assets/images/step2.png" alt="step2 " width={409} height={553} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Step2;

