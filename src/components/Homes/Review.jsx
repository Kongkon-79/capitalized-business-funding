import React from 'react';
import FiveStar from '../../common/FiveStar';

const reviewData = [
    {
        id: 1,
        img: "/assets/images/sunny.png",
        name: "Name: Sunny",
        retail: "Retail",
        location: "Jenkintown, PA",
        review: "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    },
    {
        id: 2,
        img: "/assets/images/sunny.png",
        name: "Name: Sunny",
        retail: "Retail",
        location: "Jenkintown, PA",
        review: "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    },
    {
        id: 3,
        img: "/assets/images/sunny.png",
        name: "Name: Sunny",
        retail: "Retail",
        location: "Jenkintown, PA",
        review: "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    },
    // {
    //     id : 4, 
    //     img : "/assets/images/sunny.png",
    //     name : "Name: Sunny",
    //     retail : "Retail",
    //     location : "Jenkintown, PA",
    //     review : "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    // },
    // {
    //     id : 5, 
    //     img : "/assets/images/sunny.png",
    //     name : "Name: Sunny",
    //     retail : "Retail",
    //     location : "Jenkintown, PA",
    //     review : "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    // },
    // {
    //     id : 6, 
    //     img : "/assets/images/sunny.png",
    //     name : "Name: Sunny",
    //     retail : "Retail",
    //     location : "Jenkintown, PA",
    //     review : "Running a small restaurant, you wear a lot of hats andtime is very valuable. The ease of getting through Capitalized business funding application process wsquick and super easy."
    // },
]

const Review = () => {
    return (
        <div>
            <h3 className='text-[32px] font-semibold leading-[28px] text-primary text-center'>Customer</h3>
            <p className='text-2xl font-normal text-black leading-[28px] text-center pt-[6px]'>Reviews</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[30px] md:pt-[38px] lg:pt-[44px]'>
                {
                    reviewData.map((data) => {
                        return <div key={data?.id} className='bg-white p-[14px] md:p-[16px] lg:p-[20px]'>
                            <div className='flex items-center gap-[17px]'>
                                <div>
                                    <img src={data?.img} alt='sunny' width={117} height={117} />
                                </div>
                                <div>
                                    <h4 className='text-xl font-medium leading-[28px] text-secondary'>{data?.name}</h4>
                                    <p className='text-base font-normal leading-[20px] text-secondary/50 py-[2px]'>{data?.retail}</p>
                                    <p className='text-base font-normal leading-[20px] text-secondary/50'>{data?.location}</p>
                                    <div className='pt-[2px]'>
                                        <FiveStar/>
                                    </div>
                                </div>
                            </div>

                            <p className='text-base font-normal text-secondary leading-[20px] pt-[30px] md:pt-[40px] lg:pt-[48px] '>{data?.review}</p>
                        </div>
                    })
                }
            </div>
            <div className='pt-[40px] pb-[60px] md:pb-[80px] lg:pb-[101px] flex items-center justify-center '>
                <button className='text-base font-normal leading-[20px] text-white py-[14px] px-[79px] bg-primary rounded-[4px]'>See More</button>
            </div>
        </div>
    );
};

export default Review;