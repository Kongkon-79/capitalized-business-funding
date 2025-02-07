import React from 'react';
import FiveStar from '../../common/FiveStar';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import reviewData from "../../data/reviewData.json";
import ReviewSlideButton from './ReviewSlideButton';

const breakpoints = {
    680: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    780: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1300: {
        slidesPerView: 3,
        spaceBetween: 20
    }
}


const Review = () => {
    return (
        <div>
            <h3 className='text-[32px] font-semibold leading-[28px] text-primary text-center'>Customer</h3>
            <p className='text-2xl font-normal text-black leading-[28px] text-center pt-[6px]'>Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[30px] md:pt-[38px] lg:pt-[44px]'>

            </div>
            <Swiper
                breakpoints={breakpoints}

            >
                {
                    reviewData.map((data) => {
                        return <SwiperSlide key={data?.id} className='bg-white p-[14px] md:p-[16px] lg:p-[20px]'>
                            <div  >
                                <div className='flex items-center gap-[17px]'>
                                    <div>
                                        <img src={data?.img} alt='sunny' width={117} height={117} />
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-medium leading-[28px] text-secondary'>{data?.name}</h4>
                                        <p className='text-base font-normal leading-[20px] text-secondary/50 py-[2px]'>{data?.retail}</p>
                                        <p className='text-base font-normal leading-[20px] text-secondary/50'>{data?.location}</p>
                                        <div className='pt-[2px]'>
                                            <FiveStar />
                                        </div>
                                    </div>
                                </div>

                                <p className='text-base font-normal text-secondary leading-[20px] pt-[30px] md:pt-[40px] lg:pt-[48px] '>{data?.review}</p>
                            </div>
                        </SwiperSlide>
                    })
                }
                <div className='pt-[40px] pb-[60px] md:pb-[80px] lg:pb-[101px] flex items-center justify-center '>
                    <ReviewSlideButton />
                </div>

            </Swiper>

        </div>
    );
};

export default Review;