import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata: Metadata = {
  title: "SHREEVA - BPO & IT Solutions",
  description: "Next-generation BPO and IT-enabled service provider"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
