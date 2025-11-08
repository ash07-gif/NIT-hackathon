"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Role = "resident" | "admin" | null;

export function LoginForm() {
  const [role, setRole] = useState<Role>(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole") as Role;
    if (storedRole) {
      setRole(storedRole);
    } else {
      router.push("/");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    localStorage.setItem('isLoggedIn', 'true');
    router.push("/dashboard");
  };
  
  const headerIcon = role === 'resident' ? <Users className="w-12 h-12 text-primary" /> : <Building className="w-12 h-12 text-primary" />;
  const title = role === 'resident' ? "Resident Sign In" : "Admin Sign In";
  const description = role === 'resident' ? "Enter your details to access community features." : "Log in to manage your locality.";

  if (!role) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Determining your role...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-md">
      <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to role selection
      </Link>
      <Card>
        <CardHeader className="items-center text-center">
            {headerIcon}
            <CardTitle className="font-headline text-3xl mt-4">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Locality Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Panchayat or Municipality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="panchayat">Panchayat</SelectItem>
                    <SelectItem value="municipality">Municipality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Locality</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your locality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ward1">Ward 1</SelectItem>
                    <SelectItem value="ward2">Ward 2</SelectItem>
                    <SelectItem value="ward3">Ward 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {role === 'resident' ? (
              <div className="space-y-2">
                <Label htmlFor="id-number">Aadhar or Election Card Number</Label>
                <Input id="id-number" type="text" placeholder="Enter your ID number" required />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="admin@locality.gov" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
