import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useTheme } from 'next-themes';
import { Moon, Sun, SunMoon } from 'lucide-react';

function DropdownMenuShowTheme() {
      const {theme, setTheme}= useTheme();
  return (
      <DropdownMenu>
            <DropdownMenuTrigger>
                {theme == "light" ? (<Sun/>) : theme =="dark" ?(<Moon/>):(<SunMoon/>)}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                <DropdownMenuLabel>
                    Theme
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={()=>setTheme("light")}><Sun/>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme("dark")}><Moon/>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme ("system")}><SunMoon/>System</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default DropdownMenuShowTheme
