import React from 'react'
import CategorieCard from './cate-card'

function Categories() {
    
    const listCategories:{id:number,title :string , description: string , image:string}[] = [
        {
            id : 1,
           title:"Men",
           description:"Fall 2026",
            image: "/images/banner-02.jpg"
        },
        {
            id : 2,
           title:"Women",
           description:"Fall 2026",
            image: "/images/banner-01.jpg"
        },
        {
            id : 3,
           title:"Accessories",
           description:"Famouse Brands",
            image: "/images/banner-03.jpg"
        },
    ]
  return (
    <div className='w-full max-w-6xl z-10 mx-auto mt-6 '>
        <h1 className='text-4xl my-3 font-extrabold text-amber-600 text-center'>Products Categories</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>

      {listCategories.map((card)=>(
        <CategorieCard key={card.id} card ={card}/>
      ))}
        </div>
    </div>
  )
}

export default Categories
