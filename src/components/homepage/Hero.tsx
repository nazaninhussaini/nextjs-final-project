import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

function HeroSection() {
  const t = useTranslations("homepage");
  return (
    <div className=' w-full items-center max-w-6xl mt-7 mx-auto grid md:grid-cols-2 grid-cols-1 gap-3'>
        <div className='mt-3 flex flex-col gap-4'>
            <h1 className='text-6xl font-bold text-amber-600'>{t("hero.title")}</h1>
            <p className='text-gray-400 text-xs'>{t("hero.description")}</p>
            <div className='flex gap-3'>
              <Button variant="destructive" className="py-2">
                {t("hero.btn_explore")}
                </Button>
              <Button className="bg-amber-600 px-6 py-1 hover:bg-amber-400 transition-colors duration-300 text-white">{t("hero.btn_join")}</Button>
            </div>
        </div>
        <div>
            {/* <Image src="../../images/afg.jpeg" alt='some all image' height={1000} width={1000}/> */}
            <img src="./images/images.jpg" alt="some all images" />
        </div>
      
    </div>
  )
}

export default HeroSection;
