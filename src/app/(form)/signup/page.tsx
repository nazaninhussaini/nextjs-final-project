import React from 'react'
import {Card , CardHeader, CardContent,CardTitle,CardDescription} from "@/components/ui/card";

import Link from 'next/link';
import SignUpForm from '@/components/UiComponend/sign_up_form';

function page() {
  return (
    <div className='lg:w-8/12 md:w-6/12 w-full h-screen mx-auto flex items-center justify-center'>
        <Card className='  w-full'>
            <CardHeader>
                <CardTitle className ="text-3xl font-semibold">Sign Up</CardTitle>
                <CardDescription>Sign up the platform using email and password</CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpForm/>
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
        {/* <div className='w-full col-span-2 flex justify-start p-12 m-5 gap-4 items-start flex-col'>
            <p className='text-2xl font-bold text-amber-600'>WELCOM TO SIGN UP FORM</p>
            <p className='text-sm font-mono'>Sign Up with email and password phone number in website.</p>
        </div> */}
    </div>
  )
}

export default page
