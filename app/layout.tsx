import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { BackNav } from "@/components/BackNav";
import { Footer } from "@/components/Footer";
import Chatbot from "@/components/TempleChatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhuvaneshwari Peetham",
  description: "Official website of Bhuvaneshwari Peetham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <Navbar />
        <BackNav />
        <main className="mx-auto max-w-5xl px-4 lg:px-8">
          {children}
        </main>
  <Footer />
  <Chatbot />
        {/* Removed Google Translate scripts to enforce English-only site content */}
      </body>
    </html>
  );
}
