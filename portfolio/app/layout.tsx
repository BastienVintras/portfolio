import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/lib/utils";


const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"],
  variable : "--font-caption",
});

export const metadata: Metadata = {
  title: "Vintras Bastien . Full Stack Developer",
  description: "Apprentice Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      <link rel="icon" href="/favicon.ico" /> 

      </head>
      <body className={cn
        (GeistSans.variable,
         GeistMono.variable, 
        AnekTelugu,
        "font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}