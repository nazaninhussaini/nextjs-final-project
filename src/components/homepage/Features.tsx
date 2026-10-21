import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Handshake, Languages, LanguagesIcon, LucideLanguages, ShieldCheck, ShoppingCartPlus } from 'lucide-react'
import { Language } from 'firebase/ai'
import { useTranslations } from 'next-intl'

function Features() {
  const t = useTranslations("homepage.features");

  const listFeatures:{
    id:number, title : string ,description: string
  }[] = [
    {
      id: 1,
     title:t("feature1.title"),
     description: t("feature1.description")
    },
    {
      id: 2,
      title:t("feature2.title"),
      description:t("feature2.description")
    },
    {
      id: 3,
       title:t("feature3.title"),
        description:t("feature3.description")
    },
    {
      id: 4,
      title:t("feature4.title"),
      description:t("feature4.description")
    },
  ]
  return (
    <div className='w-full max-w-6xl mt-4 mx-auto '>
        <h2 className='text-center text-2xl text-amber-400 font-bold'>{t("subtitle")}</h2>
        <h1 className='text-center text-4xl font-bold text-amber-600 my-6'>{t("title")}</h1>
        <div className='grid w-ful grid-cols-4 gap-6'>
          {listFeatures.map((feature)=>(
            <Card key={feature.id}>
              <CardHeader className='w-full flex justify-center '>
                <span className='inline-block p-4 w-fit rounded-full bg-amber-600 text-white'>
                  {feature.id == 1 ? <ShieldCheck/> : feature.id ==2 ? <Handshake/>: feature.id ==3 ? <LucideLanguages/> : <ShoppingCartPlus/>}
                </span>
              </CardHeader>
              <CardContent>
                <h1 className='text-center py-3 text-2xl font-bold text-amber-800'>{feature.title}</h1>
                <span className='text-justify text-sm text-gray-400'>{feature.description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default Features
