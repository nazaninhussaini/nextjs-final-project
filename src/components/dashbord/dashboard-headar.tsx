import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import DropdownMenuShowTheme from '../shared/Dropdown-showtheme'
import LanguageChenger from '../shared/language-chenger'
import { useTranslations } from 'next-intl'

function DashboardHeadar() {
  const t =useTranslations("dashboard");
  return (
    <div className='flex w-full items-center py-4 px-3 border-b border-gray-400 justify-between'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-1  items-center'>
            <SidebarTrigger size={"icon"}/>
            <h1 className='text-xl font-bold text-amber-600'>{t("header.title")}</h1>
        </div>
        <div className='flex gap-3 items-center'>
            <DropdownMenuShowTheme/>
            <LanguageChenger/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeadar
