import React from 'react'
import ProductCard from './product-card'
import { Button } from '../ui/button'

function FeaturedProducts() {
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
      <h1 className='text-4xl text-center text-amber-600 font-bold'>Featured Products</h1>
      <div className='w-full flex gap-3 justify-between'>
        <div className='my-6 space-x-2 flex'>
            <Button variant="link" >All Products</Button>
            <Button variant="link" >Men</Button>
            <Button variant="link" >WoMen</Button>
            <Button variant="link" >Shoes</Button>
            <Button variant="link" >Watches</Button>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productsList.map((product)=>(
            <ProductCard products = {product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
