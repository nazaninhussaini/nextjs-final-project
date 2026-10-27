import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useLocale, useTranslations } from 'next-intl';
import { Checkbox } from '@base-ui/react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';

function AddProductForm() {
  const [showColors, setshowColors] = useState(false);
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
            <Input type='number' id='front_image' name='front_image'  />
            </div>
             
            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='back_image'>{t("labels.back_image")}</Label>
            <Input type='number' id='back_image' name='back_image'  />
            </div>

            <div className='grid gap-2'>
              <Label>{t("labels.type")}</Label>
              <Select>
                <SelectTrigger>Select Type</SelectTrigger>
                <SelectContent>
                  <SelectItem value="cloth">Cloth</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                  <SelectItem value="cosmetic  items">Cosmetic Items</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* colors */}
            <div className='flex gap-2'>
              <h1>Colors</h1>
              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                  <div className='w-4 h-4 rounded-full bg-black'>
                <Label htmlFor='black'>{t("labels.color.black")}</Label>
                  </div>
                <Checkbox name ="color" id ="black" value="black"/>
                </div>
              </div>

              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                  <div className='w-4 h-4 rounded-full bg-white'>
                <Label htmlFor='black'>{t("labels.color.white")}</Label>
                  </div>
                <Checkbox name ="color" id ="white" value="white"/>
                </div>
              </div>

              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-amber-600'>
                <Label htmlFor='black'>{t("labels.color.brown")}</Label>
                  </div>
                <Checkbox name ="color" id ="brown" value="brown"/>
                </div>
              </div>
           
              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-gray-400'>
                <Label htmlFor='gray'>{t("labels.color.gray")}</Label>
                  </div>
                <Checkbox name ="color" id ="gray" value="gray"/>
                </div>
              </div>
              {/* blue */}


              <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-blue-600'>
                <Label htmlFor='blue'>{t("labels.color.blue")}</Label>
                  </div>
                <Checkbox name ="color" id ="blue" value="blue"/>
                </div>
              </div>
              {/* brown */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-amber-600'>
                <Label htmlFor='brown'>{t("labels.color.brown")}</Label>
                  </div>
                <Checkbox name ="color" id ="brown" value="brown"/>
                </div>
              </div>
              {/* green */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-green-600'>
                <Label htmlFor='green'>{t("labels.color.green")}</Label>
                  </div>
                <Checkbox name ="color" id ="green" value="green"/>
                </div>
              </div>
              {/* purple */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-purple-500'>
                <Label htmlFor='purple'>{t("labels.color.purple")}</Label>
                  </div>
                <Checkbox name ="color" id ="purple" value="purple"/>
                </div>
              </div>
              {/* pink */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-pink-600'>
                <Label htmlFor='pink'>{t("labels.color.pink")}</Label>
                  </div>
                <Checkbox name ="color" id ="pink" value="pink"/>
                </div>
              </div>
              {/* yellow */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-yellow-500'>
                <Label htmlFor='yellow'>{t("labels.color.yellow")}</Label>
                  </div>
                <Checkbox name ="color" id ="yellow" value="yellow"/>
                </div>
              </div>
              {/* orange */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-orange-500'>
                <Label htmlFor='blue'>{t("labels.color.blue")}</Label>
                  </div>
                <Checkbox name ="color" id ="blue" value="blue"/>
                </div>
              </div>

              <Button onClick={()=> setshowColors(!showColors)}> 
                {showColors ? "Trendy Colors" :"More Colors"}
              </Button>
            </div>
          </form>
  )
}

export default AddProductForm
