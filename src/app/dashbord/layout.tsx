import DashbordSideBar from "@/components/dashbord/Dashbord-sidbar"
import { SidebarProvider } from "@/components/ui/sidebar"


function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="w-full min-h-screen flex">
        <SidebarProvider>

        <DashbordSideBar/>
      {children}
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
