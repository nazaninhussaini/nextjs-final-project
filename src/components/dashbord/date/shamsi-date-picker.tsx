import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Calendar1Icon } from 'lucide-react'
import { Calendar } from '../../ui/calendar'
import { format } from "date-fns-jalali";

function ShamsiDatePicker({date , setDate} :{date: Date|undefined ;  setDate : any}) {
  return (
    <div className='w-full z-50'>
         <Popover>
                <PopoverTrigger className="w-full flex rounded-lg gap-1.5 py-2 px-4 border">
                  <Calendar1Icon/>
                  {date? format(date ,'yyyy/MM/dd') :"select a date"}
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Calendar dir="rtl" selected={date} mode='single' onSelect ={(date:any) => {
                    setDate(date)
                  }}/>
                </PopoverContent>
              </Popover>
    </div>
  )
}

export default ShamsiDatePicker
