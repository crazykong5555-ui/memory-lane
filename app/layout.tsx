
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory Lane | My Life Journey",
  description:
    "A journey through my personal, academic, and professional life from 1970 to 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
