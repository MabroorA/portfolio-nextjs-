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
            className="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] w-full h-full min-h-screen min-w-full opacity-60 cursor-pointer"
            width={22}
            height={22}
            squares={[90, 52]}
            squaresClassName="stroke-blue-100/50"
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
