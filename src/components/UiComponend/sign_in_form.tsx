"use client"
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { useLocale } from 'next-intl'

function LoginForm() {
    const locale = useLocale();
    const [show , setShow] = useState(false);
  return (
   <form action="" className='w-full grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "email">Eamil</Label>
                        <Input type='email' id='email' required name='email' />
                    </div>
                     <div className=' relative'>
                      <div className='grid gap-2 relative'>
                        <Label htmlFor = "password"> Password</Label>
                        <Input type={show ? "text" : "password"} id='password' required name='password' />
                    </div>
                    <div className={`absolute top-7 ${locale == "en" ? "right-2" :" left-2"}`}>{show ? <Eye size={18} onClick={()=> setShow (!show)}/> : <EyeOff size={18} onClick={()=> setShow(!show)}/>}</div>
                    </div>
                 
                    <div className=' relative'>
                      <div className='grid gap-2 relative'>
                        <Label htmlFor = "password">Confirm Password</Label>
                        <Input type={show ? "text" : "password"} id='password' required name='password' />
                    </div>
                    <div className={`absolute top-7 ${locale == "en" ? "right-2" :" left-2"}`}>{show ? <Eye size={18} onClick={()=> setShow (!show)}/> : <EyeOff size={18} onClick={()=> setShow(!show)}/>}</div>
                    </div>
                    <Button type='submit'>Sign in </Button>
                </form>
  )
}

export default LoginForm
