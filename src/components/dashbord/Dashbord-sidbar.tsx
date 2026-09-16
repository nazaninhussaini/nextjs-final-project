import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Book, ChevronRight, Eye, Hourglass, House, LayoutDashboard, LogOut, Package, PackagePlus, ShoppingBasket, Star, Timer, User, UserPlus, Users } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'

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
              <Collapsible>
              <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between items-center'>
                        <div className='flex gap-1.5'>

                        <ShoppingBasket/> Products
                        </div>
                        <ChevronRight/>
                        </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
              
                <SidebarMenuButton>
                  <PackagePlus/>  Add Product
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Package/>  View Products
                </SidebarMenuButton>

              </CollapsibleContent>
              </Collapsible>
                </SidebarMenuItem>
                <SidebarMenuItem>
              <Collapsible>
              <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between items-center'>
                        <div className='flex gap-1.5'>
                        <User/> Users
                        </div>
                        <ChevronRight/>
                        </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
              <SidebarMenuButton><UserPlus/> Add Users</SidebarMenuButton>
              <SidebarMenuButton><Users/> Users</SidebarMenuButton>

              </CollapsibleContent>
              </Collapsible>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Collapsible defaultOpen={false} > 
                    <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between items-center'>
                        <div className='flex gap-1.5'>
                      <Star/>  Procut Reviews
                        </div>
                        <ChevronRight/>
                    </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-6">
                    <SidebarMenuButton>
                       <Eye/> Manage Riviews
                    </SidebarMenuButton>
                    </CollapsibleContent>
                    </Collapsible>
                </SidebarMenuItem>
            </SidebarGroup>
        {/* report */}

        <SidebarGroupLabel>Reporst</SidebarGroupLabel>
        <SidebarGroup>
            <SidebarMenuItem>
                <Collapsible>
                <CollapsibleTrigger className="w-full">
                <SidebarMenuButton className='flex justify-between items-center'>
                    <div className='flex gap-1.5'>
                   <Book/> Report
                    </div>
                    <ChevronRight/>
                </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
                <SidebarMenuButton>
                  <Hourglass/>  Daily Report
                </SidebarMenuButton>
                <SidebarMenuButton>
                   <Timer/> Monthly Report
                </SidebarMenuButton>
                </CollapsibleContent>
                </Collapsible>
            </SidebarMenuItem>
        </SidebarGroup>
        </SidebarContent>

        {/* side bar footer */}

        <SidebarFooter>
            <SidebarContent>
                <SidebarMenuItem className='flex gap-1 justify-between items-center'>
                    <div className='flex gap-1.5 items-center'>

                    <User size={18}/>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Nazanin</span>
                        <span className='text-xs font-extralight'>nazanin@gmail.com</span>
                    </div>
                    </div>
                    <div>
                        <LogOut size={18}/>
                    </div>
                </SidebarMenuItem>
            </SidebarContent>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

export default DashbordSideBar
