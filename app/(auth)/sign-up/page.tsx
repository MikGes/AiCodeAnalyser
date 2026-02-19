// SignUp.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Loader2, Check, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import {auth} from "@/lib/firebase-config"
import { useRouter } from 'next/navigation'
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  // Password validation state
  const hasMinLength = password.length >= 12
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0
  
  const isFormValid = hasMinLength && hasUpperCase && hasNumber && hasSpecialChar && passwordsMatch

  const handleSubmit = async (e: React.FormEvent) => {
        setIsLoading(true)
        e.preventDefault()
    if (!isFormValid) return
       try {
        await createUserWithEmailAndPassword(email, password)
        router.push("/auth/login")
        setIsLoading(false)
       } catch (error) {
        console.error("Error creating user:", error)
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
          <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Create Account
          </CardTitle>
          <CardDescription className="text-center">
            Start your 14-day free trial. No credit card required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border/50 focus-visible:ring-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
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
              
              {/* Password requirements */}
              <div className="mt-2 space-y-1.5 px-1">
                {[
                  { valid: hasMinLength, text: "At least 12 characters" },
                  { valid: hasUpperCase, text: "One uppercase letter" },
                  { valid: hasNumber, text: "One number" },
                  { valid: hasSpecialChar, text: "One special character" }
                ].map((req, index) => (
                  <div key={index} className="flex items-center text-xs">
                    {req.valid ? (
                      <Check className="h-3 w-3 text-emerald-500 mr-1.5 flex-shrink-0" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-muted-foreground/50 mr-1.5 flex-shrink-0" />
                    )}
                    <span className={req.valid ? "text-emerald-400/90" : "text-muted-foreground"}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={`bg-background border-border/50 pr-10 focus-visible:ring-primary/20 ${
                    confirmPassword && !passwordsMatch 
                      ? "border-destructive/50 focus-visible:ring-destructive/20" 
                      : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {confirmPassword && !passwordsMatch && (
                <p className="text-xs text-destructive flex items-center mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Passwords do not match
                </p>
              )}
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading || !isFormValid}
              className={`w-full font-medium shadow-md transition-shadow ${
                isFormValid 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-primary/25" 
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link 
              href="/auth/login" 
              className="font-medium text-primary hover:text-primary/90 transition-colors"
            >
              Sign in
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/40">
            <div className="text-xs text-center text-muted-foreground space-y-3">
              <p>By signing up, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></p>
              <div className="flex justify-center gap-4">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Enterprise-grade security
                </span>
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  99.9% uptime SLA
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