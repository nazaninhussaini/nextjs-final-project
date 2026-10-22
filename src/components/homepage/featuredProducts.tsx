"use client"
import React, { useState } from 'react'
import ProductCard from './product-card'
import { Button } from '../ui/button'
import SearchBtn from './search_btn'
import { useTranslations } from 'next-intl'
import Filterbtn from './filter_btn'
import FilterProduct from './filterProduct'
import { Input } from '../ui/input'

function FeaturedProducts() {
  const [showInput, setShowInput] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
   const t =  useTranslations("homepage.products");
    const productsList:{id:number, name:string , price: string ,image:string }[] =[
        {
            id: 1,
            name : "classic Trench Coat",
            price :"2000",
            image :"/images/product-04.jpg"
        },
        {
            id: 2,
            name : "Only Check Trouser",
            price :"1500",
            image :"/images/product-03.jpg"
        },
        {
            id: 3,
            name : "Mini Silver Mesh Watch",
            price :"1200",
            image :"/images/product-05.jpg"
        },
        {
            id: 4,
            name : "Herschel supply",
            price :"2000",
            image :"/images/product-06.jpg"
        },
    ]
  return (
    <div className='w-full max-w-6xl z-10 mx-auto my-8'>
      <h1 className='text-4xl text-center text-amber-600 font-bold'>{t("title")}</h1>      
      <div className='w-full items-center flex gap-3 justify-between'>
        <div className='my-6 space-x-2 flex'>
            <Button variant="link" >{t("categories.men")}</Button>
            <Button variant="link" >{t("categories.women")}</Button>
            <Button variant="link" >{t("categories.shoes")}</Button>
            <Button variant="link" >{t("categories.watches")}</Button>
            <Button variant="link" >{t("categories.all_products")}</Button>
        </div>
        <div className='flex items-center gap-4'>
          <SearchBtn text = {t("categories.search")} showInput ={showInput} setShowInput ={setShowInput}/>
          <Filterbtn text ={t("categories.filter")} showFilter ={showFilter} setShowFilter ={setShowFilter}/>
        </div>
      </div>
        <div className='w-full'>
          <FilterProduct showFilter ={showFilter}/>
        </div>
        <div className='w-full mb-3 -mt-3'>
          <Input type='text' placeholder={t("categories.search")} className={`w-full py-3  ${showInput? "hidden" : "block" } `}/>
        </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productsList.map((products)=>(
            <ProductCard products = {products} key={products.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
