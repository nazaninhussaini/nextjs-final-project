"use client";
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../../db/firebase.config';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Monitor, Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

function Navbar() {
    const [user ,setUser] =useState<User | null>(null);
    const router = useRouter();
    const {theme, setTheme}= useTheme();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
    },[])
   async function handleLogout(){
         await signOut(auth);
         router.refresh();

    }
  return (
    <div className='w-full border-b border-gray-400  bg-gray-100 backdrop-blur-md fixed top-0 left-0 p-3 flex justify-between items-center '>
     <div>logo</div>
     <div className='flex items-center'>
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
                <DropdownMenuItem onClick={()=>setTheme("light")}><Sun/></DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme("dark")}><Moon/></DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme ("system")}><SunMoon/></DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        {user ? (
            <div className='flex space-x-2'>
                <Button onClick={handleLogout}></Button>
                <div className='p-2 text-small px-2 rounded-full bg-gray-600 text-stone-100 leading-0'>{user.displayName ?.slice(0,1).toUpperCase()}</div>
                <Button className="border">logout</Button>
                </div>
        ):(
            <Button>
                <Link href="/login">Login</Link>
            </Button>
        )}
     </div>
    </div>
  )
}

export default Navbar
