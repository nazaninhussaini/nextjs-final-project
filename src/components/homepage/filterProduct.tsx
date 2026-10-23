import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge';
import { useTranslations } from 'next-intl';


function FilterProduct({showFilter}:{showFilter: boolean}) {
    const t = useTranslations("homepage.filter");
    
  return (
 <div className={`w-full h-fit grid mb-8  rounded-b-lg justify-evenly -mt-3 grid-cols-5 ${showFilter ? "hidden": "block"} bg-gray-200 p-8 `}>
        {/* sort */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>{t("sortby.title")}</h1>
            {/* buttons */}
            <div className='flex flex-col gap-2 items-start'>
            <Button className="hover:text-amber-600 text-sm" variant="link">{t("sortby.defualt")}</Button>
            <Button className="hover:text-amber-600 text-sm" variant="link">{t("sortby.popularity")}</Button>
            <Button className="hover:text-amber-600 text-sm" variant="link">{t("sortby.newnees")}</Button>
            <Button className="hover:text-amber-600 text-sm" variant="link">{t("sortby.price_low")}</Button>
            <Button className="hover:text-amber-600 text-sm" variant="link">{t("sortby.price_high")}</Button>
        </div>
        </div>

        {/* price */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>{t("price.title")}</h1>

            {/* buttons */}
            <div className='flex flex-col gap-2 items-start'>
            <Button variant="link" className="hover:text-amber-600 text-sm">{t("price.all")}</Button>
            <Button variant="link" className="hover:text-amber-600 text-sm">500-1000</Button>
            <Button variant="link" className="hover:text-amber-600 text-sm">1500-5000</Button>
            <Button variant="link" className="hover:text-amber-600 text-sm">5000-10000</Button>
            <Button variant="link" className="hover:text-amber-600 text-sm">10000++</Button>
            </div>

        </div>

        {/* colors */}
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-xl text-amber-600 mb-2'>{t("colors.title")}</h1>
            {/* buttons */}
            <div className='flex flex-col gap-3 items-start'>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-black rounded-full'></div>
                    <span className='text-sm'>{t("colors.black")}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                    <span className='text-sm'>{t("colors.red")}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                    <span className='text-sm'>{t("colors.green")}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
                    <span className='text-sm'>{t("colors.blue")}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-gray-400 rounded-full'></div>
                    <span className='text-sm'>{t("colors.gray")}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                    <span className='text-sm'>{t("colors.white")}</span>
                </div>
            </div>
        </div>

        {/* tags */}
        <div > 
            <h1 className='font-bold text-xl text-amber-600 mb-2'>{t("brands.title")}</h1>
            {/* buttons */}
            <div className='w-full flex gap-6 flex-wrap h-fit'>
            <Badge variant="destructive" className='px-6 py-3 text-xs hover:border-amber-600  hover:cursor-pointer'>{t("brands.fashion")}</Badge>
            <Badge variant="destructive" className='px-6 py-3 text-xs hover:border-amber-600  hover:cursor-pointer'>{t("brands.lifestyle")}</Badge>
            <Badge variant="destructive" className='px-6 py-3 text-xs hover:border-amber-600  hover:cursor-pointer'>{t("brands.hazaragi")}</Badge>
            <Badge variant="destructive" className='px-6 py-3 text-xs hover:border-amber-600  hover:cursor-pointer'>{t("brands.crafts")}</Badge>
            </div>
        </div>
      </div>
  )
}

export default FilterProduct;
