"use client";

import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Shield, Sparkles, Zap } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase-config";

export default function HeroSection() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const handleGetStarted = () => {
    if (loading) return;
    console.log("Here is the user", user)
    if (user) {
      router.push("/scan");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5 opacity-60 pointer-events-none" />

      <div className="container relative max-w-7xl mx-auto px-4 text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1.5 text-sm font-medium"
        >
          Powered by AI • Secure • Fast
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          Automate Code Analysis with AI
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Detect bugs, vulnerabilities, and performance issues instantly. Get
          intelligent fix suggestions powered by advanced AI models.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="bg-green-500 hover:bg-green-600 text-lg text-white py-6 px-8"
          >
            Get Started – Scan Your Code Free
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 cursor-pointer"
          >
            Watch Demo
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span>Privacy First</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>AI-Powered Fixes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
