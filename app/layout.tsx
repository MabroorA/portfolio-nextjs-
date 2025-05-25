import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

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
      <body className="relative min-h-screen bg-background">
        <div className="fixed inset-0 -z-10 overflow-hidden min-w-full min-h-screen w-screen h-screen">
          <InteractiveGridPattern
            className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] w-full h-full min-h-screen min-w-full"
            width={30}
            height={30}
            squares={[100, 100]}
            squaresClassName="transition-colors duration-200 hover:fill-blue-500 fill-blue-200/30"
          />
        </div>
        <main className="max-w-screen-lg mx-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
