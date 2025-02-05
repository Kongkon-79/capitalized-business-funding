
'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: 'Sunny 1',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 2,
    name: 'Sunny 2',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 3,
    name: 'Sunny 3',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 4,
    name: 'Sunny 4',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 5,
    name: 'Sunny 5',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 6,
    name: 'Sunny 6',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 7,
    name: 'Sunny 7',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
  {
    id: 8,
    name: 'Sunny 8',
    location: 'Philadelphia, PA',
    rating: 5,
    text: 'Being a social networker, you need a lot of tools and tools to help Sunny. The best thing about this platform is that it builds applications process analysis and social media marketing tools that work with ease.',
    image: '/assets/images/customer.png',
  },
]

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleReviews = () => {
    const visibleIndexes = [
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1,
      currentIndex,
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1,
    ];
    return visibleIndexes.map((index) => reviews[index]);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Customer</h2>
        <p className="text-gray-500 italic">Review</p>
      </div>

      <div className="relative flex justify-center items-center gap-0 overflow-hidden">
        {getVisibleReviews().map((review, idx) => (
          <div
            key={review.id}
            className={` relative bg-[#1B2A4E] text-white rounded-lg p-6 shadow-lg transition-all duration-500 ease-in-out w-2xl ${idx === 0 ? 'opacity-50 scale-90 -translate-x-[-10%] h-[280px]' :
                idx === 1 ? 'scale-105 z-20 h-[300px] ' :
                  'opacity-50 scale-90 -translate-x-[10%] h-[280px]'
              }`}
          >
            <div className=" flex items-center gap-4 mb-4">
              <img
                src={review.image || '/placeholder.svg'}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white"
              />

              <div>
                <h3 className="font-semibold">Name: {review.name}</h3>
                <p className="text-gray-300 text-sm">{review.location}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <FaQuoteLeft />
            <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="mx-auto mt-8 block px-6 py-2 bg-[#1B2A4E] text-white rounded-md hover:bg-[#2A3B6E] transition-colors"
      >
        See More
      </button>
    </div>
  );
}
