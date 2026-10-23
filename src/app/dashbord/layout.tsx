import DashboardHeadar from "@/components/dashbord/dashboard-headar"
import DashbordSideBar from "@/components/dashbord/Dashbord-sidbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { cookies } from "next/headers"


async function DashboardLayout({children}:{children:React.ReactNode}) {

  const cookiesInfo = await cookies();
  const locale = cookiesInfo.get("locale")?.value ||"fa"
  return (
    <div className="w-full min-h-screen  flex">
        <SidebarProvider dir={locale=== "en" ? "ltr": "rtl"}>

        <DashbordSideBar/>
        <div className="flex w-full gap-2 justify-between flex-col">
        

      {children}
        </div>
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
