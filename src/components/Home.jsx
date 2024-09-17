import React from 'react'
import Testimonial from './Testimonial'
import Advantage from './Advantage'
import logo from "../assets/e-lit01.jpg"
import FAQ from './FAQ'
import Stat from './Stat'
import Navbar from './NavBar'
import OurVision from './OurVision'
import Footer from './Footer'


const Home = () => {
  return (<>
  <Navbar/>
    <div className="bg-[url('assets/HomeBG.webp')] bg-no-repeat bg-cover ">
<div className='flex justify-center items-center h-screen'>

<div className=''>
<div className='flex justify-center p-5'> 
<h1 className='text-white text-4xl font-bold px-5 p-5'>
<img src={logo} className='w-[25vh] h-[25vh]'/></h1>
</div>
<div className='flex justify-center p-'> 
<h1 className='text-white text-4xl font-bold font-mono px-5'>The World's First Effective Electric Lighter</h1></div>
   <div className='flex justify-center p-5'>  <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full'>SHOP NOW</button></div> 
</div>
</div>
    </div>
    
<OurVision/>
<Advantage/>
<FAQ/>
<Stat/>
<Testimonial/>
<Footer/>


</>
  )
}

export default Home
