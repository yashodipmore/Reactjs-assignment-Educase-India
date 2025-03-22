import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PopX",
  description: "PopX Authentication Flow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="w-full max-w-[375px] overflow-hidden bg-white shadow-md">{children}</div>
        </main>
      </body>
    </html>
  )
}



import './globals.css'