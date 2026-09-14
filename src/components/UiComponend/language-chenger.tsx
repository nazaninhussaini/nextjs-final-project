import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'

function LanguageChenger() {
  return (
  <DropdownMenu>
    <DropdownMenuTrigger>lng</DropdownMenuTrigger>
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
