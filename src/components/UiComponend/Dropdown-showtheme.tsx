"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useTheme } from 'next-themes';
import { Moon, Sun, SunMoon } from 'lucide-react';

function DropdownMenuShowTheme() {
      const {theme, setTheme}= useTheme();
  return (
      <DropdownMenu>
            <DropdownMenuTrigger>
                {theme == "light" ? (<Sun size={18}/>) : theme =="dark" ?(<Moon size={18}/>):(<SunMoon size={18}/>)}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                <DropdownMenuLabel>
                    Theme
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={()=>setTheme("light")}>
                    <div className='flex w-full justify-between'>
                        {" "}
                    Light
                    <Sun/>
                    </div>
                    </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme("dark")}>
                    <div className='flex justify-between w-full'>
                        {" "}
                    Dark
                    <Moon/>
                    </div>
                    </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme ("system")}>
                    <div className='flex justify-between w-full'>
                        {" "}
                    System
                    <SunMoon/>
                    </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default DropdownMenuShowTheme
