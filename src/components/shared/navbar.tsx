import React from 'react'
import DropdownMenuShowTheme from '../UiComponend/Dropdown-showtheme'
import LanguageChenger from '../UiComponend/language-chenger'
import { Button } from '../ui/button'

function NavebarPage() {
    const listNavs =[]
  return (
    <div className='w-full border-b border-gray-400 py-3 px-6 flex justify-between items-center'>
      <div>logo</div>
      <div className='flex items-center gap-3'>
        <DropdownMenuShowTheme/>
        <LanguageChenger/>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default NavebarPage
