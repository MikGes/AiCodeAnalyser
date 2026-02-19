// components/scan-tabs.tsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, Link2, Code, FileUp } from "lucide-react";

export default function ScanTabs() {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <div className="border rounded-xl overflow-hidden bg-card shadow-sm">
      <Tabs
        defaultValue="single"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="border-b px-2 pt-1.5">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-transparent h-10">
            <TabsTrigger value="single" className="rounded-md">
              <Code className="mr-2 h-4 w-4" />
              Single File
            </TabsTrigger>
            <TabsTrigger value="batch" className="rounded-md">
              <FileUp className="mr-2 h-4 w-4" />
              Batch Scan
            </TabsTrigger>
            <TabsTrigger value="templates" className="rounded-md">
              Templates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="single" className="p-6 pt-2">
          <div className="space-y-5">
            <div className="flex border-b pb-3">
              <div className="flex-1 flex rounded-md overflow-hidden border">
                <Button
                  variant={activeTab === "single" ? "secondary" : "ghost"}
                  className="rounded-none border-r flex-1"
                >
                  Paste / Upload
                </Button>
                <Button
                  variant="ghost"
                  className="rounded-none flex-1"
                  onClick={() => alert("GitHub fetch coming soon")}
                >
                  <Link2 className="mr-2 h-4 w-4" />
                  GitHub URL
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Code Input</Label>
              <div className="relative">
                <Textarea
                  id="code"
                  placeholder="// Paste your code here or upload a file..."
                  className="min-h-100 font-mono text-sm resize-y pr-20"
                  defaultValue={`function example() {\n  const data = eval(userInput); // Security issue\n  return data;\n}`}
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    1 lines
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    OKB
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1">
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                Scan for Bugs
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="batch" className="p-6 pt-2">
          <div className="space-y-6">
            <div className="text-center py-12 border-2 border-dashed rounded-lg  min-h-125">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted/40 flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Drag & drop files here</h3>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse. Supported: .js, .ts, .jsx, .tsx, .py...
              </p>
              <Button variant="secondary">Add Files</Button>
            </div>

            <p className="text-sm text-center text-muted-foreground">
              Upload multiple files to scan them all at once and generate a
              combined report.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="p-6 pt-2 min-h-150">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2  ">
              {["All", "Security", "Performance", "Logic", "Bug"].map((cat) => (
                <Badge
                  key={cat}
                  variant={cat === "All" ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="space-y-3">
              {[
                { title: "SQL Injection", desc: "User input directly concatenated in SQL query", severity: "high" },
                { title: "Cross-Site Scripting (XSS)", desc: "Rendering user input without sanitization", severity: "high" },
                { title: "Dangerous eval() Usage", desc: "Using eval() with dynamic content", severity: "high" },
                { title: "Memory Leak in useEffect", desc: "Missing cleanup in React useEffect with subscriptions", severity: "medium" },
                // ... add more as needed
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 mt-2 rounded-full ${
                      item.severity === "high" ? "bg-red-500" : "bg-amber-500"
                    }`} />
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">→</Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}