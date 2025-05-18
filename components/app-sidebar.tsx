'use client';

import { BarChart3, Home, LineChart, PieChart, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Sidebar collapsible="icon" className="group-data-[collapsible=icon]:w-8">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <BarChart3 className="h-6 w-6" />
          <span className="font-bold group-data-[collapsible=icon]:hidden">
            World Bank Dashboard
          </span>
          <div className="flex-1" />
          <SidebarTrigger className="group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/')}>
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/charts/line')}>
              <Link href="/charts/line">
                <LineChart className="h-4 w-4" />
                <span>Line Charts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/charts/bar')}>
              <Link href="/charts/bar">
                <BarChart3 className="h-4 w-4" />
                <span>Bar Charts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/charts/pie')}>
              <Link href="/charts/pie">
                <PieChart className="h-4 w-4" />
                <span>Pie Charts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/settings')}>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 group-data-[collapsible=icon]:hidden">
          <ThemeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
