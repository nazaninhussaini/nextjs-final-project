import React from 'react'
import { Button } from '../ui/button'

function FilterProduct({showFilter}:{showFilter: boolean}) {
  return (
 <div className={`w-full h-fit grid mb-3 -mt-3 grid-cols-5 ${showFilter ? "none": "hidden"} bg-gray-200 p-8 `}>
        {/* sort */}
        <div>
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
        <div>
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
      </div>
  )
}

export default FilterProduct;
