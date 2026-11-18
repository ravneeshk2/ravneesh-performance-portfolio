import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravneesh Kumar | Performance Marketer & Media Buyer",
  description: "Performance marketer and media buyer specialising in B2B lead generation and D2C e-commerce growth across India, the US and the UK.",
  metadataBase: new URL("https://ravneeshkumar.vercel.app"),
  openGraph: {
    title: "Ravneesh Kumar — Performance Marketer & Media Buyer",
    description: "Turning paid media into measurable business growth.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
