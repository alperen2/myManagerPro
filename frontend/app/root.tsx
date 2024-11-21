import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "./components/ui/breadcrumb";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar"


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar className="bg-muted" />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
