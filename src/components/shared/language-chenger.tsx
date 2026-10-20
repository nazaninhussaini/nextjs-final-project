"use client"
import React, { useTransition } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'

function LanguageChenger() {
  const router = useRouter();
  const [pending, startTranstion]= useTransition();
  function changeLanguage (locale : string){
    document.cookie = `locale=${locale};path=/;max-age=7776000`;
    startTranstion(()=>{
      router.refresh();
        })
  }
  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="text-gray-500"><Languages size={18}/></DropdownMenuTrigger>
    <DropdownMenuGroup>
        <DropdownMenuContent className="text-gray-500">
        <DropdownMenuLabel>Lunguage | تغییر زبان</DropdownMenuLabel>
    <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={()=> changeLanguage("en")}>English | انگلیسی</DropdownMenuItem>
        <DropdownMenuItem onClick={()=> changeLanguage("fa")}>Dari | دری</DropdownMenuItem>
        <DropdownMenuItem onClick={()=> changeLanguage("pa")}>Pashto | پشتو</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenuGroup>
  </DropdownMenu>
  )
}

export default LanguageChenger
