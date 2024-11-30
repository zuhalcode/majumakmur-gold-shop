"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Search,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const sidebarMenu = [
  {
    title: "Dashboard",
    url: "#",
    items: [
      {
        title: "Gold Analytics",
        url: "/dashboard/gold-analytics",
        isActive: true,
      },
      {
        title: "Buyback Analytics",
        url: "/dashboard/buyback-analytics",
        isActive: true,
      },
      {
        title: "Capital Management",
        url: "/dashboard/capital-management",
        isActive: true,
      },
    ],
  },
  {
    title: "Sales",
    url: "#",
    items: [
      {
        title: "List Sales",
        url: "#",
        isActive: true,
      },
      {
        title: "Add Sales",
        url: "#",
      },
    ],
  },
  {
    title: "Transaction",
    url: "#",
    items: [
      {
        title: "List Transaction",
        url: "#",
        isActive: true,
      },
      {
        title: "Add Transaction",
        url: "#",
      },
    ],
  },
  {
    title: "Customers",
    url: "#",
    items: [
      {
        title: "List Customer",
        url: "#",
        isActive: true,
      },
      {
        title: "Add Customer",
        url: "#",
      },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    pathname.startsWith("/dashboard") && (
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Logo</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="hidden-scrollbar">
          <SidebarGroup>
            <SidebarMenu>
              {sidebarMenu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === item.url}
                          >
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  );
}