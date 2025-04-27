import '../styles/globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of a Web Designer & Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}