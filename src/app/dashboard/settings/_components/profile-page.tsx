"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Role = "resident" | "admin" | null;

export function ProfilePage() {
    const { theme, setTheme } = useTheme();
    const [role, setRole] = useState<Role>(null);

    useEffect(() => {
        setRole(localStorage.getItem('userRole') as Role);
    }, []);

    const isDark = theme === 'dark';

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold font-headline">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>This is how others will see you on the site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://picsum.photos/seed/avatar2/100/100" data-ai-hint="profile avatar"/>
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-xl font-semibold">{role === 'admin' ? 'Admin User' : 'Resident User'}</p>
                            <p className="text-muted-foreground">{role === 'admin' ? 'admin@locality.gov' : 'user@example.com'}</p>
                            <Button variant="outline" size="sm" className="mt-2">Change Photo</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue={role === 'admin' ? 'Admin User' : 'Resident User'} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={role === 'admin' ? 'admin@locality.gov' : 'user@example.com'} />
                    </div>
                    <Button>Save Changes</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode" className="flex items-center gap-2">
                            {isDark ? <Moon/> : <Sun />}
                            Dark Mode
                        </Label>
                        <Switch id="dark-mode" checked={isDark} onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
