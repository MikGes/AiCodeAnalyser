import { Bug, Code, Search, Shield, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Features(){
    return   <section className="py-20 bg-muted/40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Modern Developers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to catch issues early and ship secure, high-quality code faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature Card 1 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Advanced Bug Detection</CardTitle>
                <CardDescription>
                  AI scans for logic errors, race conditions, memory leaks, and more — beyond simple linting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SQL Injection & XSS</li>
                  <li>• Dangerous eval() usage</li>
                  <li>• React-specific pitfalls</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Security-First Scanning</CardTitle>
                <CardDescription>
                  OWASP Top 10 coverage + secrets detection. Keep your code and users safe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hardcoded credentials</li>
                  <li>• Insecure deserialization</li>
                  <li>• Weak crypto patterns</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">GitHub & Batch Import</CardTitle>
                <CardDescription>
                  Paste code, upload files, or fetch directly from public GitHub repos — single or batch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• .js, .ts, .py, .java & more</li>
                  <li>• Multi-file analysis</li>
                  <li>• Combined reports</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature Card 4 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Fix Suggestions</CardTitle>
                <CardDescription>
                  Not just detection — get context-aware remediation code snippets and explanations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Code diff style fixes</li>
                  <li>• Best practice alternatives</li>
                  <li>• Severity + CWE tags</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature Card 5 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Multi-Language Support</CardTitle>
                <CardDescription>
                  Works with JavaScript, TypeScript, Python, Java, Go, and many more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Syntax-aware analysis</li>
                  <li>• Framework-specific checks</li>
                  <li>• Dependency insights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature Card 6 */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast Scans</CardTitle>
                <CardDescription>
                  Powered by local Ollama models — quick scans in seconds, deep analysis when needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick vs Deep modes</li>
                  <li>• Real-time progress</li>
                  <li>• Streaming results</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
}