"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "resident" | "admin";

export function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const router = useRouter();

  const handleSelectRole = (role: Role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
          Welcome to CityPulse
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Together, we build better cities.
        </p>
        <p className="text-foreground mt-8 text-xl">Please select your role to begin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        <Card
          className={cn(
            "cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary",
            selectedRole === "resident" && "border-primary ring-2 ring-primary"
          )}
          onClick={() => handleSelectRole("resident")}
        >
          <CardHeader className="items-center text-center p-8">
            <Users className="w-16 h-16 text-primary mb-4" />
            <CardTitle className="font-headline text-2xl">I am a Resident</CardTitle>
            <CardDescription>Report issues and engage with your community.</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className={cn(
            "cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary",
            selectedRole === "admin" && "border-primary ring-2 ring-primary"
          )}
          onClick={() => handleSelectRole("admin")}
        >
          <CardHeader className="items-center text-center p-8">
            <Building className="w-16 h-16 text-primary mb-4" />
            <CardTitle className="font-headline text-2xl">I am an Admin</CardTitle>
            <CardDescription>Manage issues and view city analytics.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Button
        size="lg"
        className="mt-12 w-full max-w-xs text-lg"
        onClick={handleContinue}
        disabled={!selectedRole}
      >
        Continue
      </Button>
    </div>
  );
}
