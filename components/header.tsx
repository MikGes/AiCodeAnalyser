"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-config";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/"); // redirect to home after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-green-900/30 bg-black/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="text-2xl text-green-500 group-hover:text-green-400 transition-colors">
            🐞
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            BugFind<span className="text-green-500">AI</span>
          </span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <Link
              href="/scan"
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              Scanner
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 text-gray-300 hover:text-green-400 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span>One Dark</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  <span>Light</span>
                </>
              )}
            </button>

            {/* Auth Button */}
            {loading ? null : user ? (
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Sign In
              </Link>
            )}
          </nav>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="bg-green-600 hover:bg-green-500 text-white font-medium px-6 py-5 rounded-md shadow-lg shadow-green-950/30 transition-all hover:shadow-green-900/40 active:scale-95"
          >
            <Link href="/scan">Start Scanning</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
