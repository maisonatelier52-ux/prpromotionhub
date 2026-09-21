import type { Metadata } from "next";
import { SITE_URL, SITE_DESCRIPTION } from "@/utils/siteConfig";
import "./globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ScrollToTop from "@/component/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "PR Promotion Hub – Finance, Banking & Business Intelligence", template: "%s | PR Promotion Hub" },
  description: SITE_DESCRIPTION,
  verification: {
    google: "UgoR9dTSJNmoUi3Qa8k5P5TolstRHM_8B5G9iC8HHpY",
  },
  openGraph: {
    title: "PR Promotion Hub",
    description: SITE_DESCRIPTION,
    siteName: "PR Promotion Hub",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/prpromotionhub-logo.webp", alt: "PR Promotion Hub" }],
  },
  twitter: { card: "summary_large_image", title: "PR Promotion Hub", description: SITE_DESCRIPTION },
  authors: [{ name: "PR Promotion Hub" }],
  publisher: "PR Promotion Hub",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
      
          <Header/>
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}