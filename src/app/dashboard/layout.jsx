import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = async ({ children }) => {
  const session = await auth();
  console.log({ session });

  if (!session) redirect("/auth/login");

  const user = await currentUser();

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <main className="w-full section">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
