import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Software Engineering Portfolio`,
    template: `%s | ${DATA.shortName}`,
  },
  description: DATA.description,
  authors: [{ name: DATA.name }],
  keywords: [
    "Bonginkosi Nxumalo",
    "software engineering",
    "computer science",
    "graduate portfolio",
    "backend development",
    "University of Johannesburg",
  ],
  openGraph: {
    title: `${DATA.name} | Software Engineering Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Software Engineering Portfolio`,
    description: DATA.description,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
            >
              Skip to content
            </a>

            <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[420px] overflow-hidden opacity-70">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={3}
                color="#22d3ee"
                maxOpacity={0.12}
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black, transparent 85%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent 85%)",
                }}
              />
            </div>

            <Navbar />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 sm:py-14 lg:py-16">
              {children}
              <footer className="mt-20 border-t border-border/70 pt-6 text-center text-xs text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} {DATA.name}. Built with Next.js
                  and Tailwind CSS.
                </p>
              </footer>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
