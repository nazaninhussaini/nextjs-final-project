import AddProductForm from '@/components/dashbord/add-Product-form'
import DashboardHeadar from '@/components/dashbord/dashboard-headar'
import DashbordSideBar from '@/components/dashbord/Dashbord-sidbar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {  useTranslations } from 'next-intl'
import { title } from 'process'
import React from 'react'

export const metadate ={
  title:"محصول جدید"
}
function page() {
  const t = useTranslations("dashboard.addProduct");

  return (
    <div> 
      <DashbordSideBar/>
      <div className='w-full justify-between'>
        <DashboardHeadar/>
        <div className='p-8'>
        <div className='w-full border rounded-2xl my-6 p-4'>
          <div className='flex flex-col gap-3 my-2'> 
          <p className='text-3xl font-bold'>{t("title")}</p>
          <span className='text-sm text-muted-foreground'>{t("desc")}</span>
          </div>

          <AddProductForm/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
