import React from 'react'
import { PiMedal } from "react-icons/pi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { SiTrustpilot } from "react-icons/si";

const Advantage = () => {
  return (
      <div>
      <div className="relative grid max-w-lg grid-cols-1 gap-1 mx-auto md:max-w-none  md:grid-cols-4">
    <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
           <div className='flex-1'>
           
<div className='flex justify-center p-3'><PiMedal className='w-32 h-20 text-orange-500'/></div>
<div className='flex justify-center content-center pt-7'>
<p className='font-bold text-xl'>Satisfied E-lit Customers</p>
</div>
<div className='flex justify-center px-8 py-5'>
<p className='font-medium text-lg text-gray-800'>We are happy we can help our customers see clearer and work hands-free in the dark, are you next?</p>
</div>


           </div>
        </div>
        </div>
        <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
           <div className='flex-1'>
           
<div className='flex justify-center p-3'><RiCustomerServiceFill className='w-32 h-20 text-orange-500'/></div>
<div className='flex justify-center content-center pt-7'>
<p className='font-bold text-xl'>24/7 Customer Support</p>
</div>
<div className='flex justify-center px-8 py-5'>
<p className='font-medium text-lg text-gray-800'>Have any questions or concerns? Feel free to reach out to our support team at <b>support@Elit.com</b></p>
</div>


           </div>
        </div>
        </div>
        <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
           <div className='flex-1'>
           
<div className='flex justify-center p-3'><LuShieldCheck className='w-32 h-20 text-orange-500'/></div>
<div className='flex justify-center content-center pt-7'>
<p className='font-bold text-xl'>1 Month Warranty</p>
</div>
<div className='flex justify-center px-8 py-5'>
<p className='font-medium text-lg text-gray-800'>E-lit™ will provide warranty coverage for up to one Month after receiving your order.</p>
</div>


           </div>
        </div>
        </div>
        <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
           <div className='flex-1'>
           
<div className='flex justify-center p-3'><SiTrustpilot className='w-32 h-20 text-orange-500'/></div>
<div className='flex justify-center content-center pt-7'>
<p className='font-bold text-xl'>10-Day Money-Back Guarantee</p>
</div>
<div className='flex justify-center px-8 py-5'>
<p className='font-medium text-lg text-gray-800'>Refunds are guaranteed within 30 days after receiving your order.We Stand on your Trust.</p>
</div>


           </div>
        </div>
        </div>
    
        
        </div>
</div>
  )
}

export default Advantage
