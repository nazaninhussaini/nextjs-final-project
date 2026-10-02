import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Handshake, Languages, LanguagesIcon, LucideLanguages, ShieldCheck, ShoppingCartPlus } from 'lucide-react'
import { Language } from 'firebase/ai'

function Features() {

  const listFeatures:{
    id:number, title : string ,description: string
  }[] = [
    {
      id: 1,
     title:"Security",
     description:"Your date in this app is completely secure"
    },
    {
      id: 2,
      title:"User Frindly",
      description:"The UI/Ux of application built to feel comfortable"
    },
    {
      id: 3,
       title:"Multiple language",
        description:"This application is avalibale in Dari, Pashto , English languages"
    },
    {
      id: 4,
      title:"Products Variaty",
      description:"You can find variaty of product from different Brands around the world"
    },
  ]
  return (
    <div className='w-full max-w-6xl mt-4 mx-auto '>
        <h2 className='text-center text-2xl text-amber-400 font-bold'>Features</h2>
        <h1 className='text-center text-4xl font-bold text-amber-600 my-6'>Our special Features</h1>
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
