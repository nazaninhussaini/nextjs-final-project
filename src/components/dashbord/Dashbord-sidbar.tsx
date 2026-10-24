import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Book, ChevronRight, Eye, Hourglass, House, LayoutDashboard, LogOut, Package, PackagePlus, PackagePlusIcon, PackageXIcon, ShoppingBag, ShoppingBasket, ShoppingCart, ShoppingCartPlus, Star, Timer, User, UserPlus, Users } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { cookies } from 'next/headers'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

async function DashbordSideBar() {
  const t = await getTranslations("dashboard.sidbar")
  const cookiesInfo = await cookies();
  const locale = cookiesInfo.get("locale")?.value || "fa";
  return (
    <div >
      <Sidebar side={locale === "en"? "left": 'right'} className='mt-6 pl-1.5'>
        <SidebarHeader >
        <SidebarContent>
          <Link href="/dashbord">
          
            <div className='w-full items-center font-bold text-amber-600 text-2xl flex gap-1.5'>
              <ShoppingBag size={18}/>
              {t("title")}
            </div>
          </Link>
          </SidebarContent>
        </SidebarHeader>
            <SidebarGroupLabel>
                {t("products.title")}
            </SidebarGroupLabel>
            <SidebarContent>
            <SidebarGroup className='flex flex-col gap-2'>
                <SidebarMenuItem>
                    <SidebarMenuButton><LayoutDashboard/> {t("title")}</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
              <Collapsible>
              <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between '>
                        <div className='flex gap-1.5'>
                        <ShoppingBasket/>  {t("products.title")}
                        </div>
                        <ChevronRight/>
                        </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
              <Link href="/dashbord/addProduct">
              <SidebarMenu>
                <SidebarMenuButton>
                  <PackagePlus/>   {t("products.add")}
                </SidebarMenuButton>
              </SidebarMenu>
              </Link>

                <SidebarMenuButton>
                  <Package/>   {t("products.view")}
                </SidebarMenuButton>

                <SidebarMenuButton>
                  <PackageXIcon/>  {t("products.manage")}
                </SidebarMenuButton>

              </CollapsibleContent>
              </Collapsible>
                </SidebarMenuItem>
                <SidebarMenuItem>
              <Collapsible>
              <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between items-center'>
                        <div className='flex gap-1.5'>
                        <User/>  {t("users.title")}
                        </div>
                        <ChevronRight/>
                        </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
              <SidebarMenuButton><UserPlus/> {t("users.add_User")}</SidebarMenuButton>
              <SidebarMenuButton><Users/> {t("users.users")}</SidebarMenuButton>

              </CollapsibleContent>
              </Collapsible>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Collapsible defaultOpen={false} > 
                    <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton className='flex justify-between items-center'>
                        <div className='flex gap-1.5'>
                      <Star/> {t("reviews.title")}
                        </div>
                        <ChevronRight/>
                    </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-6">
                    <SidebarMenuButton>
                       <Eye/> {t("reviews.manage")}
                    </SidebarMenuButton>
                    </CollapsibleContent>
                    </Collapsible>
                </SidebarMenuItem>
            </SidebarGroup>
        {/* report */}

        <SidebarGroupLabel>{t("reporst.title")}</SidebarGroupLabel>
        <SidebarGroup>
            <SidebarMenuItem>
                <Collapsible>
                <CollapsibleTrigger className="w-full">
                <SidebarMenuButton className='flex justify-between items-center'>
                    <div className='flex gap-1.5'>
                   <Book/> {t("reporst.report.title")}
                    </div>
                    <ChevronRight/>
                </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 flex flex-col gap-1.5">
                <SidebarMenuButton>
                  <Hourglass/> {t("reporst.report.daily")}
                </SidebarMenuButton>
                <SidebarMenuButton>
                   <Timer/> {t("reporst.report.monthly")}
                </SidebarMenuButton>
                </CollapsibleContent>
                </Collapsible>
            </SidebarMenuItem>
        </SidebarGroup>
        </SidebarContent>

        {/* side bar footer */}

        <SidebarFooter>
            <SidebarContent>
                <SidebarMenuItem className='flex gap-1 mb-10 justify-between items-center'>
                    <div className='flex gap-1.5 items-center'>
                    <User size={24}/>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Nazanin Hussaini</span>
                        <span className='text-xs hover:underline hover:text-amber-600 font-extralight'>nazaninhussaini@gmail.com</span>
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
