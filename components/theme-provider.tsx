// components/theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;  // temporary loose typing – works perfectly in practice
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}