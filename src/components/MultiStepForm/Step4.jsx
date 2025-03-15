import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step4 = ({ handleNextStep, handlePreviousStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-[10px] md:rounded-[12px] pt-[25px] md:pt-[35px] lg:pt-[44px] pb-[30px] md:pb-[45px] lg:pb-[60px] px-5 mx:px-10 lg:px-[65px] mb-[40px] md:mb-[70px] lg:mb-[100px] xl:mb-[125px]'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0'>
                <div className='md:col-span-3 md:pr-[65px] flex flex-col justify-center'>

                    <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
                        <label className='text-lg md:text-xl font-medium leading-[24px] text-secondary-50' htmlFor="creditCardPayment">Does your business accept credit cards as form of payment</label> <br />
                        <div className="mt-[16px] flex items-center justify-center gap-6">
                            {/* Yes Radio Button */}
                            <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                                <input
                                    type="radio"
                                    value="Yes"
                                    {...register("creditCardPayment", { required: "Credit cards as form of payment is Required" })}
                                    className="w-5 h-5 accent-primary mb-1"
                                />
                                Yes
                            </label>

                            {/* No Radio Button */}
                            <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                                <input
                                    type="radio"
                                    value="No"
                                    {...register("creditCardPayment", { required: "Credit cards as form of payment is Required" })}
                                    className="w-5 h-5 accent-primary mb-1"
                                />
                                No
                            </label>
                        </div>
                        {errors?.creditCardPayment && (
                            <p className='text-sm text-red-500 text-center'>{errors.creditCardPayment.message}</p>
                        )}
                    </div>
                    {/* button  */}
                    <div className='flex items-center justify-between pt-[30px] md:pt-[40px]'>
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

