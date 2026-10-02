import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Languages } from 'lucide-react'

function LanguageChenger() {
  
  return (
  <DropdownMenu>
    <DropdownMenuTrigger className="text-gray-500"><Languages size={18}/></DropdownMenuTrigger>
    <DropdownMenuGroup>
        <DropdownMenuContent className="text-gray-500">
        <DropdownMenuLabel>Lunguage | تغییر زبان</DropdownMenuLabel>
    <DropdownMenuSeparator/>
        <DropdownMenuItem>English | انگلیسی</DropdownMenuItem>
        <DropdownMenuItem>Dari | دری</DropdownMenuItem>
        <DropdownMenuItem>Pashto | پشتو</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenuGroup>
  </DropdownMenu>
  )
}

export default LanguageChenger
