import type { Metadata } from "next";
import { Geist, Geist_Mono, Ramabhadra } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Chatbot from "@/components/TempleChatbot";
import "./globals.css";
import Script from "next/script";

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
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,te,hi,ta,kn,ml',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-ensure" strategy="afterInteractive">
          {`
            (function(){
              function ensure(){
                var el = document.getElementById('google_translate_element');
                if(!el) return;
                var hasGadget = el.querySelector('.goog-te-gadget');
                if(!hasGadget && typeof google !== 'undefined' && google.translate){
                  googleTranslateElementInit();
                }
              }
              document.addEventListener('visibilitychange', ensure);
              window.addEventListener('pageshow', ensure);
              window.addEventListener('popstate', function(){ setTimeout(ensure, 0); });
              setTimeout(ensure, 500);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
