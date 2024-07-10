import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { ReactNode } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MRUHacks.ca",
  description: "Enabling students to dream, design, and develop their future!",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mruhacks">
      <meta name="theme-color" content="#002766" />
      <body className={dm_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {modal}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
