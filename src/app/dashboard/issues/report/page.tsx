import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Upload } from "lucide-react";

export default function ReportIssuePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold font-headline">Report a New Issue</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Issue Details</CardTitle>
                    <CardDescription>Please provide as much detail as possible.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="e.g., Large pothole on Main St" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Describe the issue in detail" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="road">Road</SelectItem>
                                <SelectItem value="lighting">Lighting</SelectItem>
                                <SelectItem value="water">Water</SelectItem>
                                <SelectItem value="sanitation">Sanitation</SelectItem>
                                <SelectItem value="others">Others</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Attach Photo(s)</Label>
                        <div className="flex items-center justify-center w-full">
                            <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-background">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                </div>
                                <Input id="dropzone-file" type="file" className="hidden" />
                            </Label>
                        </div> 
                    </div>
                     <div className="space-y-2">
                        <Label>Location</Label>
                        <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                            <MapPin className="w-8 h-8 mr-2"/>
                            Map Location Picker Placeholder
                        </div>
                    </div>
                    <Button size="lg" className="w-full">Submit Issue</Button>
                </CardContent>
            </Card>
        </div>
    )
}
