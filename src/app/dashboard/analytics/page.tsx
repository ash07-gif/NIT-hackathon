
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const resolutionTrendsData = [
    { month: "Jan", resolved: 18, pending: 8 },
    { month: "Feb", resolved: 30, pending: 20 },
    { month: "Mar", resolved: 23, pending: 12 },
    { month: "Apr", resolved: 7, pending: 19 },
    { month: "May", resolved: 20, pending: 13 },
    { month: "Jun", resolved: 21, pending: 14 },
    { month: "Jul", resolved: 35, pending: 10 },
];

const chartConfig = {
    resolved: {
        label: "Resolved",
        color: "hsl(var(--chart-2))",
    },
    pending: {
        label: "Pending",
        color: "hsl(var(--chart-5))",
    },
} as const;

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Analytics Dashboard</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Resolution Trends</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                        <RechartsBarChart accessibilityLayer data={resolutionTrendsData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="resolved" fill="var(--color-resolved)" radius={4} />
                            <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
                        </RechartsBarChart>
                    </ChartContainer>
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
