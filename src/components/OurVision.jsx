import React from 'react'
import Fire from '../assets/fireflames.jpg'

const OurVision = () => {
  return (
    <div className='py-14'>
    <div className="max-w-screen-xl h-svh bg-[#fdfdf8] flex-col justify-center items-start inline-flex z-0 ">
        <div className='w-screen h-1/2 z-10 relative flex flex-col items-center justify-center '>
          
            {/*Vision Container*/ }
            <div className='z-20 w-3/4 bg-white/60 backdrop-blur-[15.6px] border-2 border-black rounded-lg p-8 mt-8'>
              <div className="w-full mt-7 text-black font-bold text-4xl font-['Atkinson Hyperlegible'] text-center ">
              Our Vision
              </div>
              <div className="w-full h-3/5  mt-12  text-center text-black text-2xl font-normal font-['Atkinson Hyperlegible'] ">
              At e-lit, our vision is to replace the traditional disposable lighter, which contributes to pollution and waste, with a sustainable, rechargeable alternative.
             <br></br>
             The e-lit electric lighter combines practicality with eco-friendliness, using biodegradable PVC and a rechargeable lithium-ion battery to replace harmful, disposable butane lighters.
              </div>
           </div>  
        </div>   

        
        
        <div className='w-screen h-screen mt-12 z-10 relative flex flex-col items-center justify-center'>
          {/*Advantage Container */}
          <div className='z-20 w-3/4 bg-white/60 backdrop-blur-[15.6px] border-2 border-black rounded-lg p-8'>
              <div className="w-full mt-7 text-black font-bold text-4xl font-['Atkinson Hyperlegible'] text-center ">
              Why choose E-Lit?
              </div>
              <div className="w-full h-3/5  mt-12  text-center text-black text-2xl font-normal font-['Atkinson Hyperlegible'] ">
              Choose E-lit for its eco-friendly design and sustainability, featuring biodegradable materials and a rechargeable battery. Enjoy a cost-effective and durable solution that reduces waste and saves you money over time.
              </div>
           </div> 
        </div>
    </div>
    </div>
  )
}

export default OurVision