import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Calendar1Icon } from 'lucide-react'
import { Calendar } from '../../ui/calendar'

function ShamsiEndDate({date, setDate} :{date : Date |undefined ;setDate :any }) {
  return (

    //  برای نصب شمسی دیت پیکر به یک پکیج خاص نیاز است
    // react-multi-date-picker   npm i react-multi-date-picker  
    
    <div>
      <Popover>
        <PopoverTrigger className="w-full py-2 px-3 border rounded-lg">
            <Calendar1Icon />
        </PopoverTrigger>
        <PopoverContent>
            <Calendar mode='single' selected={date}  onSelect ={(date:any) => {
                    setDate(date)
                  }}/> 
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ShamsiEndDate
