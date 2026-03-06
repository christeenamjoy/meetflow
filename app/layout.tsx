import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet Flow",
  description: "Meeting Scheduling App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <>
            <Header />
            <main className="min-h-screen bg-blue-200">{children}</main>
            <footer className="bg-blue-300 py-12">
              <div className="container max-auto px-4 text-center text-gray-700">
                <p>Created By Christeena</p>
              </div>
            </footer>
          </>
        </ClerkProvider>
      </body>
    </html>
  );
}
