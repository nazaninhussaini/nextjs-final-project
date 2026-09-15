import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import DropdownMenuShowTheme from '../UiComponend/Dropdown-showtheme'
import LanguageChenger from '../UiComponend/language-chenger'

function DashboardHeadar() {
  return (
    <div className='flex w-full items-center py-4 px-3 border-b border-gray-400 justify-between'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
            <SidebarTrigger />
            <h1 className='text-xl font-bold'>Final Appliction</h1>
        </div>
        <div className='flex gap-1 items-center'>
            <DropdownMenuShowTheme/>
            <LanguageChenger/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeadar
