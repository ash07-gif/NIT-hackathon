"use client"
import { useEffect, useState } from 'react';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';
import { ResidentDashboard } from '@/components/dashboard/resident-dashboard';

type Role = "resident" | "admin" | null;

export default function DashboardPage() {
  const [role, setRole] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as Role;
    setRole(storedRole);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  return role === 'admin' ? <AdminDashboard /> : <ResidentDashboard />;
}
