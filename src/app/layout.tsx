import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.scss";

const titillium = Titillium_Web({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Phill Blake | Front-End Developer",
  description:
    "I'm Phill Blake, a full stack engineer. Explore my portfolio to see the possibilities of code and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
