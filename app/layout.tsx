import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Design Launch - Tabby Email",
  description: "Tabby email announcing the new design launch",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-tui-background-page font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
