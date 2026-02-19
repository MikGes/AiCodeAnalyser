// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
  <HeroSection/>

      {/* Features Section */}
    <Features/>

      {/* Simple CTA Footer Section */}
      <section className="py-20 border-t">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Code?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start scanning today — no credit card required. Join developers who catch issues before they become problems.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-10 text-lg">
            <Link href="/scan">
              Scan Your Code Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}