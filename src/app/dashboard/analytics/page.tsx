import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Analytics Dashboard</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Resolution Trends</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Chart placeholder</p>
                    </div>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Category Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Chart placeholder</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
