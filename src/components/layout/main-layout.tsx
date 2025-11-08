"use client";

import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { Header } from "./header";
import { MainSidebar } from "./main-sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function MainLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [router]);

    if (!isClient) {
        return null;
    }

    return (
        <SidebarProvider>
            <Sidebar>
                <MainSidebar />
            </Sidebar>
            <SidebarInset>
                <Header />
                <main className="p-4 md:p-6 lg:p-8 flex-1 bg-background">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
