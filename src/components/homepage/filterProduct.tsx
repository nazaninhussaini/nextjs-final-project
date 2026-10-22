import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge';


function FilterProduct({showFilter}:{showFilter: boolean}) {
    
  return (
 <div className={`w-full h-fit grid mb-3 rounded-b-lg justify-evenly -mt-3 grid-cols-5 ${showFilter ? "hidden": "block"} bg-gray-200 p-8 `}>
        {/* sort */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>Sort by</h1>
            {/* buttons */}
            <div className='flex flex-col gap-2 items-start'>
            <Button className="hover:text-amber-600" variant="link">Defualt</Button>
            <Button className="hover:text-amber-600" variant="link">popularity</Button>
            <Button className="hover:text-amber-600" variant="link">Newness</Button>
            <Button className="hover:text-amber-600" variant="link">PRICE: Low to High</Button>
            <Button className="hover:text-amber-600" variant="link">PRICE: High to Low</Button>
        </div>
        </div>

        {/* price */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>Price</h1>

            {/* buttons */}
            <div className='flex flex-col gap-2 items-start'>
            <Button variant="link" className="hover:text-amber-600">ALL</Button>
            <Button variant="link" className="hover:text-amber-600">500-1000</Button>
            <Button variant="link" className="hover:text-amber-600">1500-5000</Button>
            <Button variant="link" className="hover:text-amber-600">5000-10000</Button>
            <Button variant="link" className="hover:text-amber-600">10000++</Button>
            </div>

        </div>

        {/* colors */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>Colors</h1>
            {/* buttons */}
            <div className='flex flex-col gap-3 items-start'>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-black rounded-full'></div>
                    <span className='text-sm'>Black</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                    <span className='text-sm'>Red</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                    <span className='text-sm'>Green</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                    <span className='text-sm'>Blue</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-gray-400 rounded-full'></div>
                    <span className='text-sm'>Gray</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                    <span className='text-sm'>White</span>
                </div>
            </div>
        </div>

        {/* tags */}
        <div > 
            <h1 className='font-bold text-xl text-amber-600 mb-2'>Tages</h1>
            {/* buttons */}
            <div className='w-full flex gap-6 flex-wrap h-fit'>
            <Badge variant="destructive" className='px-6 py-3 hover:border-amber-600  hover:cursor-pointer'>Fashion</Badge>
            <Badge variant="destructive" className='px-6 py-3 hover:border-amber-600  hover:cursor-pointer'>LifeStyle</Badge>
            <Badge variant="destructive" className='px-6 py-3 hover:border-amber-600  hover:cursor-pointer'>Hzaragi</Badge>
            <Badge variant="destructive" className='px-6 py-3 hover:border-amber-600  hover:cursor-pointer'>Crafts</Badge>
            </div>
        </div>
      </div>
  )
}

export default FilterProduct;
