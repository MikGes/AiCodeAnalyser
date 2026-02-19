// app/page.tsx
import { Suspense } from "react";
import Header from "@/components/header";
import ScanTabs from "@/components/scan-tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      <main className="flex-1 container max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI Code Scanner
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Paste your code below to detect bugs, vulnerabilities, and get
            AI-powered fix suggestions.
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground/80">
            <a href="/sign-in" className="text-primary hover:underline">
              Sign in
            </a>{" "}
            to save your scan history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left side – Input area */}
          <div className="flex flex-col gap-6">
            <ScanTabs />
          </div>

          {/* Right side – Results placeholder */}
          <div className="bg-card border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[420px] shadow-sm">
            <div className="w-20 h-20 rounded-full bg-muted/40 flex items-center justify-center mb-6">
              <span className="text-4xl">🐞</span>
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              No Code Analyzed Yet
            </h2>
            <p className="text-muted-foreground max-w-md">
              Paste your code or upload a file to get started with AI-powered
              bug detection.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}