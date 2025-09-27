import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "PORTHPOLIO",
  description: "Created with v0",
  generator: "v0.app",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark scroll-smooth antialiased`}>
      <body className={`font-sans`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
