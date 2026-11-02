import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar1Icon } from 'lucide-react'
import { Calendar } from '../ui/calendar'

function ShamsiDatePicker({date , setDate} :{date: Date , setDate : any}) {
  return (
    <div>
         <Popover>
                <PopoverTrigger className="w-full flex gap-1.5 border">
                  <Calendar1Icon/>
                </PopoverTrigger>
                <PopoverContent className="w-full">
                  <Calendar direction="rtl" selected={date} onSelected = {setDate}/>
                </PopoverContent>
              </Popover>
    </div>
  )
}

export default ShamsiDatePicker
