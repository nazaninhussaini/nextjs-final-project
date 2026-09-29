import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Languages } from 'lucide-react'

function LanguageChenger() {
  return (
  <DropdownMenu>
    <DropdownMenuTrigger><Languages size={18}/></DropdownMenuTrigger>
    <DropdownMenuGroup>
        <DropdownMenuContent>
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
