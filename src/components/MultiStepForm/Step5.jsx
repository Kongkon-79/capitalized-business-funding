import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step5 = ({ handleNextStep, handlePreviousStep }) => {
    const { register, formState: { errors } } = useFormContext();

    const scoreNames = [
        {
            id: 1,
            name: "Excellent (720 +)",
            value: "excellent"
        },
        {
            id: 2,
            name: "Great (680 - 719)",
            value: "great"
        },
        {
            id: 3,
            name: "Average (650 - 679)",
            value: "average"
        },
        {
            id: 4,
            name: "Fair (600 - 649)",
            value: "fair"
        },
        {
            id: 5,
            name: "Not so great (550 - 599)",
            value: "not-so-great"
        },
        {
            id: 6,
            name: "Poor (549 or less)",
            value: "poor"
        },
    ];
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[40px]'>
                        <label className='text-2xl font-medium leading-[30px] text-secondary-100' htmlFor="score">What is your estimated credit score?</label> <br />
                        <select
                            {...register("score", { required: "Credit score is Required" })}
                            className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1"
                        >
                            <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="" disabled selected>
                                Select One
                            </option>
                            {scoreNames.map((data) => (
                                <option key={data.id} value={data.value}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                        {errors?.score && (
                            <span className='text-sm text-red-500'>{errors.score.message}</span>
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

export default Step5;

