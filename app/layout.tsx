import type { Metadata } from "next";
import "./globals.css";
import Head from "@/components/Head/page";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Viga&family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body style={{ fontFamily: "'Inter', sans-serif" }}>
          {children}
        </body>
      </html>
    </>
  );
}
