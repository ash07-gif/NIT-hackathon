"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Map, MapPin, Plus, Search } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import issues from '@/lib/mock-data';
import { getStatusVariant } from "@/lib/utils";
import placeholderData from '@/lib/placeholder-images.json';


export function ResidentDashboard() {
  const quickFilters = ["Road", "Lighting", "Water", "Sanitation", "Others"];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Map className="text-primary"/> Interactive Map View</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                   <p className="text-muted-foreground">Map placeholder - requires Google Maps API key</p>
                </div>
            </CardContent>
          </Card>
      </div>
      
      <Card>
          <CardHeader>
            <CardTitle>Reported Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <div className="relative w-full md:flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search issues..." className="pl-10" />
                </div>
                <Select>
                    <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                </Select>
                <Link href="/dashboard/issues/report" passHref className="w-full md:w-auto">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Plus className="mr-2 h-4 w-4" /> Report New Issue
                    </Button>
                </Link>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap mb-6">
                <span className="text-sm font-medium">Quick Filters:</span>
                {quickFilters.map(filter => (
                    <Button key={filter} variant="outline" size="sm">{filter}</Button>
                ))}
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {issues.map(issue => (
                    <TableRow key={issue.id}>
                      <TableCell>
                        <Image
                            src={placeholderData.placeholderImages.find(p => p.id === issue.image.id)?.imageUrl || `https://picsum.photos/seed/${issue.id}/64/64`}
                            alt={issue.title}
                            width={64}
                            height={64}
                            className="rounded-md object-cover"
                            data-ai-hint={placeholderData.placeholderImages.find(p => p.id === issue.image.id)?.imageHint}
                        />
                      </TableCell>
                      <TableCell>
                          <Link href={`/dashboard/issues/${issue.id}`} className="font-medium hover:underline">{issue.title}</Link>
                      </TableCell>
                      <TableCell>{issue.category}</TableCell>
                      <TableCell>
                          <Badge variant={getStatusVariant(issue.status)}>{issue.status}</Badge>
                      </TableCell>
                      <TableCell className="flex items-center gap-1"><MapPin className="h-4 w-4 text-muted-foreground"/>{issue.location}</TableCell>
                      <TableCell>{issue.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
      </Card>
    </div>
  );
}
