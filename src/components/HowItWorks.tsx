'use client';

import Image from 'next/image';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Reach out.",
    description: "Schedule a call or drop us a message."
  },
  {
    number: 2,
    title: "Evaluate your current plan",
    description: "and talk about your preferences."
  },
  {
    number: 3,
    title: "Get yourself a well suited",
    description: "and better off investment plan."
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#283D3B] mb-20">
          How it works?
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Steps Timeline */}
          <div className="relative flex-1">
            {/* Vertical Line */}
            <div className="absolute left-6 top-10 bottom-12 w-0.5 bg-[#052F20] opacity-20" />

            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-8 mb-16 last:mb-0">
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-[#052F20] text-white flex items-center justify-center text-xl font-medium flex-shrink-0">
                  {step.number}
                </div>
                
                {/* Text Content */}
                <div>
                  <p className="text-xl md:text-2xl text-[#283D3B]">
                    {step.title}
                  </p>
                  <p className="text-xl md:text-2xl text-[#283D3B]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/howitworks.svg"
                alt="Two people having a conversation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}