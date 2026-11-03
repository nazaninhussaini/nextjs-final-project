import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar1Icon } from 'lucide-react'
import { Calendar } from '../ui/calendar'

function ShamsiDatePicker({date , setDate} :{date: Date|undefined , setDate : any}) {
  return (
    <div>
         <Popover>
                <PopoverTrigger className="w-full flex gap-1.5 py-2 px-4 border">
                  <Calendar1Icon/>
                  {date? date.toLocaleDateString() :"aselect a date"}
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <Calendar dir="rtl" selected={date} onSelected = {()=>{
                    setDate(date)
                  }}/>
                </PopoverContent>
              </Popover>
    </div>
  )
}

export default ShamsiDatePicker
