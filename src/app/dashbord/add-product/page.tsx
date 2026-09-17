import AddProductForm from '@/components/dashbord/add-Product-form'
import React from 'react'

function AddProduct() {
  return (
    <div className='w-full min-h-screen flex p-4 flex-col gap-4'>
      <h1>Add new product</h1>
      <AddProductForm/>
      
    </div>
  )
}

export default AddProduct
