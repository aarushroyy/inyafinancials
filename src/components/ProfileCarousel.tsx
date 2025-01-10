'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProfileData {
  id: number;
  image: string;
  text: string;
}

const profiles: ProfileData[] = [
  {
    id: 1,
    image: "/images/raj1.svg",
    text: "Raj invests only in a savings account. He thinks his money will grow with it."
  },
  {
    id: 2,
    image: "/images/raj2.svg",
    text: "Raj doesn’t trust the stock market; he says it’s safer to gamble on which family member will ask for a loan next."
  },
  {
    id: 3,
    image: "/images/raj3.svg",
    text: "Raj treats LIC premiums as his retirement plan, ignoring inflation like it’s a bad rumor"
  }
];

export default function ProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8ecec] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto w-full">
        {/* Title */}
        <div className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#283D3B] text-center">
            Meet Raj,
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden">
          <div 
            className="absolute w-full h-full transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center gap-8"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src={profile.image}
                    alt="Illustration of Raj"
                    fill
                    className="object-contain"
                    priority={profile.id === 1}
                  />
                </div>
                
                <p className="text-center text-[#283D3B] text-lg md:text-xl max-w-md">
                  {profile.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {profiles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-teal-600 w-8' 
                  : 'bg-gray-300 w-2.5 hover:bg-teal-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}