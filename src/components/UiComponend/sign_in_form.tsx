"use client"
import React, { useActionState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { login } from '@/lib/auth/signin.action'

function SignInForm() {
    const[data,action,pending]= useActionState(login,{
        state:false,
        message:""
    })
  return (
     <form action={action} className='w-full grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "email">Eamil</Label>
                        <Input type='email' id='email' required name='email' />
                    </div>
                    <div className='grid gap-2'>
                        <Label htmlFor = "password">Password</Label>
                        <Input type='password' id='password' required name='password' />
                    </div>
                    <Button disabled={pending} type='submit'>{pending?"signIng...": "Login"}</Button>
                </form>
  )
}

export default SignInForm
