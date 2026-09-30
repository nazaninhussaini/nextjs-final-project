import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';

function HeroSection() {
  return (
    <div className=' w-full items-center max-w-6xl mt-7 mx-auto grid md:grid-cols-2 grid-cols-1 gap-3'>
        <div className='mt-3 flex flex-col gap-4'>
            <h1 className='text-6xl font-bold text-pink-600'>Find unique items tailored to your life styles</h1>
            <p className='text-gray-400 text-xs'>Instead of making you browse through thousands of generice items, these services analyze your style prefernces geographic and faily routines to surface high-quality distinctive goods.</p>
            <div className='flex gap-3'>
              <Button variant="destructive" className="py-2">Explore Products</Button>
              <Button className="bg-pink-600 px-6 py-1 hover:bg-pink-400 transition-colors duration-300 text-white">Join Us</Button>
            </div>
        </div>
        <div>
            {/* <Image src="../../images/afg.jpeg" alt='some all image' height={1000} width={1000}/> */}
            <img src="./images/afg.jpeg" alt="some all images" />
        </div>
      
    </div>
  )
}

export default HeroSection;
