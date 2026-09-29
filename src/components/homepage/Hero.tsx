import Image from 'next/image';
import React from 'react'

function HeroSection() {
  return (
    <div className=' w-full max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-3'>
        <div>
            <h1>Hama Kala</h1>
        </div>
        <div>
            {/* <Image src="../../images/afg.jpeg" alt='some all image' height={1000} width={1000}/> */}
            <img src="./images/afg.jpeg" alt="some all images" />
        </div>
      
    </div>
  )
}

export default HeroSection;
