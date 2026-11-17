"use client"
import React, { useActionState, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useLocale } from 'next-intl'
import { Eye, EyeOff } from 'lucide-react'

function SignUpForm() {
    const [show, setShow] = useState(false);
   const locale =  useLocale();
  return (
    <form action="" className='w-full grid-cols-2 text-gray-600 items-center grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "first_name">First Name</Label>
                        <Input type='text' id='first_name' required name='first_name' placeholder='' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "last_name">Last Name</Label>
                        <Input type='text' id='last_name' required name='last_name' />
                    </div>
                   
                    <div className='grid gap-2'>
                        <Label htmlFor = "username">User Name</Label>
                        <Input type='text' id='username' required name='username' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "email">Eamil</Label>
                        <Input type='email' id='email' required name='email' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "phone_number">Phone Number</Label>
                        <Input type='phone_number' id='phone_number' required name='phone_number' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "address">Address</Label>
                        <Input type='address' id='address' required name='address' />
                    </div>
                      <div className=' relative'>
                      <div className='grid gap-2 relative'>
                        <Label htmlFor = "password"> Password</Label>
                        <Input type={show ? "text" : "password"} id='password' required name='password' />
                    </div>
                    <div className={`absolute top-7 ${locale == "en" ? "right-2" :" left-2"}`}>{show ? <Eye size={18} onClick={()=> setShow (!show)}/> : <EyeOff size={18} onClick={()=> setShow(!show)}/>}</div>
                    </div>
                    <Button  type='submit' className="mt-auto">Creat Acuant</Button>

                </form>
  )
}

export default SignUpForm
