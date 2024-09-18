import localFont from "next/font/local";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cogleads - AI-Powered CRM Solution",
  description: "Unlock effortless growth with Cogleads, the AI-powered all-in-one CRM solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}