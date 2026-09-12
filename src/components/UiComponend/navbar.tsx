"use client";
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../../db/firebase.config';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
    const [user ,setUser] =useState<User | null>(null);
    const router = useRouter();
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
     <div>
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
