import type { Metadata } from "next";
import { Exo_2, Raleway } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-exo2",
  display: "swap"
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Центр проектирования Дельта",
  description:
    "Одностраничный сайт компании с фокусом на проектирование мультимедийных, световых и сценических систем."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${exo2.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
