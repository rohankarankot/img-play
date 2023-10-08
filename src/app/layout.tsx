import "./globals.css"
import type { Metadata } from "next"
import FlowbiteWrapper from "./config/flowbite"
import { FileUploadProvider } from "./context/file"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Imegica",
  description: "Simple Application for your basic image editor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="dark mode toggle">
        {`if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }`}
      </Script>
      <body>
        <FlowbiteWrapper>
          <FileUploadProvider>{children}</FileUploadProvider>
        </FlowbiteWrapper>
      </body>
    </html>
  )
}
