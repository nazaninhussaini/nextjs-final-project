import HeroSection from '@/components/homepage/Hero'
import React from 'react'
import Features from '@/components/homepage/Features'
import { title } from 'process'
import Categories from '@/components/homepage/categories'
import FeaturedProducts from '@/components/homepage/featuredProducts'


export const metadata = {
  title :"خانه",
}
// cookies in lesson 54 not code in request.ts not creat kaml kar hai language baqi manda
function HomePage() {
  return (
    <div className='mt-18'>
      <HeroSection/>
      <Features/>
      <Categories/>
      <FeaturedProducts/>
    </div>
  )
}

export default HomePage
