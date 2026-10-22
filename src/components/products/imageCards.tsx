"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageCards() {
    const listImage =[
        "product-03.jpg",
        "product-06.jpg",
    ]
   const[index,setIndex]= useState(0);
  return (
    <div className='w-full flex flex-col col-span-2 gap-3'>
        <Image src={`/images/${listImage[index]}`}
        className='w-full h-96 border rounded-lg object-cover'
        alt='somthing went wrong' height={1000} width={700} />

        <div className='grid grid-cols-2 gap-2'>
            {listImage.map((image, index)=>(
            <Image
            key={index}
             onClick={()=>setIndex(index)}
             className=' w-full h-42 rounded-2xl hover:cursor-pointer'
              src={`/images/${image}`}
               alt='somthing went wrong'
                height={1000} width={700} />
            ))}
            
        </div>
    </div>
  )
}

export default ImageCards
