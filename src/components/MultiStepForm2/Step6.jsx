import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step6 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='bg-white rounded-xl p-[40px] mb-20'>
            <h4 className='text-3xl font-semibold leading-[36px] text-secondary pt-6 pb-3'>Thank you for completing your application. You only have one step left.</h4>
            <p className='text-lg font-normal leading-[26px] text-secondary/50 pb-3'>In order to validate the funding approval, we need to review your most recent bank statements. Please complete the validation below, and your bank statements will automatically be sent to us.</p>
            <p className='text-lg font-normal leading-[26px] text-secondary/50'>This is your primary business bank account that we will be depositing funds into.</p>
            
            <div className='pt-[40px]'>
                <div className="mt-[16px] flex items-center justify-center gap-6">
                    {/* Yes Radio Button */}
                    <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                        <input
                            type="radio"
                            value="Secure Bank Validation"
                            {...register("bank", { required: "Secure Bank Validation is Required" })}
                            className="w-5 h-5 accent-primary mb-1 text-lg font-semibold leading-[26px] text-secondary mt-2"
                        />
                        Secure Bank Validation
                    </label>

                    {/* No Radio Button */}
                    <label className="flex items-center gap-2 text-primary text-[15px] leading-[24px] cursor-pointer">
                        <input
                            type="radio"
                            value="Secure Bank Statement Upload"
                            {...register("bank", { required: "Secure Bank Statement Upload is Required" })}
                            className="w-5 h-5 accent-primary mb-1 text-lg font-semibold leading-[26px] text-secondary mt-2"
                        />
                        Secure Bank Statement Upload
                    </label>
                </div>
                {errors?.bank && (
                    <p className='text-sm text-red-500 text-center'>{errors.bank.message}</p>
                )}
            </div>
            <div className='flex items-center justify-center mt-10'>
                <button type='button' className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px] cursor-default'>Secure Bank Validation</button>
            </div>
            {/* button  */}
            <div className='flex items-center justify-between pt-[40px]'>
                <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
            </div>
        </div>
    );
};

export default Step6;