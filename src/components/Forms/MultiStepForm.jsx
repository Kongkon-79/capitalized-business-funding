import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BusinessStep from './BusinessStep';
import OwnerStep from './OwnerStep';
import UserInfoStep from './UserInfoStep';
import FinishStep from './FinishStep';
import ProgressSteps from './ProgressSteps';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import FormFooter from './FormFooter';
import FormNavbar from './FormNavbar';
import { CustomerReviews } from '../Homes/ReviewDemo/ReviewDemo';

const MultiStepForm = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { trigger } = methods;
  const [currentStep, setCurrentStep] = useState(1);

  // Handle next step change
  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }

  };
  // Handle previous step change
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    methods.reset();
    navigate("/")
  };

  return (
    <div className="container">
      {/* navbar start  */}
      <FormNavbar />
      {/* navbar end  */}
      <FormProvider {...methods}>
        <div className="mb-6">
          <ProgressSteps
            currentStep={currentStep}
            steps={[
              { id: 1, name: "" },
              { id: 2, name: "" },
              { id: 3, name: "" },
              { id: 4, name: "" },
              { id: 5, name: "" },
              { id: 6, name: "" },
              { id: 7, name: "" },
              { id: 8, name: "" },
              { id: 9, name: "" },
              { id: 10, name: "" }
            ]}
          />
        </div>

        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px]'>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6 bg-primary rounded-l-[12px]">
            {currentStep === 1 && <Step1 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 2 && <Step2 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 3 && <Step3 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 4 && <Step4 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 5 && <Step5 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 6 && <Step6 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 7 && <BusinessStep handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 8 && <OwnerStep handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 9 && <UserInfoStep handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
            {currentStep === 10 && <FinishStep handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}

          </form>
        </div>

      </FormProvider>

      {/* review part  */}
      <CustomerReviews/>

      {/* form footer start */}
      <FormFooter />
      {/* form footer end  */}
    </div>
  );
};

export default MultiStepForm;
