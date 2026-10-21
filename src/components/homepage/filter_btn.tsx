"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { ListFilter, Search } from 'lucide-react';
import { Input } from '../ui/input';

function Filterbtn({showFilter, setShowFilter}:{showFilter:boolean, setShowFilter:any}) {
    
  return (
    <div className='flex w-full flex-col gap-4'>
       <Button
       onClick={()=> setShowFilter(!showFilter)}
       className={`rounded-none w-fit relative hover:bg-amber-600 hover:after:border-t-amber-600 hover:text-gray-300 after:content[''] after:h-0 after:w-0 after:border-x-[12px] after:border-x-transparent bg-gray-300/60 ${showFilter ?"after:border-t-none": "after:border-t-[15px]"}  after:border-t-gray-300/60 hover:transition-all duration-300 hover:after:transition-all hover:after:duration-300 after:absolute after:-bottom-[21px]  after:-translate-1/2 after:left-1/2 group px-3 py-1.5`} variant="outline">
        <ListFilter size={18}/>
        Filter 
       </Button>
       </div>
       )
}

export default Filterbtn
