import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSI Break Enforcer — Protect Your Hands",
  description: "Automatically block keyboard and mouse input periodically and guide you through hand exercises to prevent RSI. Built for developers and remote workers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6841d570-77d3-4cd3-840f-f550051a9eb2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
