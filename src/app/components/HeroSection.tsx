import { ArrowRight } from 'lucide-react';
// import heroImage from '../asset/1e05f237022a8cc0db9e35e4db05d7c734749f5e.png';

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-[300px] sm:h-[400px] lg:h-[500px]">
          {/* <img
            src={heroImage}
            alt="Hero banner"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
              The future in your hands.
            </h2>
            <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
              Explore cutting-edge technology and innovation.
            </p>
            <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors w-fit text-sm sm:text-base">
              Get your coupon
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
