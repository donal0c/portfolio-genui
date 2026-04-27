import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://donalocallaghan.com"),
  title: {
    default: "Donal O'Callaghan — AI Engineer",
    template: "%s · Donal O'Callaghan",
  },
  description:
    "AI Engineer. Builder. Ireland. Based in Ireland and available for interesting work.",
  keywords: [
    "Donal O'Callaghan",
    "AI Engineer",
    "Ireland",
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
    description: "AI Engineer. Builder. Ireland.",
    siteName: "Donal O'Callaghan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donal O'Callaghan — AI Engineer",
    description: "AI Engineer. Builder. Ireland.",
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
