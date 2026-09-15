import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { LayoutDashboard, ShoppingBasket, User } from 'lucide-react'

function DashbordSideBar() {
  return (
    <div >
      <Sidebar>
        <SidebarHeader>
            WorkSpace
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroupLabel>
                Main Content
            </SidebarGroupLabel>
            <SidebarGroup className='flex flex-col gap-2'>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> Dashbord</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton><ShoppingBasket/> Products</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton><User/> Users</SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  )
}

export default DashbordSideBar
