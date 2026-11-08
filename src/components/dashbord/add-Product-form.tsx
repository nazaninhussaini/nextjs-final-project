"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';

// import { Calendar, Calendar1Icon } from 'lucide-react';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import ShamsiDatePicker from './shamsi-date-picker';
// import ShamsiEndDate from './shamsi-end-date';

function AddProductForm() { 

  //  const [manDate , setManDate]=  useState<Date>();
  //  const [expDate , setExpDate] = useState<Date>();
  const [productType , setProductType] = useState(null); 
  const [showColors, setshowColors] = useState(false);
      const locale = useLocale();
      const t = useTranslations("dashboard.addProduct")
  return (

          <form action="" className='w-full grid grid-cols-2 gap-3'>
            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='name' >{t("labels.name")}</Label>
            <Input type='text' id='name' name='name' placeholder={t("pleceholder.name")} />
            </div>
             
            <div className=' relative flex flex-col space-y-1.5'>
                <Label htmlFor='price'>{t("labels.price")}</Label>
            <Input type='number' id='price' name='price' placeholder={t("pleceholder.price")}  />
            <div className={`absolute top-1/2 pb-1 -translate-y-1/2 ${locale =="en" ?"right-2":"left-2"} bg-white h-0 mb-3 text-center   dark:bg-gray-800 `}>{locale=="en"?"AFG":"افغانی"}</div>
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
            <Label htmlFor='qty'>{t("labels.qty")}</Label>
            <Input type='number' id='qty' name='qty' placeholder={t("pleceholder.qty")} />
            </div>


            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='alert_qty'>{t("labels.alert_qty")}</Label>
            <Input type='number' id='alert_qty' name='alert_qty' placeholder={t("pleceholder.alert_qty")} />
            </div>

          

            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='front_image'>{t("labels.front_image")}</Label>
            <Input type='file' id='front_image' name='front_image'  />
            </div>
             
            <div className='flex space-y-1.5 flex-col'>
            <Label htmlFor='back_image'>{t("labels.back_image")}</Label>
            <Input type='file' id='back_image' name='back_image'  />
            </div>


            {/* man_data */}

            <div className={`grid gap-1 ${productType == "cloth"? 'hidden' : productType == "shoes"? 'hidden' : "block"}`}>
              <Label>{t("labels.man_date")}</Label>
              <Input type='date'/>
              {/* <div className='w-full '>
             <ShamsiDatePicker date = { manDate } setDate = {setManDate}/>
              </div> */}
            </div>

            {/* exp-data */}
            <div className={`grid gap-1 ${productType == "cloth"? 'hidden' : productType == "shoes"? 'hidden' : "block"}`}>
            <Label>{t("labels.exp_date")}</Label>
            <Input type='date'/>
              {/* <div className='w-full '>
                <ShamsiEndDate date= {expDate} setDate ={setExpDate}/>
              </div> */}
            </div>
            <div className='grid gap-2'>
              <Label>{t("labels.type")}</Label>
              <Select value={productType} 
              onValueChange={(value)=>setProductType(value)}>
                <SelectTrigger className="w-full">{t("labels.type")}</SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem className="w-full" value="cloth">{t("labels.product_type.cloth")}</SelectItem>
                  <SelectItem className="w-full" value="shoes">{t("labels.product_type.shoes")}</SelectItem>
                  <SelectItem className="w-full" value="cosmetic_items">{t("labels.product_type.cosmetice")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            
            {/* colors */}
            <div className='flex items-center flex-wrap gap-2'>
              <h1 className='text-xl p-2 font-bold'>{t("labels.color.title")}</h1>

              <div className=' flex p-0 m-0 gap-1 items-center'>
                <div className='flex gap-1'>
                  <div className='w-4 h-4 rounded-full bg-black'>
                  </div>
                <Label htmlFor='black'>{t("labels.color.black")}</Label>
                <Checkbox name ="color" id ="black" value="black"/>
                </div>
              </div>

              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                  <div className='w-4 h-4 rounded-full bg-white'>
                  </div>
                <Label htmlFor='white'>{t("labels.color.white")}</Label>
                <Checkbox name ="color" id ="white" value="white"/>
                </div>
              </div>

              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-amber-600'>
                  </div>
                <Label htmlFor='brown'>{t("labels.color.brown")}</Label>
                <Checkbox name ="color" id ="brown" value="brown"/>
                </div>
              </div>
           
              <div className='flex gap-1 items-center'>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-gray-400'>
                  </div>
                <Label htmlFor='gray'>{t("labels.color.gray")}</Label>
                <Checkbox name ="color" id ="gray" value="gray"/>
                </div>
              </div>
              {/* blue */}


              <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-blue-600'>
                  </div>
                <Label htmlFor='blue'>{t("labels.color.blue")}</Label>
                <Checkbox name ="color" id ="blue" value="blue"/>
                </div>
              </div>
             
              {/* green */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-green-600'>
                  </div>
                <Label htmlFor='green'>{t("labels.color.green")}</Label>
                <Checkbox name ="color" id ="green" value="green"/>
                </div>
              </div>
              {/* purple */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-purple-500'>
                  </div>
                <Label htmlFor='purple'>{t("labels.color.purple")}</Label>
                <Checkbox name ="color" id ="purple" value="purple"/>
                </div>
              </div>
              {/* pink */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-pink-600'>
                  </div>
                <Label htmlFor='pink'>{t("labels.color.pink")}</Label>
                <Checkbox name ="color" id ="pink" value="pink"/>
                </div>
              </div>
              {/* yellow */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-yellow-500'>
                  </div>
                <Label htmlFor='yellow'>{t("labels.color.yellow")}</Label>
                <Checkbox name ="color" id ="yellow" value="yellow"/>
                </div>
              </div>
              {/* orange */}
               <div className={`${showColors ? "flex" :"hidden"} gap-1 items-center`}>
                <div className='flex gap-1'>
                <div className='w-4 h-4 rounded-full bg-orange-500'>
                  </div>
                <Label htmlFor='orange'>{t("labels.color.orange")}</Label>
                <Checkbox name ="color" id ="orange" value="orange"/>
                </div>
              </div>

              <Button onClick={()=> setshowColors(!showColors)}> 
                {showColors ? t("labels.color.btn_trend") : t("labels.color.btn_more")}
              </Button>
            </div>

            {/* description */}

            <div className='grid gap-2'>
              <Label htmlFor='desc'>{t("labels.desc")}</Label>
              <Textarea className='w-full h-40 resize-none' placeholder={t("pleceholder.desc")} />
            </div>

            <Button type='submit' className="mt-3">{t("labels.save_btn")}</Button>
          </form>
  )
}

export default AddProductForm
