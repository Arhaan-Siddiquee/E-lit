import React from 'react';
import Fire from '../assets/fireflames.jpg';

const OurVision = () => {
  return (
    <div className="py-14 bg-[#fdfdf8]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-16 px-4">
        
        {/* Vision Section */}
        <div className="relative w-full sm:w-3/4 bg-white/60 backdrop-blur-lg border border-black rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-atkinson text-center mb-6">
            Our Vision
          </h2>
          <p className="text-lg sm:text-2xl text-black font-normal font-atkinson text-center leading-relaxed">
            At e-lit, our vision is to replace the traditional disposable lighter, which contributes to pollution and waste,
            with a sustainable, rechargeable alternative. The e-lit electric lighter combines practicality with eco-friendliness,
            using biodegradable PVC and a rechargeable lithium-ion battery to replace harmful, disposable butane lighters.
          </p>
        </div>

        {/* Advantage Section */}
        <div className="relative w-full sm:w-3/4 bg-white/60 backdrop-blur-lg border border-black rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-atkinson text-center mb-6">
            Why Choose E-Lit?
          </h2>
          <p className="text-lg sm:text-2xl text-black font-normal font-atkinson text-center leading-relaxed">
            Choose E-lit for its eco-friendly design and sustainability, featuring biodegradable materials and a rechargeable battery.
            Enjoy a cost-effective and durable solution that reduces waste and saves you money over time.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default OurVision;
