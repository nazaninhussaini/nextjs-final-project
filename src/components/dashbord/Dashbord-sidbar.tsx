import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { LayoutDashboard } from 'lucide-react'

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
            <SidebarGroup>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> Dashbord</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> Products</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> Dashbord</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> Dashbord</SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  )
}

export default DashbordSideBar
