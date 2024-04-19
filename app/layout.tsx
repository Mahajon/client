import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { cal, fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import Providers from "./providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://mahajon.com"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    images: "/og.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        className={`${GeistSans.variable} ${GeistMono.variable} ${cal.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        <head />
        <body
          className={cn(
            "relative min-h-screen bg-primary font-geist antialiased"
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Providers>
              {children}
              <Toaster />
            </Providers>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
