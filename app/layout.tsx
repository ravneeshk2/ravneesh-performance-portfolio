import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravneesh Kumar | Performance Marketer & Media Buyer",
  description: "Performance marketer and media buyer specialising in B2B lead generation, B2C lead generation and D2C e-commerce growth across India, the US and the UK.",
  metadataBase: new URL("https://ravneeshkumar.vercel.app"),
  openGraph: {
    title: "Ravneesh Kumar — Performance Marketer & Media Buyer",
    description: "Turning paid media into measurable business growth.",
    type: "website",
    images: [{ url: "/ravneesh-headshot.jpg", width: 640, height: 640, alt: "Ravneesh Kumar" }]
  },
  twitter: { card: "summary", images: ["/ravneesh-headshot.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
