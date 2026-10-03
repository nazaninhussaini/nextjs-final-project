import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategorieCard({card} :{card :{title:string , description:string, image:string}}) {
  return (
    <Link href="/" className='border z-10 hover:after:absolute hover:after:left-0 group hover:after:top-0 transition-all duration-500 after:content-[""] hover:after:w-full hover:after:h-full hover:after:bg-amber-500/35    relative'>
        <div className=' absolute left-4 top-4'>
            <h1 className='text-2xl font-bold py-2 text-amber-800'>{card.title}</h1>
            <span className='text-left font-extrabold text-gray-400 text-sm'>{card.description}</span>
        </div>
        <div  className=' absolute hidden group-hover:block bottom-4 left-4'>
          <span className=' underline underline-offset-8 text-amber-600'>Shop Now</span>

        </div>
      <Image className='z-10' src={card.image} alt={card.title} height={600} width={600}/>
    </Link>
  )
}

export default CategorieCard
