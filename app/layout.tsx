import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Treean',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}