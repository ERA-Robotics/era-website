import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://erarobotics.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ERA Robotics | Commercial Robotics & Physical AI",
    template: "%s | ERA Robotics",
  },

  description:
    "ERA Robotics deploys commercial robotic systems across Australia and New Zealand while developing the next generation of Physical AI.",

  applicationName: "ERA Robotics",

  authors: [
    {
      name: "ERA Robotics",
      url: siteUrl,
    },
  ],

  creator: "ERA Robotics",
  publisher: "ERA Robotics",

  keywords: [
    "commercial robotics",
    "enterprise robotics",
    "Physical AI",
    "autonomous cleaning robots",
    "service robots",
    "warehouse robotics",
    "robotics integration",
    "Australia",
    "New Zealand",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "ERA Robotics | Commercial Robotics & Physical AI",
    description: "Engineering intelligence for the physical world.",
    url: siteUrl,
    siteName: "ERA Robotics",
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ERA Robotics | Commercial Robotics & Physical AI",
    description: "Engineering intelligence for the physical world.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GBV2P1XP8P"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GBV2P1XP8P');
            `,
          }}
        />
      </head>
      <body className="site-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
