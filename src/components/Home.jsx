import React from 'react';
import Testimonial from './Testimonial';
import Advantage from './Advantage';
import logo from '../assets/e-lit01.jpg';
import FAQ from './FAQ';
import Stat from './Stat';
import Navbar from './Navbar';
import OurVision from './OurVision';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('assets/HomeBG.webp')] bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl p-6">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="E-Lit Logo" className="w-40 h-40" />
          </div>
          <h1 className="text-white text-4xl font-bold mb-4 font-mono">
            The World's First Effective Electric Lighter
          </h1>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Main Content Sections */}
      <OurVision />
      <Advantage />
      <FAQ />
      <Stat />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
