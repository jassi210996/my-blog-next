import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/components/header/header";
import Footer from "./shared/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blogs",
  description: "Developed by Jasmeet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mt-12 sm:mt-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
