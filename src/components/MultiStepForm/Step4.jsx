import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step4 = ({ handleNextStep, handlePreviousStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[12px] mb-[107px]'>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-3 pl-[47px] pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[40px]'>
                        <label className='text-xl font-medium leading-[24px] text-secondary-50' htmlFor="payment">Does your business accept credit cards as form of payment</label> <br />
                        <div className="mt-[16px] flex items-center justify-center gap-6">
                            {/* Yes Radio Button */}
                            <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                                <input
                                    type="radio"
                                    value="yes"
                                    {...register("payment", { required: "Credit cards as form of payment is Required" })}
                                    className="w-5 h-5 accent-primary mb-1"
                                />
                                Yes
                            </label>

                            {/* No Radio Button */}
                            <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                                <input
                                    type="radio"
                                    value="no"
                                    {...register("payment", { required: "Credit cards as form of payment is Required" })}
                                    className="w-5 h-5 accent-primary mb-1"
                                />
                                No
                            </label>
                        </div>
                        {errors?.payment && (
                            <p className='text-sm text-red-500 text-center'>{errors.payment.message}</p>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[40px]'>
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

export default Step4;

