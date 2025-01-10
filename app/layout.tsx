import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mabroor ",
  description: "Mabroor ahmeds portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-screen-lg mx-auto  bg-background">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
