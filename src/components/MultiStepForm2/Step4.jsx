import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step4 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    const incorporationData = [
        {
            id: 1,
            name: "Corporation",
            value: "corporation"
        },
        {
            id: 2,
            name: "LLC",
            value: "llc"
        },
        {
            id: 3,
            name: "LLP",
            value: "llp"
        },
        {
            id: 4,
            name: "Ltd. Partnership",
            value: "ltd. partnership"
        },
        {
            id: 5,
            name: "Partnership",
            value: "partnership"
        },
        {
            id: 6,
            name: "C Corporation",
            value: "c corporation"
        },
        {
            id: 5,
            name: "S Corporation",
            value: "s corporation"
        },
        {
            id: 6,
            name: "Other",
            value: "other"
        },
    ];
    return (
        <div className='bg-white rounded-xl p-[32px] mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-8'>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="businessLegalName">Business Legal Name</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("businessLegalName", { required: "Business Legal Name is Required" })}
                        placeholder='Enter Business Legal Name' /> <br />
                    {errors?.businessLegalName && (
                        <span className='text-sm text-red-500'>{errors.businessLegalName.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="taxID">Tax ID</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("taxID", { required: "Tax ID is Required" })}
                        placeholder='27-1115599' /> <br />
                    {errors?.taxID && (
                        <span className='text-sm text-red-500'>{errors.taxID.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="businessAddress">Business Address</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("businessAddress", { required: "Business Address is Required" })}
                        placeholder='Enter a Location' /> <br />
                    {errors?.businessAddress && (
                        <span className='text-sm text-red-500'>{errors.businessAddress.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="bCity">City</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("bCity", { required: "City is Required" })}
                        placeholder='Enter your City' /> <br />
                    {errors?.bCity && (
                        <span className='text-sm text-red-500'>{errors.bCity.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="bState">State</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("bState", { required: "State is Required" })}
                        placeholder='Enter your State' /> <br />
                    {errors?.bState && (
                        <span className='text-sm text-red-500'>{errors.bState.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="bZipCode">Zip Code</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("bZipCode", { required: "Zip Code is Required" })}
                        placeholder='10001' /> <br />
                    {errors?.bZipCode && (
                        <span className='text-sm text-red-500'>{errors.bZipCode.message}</span>
                    )}
                </div>
                
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="incorporationType">Incorporation Type</label> <br />
                    <select
                        {...register("incorporationType", { required: "Incorporation Type is Required" })}
                        className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1"
                    >
                        <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="" disabled selected>
                            Select One
                        </option>
                        {incorporationData.map((data) => (
                            <option key={data.id} value={data.value}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                    <br />
                    {errors?.incorporationType && (
                        <span className='text-sm text-red-500'>{errors.incorporationType.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="industryType">Industry Type</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("industryType", { required: "Industry Type is Required" })}
                        placeholder='Provide a simple description of what your business is' /> <br />
                    {errors?.industryType && (
                        <span className='text-sm text-red-500'>{errors.industryType.message}</span>
                    )}
                </div>
            </div>
            {/* button  */}
            <div className='flex items-center justify-between pt-[40px]'>
                <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                <button type='submit' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
            </div>
        </div>
    );
};

export default Step4;