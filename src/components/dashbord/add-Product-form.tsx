import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useLocale, useTranslations } from 'next-intl';

function AddProductForm() {
      const locale = useLocale();
      const t = useTranslations("dashboard.addProduct")
  return (

          <form action="" className='w-full grid grid-cols-2 gap-3'>
            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='name' >{t("labels.name")}</Label>
            <Input type='number' id='name' name='name' placeholder={t("pleceholder.name")} />
            </div>
             
            <div className=' relative flex flex-col space-y-1.5'>
                <Label htmlFor='price'>{t("labels.price")}</Label>
            <Input type='number' id='price' name='price' placeholder={t("pleceholder.price")}  />
            <div className={`absolute top-1/2 pt-1.5 -translate-y-1/2 ${locale =="en" ?"right-2":"left-2"} bg-white dark:bg-black `}>{locale=="en"?"AFG":"افغانی"}</div>
            </div>

           <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='size'>{t("labels.size")}</Label>
            <Input type='text' id='size' name='size' placeholder={t("pleceholder.size")} />
            </div>

            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='brand'>{t("labels.brand")}</Label>
            <Input type='text' id='brand' name='brand' placeholder={t("pleceholder.brand")} />
            </div>

            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='front_image'>{t("labels.front_image")}</Label>
            <Input type='number' id='front_image' name='front_image' placeholder={t("")} />
            </div>
          </form>
  )
}

export default AddProductForm
