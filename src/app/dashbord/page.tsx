import DashboardHeadar from '@/components/dashbord/dashboard-headar'
import DashbordSideBar from '@/components/dashbord/Dashbord-sidbar'
import React from 'react'

function page() {
  return (
    <div> 
      <DashbordSideBar/>
      <div className='w-full justify-between'>
        <DashboardHeadar/>
        <h1>this is the min dashbord</h1>
      </div>
    </div>
  )
}

export default page
