import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Nelson | Full-stack & AI Engineer",
  description:
    "Full-stack and AI engineer building production AI systems, from RAG pipelines and voice AI to full-stack web platforms. Open to remote roles.",
  openGraph: {
    title: "David Nelson | Full-stack & AI Engineer",
    description:
      "Full-stack and AI engineer building voice-first AI products and web platforms. 4 hackathon wins in 2026.",
    type: "website",
    url: "https://davidnelson-portfolio.vercel.app",
  },
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