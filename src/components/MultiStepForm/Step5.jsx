import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step5 = ({ handleNextStep, handlePreviousStep }) => {
    const { register, formState: { errors } } = useFormContext();

    const scoreNames = [
        {
            id: 1,
            name: "Excellent (720 +)",
            value: "Excellent"
        },
        {
            id: 2,
            name: "Great (680 - 719)",
            value: "Great"
        },
        {
            id: 3,
            name: "Average (650 - 679)",
            value: "Average"
        },
        {
            id: 4,
            name: "Fair (600 - 649)",
            value: "Fair"
        },
        {
            id: 5,
            name: "Not so great (550 - 599)",
            value: "Not So Great"
        },
        {
            id: 6,
            name: "Poor (549 or less)",
            value: "Poor"
        },
    ];
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
                <div className='md:col-span-3 md:pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
                        <label className='text-xl md:text-2xl font-medium leading-[30px] text-secondary-100' htmlFor="creditScore">What is your estimated credit score?</label> <br />
                        <select
                            {...register("creditScore", { required: "Credit score is Required" })}
                            className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1"
                        >
                            <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="" disabled selected>
                                Select One
                            </option>
                            {scoreNames?.map((data) => (
                                <option key={data?.id} value={data?.value}>
                                    {data?.name}
                                </option>
                            ))}
                        </select>
                        {errors?.creditScore && (
                            <span className='text-sm text-red-500'>{errors.creditScore.message}</span>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[35px] md:pt-[50px] lg:pt-[61px]'>
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

export default Step5;

