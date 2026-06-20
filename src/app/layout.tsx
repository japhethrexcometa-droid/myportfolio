import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Japheth Rex Cometa | Full Stack Developer",
  description: "Professional portfolio of Japheth Rex Cometa, a 4th year IT student specializing in building management systems, capstone projects, and custom web applications.",
  openGraph: {
    title: "Japheth Rex Cometa | Full Stack Developer",
    description: "Professional portfolio of Japheth Rex Cometa, a 4th year IT student specializing in building management systems, capstone projects, and custom web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
