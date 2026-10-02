import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategorieCard({card} :{card :{title:string , description:string, image:string}}) {
  return (
    <Link href="/" className='border z-10 relative'>
        <div className=' absolute left-4 top-4'>
            <h1 className='text-2xl font-bold py-2 text-amber-800'>{card.title}</h1>
            <span className='text-left font-extrabold text-gray-400 text-sm'>{card.description}</span>
        </div>
      <Image src={card.image} alt={card.title} height={600} width={600}/>
    </Link>
  )
}

export default CategorieCard
