'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import issuesData from '@/lib/mock-data';
import { getStatusVariant } from '@/lib/utils';
import type { Issue, IssueStatus } from '@/lib/types';
import { useEffect, useState } from 'react';

// For demonstration, we'll hardcode the current user's name.
// In a real app, this would come from the auth context.
const currentUserReporter = 'Rajesh Kumar';

export default function MyReportsPage() {
  const [myIssues, setMyIssues] = useState<Issue[]>([]);

  useEffect(() => {
    // Filter issues reported by the current user
    const userIssues = issuesData.filter(
      (issue) => issue.reporter === currentUserReporter
    );
    setMyIssues(userIssues);
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">My Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Issues you have reported</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myIssues.length > 0 ? (
                  myIssues.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell>
                        <Link
                          href={`/dashboard/issues/${issue.id}`}
                          className="font-medium hover:underline"
                        >
                          {issue.title}
                        </Link>
                      </TableCell>
                      <TableCell>{issue.category}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(issue.status as IssueStatus)}>
                          {issue.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{issue.date}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                      You have not reported any issues yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
