import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "MRUHacks.ca",
  description: "Enabling students to dream, design, and develop their future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        {children}
      </body>
    </html>
  );
}
