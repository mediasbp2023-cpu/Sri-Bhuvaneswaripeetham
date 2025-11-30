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
  description: "Official website of Sri Bhuvaneshwari Peetham - Spiritual guidance and temple services",
  manifest: "/manifest.json",
  themeColor: "#800000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bhuvaneshwari Peetham",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/images/bp-logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/images/bp-logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [
      { url: "/images/bp-logo.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#800000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bhuvaneshwari Peetham" />
        <link rel="apple-touch-icon" href="/images/bp-logo.jpg" />
      </head>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black min-h-screen flex flex-col`}>
        <Navbar />
        <BackNav />
        <main className="mx-auto max-w-5xl px-4 lg:px-8 flex-1 w-full">
          {children}
        </main>
  <Footer />
  <Chatbot />
        {/* Removed Google Translate scripts to enforce English-only site content */}
      </body>
    </html>
  );
}
