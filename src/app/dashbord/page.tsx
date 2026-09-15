import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

function page() {
  return (
    <div className='w-full min-h-screen px-4 '>
      <div className='w-full grid grid-cols-1 gap-3 md:grid-cols-4'>
        <Card>
          <CardHeader>
            <h1 className='text-xl font-bold uppercase'>Users</h1>
          </CardHeader>
          <CardContent>100+</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='text-xl font-bold uppercase'>All Products</h1>
          </CardHeader>
          <CardContent>50+</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='text-xl font-bold uppercase'>All Reviews</h1>
          </CardHeader>
          <CardContent>70+</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h1 className='text-xl font-bold uppercase'>Sell Product</h1>
          </CardHeader>
          <CardContent>10+</CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page
