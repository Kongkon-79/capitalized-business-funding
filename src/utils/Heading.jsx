import React from 'react';

const Heading = ({text = "empty text"}) => {
    return (
        <div>
            <h6 className='text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] text-primary pb-[5px] text-center'>{text}</h6>
            
        </div>
    );
};

export default Heading;