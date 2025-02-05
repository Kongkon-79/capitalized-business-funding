const ProgressSteps = ({ currentStep, steps }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 pb-3 pt-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 relative">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= step.id ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}
              >
                {step.id}
              </div>
              <div
                className={`flex-1 h-1 ${
                  index === steps.length - 1 ? "hidden" : currentStep > step.id ? "bg-primary" : "bg-gray-200"
                }`}
              />
            </div>
            <span
              className={`absolute left-0 right-0 text-start mt-2 text-sm
                ${currentStep >= step.id ? "text-primary font-medium" : "text-gray-500"}`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
