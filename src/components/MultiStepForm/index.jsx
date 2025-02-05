import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from './ProgressSteps';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Swal from 'sweetalert2';

const MultiStepFormAllComponents = () => {
    const navigate = useNavigate();
    const methods = useForm();
    const { trigger } = methods;
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = async () => {
        const inValid = await trigger();
        if (inValid) {
            setCurrentStep((prevStep) => prevStep + 1)
        }
    }

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }


    const onSubmit = (data) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        console.log(data)
        methods.reset();
        navigate('/');

    }


    return (
        <div className='container'>
            <FormProvider {...methods}>
                <div>
                    <ProgressSteps currentStep={currentStep} steps={[
                        { id: 1, name: "" },
                        { id: 2, name: "" },
                        { id: 3, name: "" },
                        { id: 4, name: "" },
                        { id: 5, name: "" },
                        { id: 6, name: "" },
                        { id: 7, name: "" },
                        { id: 8, name: "" },
                        { id: 9, name: "" },
                        { id: 10, name: "" },
                    ]} />
                </div>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {currentStep === 1 && <Step1 handleNextStep={handleNextStep} />}
                    {currentStep === 2 && <Step2 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 3 && <Step3 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 4 && <Step4 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 5 && <Step5 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 6 && <Step6 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 7 && <Step7 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 8 && <Step8 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 9 && <Step9 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
                    {currentStep === 10 && <Step10 />}
                </form>
            </FormProvider>
        </div>
    );
};

export default MultiStepFormAllComponents;