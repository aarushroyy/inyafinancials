"use client";

import Link from 'next/link';
import Image from 'next/image';

interface ServiceItemProps {
  icon: string;
  text: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, text }) => (
  <div className="group mx-auto">
    <div className="flex items-center mx-auto justify-center space-x-2 text-gray-700 py-2">
      <Image src={icon} alt="" width={20} height={20} className="flex-shrink-0" />
      <span className="text-sm text-[#283D3B] w-[76%] md:text-base font-acidMedium">{text}</span>
      <span className="pl-6 text-[#283D3B] font-inter">{'>'}</span>
    </div>
    <div className="w-[96%] ml-2 h-px bg-gradient-to-r from-gray-400 to-gray-200 opacity-50" />
  </div>
);

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white min-h-[600px] pb-0 px-4 md:px-8 lg:px-16 pt-12 md:pt-16">
      <nav className="mb-12">
        <div className="flex items-center justify-between">
          <div className="text-teal-700 font-semibold text-xl font-acid">INYA FINANCIALS</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-teal-700">
              Home
            </Link>
            <Link href="/insights/ay-2026-27-income-tax-return-filing" className="text-gray-600 hover:text-teal-700">
              Insights
            </Link>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-600 hover:text-teal-700"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-gray-600 hover:text-teal-700"
            >
              How it works?
            </button>
          </div>
        </div>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className='space-y-20'>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-acidBold">
            Your Money{' '}
            <span className="text-teal-600">deserves more</span> than just a savings account.
          </h1>
          
          

          <div className="space-y-3">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <button 
                onClick={() => window.open('https://wa.link/2857n1', '_blank')}
                className="bg-teal-800 text-l rounded-full text-white px-6 py-3 hover:bg-teal-900 transition-colors font-acidNormal"
              >
                Schedule a call
              </button>

              <div className="relative group">
                <button 
                    onClick={() => scrollToSection('services')} 
                className="border-0 text-l border-teal-800 text-teal-800 px-6 py-3 rounded-md transition-colors font-acidNormal">
                  Our Services
                </button>
                <div className="absolute bottom-2 left-6 right-6 h-px bg-teal-800 scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-left" />
              </div>
            </div>

            <Link
              href="/insights/ay-2026-27-income-tax-return-filing"
              className="group inline-flex w-full sm:max-w-md flex-col items-start rounded-2xl border border-teal-800/15 bg-teal-50 px-5 py-3 text-left transition-colors hover:border-teal-800/25 hover:bg-teal-100"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-700/70">
                Latest insight
              </span>
              <span className="mt-1 text-sm font-acidMedium text-teal-900">
                AY 2026-27 tax filing guide
              </span>
              <span className="mt-2 h-px w-10 bg-teal-800 transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
        </div>

          <p className="text-[#283D3B] max-w-[88%] text-[22px] font-acidRegular">
            Place your trust in us to provide a seamless and hassle-free experience as you navigate the world of finance insights.
          </p>
        </div>

        <div className="bg-teal-50 p-8 rounded-t-3xl">
          <div className="max-w-md mx-auto space-y-2">
            <Image 
              src="/images/heroImage.svg" 
              alt="Financial Services Illustration" 
              width={400} 
              height={300}
              className="w-[98%] mx-auto h-auto"
            />
            
            <div className="space-y-4 p-8 mx-auto">
              <ServiceItem 
                icon="/images/heroIcon1.svg"
                text="Maximize returns, minimize taxes"
              />
              <ServiceItem 
                icon="/images/heroIcon2.svg"
                text="Protect assets, ensure growth"
              />
              <ServiceItem 
                icon="/images/heroIcon3.svg"
                text="Smart advice, strong finances"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;