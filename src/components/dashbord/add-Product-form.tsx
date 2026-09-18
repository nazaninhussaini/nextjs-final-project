"use client"
import React, { useActionState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem } from '../ui/select'
import { SelectTrigger } from "../ui/select"
import { addProduct } from '@/lib/product/addproduct.action'

function AddProductForm() {
   const [date,action]=  useActionState(addProduct,{
        state:false,
        message:"",
    })

  return (
   <Card className='w-full'>
    <CardHeader>
        <CardTitle>
            Add new Product Form
        </CardTitle>
        <CardDescription>
            You can add new product by filling this form
        </CardDescription>
        <CardContent>
            <form action={action} className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='grid gap-2'>
                    <Label htmlFor='name'>Product name</Label>
                    <Input name='name' type='text' id='name' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor=''>Product Category</Label>
                   <Select >
                    <SelectTrigger className="w-full">Product category</SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                
                                <SelectItem>Cloth</SelectItem>
                                <SelectItem>Shoes</SelectItem>
                                <SelectItem>Cosmetic Items</SelectItem>
                                <SelectItem>Toilary Items</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                   </Select>
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='price'>Unit Price</Label>
                    <Input name ='price' type='number' id='price' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='size'>Size</Label>
                    <Input name ='size' type='text' id='size' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='stock'>Stock</Label>
                    <Input name='stock' type='number' id='stock' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='brand'>Brand</Label>
                    <Input name='brand' type='text' id='brand' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='man_date'>Man date </Label>
                    <Input name='man_date' type='date' id='man_date' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='exp_date'>Stock</Label>
                    <Input name='exp_date' type='date' id='exp_date' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='front_image'>Front image</Label>
                    <Input name='front_image' type='file' id='front_image' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='back_image'>Back image</Label>
                    <Input name='back_image' type='file' id='back_image' />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='desc' >discription</Label>
                    <Textarea id='desc' className='resize-none w-full h-32' name='descc' />
                </div>
            
            <div className='mt-6'>
                <Button className="px-6 py-3">Save</Button>
            </div>
            </form>
        </CardContent>
    </CardHeader>
   </Card>
  )
}

export default AddProductForm
