import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className)}>
        <ConvexClientProvider>
          <NextTopLoader />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
