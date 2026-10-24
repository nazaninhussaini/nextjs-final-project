import DashboardHeadar from '@/components/dashbord/dashboard-headar'
import DashbordSideBar from '@/components/dashbord/Dashbord-sidbar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLocale } from 'next-intl'
import { title } from 'process'
import React from 'react'

export const metadate ={
  title:"محصول جدید"
}
function page() {
  const locale = useLocale();
  return (
    <div> 
      <DashbordSideBar/>
      <div className='w-full justify-between'>
        <DashboardHeadar/>
        <div className='p-8'>
        <div className='w-full border rounded-2xl my-6 p-4'>
          <h1>Add Product Form</h1>

          <form action="" className='w-full grid grid-cols-2 gap-3'>
            <Label> product name</Label>
            <Input type='number' name='price' placeholder='Product Name' />
            <div className=' relative'>
            <Input type='number' name='price' placeholder='Product Price' />
            <div className={`absolute top-1/2 -translate-y-1/2 ${locale =="en" ?"right-2":"left-2"} bg-white dark:bg-black `}>{locale=="en"?"AFG":"افغانی"}</div>
            </div>

            <Input type='text' name='name' placeholder='Product Name' />
           
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
