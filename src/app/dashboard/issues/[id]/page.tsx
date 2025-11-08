export default function IssueDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold font-headline">Issue Detail: #{params.id}</h1>
      <p className="mt-4">Placeholder for issue details, comments, and actions.</p>
    </div>
  )
}
