import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "@/components/app-sidebar/app-sidebar";

export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Project to put on practice my next.js knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SidebarProvider>
          <AppSideBar />
          <SidebarInset>
            <main>
              <TooltipProvider>{children}</TooltipProvider>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
