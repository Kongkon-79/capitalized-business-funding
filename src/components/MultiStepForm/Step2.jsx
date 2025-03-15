import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step2 = ({handleNextStep, handlePreviousStep}) => {
  const { register, formState: { errors } } = useFormContext();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2010 }, (_, i) => 2011 + i);
  return (
    <div  className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
        <div className='md:col-span-3 md:pr-[65px] flex flex-col justify-center'>
          
          <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="startMonth">Business Start Month</label> <br />
            <select
              {...register("startMonth", { required: "Business Start Month is Required" })}
              className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary text-primary mb-1"
            >
              <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="">Select Month</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month, index) => (
                <option className='text-base font-normal text-primary leading-[36px]' key={index} value={month}>{month}</option>
              ))}
            </select>
            {errors?.startMonth && <p className="text-sm text-red-500">{errors.startMonth.message}</p>}
          </div>
          <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-secondary-50' htmlFor="startYear">Last Year</label> <br />
            <select
              {...register("startYear", { required: "Last Year is Required" })}
              className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary text-primary mb-1"
            >
              <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="">Select Year</option>
              {years.map((year) => (
                <option className='text-base font-normal text-primary leading-[36px]' key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors?.startYear && <p className="text-sm text-red-500">{errors.startYear.message}</p>}
          </div>
          {/* button  */}
          <div className='flex items-center justify-between pt-[35px] md:pt-[50px] lg:pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong/> Back </button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
          </div>
        </div>
        <div className='md:col-span-2'>
          <img src="/assets/images/step2.png" alt="step2 " width={409} height={553} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Step2;

