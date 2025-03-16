import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "./ProgressSteps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import { CustomerReviews } from "./CustomerReviews/CustomerReviews";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MultiStepFormAllComponents = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { trigger } = methods;
  const [currentStep, setCurrentStep] = useState(1);

  const { mutate, isPending } = useMutation({
    mutationKey: ["form-data"],
    mutationFn: () =>
      fetch(`http://localhost:5000/api/v1/first`, {
        method: "POST",
        body: JSON.stringify(methods.getValues()),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),

    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data.message || "Form Submitted Successfully.", {
          position: "top-right",
          autoClose: 5000,
        });
        setTimeout(() => {
          navigate("/second-step");
        }, 3000);
      } else {
        toast.error(data.message || "Submission Failed!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
    onError: (error) => {
      toast.error(error.message || "something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    },
  });

  const handleNextStep = async () => {
    const inValid = await trigger();
    if (inValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };

  return (
    <div className="container">
      {/* Toast Notifications */}
      <ToastContainer />
      <FormProvider {...methods}>
        <div>
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
              { id: 10, name: "" },
            ]}
          />
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {currentStep === 1 && <Step1 handleNextStep={handleNextStep} />}
          {currentStep === 2 && (
            <Step2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 3 && (
            <Step3
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 4 && (
            <Step4
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 5 && (
            <Step5
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 6 && (
            <Step6
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 7 && (
            <Step7
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 8 && (
            <Step8
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 9 && (
            <Step9
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 10 && <Step10 isPending={isPending} />}
        </form>
      </FormProvider>

      {/* customer review  */}
      <section>
        <CustomerReviews />
      </section>
    </div>
  );
};

export default MultiStepFormAllComponents;
