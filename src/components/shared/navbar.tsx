import React from 'react'
import DropdownMenuShowTheme from '../UiComponend/Dropdown-showtheme'
import LanguageChenger from '../UiComponend/language-chenger'
import { Button } from '../ui/button'

function NavebarPage() {
    const listNavs =[]
  return (
    <div className='w-full border-b fixed top-0 left-0 backdrop-blur-md border-gray-400 py-3 px-6 flex justify-between items-center'>
      <div className='text-xl font-bold text-shadow-2xl shadow-pink-700 text-pink-500'>Hama Kala</div>
      <div className='flex items-center gap-3'>
        <DropdownMenuShowTheme/>
        <LanguageChenger/>
        <Button variant="destructive" className="py-2 px-5">Login</Button>
      </div>
    </div>
  )
}

export default NavebarPage
