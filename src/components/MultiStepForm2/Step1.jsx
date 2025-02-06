import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

const Step1 = ({ handlePreviousStep, handleNextStep }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='bg-white rounded-xl p-[32px] mb-20'>
            <div>
                <h3 className='text-4xl font-medium leading-[40px] text-primary pb-[8px]'>Let's get your specific funding terms buttoned up.</h3>
                <p className='text-base font-normal leading-[24px] text-primary/50'>Tell us about yourself.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-8'>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="firstName">First Name</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("firstName", { required: "First Name is Required" })}
                        placeholder='e.g. John' /> <br />
                    {errors?.firstName && (
                        <span className='text-sm text-red-500'>{errors.firstName.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="lastName">Last Name</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("lastName", { required: "Last Name is Required" })}
                        placeholder='e.g. Smith' /> <br />
                    {errors?.lastName && (
                        <span className='text-sm text-red-500'>{errors.lastName.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="email">Email Address</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='email' {...register("email", { required: "Email Address is Required" })}
                        placeholder='e.g. user@email.com' /> <br />
                    {errors?.email && (
                        <span className='text-sm text-red-500'>{errors.email.message}</span>
                    )}
                </div>
                <div className='md:col-span-1'>
                    <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="phoneNumber">Phone Number</label> <br />
                    <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("phoneNumber", { required: "Phone Number is Required" })}
                        placeholder='e.g. (555) 555-5555' /> <br />
                    {errors?.phoneNumber && (
                        <span className='text-sm text-red-500'>{errors.phoneNumber.message}</span>
                    )}
                </div>
                <div className='md:col-span-2'>
                    <input className='w-[18px] h-[18px]' type='checkbox' {...register("terms", { required: "you must agree to continue" })} />
                    <label className='pl-2 text-base font-normal text-primary/50 leading-[24px]' htmlFor="terms">By checking this box and selecting Continue the Borrower agrees to authorize Capitalized to contact the Borrower at the telephone, cell phone, email or direct mail contact data provided in this form for purposes of fulfilling this inquiry about business financing, even if the Borrower has previously indicated a preference of "do not call" or "do not email" with a government registry or with Capitalized. Also, the Borrower agrees that we may deliver a response to the pre-approval request to the email address provided. By agreeing to communicate with Capitalized about this pre-approval request by email, the Borrower agrees to email (whether by printing or saving electronically) the communications and documents that we email. If the Borrower is unable to print or retain the information, or wishes to revoke the agreement to be contacted about this qualification inquiry by email, the Borrower agrees to call Capitalized at (800) 919-8351.</label> <br />
                    {errors?.terms && <span className='text-sm text-red-500'>{errors.terms.message}</span>}
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

export default Step1;