import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://donalocallaghan.com"),
  title: {
    default: "Donal O'Callaghan — AI Engineer",
    template: "%s · Donal O'Callaghan",
  },
  description:
    "AI Engineer. Builder. Shipping things that matter. Based in Ireland — building with Claude Code, Codex, and agent frameworks.",
  keywords: [
    "Donal O'Callaghan",
    "AI Engineer",
    "Ireland",
    "Claude Code",
    "Agent Engineering",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Donal O'Callaghan" }],
  creator: "Donal O'Callaghan",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://donalocallaghan.com",
    title: "Donal O'Callaghan — AI Engineer",
    description:
      "AI Engineer. Builder. Shipping things that matter. Based in Ireland.",
    siteName: "Donal O'Callaghan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donal O'Callaghan — AI Engineer",
    description:
      "AI Engineer. Builder. Shipping things that matter. Based in Ireland.",
    creator: "@donalocallaghan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  var theme = stored || (prefersLight ? 'light' : 'dark');
                  if (theme === 'light') document.documentElement.classList.add('light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
