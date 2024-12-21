import type { Metadata } from "next";
import "./globals.css";


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
        url: "https://breednav.vercel.app/breednav_logo.webp", // Replace with your social preview image
        width: 1200,
        height: 630,
        alt: "BreedNav social preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
        <body className="inter-reg antialiased">
        {children}
      </body>
    </html>
  );
}
