import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BreedNav - Discover Dog Breeds",
  description: "Find and explore dog breeds with BreedNav! Filter by size, temperament, and more to find your perfect match.",
  keywords: "dogs, dog breeds, breed finder, pet adoption, BreedNav",
  authors: [{ name: "David Logan" }, { name: "Charla the AI" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow", // For search engines
  icons: {
    icon: "/favicon.ico", // Favicon for browsers
    apple: "/apple-touch-icon.png", // Icon for iOS devices
  },
  openGraph: {
    title: "BreedNav - Discover Dog Breeds",
    description: "Find and explore dog breeds with BreedNav! Filter by size, temperament, and more to find your perfect match.",
    url: "https://breednav.vercel.app", // Replace with your actual domain
    siteName: "BreedNav",
    images: [
      {
        url: "https://breednav.vercel.app/dog-play-bow.webp", // Replace with your social preview image
        width: 1200,
        height: 630,
        alt: "BreedNav social preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BreedNav - Discover Dog Breeds",
    description: "Explore dog breeds with BreedNav! Filter breeds by traits to find your perfect companion.",
    images: ["https://breednav.vercel.app/dog-play-bow.webp"], // Same as OpenGraph image
    creator: "@nobody", // Replace with your Twitter username
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
