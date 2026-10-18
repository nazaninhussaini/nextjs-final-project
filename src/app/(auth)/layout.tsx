
import NavebarPage from '@/components/shared/navbar'
import React from 'react'

function MainLayout({childern}:{childern:React.ReactNode}) {
  return (
    <div className='w-full relative'>
      {/* <NavebarPage/> */}
      {childern}
    </div>
  )
}

export default MainLayout
