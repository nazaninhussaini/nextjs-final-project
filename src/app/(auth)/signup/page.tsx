import React from 'react'
import {Card , CardHeader, CardContent,CardTitle,CardDescription,Label} from "@/components/ui/card";
import { Input } from '@base-ui/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Card className = "w-1/4 py-2">
            <CardHeader>
                <CardTitle className ="text-3xl font-semibold">Sign Up</CardTitle>
                <CardDescription>Login to the platform using email and password</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='w-full grid gap-3'>
                    <div className='grid gap-2'>
                        <Label htmlFor = "username">UserName</Label>
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
                    <Button>Create Account</Button>
                </form>
                <div>
                    <Link href="login" className='hover:cursor-pointer hover:text-gray-500' >
                    Already have an account?</Link>
                </div>
                <div className=' mt-2 w-full grid gap-2'>
                    <div className='border w-full text-center py-2 px-6 rounded-md'>Sign In With <span className='text-red-500'>Google</span></div>
                    <div className='border w-full text-center py-2 px-6 rounded-md'>Sign In With <span className='text-purple-500'>GitHub</span></div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default page
