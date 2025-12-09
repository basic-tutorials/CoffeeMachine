import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coin Flip Game - Test Your Luck",
  description: "A fun and interactive coin flip game with smooth animations. Choose heads or tails and test your luck! Track your stats and winning streak.",
  keywords: ["coin flip", "game", "heads or tails", "luck game", "coin toss", "online game"],
  authors: [{ name: "Ismat Samadov" }],
  creator: "Ismat Samadov",
  openGraph: {
    title: "Coin Flip Game - Test Your Luck",
    description: "A fun and interactive coin flip game with smooth animations. Choose heads or tails and test your luck!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Coin Flip Game - Test Your Luck",
    description: "A fun and interactive coin flip game with smooth animations. Choose heads or tails and test your luck!",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#6b21a8",
  manifest: "/manifest.json",
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
