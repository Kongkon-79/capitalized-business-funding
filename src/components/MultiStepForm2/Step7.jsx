import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step7 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    const [isOpen, setIsOpen] = useState(false);
    const handleYes = () => {
        setIsOpen(!isOpen)
    }

    const PropertyType = [
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
        <div>
            <div className='bg-white rounded-xl p-[32px] mb-20'>
                <h4 className='text-3xl font-semibold leading-[36px] text-secondary text-center'>Real Estate</h4>

                <div className='border rounded-xl p-5 shadow-lg bg-gray-100 mt-4 mb-6'>
                    <p className='text-sm font-normal text-secondary-200 leading-[26px]'>
                        ℹ️ We have partners that utilize real estate collateral to provide our customers with:
                    </p>
                    <ul className='list-disc pl-5 ml-5'>
                        <li className='text-lg font-normal text-secondary leading-[30px]'>Much larger loan offers than unsecured working capital</li>
                        <li className='text-lg font-normal text-secondary leading-[30px]'>Longer terms</li>
                        <li className='text-lg font-normal text-secondary leading-[30px]'>Lower rates</li>
                        <li className='text-lg font-normal text-secondary leading-[30px]'>Monthly payments</li>
                    </ul>
                </div>
                <h4 className='text-2xl font-semibold leading-[36px] text-secondary text-center'>Are you interested in seeing offers using real estate as collateral?</h4>
                {/* yes and no butto  */}
                <div className='flex items-center justify-between gap-10 pt-[20px]'>
                    <button onClick={handleYes} type='button' className={`w-full text-base font-medium leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px]  border border-primary rounded-[4px] ${isOpen ? "bg-primary text-white" : "bg-white"}`}> Yes </button>
                    <button type='button' className='w-full text-base font-medium leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> No </button>
                </div>

                {/* Yes button click to bellow  */}
                {
                    isOpen && (
                        <div>
                            <div className='flex justify-between items-center pt-8'>
                                <p className='text-2xl font-semibold leading-[30px] text-primary'>Property 1</p>
                                <button type='button' className='text-base font-medium leading-[20px] text-primary py-[14px] px-[40px] bg-white border border-primary rounded-[4px]'> Add another property </button>
                            </div>
                            {/* form part  */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-8'>

                                <div className='md:col-span-2'>
                                    <label className='text-2xl font-medium leading-[24px] text-secondary-100 text-center' htmlFor="propertyType">What type of property is it?</label> <br />
                                    <select
                                        {...register("propertyType", { required: "Job Title is Required" })}
                                        className="w-full py-[12px] pl-[16px] pr-[19px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[17px] outline-primary mb-1"
                                    >
                                        <option className='text-base font-normal text-secondary-100/50 leading-[36px]' value="" disabled selected>
                                            Select One
                                        </option>
                                        {PropertyType?.map((data) => (
                                            <option key={data.id} value={data.value}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                    <br />
                                    {errors?.propertyType && (
                                        <span className='text-sm text-red-500'>{errors.propertyType.message}</span>
                                    )}
                                </div>

                                <div className='md:col-span-1'>
                                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="yLocation">Address</label> <br />
                                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("yLocation", { required: "Address is Required" })}
                                        placeholder='Enter a Loaction' /> <br />
                                    {errors?.yLocation && (
                                        <span className='text-sm text-red-500'>{errors.yLocation.message}</span>
                                    )}
                                </div>
                                <div className='md:col-span-1'>
                                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="yCity">City</label> <br />
                                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("yCity", { required: "City is Required" })}
                                        placeholder='Enter your City' /> <br />
                                    {errors?.yCity && (
                                        <span className='text-sm text-red-500'>{errors.yCity.message}</span>
                                    )}
                                </div>
                                <div className='md:col-span-1'>
                                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="yState">State</label> <br />
                                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("yState", { required: "State is Required" })}
                                        placeholder='Enter your State' /> <br />
                                    {errors?.yState && (
                                        <span className='text-sm text-red-500'>{errors.yState.message}</span>
                                    )}
                                </div>
                                <div className='md:col-span-1'>
                                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="yZipCode">Zip Code</label> <br />
                                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("yZipCode", { required: "Zip Code is Required" })}
                                        placeholder='Enter your Zip Code' /> <br />
                                    {errors?.yZipCode && (
                                        <span className='text-sm text-red-500'>{errors.yZipCode.message}</span>
                                    )}
                                </div>
                                {/* use as collateral?  */}
                                <div className='md:col-span-2'>
                                    <h4 className='text-2xl font-semibold leading-[36px] text-secondary text-center'>Do you already own the property you are proposing to use as collateral?</h4>
                                    {/* yes and no butto  */}
                                    <div className='flex items-center justify-between gap-10 pt-[20px]'>
                                        <button onClick={handleYes} type='button' className='w-full text-base font-medium leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> Yes </button>
                                        <button type='button' className='w-full text-base font-medium leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> No </button>
                                    </div>
                                </div>
                                <div className='md:col-span-2'>
                                    <label className='text-base font-normal text-primary leading-[24px]'>By clicking Proceed, you acknowledge and agree that the information you provide to Capitalized will be shared
                                        with potential lenders or funding providers and that representatives of Capitalized and these lenders or
                                        funding providers may contact you using the contact information you have provided including by email,
                                        autodialed and prerecorded calls and/or text messages regarding your interest in lending or financing products
                                        and offers. You further acknowledge that your consent to these communications is not a condition of any
                                        purchase.</label> <br />
                                </div>
                            </div>
                        </div>
                    )


                }
                {/* button  */}
                <div className='flex items-center justify-between pt-[40px]'>
                    <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                    <button type='submit' className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default Step7;