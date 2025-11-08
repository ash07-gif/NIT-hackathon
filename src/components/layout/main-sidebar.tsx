"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Map,
  FileText,
  User,
  PlusCircle,
  BarChart2,
  Users,
  Settings,
  Info,
  LifeBuoy
} from 'lucide-react';

type Role = "resident" | "admin" | null;

const residentNav = [
  { href: '/dashboard', label: 'Home', icon: Map },
  { href: '/dashboard/my-reports', label: 'My Reports', icon: FileText },
  { href: '/dashboard/community', label: 'Community Feed', icon: Users },
];

const adminNav = [
  { href: '/dashboard', label: 'Issues Overview', icon: LayoutDashboard },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/user-management', label: 'User Management', icon: Users },
];

const commonBottomNav = [
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/dashboard/about', label: 'About', icon: Info },
]

export function MainSidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<Role>(null);
  const navItems = role === 'admin' ? adminNav : residentNav;

  useEffect(() => {
    setRole(localStorage.getItem('userRole') as Role);
  }, []);

  if (!role) {
    return null; // Or a skeleton loader
  }

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2">
            <LifeBuoy className="w-8 h-8 text-primary" />
            <div className="font-headline text-2xl font-bold text-primary group-data-[collapsible=icon]:hidden">
                CityPulse
            </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 flex-1">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
          {role === 'resident' && (
            <SidebarMenuItem>
                <Link href="/dashboard/issues/report" passHref legacyBehavior>
                    <SidebarMenuButton className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                        <PlusCircle />
                        <span>Report Issue</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu>
          {commonBottomNav.map((item) => (
             <SidebarMenuItem key={item.label}>
             <Link href={item.href} passHref legacyBehavior>
               <SidebarMenuButton
                 isActive={pathname === item.href}
                 tooltip={item.label}
               >
                 <item.icon />
                 <span>{item.label}</span>
               </SidebarMenuButton>
             </Link>
           </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
