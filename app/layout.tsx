import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormFlow – Automate Repetitive Form Filling',
  description: 'Create reusable form-filling workflows for common tasks. Save hours every week with smart templates and browser automation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e4bd9b20-65c8-48f8-a61b-1e761cb76720"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
