// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "AI Code Scanner",
  description: "Detect bugs, vulnerabilities, and get AI-powered fix suggestions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}