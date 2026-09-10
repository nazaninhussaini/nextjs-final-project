"use client";
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../../db/firebase.config';
import { Button } from '../ui/button';

function Navbar() {
    const [user ,setUser] =useState<User|null>(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
    },[])
  return (
    <div className='w-full border-b backdrop-blur-md fixed top-0 left-0 p-3 flex justify-between items-center '>
     <div>logo</div>
     <div>
        {user ?(
            <div className='flex space-x-2'>
                <div className='p-2 rounded-full bg-gray-600 text-stone-100 leading-0'>{user.displayName ?.slice(0,1).toUpperCase()}</div>
                <Button className="border">logout</Button>
                </div>
        ):(
            <button></button>
        )}
     </div>
    </div>
  )
}

export default Navbar
