import DashboardHeadar from "@/components/dashbord/dashboard-headar"
import DashbordSideBar from "@/components/dashbord/Dashbord-sidbar"
import NavebarPage from "@/components/shared/navbar"
import { SidebarProvider } from "@/components/ui/sidebar"


function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="w-full min-h-screen  flex">
        <SidebarProvider>

        <DashbordSideBar/>
        <div className="flex w-full gap-2 justify-between flex-col">
          <DashboardHeadar/>
          {/* <NavebarPage/> */}
      {children}
        </div>
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
