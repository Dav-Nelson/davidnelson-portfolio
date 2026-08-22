import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Nelson | Full-stack & AI Engineer",
  description: "Full-stack and AI engineer building production AI systems — from RAG pipelines and voice AI to full-stack web platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}