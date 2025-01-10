'use client';

import Image from 'next/image';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  layout: {
    imagePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    textAlign: 'left' | 'right';
  };
}

const services: ServiceCard[] = [
  {
    title: "Investment Advisory",
    description: "We work with you to make a customized financial plan that aligns with your life's goals.",
    icon: "/images/credit-card.svg",
    layout: {
      imagePosition: 'top-right',
      textAlign: 'left'
    }
  },
  {
    title: "Financial Planning",
    description: "We work with you to make a customized financial plan that aligns with your life's goals.",
    icon: "/images/wallet-cash.svg",
    layout: {
      imagePosition: 'bottom-left',
      textAlign: 'right'
    }
  },
  {
    title: "Retirement Planning",
    description: "We work with you to make a customized financial plan that aligns with your life's goals.",
    icon: "/images/safe-box.svg",
    layout: {
      imagePosition: 'bottom-right',
      textAlign: 'left'
    }
  }
];

const getImagePositionClasses = (position: ServiceCard['layout']['imagePosition']) => {
  const positions = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-0 right-2',
    'bottom-left': 'bottom-2 -left-6',
    'bottom-right': 'bottom-0 right-0'
  };
  return positions[position];
};

const ServiceCardComponent = ({ service, index }: { service: ServiceCard; index: number }) => {
  const imageClasses = getImagePositionClasses(service.layout.imagePosition);
  const textAlignClass = service.layout.textAlign === 'right' ? 'text-right' : 'text-left';
  const isImageTop = service.layout.imagePosition.startsWith('top');

  return (
    <div
    className={`rounded-3xl p-6 relative min-h-[220px] overflow-hidden ${
        index === 1
          ? 'bg-gradient-to-br from-[#197278] to-[#283D3B] text-white'
          : 'bg-[#AEE3D0] text-[#244D4D]'
      }`}
    >
      {/* Icon */}
      <div className={`absolute w-40 h-40 ${imageClasses}`}>
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div 
        className={`${textAlignClass} ${
          isImageTop ? 'mt-24' : ''
        } max-w-[70%] ${service.layout.textAlign === 'right' ? 'ml-auto' : ''}`}
      >
        <h3 className="text-2xl font-medium mb-4 font-acidMedium">{service.title}</h3>
        <p className="text-sm font-acidRegular">{service.description}</p>
      </div>
    </div>
  );
};

export default function FinancialServices() {
  return (
    <div className="bg-white">
      {/* Pink Background Section with Rounded Bottom */}
      <div className="bg-[#f8ecec] rounded-b-[64px] mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-[#283D3B] py-16">
            <h2 className="text-2xl text-[#283D3B] md:text-3xl font-medium mb-2">
              Be smart. Don&apos;t be like Raj,
            </h2>
            <p className="text-xl text-[#283D3B] md:text-2xl">
              Explore and avail professional financial services below
            </p>
          </div>
        </div>
      </div>

      {/* White Background Section with Cards */}
      <div className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center text-[#283D3B] mb-16 font-semibold">
            <h1 className="text-3xl text-[#283D3B] md:text-5xl font-semibold">
              Holistic Financial Services to
            </h1>
            <h1 className="text-3xl md:text-5xl font-acidNormal">
              secure your tomorrow
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCardComponent key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}