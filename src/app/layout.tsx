import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Japheth Rex Cometa | Full Stack Developer",
  description: "Professional portfolio of Japheth Rex Cometa, a 4th year IT student specializing in building management systems, capstone projects, and custom web applications. Expert in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Mobile Development", "TypeScript", "Python", "Management Systems", "Capstone Projects"],
  authors: [{ name: "Japheth Rex Cometa" }],
  creator: "Japheth Rex Cometa",
  openGraph: {
    title: "Japheth Rex Cometa | Full Stack Developer",
    description: "Professional portfolio of Japheth Rex Cometa, a 4th year IT student specializing in building management systems, capstone projects, and custom web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Japheth Rex Cometa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Rex Cometa | Full Stack Developer",
    description: "Professional portfolio of Japheth Rex Cometa, a 4th year IT student specializing in building management systems, capstone projects, and custom web applications.",
    creator: "@japhethrexcometa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
