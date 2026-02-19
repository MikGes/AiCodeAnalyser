// SignIn.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import Link from 'next/link'
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from '@/lib/firebase-config'
import { useRouter } from 'next/navigation'
export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
   try {
    await signInWithEmailAndPassword(email, password)
    router.push("/")
   } catch (error) {
    console.error("Error signing in:", error)
   } finally {
    setIsLoading(false)
   }
 
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/70">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to access your secure dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border/50 focus-visible:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link 
                  href="/forgot-password" 
                  className="text-xs text-primary hover:opacity-80 transition-opacity"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background border-border/50 pr-10 focus-visible:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-primary/25 transition-shadow"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link 
              href="/auth/sign-up" 
              className="font-medium text-primary hover:text-primary/90 transition-colors"
            >
              Create account
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="text-xs text-center text-muted-foreground space-y-3">
              <p>Secure connection with end-to-end encryption</p>
              <div className="flex justify-center gap-4">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  SOC 2 Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  GDPR Ready
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="absolute bottom-4 text-xs text-muted-foreground/70">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  )
}