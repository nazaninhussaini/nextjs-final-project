import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'


function ProductCard({products} : {products:{id:number, name:string , price:string ,image: string}}) {
  return (
    <Link href={`/products/${products.id}`}>
    
    <Card className='p-0 '>
    <CardHeader className='p-0 group relative'>
      <Image src={products.image} alt={products.name} height={700} width={700}  
      className='h-80 object-cover'
      />
      <div className=' absolute hidden group-hover:block hover:bg-black hover:cursor-pointer hover:text-white transition-all duration-300  left-1/2 bottom-4 bg-white rounded-full py-3 px-6 -translate-1/2 '>
        <h1>Quick View</h1>
      </div>
    </CardHeader>
    <CardContent className='p-4 m-0 '>
      <h1 className='text-xl text-amber-800/80 font-bold'>{products.name}</h1>
      <span className='text-sm text-gray-400'>{products.price}</span>
    </CardContent>
  </Card>
  </Link>
  )
}

export default ProductCard
