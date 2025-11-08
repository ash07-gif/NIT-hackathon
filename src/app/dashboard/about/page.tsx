import { Button } from "@/components/ui/button";
import { Github, Send } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-5xl font-extrabold font-headline text-primary">Together, we build better cities.</h1>
        <p className="mt-6 text-lg text-foreground max-w-2xl mx-auto">
            CityPulse is a civic engagement platform designed to empower residents and streamline municipal services. Report issues, track progress, and collaborate with your community to make your city a better place.
        </p>
        <div className="mt-10 flex justify-center gap-4">
            <Button size="lg"><Send className="mr-2"/> Contact Us</Button>
            <Button size="lg" variant="outline"><Github className="mr-2"/> View on GitHub</Button>
        </div>
        <div className="mt-16">
            <h2 className="text-2xl font-bold font-headline">Our Mission</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                To bridge the gap between citizens and their local government through transparent, accessible, and efficient technology.
            </p>
        </div>
    </div>
  )
}
