// *****************************************************************************
// *                  Developed by Vanderson Rodrigues - 2026
// *****************************************************************************

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanderson Cardoso Rodrigues | Quality Engineer",
  description:
    "Quality Engineer com 5 anos de experiência em automação, API, E2E, performance e CI/CD.",
  openGraph: {
    title: "Vanderson Cardoso Rodrigues | Quality Engineer",
    description:
      "Quality Engineering, Test Automation, API, Performance e CI/CD.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanderson Cardoso Rodrigues | Quality Engineer",
    description:
      "Quality Engineering, Test Automation, API, Performance e CI/CD.",
  },
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
