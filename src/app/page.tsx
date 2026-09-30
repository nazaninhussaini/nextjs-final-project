import HeroSection from '@/components/homepage/Hero'
import React from 'react'
import { metadata } from './layout'
metadata
// cookies in lesson 54 not code in request.ts not creat kaml kar hai language baqi manda
function HomePage() {
  return (
    <div className='mt-18'>
      <HeroSection/>
    </div>
  )
}

export default HomePage
