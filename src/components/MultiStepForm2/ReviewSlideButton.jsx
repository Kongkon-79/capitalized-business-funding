import React from 'react';
import { useSwiper } from 'swiper/react';

const ReviewSlideButton = () => {
    const swiper = useSwiper();
    return (
        <div>
            <button onClick={() => swiper.slideNext()} className='text-base font-normal leading-[20px] text-white py-[14px] px-[79px] bg-primary rounded-[4px]'>See More</button>
        </div>
    );
};

export default ReviewSlideButton;