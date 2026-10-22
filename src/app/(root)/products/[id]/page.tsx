import ImageCards from '@/components/products/imageCards'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

async function page({params}:{params:Promise<{id: string}>}) {
  const {id} = await params
  return (
    <div className='mt-20 w-full max-w-6xl mx-auto justify-center grid grid-cols-6 gap-8'>
      <ImageCards/>
      <div className='col-span-3'>
        <h1 className='font-bold text-4xl text-center text-amber-600 mb-2'>Clothes</h1>
        <p className='text-sm text-gray-400 text-justify whitespace-break-spaces'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla in recusandae, aliquam sint voluptatum cum? Architecto atque numquam error hic quos, tempora eum nesciunt enim necessitatibus! Nemo tempore doloremque nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, minima aperiam rerum voluptatem eaque facere, asperiores ullam quam beatae tenetur eos, corrupti error nemo voluptates mollitia recusandae cumque! Quibusdam, nam.</p>
      </div>
      <Card className='h-fit mt-4'>
        <CardHeader>Rating</CardHeader>
        <CardContent>
          <div className='flex justify-between'>
            <p>Overall Rating</p>
            <span>8.7</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
