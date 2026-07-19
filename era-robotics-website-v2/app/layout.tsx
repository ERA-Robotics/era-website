import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ERA Robotics | Physical AI & Intelligent Automation",
    template: "%s | ERA Robotics"
  },
  description:
    "ERA Robotics designs, integrates and deploys commercial robotics, Physical AI, edge computing and intelligent automation across Australia and New Zealand.",
  metadataBase: new URL("https://erarobotics.ai"),
  openGraph: {
    title: "ERA Robotics",
    description:
      "Engineering intelligence for the physical world.",
    url: "https://erarobotics.ai",
    siteName: "ERA Robotics",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
