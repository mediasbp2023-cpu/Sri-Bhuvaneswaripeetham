import type { Metadata } from "next";
import { Geist, Geist_Mono, Ramabhadra } from "next/font/google";
import { Navbar } from "@/components/Navbar";
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

const ramabhadra = Ramabhadra({
  variable: "--font-ramabhadra",
  subsets: ["latin", "telugu"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bhuvaneswaripeetham",
  description: "Official website of Bhuvaneswaripeetham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} ${ramabhadra.variable} antialiased bg-white text-black min-h-screen flex flex-col`} style={{ fontFamily: 'var(--font-ramabhadra), system-ui, sans-serif' }}>
        <Navbar />
        <main className="flex-1 mx-auto max-w-5xl px-4 lg:px-8 w-full">
          {children}
        </main>
        <Footer />
        <Chatbot />
        {/* Removed Google Translate scripts to enforce English-only site content */}
      </body>
    </html>
  );
}
