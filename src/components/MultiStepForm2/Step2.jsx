import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step2 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    const jobTitle = [
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
        <div className='bg-white rounded-xl p-[32px] mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-8'>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="dateOfBirth">Date of Birth</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='date' {...register("dateOfBirth", { required: "Date of Birth is Required" })}
                        placeholder='__/__/____' /> <br />
                    {errors?.dateOfBirth && (
                        <span className='text-sm text-red-500'>{errors.dateOfBirth.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="ssn">SSN</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("ssn", { required: "SSN is Required" })}
                        placeholder='555-88-777' /> <br />
                    {errors?.ssn && (
                        <span className='text-sm text-red-500'>{errors.ssn.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="homeAddress">Home Address</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("homeAddress", { required: "Home Address is Required" })}
                        placeholder='Enter a Location' /> <br />
                    {errors?.homeAddress && (
                        <span className='text-sm text-red-500'>{errors.homeAddress.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="city">City</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("city", { required: "City is Required" })}
                        placeholder='Enter your City' /> <br />
                    {errors?.city && (
                        <span className='text-sm text-red-500'>{errors.city.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="state">State</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("state", { required: "State is Required" })}
                        placeholder='Enter your State' /> <br />
                    {errors?.state && (
                        <span className='text-sm text-red-500'>{errors.state.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="zipCode">Zip Code</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("zipCode", { required: "Zip Code is Required" })}
                        placeholder='10001' /> <br />
                    {errors?.zipCode && (
                        <span className='text-sm text-red-500'>{errors.zipCode.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="ownerShip">Ownership % </label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("ownerShip", { required: "Owner Ship is Required" })}
                        placeholder='%' /> <br />
                    {errors?.ownerShip && (
                        <span className='text-sm text-red-500'>{errors.ownerShip.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="jobTitle">Job Title</label> <br />
                    <select
                        {...register("jobTitle", { required: "Job Title is Required" })}
                        className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1"
                    >
                        <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="" disabled selected>
                            Select One
                        </option>
                        {jobTitle.map((data) => (
                            <option key={data.id} value={data.value}>
                                {data.name}
                            </option>
                        ))}
                    </select>
                    <br />
                    {errors?.jobTitle && (
                        <span className='text-sm text-red-500'>{errors.jobTitle.message}</span>
                    )}
                </div>
            </div>
            {/* button  */}
            <div className='flex items-center justify-between pt-[40px]'>
                <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
            </div>
        </div>
    );
};

export default Step2;