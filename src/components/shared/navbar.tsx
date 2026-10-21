import React from 'react'
import DropdownMenuShowTheme from './Dropdown-showtheme'
import LanguageChenger from './language-chenger'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { useTranslations } from 'next-intl'

function NavebarPage() {
  const t = useTranslations("navbar")
    const listNavs =[]
  return (
    <div className='w-full border-b z-50 fixed top-0 left-0 backdrop-blur-md border-gray-400 py-3 px-6 flex justify-between items-center'>
      <div className='text-xl font-bold text-shadow-2xl  text-amber-600'>{t("logo")}</div>
      <div className='flex items-center gap-3'>
        <DropdownMenuShowTheme/>
        <LanguageChenger/>
        <Button variant="destructive" className="py-2 px-5">{t("btn_login")}<LogIn size={18}/></Button>
      </div>
    </div>
  )
}

export default NavebarPage
