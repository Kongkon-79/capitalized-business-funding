import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowLeftLong } from "react-icons/fa6";

import { format } from 'date-fns';
import { BadgeCheck } from 'lucide-react';

const formatDate = (date) => {
    return format(date, "EEEE, MMMM d 'at' h:mm a");
};

const Step5 = ({ handlePreviousStep, handleNextStep, data }) => {
    const { register, formState: { errors } } = useFormContext();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date()); // Update time every second
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='bg-white rounded-xl p-[32px] mb-20'>
            {/* Owner part  */}
            <div>
                <h4 className='text-4xl font-bold text-primary leading-[48px] text-center'>Application</h4>
                <div className='border rounded-xl p-5 shadow-xl mt-6'>
                    <h5 className='text-3xl font-semibold text-secondary leading-[40px] text-left pb-2'>Owner Information</h5>
                    <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>First Name : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.firstName} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Last Name : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.lastName} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Email Address : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.email} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Phone Number : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.phoneNumber} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Date of Birth : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.dateOfBirth} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>SSN : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.ssn} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Home Address : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.homeAddress} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>City : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.city} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>State : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.state} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Zip Code : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.zipCode} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Owner Ship : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.ownerShip} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Job Title : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.jobTitle} </span>
                        </div>
                    </div>
                </div>
                {/* Business part  */}
                <div className='border rounded-xl p-5 shadow-xl mt-6'>
                    <h5 className='text-3xl font-semibold text-secondary leading-[40px] text-left pb-2'>Business</h5>
                    <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Business DBA : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.businessDBA} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Zip Code : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.zipCodeB} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Business Legal Name : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.businessLegalName} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Tax ID : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.taxID} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Business Address : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.businessAddress} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>City : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.bCity} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>State : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.bState} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Zip Code : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.bZipCode} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Incorporation Type : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.incorporationType} </span>
                        </div>
                        <div className='md:col-span-1'>
                            <span className='text-base font-normal text-secondary/50 leading-[30px]'>Industry Type : </span>
                            <br />
                            <span className='text-xl font-semibold text-secondary leading-[30px]'>{data?.industryType} </span>
                        </div>
                    </div>
                </div>
                {/* Applicant E-Signature part  */}
                <div className='border rounded-xl p-5 shadow-xl mt-6'>
                    <h5 className='text-3xl font-semibold text-secondary leading-[40px] text-left pb-2'>Applicant E-Signature</h5>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-8'>
                        <div className='md:col-span-2'>
                            <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="fullName">Full Name</label> <br />
                            <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("fullName", { required: "Full Name is Required" })}
                                placeholder='Enter your Full Name' /> <br />
                            {errors?.fullName && (
                                <span className='text-sm text-red-500'>{errors.fullName.message}</span>
                            )}
                        </div>
                        <div className='md:col-span-1'>
                            <label className='text-2xl font-medium leading-[24px] text-secondary-100' htmlFor="title">Title</label> <br />
                            <input className='w-full py-[11px] px-[12px] rounded-[4px] border border-[rgba(34,66,96,0.50)] mt-[16px] outline-primary mb-1' type='text' {...register("title", { required: "Title is Required" })}
                                placeholder='Enter your Title' /> <br />
                            {errors?.title && (
                                <span className='text-sm text-red-500'>{errors.title.message}</span>
                            )}
                        </div>
                        <div className='md:col-span-3'>
                            <p className='w-full flex items-center gap-2 bg-green-500 text-white p-4 rounded-lg text-xl font-bold leading-[30px] '> <BadgeCheck /> {formatDate(currentTime)}</p>
                        </div>
                        <div className='md:col-span-3'>
                            <input className='w-[18px] h-[18px]' type='checkbox' {...register("termsAndCondition", { required: "you must agree to continue" })} />
                            <label className='pl-2 text-sm font-medium text-primary leading-[24px]' htmlFor="termsAndCondition">By checking this box, I agree that the electronic digitized signatures I apply on the following document are representations of my signature and legally valid and binding as if I had signed the document with ink on paper in accordance with the Uniform Electronic Transactions Act (UETA) and the Electronic Signatures in Global and National Commerce Act (E-SIGN) of 2000. Each of the above-listed businesses and business owners/officers (individually and collectively, "you") authorize Capitalized and each of its representatives, successors, assigns, and designees ("Recipients") that may be involved with or acquire commercial loans having daily repayment features or purchases of future receivables, including Merchant Cash Advance transactions, to obtain consumer or personal, business, and investigative reports and other information about you, including credit card processor statements and bank statements, from one or more consumer reporting agencies, such as TransUnion, Experian, and Equifax, and from other credit bureaus, banks, creditors, and third parties. You also authorize Capitalized to transmit this application form, along with any of the foregoing information obtained in connection with this application, to any or all of the Recipients for the foregoing purposes. You also consent to the release, by any creditor or financial institution, of any information relating to any of you to Capitalized and to each of the Recipients on its own behalf. You agree that by signing, you consent and request that Capitalized, its affiliates, and those acting on its/their behalf may call or text you using an automated telephone dialing system and/or a prerecorded message. The types of calls you may receive include calls to encourage the purchase of goods or services, as well as calls to provide information or to service your account. Calls can be made to any residential or wireless numbers you provide to the Company, including those provided here, even if listed on a national or state Do Not Call registry. By providing your email address, you are permitting us to email you information about our financing and funding plans as well as other related products and services. We will keep your information secure, and you can unsubscribe at any time.</label> <br />
                            {errors?.termsAndCondition && <span className='text-sm text-red-500'>{errors.termsAndCondition.message}</span>}
                        </div>
                        {/* button  */}
                        <div className='md:col-span-3 flex items-center justify-between py-[30px]'>
                            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] text-primary py-[14px] pl-[14px] pr-[19px] bg-white border border-primary rounded-[4px]'> <FaArrowLeftLong /> Back </button>
                            <button type='submit' onClick={handleNextStep} className='text-base font-normal leading-[20px] text-white py-[14px] px-[40px] bg-primary rounded-[8px]'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step5;