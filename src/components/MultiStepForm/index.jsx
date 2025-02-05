import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ProgressSteps from './ProgressSteps';
import Step1 from './Step1';

const MultiStepFormAllComponents = () => {
    const navigate = useNavigate();
    const methods = useForm();
    const { trigger } = methods;
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = async ()=>{
        const inValid = await trigger();
        if (inValid){
            setCurrentStep((prevStep) => prevStep + 1)
        }
    }

    const handlePreviousStep = ()=>{
        setCurrentStep((prevStep) => prevStep - 1);
    }


    const onSubmit = (data)=>{
        console.log(data)
    }


    return (
        <div className='container'>
            <FormProvider {...methods}>
                <div>
                    <ProgressSteps currentStep={currentStep} steps={[{id : 1, name : ""}]}/>
                </div>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {currentStep === 1 && <Step1 handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}/>}
                </form>
            </FormProvider>
        </div>
    );
};

export default MultiStepFormAllComponents;