import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Dashboard",
  description: "Next-gen student learning dashboard with real-time data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="dark bg-neutral-950 text-neutral-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
