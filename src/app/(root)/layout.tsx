import Navbar from '@/components/UiComponend/navbar'
import React from 'react'

function MainLayout({childern}:{childern:React.ReactNode}) {
  return (
    <div className='w-full relative'>
      <Navbar/>
      {childern}
    </div>
  )
}

export default MainLayout
