import React from 'react';

const FinishStep = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <h4 className='text-xl font-medium leading-[28px] text-white'>
            Thank you for completing our application. Just click the button below and you'll be taken to the funding source that you match with.
          </h4>
          {/* buttton  */}
          <div className='pt-[40px] flex items-center justify-center'>
            <button type='submit' className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[170px] rounded-[4px]'>Finish</button>
          </div>
        </div>
        <div className="w-2/5 ">
          <img src="/assets/images/documents_finish.png" alt="document and finish" width={412} height={553} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default FinishStep;


