

import type { Metadata } from "next";
import {useState} from "react";
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ContactModal from "@/components/ContactModal";

const inter = Inter({subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({subsets: ["latin"], variable: "--font-serif", weight: "400"});

export const metadata: Metadata = {
  title: "Dosreis Acker",
  description: "Get a understanding of who I am, as well explore my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}
        >
          {children}
          
      </body>
    </html>
  );
}
