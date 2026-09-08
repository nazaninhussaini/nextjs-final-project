"use client"
import React, { useActionState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { register } from '@/lib/auth/signup.action'

function SignUpForm() {
    const [data,action,pending]= useActionState(register,{
        state:false,
        message:""
    });
  return (
    <form action={action} className='w-full grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "username">Username</Label>
                        <Input type='text' id='username' required name='username' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "email">Eamil</Label>
                        <Input type='email' id='email' required name='email' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "password">Password</Label>
                        <Input type='password' id='password' required name='password' />
                    </div>
                    <Button disabled={pending} type='submit'>{pending? "pleasse Wait...." : "Create Account" }</Button>

                </form>
  )
}

export default SignUpForm
