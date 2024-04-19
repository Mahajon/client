import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const cal = localFont({
  src: "../public/CalSans-SemiBold.otf",
  variable: "--font-cal",
  weight: "600",
  display: "swap",
})
