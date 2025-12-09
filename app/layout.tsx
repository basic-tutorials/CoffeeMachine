import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coin Flip Game",
  description: "A fun and interactive coin flip game with animations",
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
